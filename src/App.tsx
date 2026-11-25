import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PresentationConfig, SlideRegistryItem } from './types';
import { SLIDES_REGISTRY } from './data/slidesData';
import { audioEngine } from './utils/audioEngine';
import { exportStandaloneHtml } from './utils/exportHtml';

import { SetupScreen } from './components/SetupScreen';
import { SlideProgrammeMatinee } from './components/slides/SlideProgrammeMatinee';
import { SlideInstructionsTests } from './components/slides/SlideInstructionsTests';
import { SlideCouverture } from './components/slides/SlideCouverture';
import { SlideQuiSommesNous } from './components/slides/SlideQuiSommesNous';
import { SlideCampus } from './components/slides/SlideCampus';
import { SlideFormations } from './components/slides/SlideFormations';
import { SlideDifference } from './components/slides/SlideDifference';
import { SlideJamaisSeul } from './components/slides/SlideJamaisSeul';
import { SlideFocusGrimp } from './components/slides/SlideFocusGrimp';
import { SlideFocusAteliers } from './components/slides/SlideFocusAteliers';
import { SlideJobDating8Avril } from './components/slides/SlideJobDating8Avril';
import { SlideFiletSecurite } from './components/slides/SlideFiletSecurite';
import { SlideEquipe } from './components/slides/SlideEquipe';
import { SlideAdmission4Etapes } from './components/slides/SlideAdmission4Etapes';
import { SlideContratEnBref } from './components/slides/SlideContratEnBref';
import { SlideQuestions } from './components/slides/SlideQuestions';
import { SlidePlusValue } from './components/slides/SlidePlusValue';
import { SlidePretACommencer } from './components/slides/SlidePretACommencer';

