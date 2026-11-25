import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Grid,
} from 'lucide-react';

interface HeaderControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleOverview: () => void;
  isDarkTheme: boolean;
}

export const HeaderControls: React.FC<HeaderControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onToggleOverview,
  isDarkTheme,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const progressPercent = (currentSlide / totalSlides) * 100;

  return (
    <header className="absolute top-0 left-0 right-0 z-40 p-4 sm:p-5 pointer-events-none flex flex-col gap-2.5">
      {/* Top discreet progress bar */}
      <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#ED7938] transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="w-full flex items-center justify-between pointer-events-auto">
        {/* Left: Alésia Brand Pill */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-3 px-3.5 py-1.5 rounded-full backdrop-blur-md border transition-all ${
              isDarkTheme
                ? 'bg-[#1E2429]/80 border-white/10 text-white'
                : 'bg-white/90 border-[#EDF1F5] text-[#293137] shadow-alesia-card'
            }`}
          >
            <div className="w-7 h-7 bg-[#ED7938] rounded-md flex items-center justify-center flex-shrink-0 shadow-sm">
              <div className="w-3.5 h-3.5 border-[1.5px] border-white rounded-[2px]" />
            </div>
            <span className="font-bold tracking-tight text-sm uppercase font-display">
              ALÉSIA <span className="text-[#ED7938]">FORMATION</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#8A949C] hidden sm:inline font-semibold">
              • ADMISSION
            </span>
          </div>
        </div>

        {/* Right: Navigation Pill & Grid/Fullscreen */}
        <div className="flex items-center gap-2">
          {/* Slide index & arrows pill */}
          <div
            className={`flex items-center gap-2 px-2 py-1 rounded-full backdrop-blur-md border transition-all ${
              isDarkTheme
                ? 'bg-[#1E2429]/80 border-white/10 text-white'
                : 'bg-white/90 border-[#EDF1F5] text-[#293137] shadow-alesia-card'
            }`}
          >
            <button
              onClick={onPrev}
              disabled={currentSlide === 1}
              title="Slide précédente [←]"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/10 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold font-display tracking-wider px-1">
              <span className="text-[#ED7938]">{currentSlide.toString().padStart(2, '0')}</span>
              <span className="text-[#8A949C]"> / </span>
              <span>{totalSlides.toString().padStart(2, '0')}</span>
            </span>

            <button
              onClick={onNext}
              disabled={currentSlide === totalSlides}
              title="Slide suivante [→ / Espace]"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/10 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Overview Grid Button */}
          <button
            onClick={onToggleOverview}
            title="Vue d'ensemble des slides [Touche G]"
            className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all cursor-pointer ${
              isDarkTheme
                ? 'bg-[#1E2429]/80 border-white/10 text-white hover:bg-white/20'
                : 'bg-white/90 border-[#EDF1F5] text-[#293137] shadow-alesia-card hover:bg-gray-100'
            }`}
          >
            <Grid className="w-4 h-4" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            title="Plein écran [Touche F]"
            className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all cursor-pointer ${
              isDarkTheme
                ? 'bg-[#1E2429]/80 border-white/10 text-white hover:bg-white/20'
                : 'bg-white/90 border-[#EDF1F5] text-[#293137] shadow-alesia-card hover:bg-gray-100'
            }`}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