export function App() {
  // Presentation Configuration State
  const [config, setConfig] = useState<PresentationConfig>({
    campus: 'tous',
    filieres: ['comptabilite', 'commerce', 'rh'],
    deckMode: 'complet', // Includes both Tests d'Admission + 16 Presentation Slides by default
    autoPlay: {
      enabled: false,
      stepSeconds: 4,
      slideSeconds: 15,
      loop: false,
    },
    music: {
      enabled: false,
      style: 'Corporate',
      volume: 'Moyen',
    },
  });

  // View Mode: 'setup' (Écran de paramétrage) or 'player' (Mode lecture)
  const [viewMode, setViewMode] = useState<'setup' | 'player'>('setup');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isChaptersMenuOpen, setIsChaptersMenuOpen] = useState<boolean>(false);

  // Auto-hide bottom bar after 3 seconds of inactivity
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);
  const inactivityTimeoutRef = useRef<number | null>(null);

  // 1920x1080 Letterbox Scale Factor
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const updateScale = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setScale(Math.min(w / 1920, h / 1080));
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Compute Active Slides from Central Registry
  const activeSlides: SlideRegistryItem[] = useMemo(() => {
    return SLIDES_REGISTRY.filter((slide) => {
      if (config.deckMode === 'presentation-16' && slide.isTestSlide) {
        return false;
      }
      if (config.deckMode === 'tests-only' && !slide.isTestSlide) {
        return false;
      }
      if (!slide.campusFilter.includes(config.campus)) {
        return false;
      }
      return true;
    });
  }, [config.deckMode, config.campus]);

  // Compute Unique Chapters
  const chapters: string[] = useMemo(() => {
    const list: string[] = [];
    activeSlides.forEach((s) => {
      if (!list.includes(s.chapter)) {
        list.push(s.chapter);
      }
    });
    return list;
  }, [activeSlides]);

  // Compute Estimated Duration (mm:ss)
  const estimatedDurationFormatted = useMemo(() => {
    const totalSeconds = activeSlides.reduce((acc, slide) => {
      if (slide.interactiveSteps > 0) {
        return acc + slide.interactiveSteps * config.autoPlay.stepSeconds;
      }
      return acc + config.autoPlay.slideSeconds;
    }, 0);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, [activeSlides, config.autoPlay.stepSeconds, config.autoPlay.slideSeconds]);

  const totalSlides = activeSlides.length;
  const currentSlide = activeSlides[Math.min(currentSlideIndex, totalSlides - 1)] || activeSlides[0];

  // Sync Web Audio API Music Engine
  useEffect(() => {
    if (config.music.enabled && viewMode === 'player') {
      audioEngine.start(config.music.style, config.music.volume);
    } else {
      audioEngine.stop();
    }
  }, [config.music.enabled, config.music.style, config.music.volume, viewMode]);

  // Navigation Handlers
  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setSlideDirection(1);
      setCurrentSlideIndex((prev) => prev + 1);
    } else if (config.autoPlay.loop) {
      setSlideDirection(1);
      setCurrentSlideIndex(0);
    }
  }, [currentSlideIndex, totalSlides, config.autoPlay.loop]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setSlideDirection(-1);
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const goToSlideIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setSlideDirection(index >= currentSlideIndex ? 1 : -1);
        setCurrentSlideIndex(index);
        setIsChaptersMenuOpen(false);
      }
    },
    [currentSlideIndex, totalSlides]
  );

  const goToSlideById = useCallback(
    (slideId: string) => {
      const idx = activeSlides.findIndex((s) => s.id === slideId);
      if (idx !== -1) {
        goToSlideIndex(idx);
      } else {
        // If slideId is a test slide and we were in presentation-16 mode, switch to complet mode
        setConfig((prev) => ({ ...prev, deckMode: 'complet' }));
        setTimeout(() => {
          const fullIdx = SLIDES_REGISTRY.findIndex((s) => s.id === slideId);
          if (fullIdx !== -1) setCurrentSlideIndex(fullIdx);
        }, 20);
      }
    },
    [activeSlides, goToSlideIndex]
  );

  // Auto-Play Engine: clicks every interactive button (aria-pressed / aria-expanded) in order, then advances
  const autoStepCursorRef = useRef<number>(0);

  useEffect(() => {
    autoStepCursorRef.current = 0;
  }, [currentSlideIndex, viewMode]);

  useEffect(() => {
    if (viewMode !== 'player' || !config.autoPlay.enabled) return;

    const container = document.getElementById('slide-content-area');
    const interactiveButtons = container
      ? (Array.from(
          container.querySelectorAll('button[aria-pressed], button[aria-expanded]')
        ) as HTMLButtonElement[])
      : [];

    const hasInteractive = interactiveButtons.length > 0;
    const delayMs = hasInteractive
      ? config.autoPlay.stepSeconds * 1000
      : config.autoPlay.slideSeconds * 1000;

    const timer = window.setTimeout(() => {
      const liveContainer = document.getElementById('slide-content-area');
      const liveButtons = liveContainer
        ? (Array.from(
            liveContainer.querySelectorAll('button[aria-pressed], button[aria-expanded]')
          ) as HTMLButtonElement[])
        : [];

      // Advance cursor past index 0 if button 0 is already pressed/expanded on slide entry
      if (
        autoStepCursorRef.current === 0 &&
        liveButtons.length > 1 &&
        (liveButtons[0].getAttribute('aria-pressed') === 'true' ||
          liveButtons[0].getAttribute('aria-expanded') === 'true')
      ) {
        autoStepCursorRef.current = 1;
      }

      if (autoStepCursorRef.current < liveButtons.length) {
        const targetBtn = liveButtons[autoStepCursorRef.current];
        autoStepCursorRef.current += 1;
        if (targetBtn) {
          targetBtn.click();
          return;
        }
      }

      // All interactive buttons on this slide have been clicked -> go to next slide
      if (currentSlideIndex < totalSlides - 1) {
        goToNextSlide();
      } else if (config.autoPlay.loop) {
        goToSlideIndex(0);
      } else {
        // Stop auto-play at the end if loop is off
        setConfig((prev) => ({
          ...prev,
          autoPlay: { ...prev.autoPlay, enabled: false },
        }));
      }
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [
    viewMode,
    config.autoPlay.enabled,
    config.autoPlay.stepSeconds,
    config.autoPlay.slideSeconds,
    config.autoPlay.loop,
    currentSlideIndex,
    totalSlides,
    goToNextSlide,
    goToSlideIndex,
  ]);

  // 3-Second Inactivity Timer for Bottom Control Bar in Player Mode
  const wakeControls = useCallback(() => {
    setControlsVisible(true);
    if (inactivityTimeoutRef.current !== null) {
      window.clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = window.setTimeout(() => {
      if (!isChaptersMenuOpen) {
        setControlsVisible(false);
      }
    }, 3000);
  }, [isChaptersMenuOpen]);

  useEffect(() => {
    if (viewMode !== 'player') return;
    wakeControls();
    const handleActivity = () => wakeControls();
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('mousedown', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('mousedown', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      if (inactivityTimeoutRef.current !== null) {
        window.clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [viewMode, wakeControls]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard Shortcuts in Player Mode: ← → Space F M
  useEffect(() => {
    if (viewMode !== 'player') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      wakeControls();
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === ' ') {
        e.preventDefault();
        setConfig((prev) => ({
          ...prev,
          autoPlay: { ...prev.autoPlay, enabled: !prev.autoPlay.enabled },
        }));
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        setConfig((prev) => ({
          ...prev,
          music: { ...prev.music, enabled: !prev.music.enabled },
        }));
      } else if (e.key === 'Escape') {
        setIsChaptersMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, goToNextSlide, goToPrevSlide, toggleFullscreen, wakeControls]);

  const handleStartPresentation = (startSlideId?: string) => {
    if (startSlideId) {
      const idx = activeSlides.findIndex((s) => s.id === startSlideId);
      if (idx !== -1) {
        setCurrentSlideIndex(idx);
      } else {
        setConfig((prev) => ({ ...prev, deckMode: 'complet' }));
        const fullIdx = SLIDES_REGISTRY.findIndex((s) => s.id === startSlideId);
        setCurrentSlideIndex(fullIdx !== -1 ? fullIdx : 0);
      }
    } else {
      setCurrentSlideIndex(0);
    }
    setViewMode('player');
  };

  // Render Current Slide Component
  const renderActiveSlide = () => {
    const slideNum = currentSlideIndex + 1;
    switch (currentSlide.id) {
      case 'programme-matinee':
        return (
          <SlideProgrammeMatinee
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
            onNextSlide={goToNextSlide}
          />
        );
      case 'instructions-tests':
        return (
          <SlideInstructionsTests
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'couverture':
        return (
          <SlideCouverture
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
            activeSlides={activeSlides}
            onGoToSlideId={goToSlideById}
            onChangeCampus={(c) => setConfig((prev) => ({ ...prev, campus: c }))}
          />
        );
      case 'qui-sommes-nous':
        return (
          <SlideQuiSommesNous
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'campus':
        return (
          <SlideCampus
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'formations':
        return (
          <SlideFormations
            campus={config.campus}
            filieres={config.filieres}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'difference':
        return (
          <SlideDifference
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'jamais-seul':
        return (
          <SlideJamaisSeul
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'focus-grimp':
        return (
          <SlideFocusGrimp
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'focus-ateliers':
        return (
          <SlideFocusAteliers
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'job-dating':
        return (
          <SlideJobDating8Avril
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'filet-securite':
        return (
          <SlideFiletSecurite
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'equipe':
        return (
          <SlideEquipe
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'admission':
        return (
          <SlideAdmission4Etapes
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
            onOpenTestsSlide={() => goToSlideById('instructions-tests')}
          />
        );
      case 'contrat':
        return (
          <SlideContratEnBref
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'questions':
        return (
          <SlideQuestions
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'plus-value':
        return (
          <SlidePlusValue
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
          />
        );
      case 'pret-a-commencer':
        return (
          <SlidePretACommencer
            campus={config.campus}
            slideNumber={slideNum}
            totalSlides={totalSlides}
            onRestart={() => goToSlideIndex(0)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#F3F7F9] flex items-center justify-center select-none">
      {/* 1920 × 1080 Scaled Stage Container */}
      <div
        style={{
          width: '1920px',
          height: '1080px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
        className="relative shrink-0 overflow-hidden bg-[#F3F7F9] shadow-2xl"
      >
        {viewMode === 'setup' ? (
          <SetupScreen
            config={config}
            onChange={setConfig}
            activeSlides={activeSlides}
            estimatedDurationFormatted={estimatedDurationFormatted}
            chapters={chapters}
            onStartPresentation={handleStartPresentation}
            onExportHtml={() => exportStandaloneHtml(config)}
          />
        ) : (
          <div className="relative w-[1920px] h-[1080px] overflow-hidden">
            {/* Slide Transition: Fade + Gentle Slide (0.5s) */}
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.div
                key={currentSlide.id}
                custom={slideDirection}
                initial={{ opacity: 0, x: slideDirection > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: slideDirection > 0 ? -40 : 40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                {renderActiveSlide()}
              </motion.div>
            </AnimatePresence>

            {/* Chapters Menu Overlay */}
            <AnimatePresence>
              {isChaptersMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-x-[96px] bottom-[112px] z-40 bg-[#10222E] text-white rounded-[28px] p-8 shadow-2xl border-2 border-[#12AEDB]"
                >
                  <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-5">
                    <div>
                      <span className="font-outfit font-semibold text-[16px] uppercase tracking-[0.2em] text-[#FFB54D]">
                        NAVIGATION DIRECTE
                      </span>
                      <h3 className="font-spartan text-[42px] text-white leading-none mt-1">
                        CHAPITRES & DIAPOSITIVES ({totalSlides})
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsChaptersMenuOpen(false)}
                      className="px-5 py-2 rounded-full bg-white/10 hover:bg-[#F39200] hover:text-[#0E1A22] font-outfit font-semibold text-[18px] cursor-pointer transition-colors"
                    >
                      Fermer (Échap)
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-3 max-h-[540px] overflow-y-auto pr-2">
                    {activeSlides.map((slide, idx) => {
                      const isCurrent = idx === currentSlideIndex;
                      return (
                        <button
                          key={slide.id}
                          type="button"
                          onClick={() => goToSlideIndex(idx)}
                          className={`p-4 rounded-[18px] border-2 text-left cursor-pointer transition-all flex flex-col justify-between ${
                            isCurrent
                              ? 'bg-[#F39200] border-[#F39200] text-[#0E1A22]'
                              : 'bg-white/5 border-white/15 text-white hover:border-[#12AEDB]'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[15px] font-outfit font-semibold uppercase tracking-wider opacity-85">
                            <span>{slide.chapter}</span>
                            <span className="font-spartan text-[22px]">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <div className="font-outfit font-semibold text-[19px] leading-snug mt-2 line-clamp-2">
                            {slide.title}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Discreet Bottom Control Bar (Auto-hides after 3s of inactivity, positioned 34px from bottom) */}
            <div
              onMouseEnter={() => {
                if (inactivityTimeoutRef.current !== null) {
                  window.clearTimeout(inactivityTimeoutRef.current);
                }
                setControlsVisible(true);
              }}
              onMouseLeave={wakeControls}
              className={`absolute left-[96px] right-[96px] bottom-[34px] z-50 transition-all duration-300 ${
                controlsVisible || isChaptersMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <div className="bg-[#10222E]/95 backdrop-blur-md text-white rounded-full px-6 py-3 shadow-2xl border border-white/15 flex items-center justify-between gap-5">
                {/* Left Controls: Prev / Play-Pause Auto / Next */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={goToPrevSlide}
                    disabled={currentSlideIndex === 0}
                    aria-label="Diapositive précédente"
                    className={`h-11 px-4 rounded-full font-outfit font-semibold text-[17px] flex items-center gap-1.5 cursor-pointer transition-colors ${
                      currentSlideIndex === 0
                        ? 'opacity-30 cursor-not-allowed bg-white/5 text-white'
                        : 'bg-white/10 hover:bg-[#12AEDB] hover:text-[#0E1A22] text-white'
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <span>Préc.</span>
                  </button>

                  {/* Play / Pause Auto-Scroll */}
                  <button
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        autoPlay: { ...prev.autoPlay, enabled: !prev.autoPlay.enabled },
                      }))
                    }
                    className={`h-11 px-5 rounded-full font-outfit font-semibold text-[17px] flex items-center gap-2 cursor-pointer transition-colors ${
                      config.autoPlay.enabled
                        ? 'bg-[#F39200] text-[#0E1A22]'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    title="Lecture / Pause du défilement automatique (Espace)"
                  >
                    {config.autoPlay.enabled ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                        <span>Auto ON</span>
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        <span>Auto</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={goToNextSlide}
                    disabled={currentSlideIndex === totalSlides - 1 && !config.autoPlay.loop}
                    aria-label="Diapositive suivante"
                    className={`h-11 px-4 rounded-full font-outfit font-semibold text-[17px] flex items-center gap-1.5 cursor-pointer transition-colors ${
                      currentSlideIndex === totalSlides - 1 && !config.autoPlay.loop
                        ? 'opacity-30 cursor-not-allowed bg-white/5 text-white'
                        : 'bg-[#12AEDB] hover:bg-[#F39200] text-[#0E1A22]'
                    }`}
                  >
                    <span>Suiv.</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>

                {/* Center: Counter "05 / 16" + Slide Title + Orange Progress Bar */}
                <div className="flex-1 flex flex-col gap-1.5 min-w-0 px-2">
                  <div className="flex items-center justify-between gap-4 text-[17px]">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-spartan text-[24px] text-[#FFB54D] tabular-nums shrink-0 leading-none">
                        {String(currentSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                      </span>
                      <span className="text-white/30">·</span>
                      <span className="font-outfit font-semibold text-white truncate">
                        {currentSlide.title}
                      </span>
                    </div>
                    <span className="font-outfit text-[15px] uppercase tracking-wider text-[#12AEDB] shrink-0">
                      {currentSlide.chapter}
                    </span>
                  </div>

                  {/* Orange Progress Bar */}
                  <div className="w-full h-2 bg-white/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#F39200] transition-all duration-300 rounded-full"
                      style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Right Controls: Chapters Menu / Tests Quick Jump / Music On-Off / Fullscreen / Setup */}
                <div className="flex items-center gap-2.5 shrink-0">
                  {/* Quick Button to Tests Instructions */}
                  <button
                    type="button"
                    onClick={() => goToSlideById('instructions-tests')}
                    className={`h-11 px-4 rounded-full font-outfit font-semibold text-[16px] flex items-center gap-2 cursor-pointer transition-colors ${
                      currentSlide.id === 'instructions-tests'
                        ? 'bg-[#2BB3A3] text-[#0E1A22]'
                        : 'bg-white/10 hover:bg-[#2BB3A3] hover:text-[#0E1A22] text-white'
                    }`}
                    title="Aller aux consignes des tests d’admission"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Tests</span>
                  </button>

                  {/* Menu Chapitres */}
                  <button
                    type="button"
                    onClick={() => setIsChaptersMenuOpen((prev) => !prev)}
                    className={`h-11 px-4 rounded-full font-outfit font-semibold text-[16px] flex items-center gap-2 cursor-pointer transition-colors ${
                      isChaptersMenuOpen
                        ? 'bg-[#F39200] text-[#0E1A22]'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                    <span>Chapitres</span>
                  </button>

                  {/* Musique On / Off */}
                  <button
                    type="button"
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        music: { ...prev.music, enabled: !prev.music.enabled },
                      }))
                    }
                    className={`h-11 px-4 rounded-full font-outfit font-semibold text-[16px] flex items-center gap-2 cursor-pointer transition-colors ${
                      config.music.enabled
                        ? 'bg-[#12AEDB] text-[#0E1A22]'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    title="Musique de fond On / Off (Touche M)"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </svg>
                    <span>{config.music.enabled ? config.music.style : 'Musique OFF'}</span>
                  </button>

                  {/* Plein écran */}
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    aria-label="Plein écran (Touche F)"
                    title="Plein écran (Touche F)"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                  >
                    {isFullscreen ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Retour au paramétrage */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsChaptersMenuOpen(false);
                      setViewMode('setup');
                    }}
                    className="h-11 px-4 rounded-full bg-white/10 hover:bg-[#F39200] hover:text-[#0E1A22] text-white font-outfit font-semibold text-[16px] flex items-center gap-2 cursor-pointer transition-colors"
                    title="Retour à l’écran de paramétrage"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    <span>Paramètres</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
