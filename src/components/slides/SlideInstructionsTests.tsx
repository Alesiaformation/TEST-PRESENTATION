import React, { useState, useEffect } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideInstructionsTestsProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

export const SlideInstructionsTests: React.FC<SlideInstructionsTestsProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [activeTest, setActiveTest] = useState<1 | 2 | 3>(1);
  const [timerSeconds, setTimerSeconds] = useState<number>(15 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Test 1: reveal state for examples 1..5
  const [revealedTest1Examples, setRevealedTest1Examples] = useState<number[]>([]);
  const [showAllTest1, setShowAllTest1] = useState<boolean>(false);

  // Test 3: selected option for Jacques & Jean question
  const [selectedTest3Option, setSelectedTest3Option] = useState<string | null>(null);

  const handleSelectTest = (testNum: 1 | 2 | 3) => {
    setActiveTest(testNum);
    setIsTimerRunning(false);
    if (testNum === 1) setTimerSeconds(15 * 60);
    else if (testNum === 2) setTimerSeconds(10 * 60);
    else setTimerSeconds(45 * 60);
  };

  useEffect(() => {
    let interval: number | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = window.setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval !== null) window.clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const toggleTest1Example = (idx: number) => {
    if (revealedTest1Examples.includes(idx)) {
      setRevealedTest1Examples(revealedTest1Examples.filter((i) => i !== idx));
    } else {
      setRevealedTest1Examples([...revealedTest1Examples, idx]);
    }
  };

  const handleToggleAllTest1 = () => {
    if (showAllTest1) {
      setRevealedTest1Examples([]);
      setShowAllTest1(false);
    } else {
      setRevealedTest1Examples([1, 2, 3, 4, 5]);
      setShowAllTest1(true);
    }
  };

  const test1Examples = [
    { id: 1, label: '1', answer: 'Réponse n°2' },
    { id: 2, label: '2', answer: 'Réponse n°6' },
    { id: 3, label: '3', answer: 'Réponse n°2' },
    { id: 4, label: '4', answer: 'Réponse n°3' },
    { id: 5, label: '5', answer: 'Réponse n°5' },
  ];

  const test3Options = [
    { id: 'a', val: '2.000', isCorrect: false },
    { id: 'b', val: '1.500', isCorrect: false },
    { id: 'c', val: '1.200', isCorrect: true },
    { id: 'd', val: '800', isCorrect: false },
    { id: 'e', val: '600', isCorrect: false },
  ];

  const activeColor =
    activeTest === 1 ? '#12AEDB' : activeTest === 2 ? '#2BB3A3' : '#F39200';

  return (
    <SlideShell
      chapter="Tests d’admission"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 grid grid-cols-12 gap-10 items-stretch">
        {/* Left Column: Title, Rules & 3 Test Selector Buttons */}
        <div className="col-span-5 flex flex-col justify-between py-1">
          <div className="space-y-4 cascade-item cascade-delay-1">
            <span className="ds-pill ds-pill-cyan">
              CONSIGNES OFFICIELLES · 3 ÉPREUVES ÉCRITES
            </span>

            <h1 className="font-spartan text-[96px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9] block">CONSIGNES</span>
              <span className="text-[#B35A00] block">DES TESTS</span>
            </h1>

            <p className="font-outfit font-light text-[25px] leading-[1.35] text-[#2E3F4A]">
              La <strong className="font-semibold text-[#10222E]">rapidité</strong> fait partie de l’évaluation : ne restez pas bloqué sur une question.
            </p>
          </div>

          {/* 3 Test Tab Buttons (with aria-pressed for auto-play) */}
          <div className="space-y-3.5 cascade-item cascade-delay-2">
            {[
              {
                num: 1 as const,
                code: '01',
                title: 'Test 1 : Trouver la 4e case',
                duration: '15 MIN',
                color: '#12AEDB',
                soft: '#D3F0FA',
              },
              {
                num: 2 as const,
                code: '02',
                title: 'Test 2 : 2 Cases & 3 Essais',
                duration: '10 MIN',
                color: '#2BB3A3',
                soft: '#D5F1EE',
              },
              {
                num: 3 as const,
                code: '03',
                title: 'Test 3 : Questionnaire Logique',
                duration: 'QCM',
                color: '#F39200',
                soft: '#FDE5C2',
              },
            ].map((item) => {
              const isSelected = activeTest === item.num;
              return (
                <button
                  key={item.num}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleSelectTest(item.num)}
                  className="ds-tab-btn w-full justify-between"
                  style={
                    isSelected
                      ? { backgroundColor: item.color, borderColor: item.color, color: '#0E1A22' }
                      : undefined
                  }
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className="ds-tab-num px-3.5 py-1.5 rounded-full"
                      style={{
                        backgroundColor: isSelected ? '#0E1A22' : item.soft,
                        color: isSelected ? item.color : '#0E1A22',
                      }}
                    >
                      {item.code}
                    </span>
                    <span className="truncate">{item.title}</span>
                  </div>
                  <span className="font-spartan text-[24px] shrink-0">
                    {item.duration}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dark Alert Block (#10222E, max 1 per screen per spec, accents in #FFB54D) */}
          <div className="bg-[#10222E] text-white rounded-[22px] p-5 space-y-2 cascade-item cascade-delay-3">
            <div className="flex items-center gap-2.5 font-outfit font-semibold text-[18px] uppercase tracking-[0.14em] text-[#FFB54D]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB54D" strokeWidth="2.2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>RÈGLES D’EXAMEN IMPÉRATIVES</span>
            </div>
            <ul className="font-outfit text-[20px] leading-[1.38] text-white/95 space-y-1">
              <li>• Ne rien inscrire sur le cahier de questions.</li>
              <li>• Reporter vos réponses uniquement sur la feuille prévue.</li>
              <li>• Attendre le signal de l’examinateur avant de commencer.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Detail Panel + Interactive Chronometer & Live Examples */}
        <div className="col-span-7 cascade-item cascade-delay-2 flex">
          <div
            className="ds-detail-panel w-full flex flex-col justify-between"
            style={{ borderTopColor: activeColor }}
          >
            {/* Header with Chronometer */}
            <div className="flex items-start justify-between gap-6 border-b border-[#DCE6EB] pb-5">
              <div>
                <span
                  className="ds-kicker block mb-1"
                  style={{
                    color:
                      activeTest === 1 ? '#0A8DB9' : activeTest === 2 ? '#13806F' : '#B35A00',
                  }}
                >
                  {activeTest === 1 && 'ÉPREUVE 01 · DURÉE 15 MINUTES'}
                  {activeTest === 2 && 'ÉPREUVE 02 · DURÉE 10 MINUTES'}
                  {activeTest === 3 && 'ÉPREUVE 03 · RAISONNEMENT LOGIQUE'}
                </span>
                <h2 className="font-spartan text-[44px] leading-[0.9] text-[#10222E]">
                  {activeTest === 1 && 'TEST 1 : TROUVER LA 4E CASE'}
                  {activeTest === 2 && 'TEST 2 : 2 CASES SUIVANTES & 3 ESSAIS'}
                  {activeTest === 3 && 'TEST 3 : QUESTIONNAIRE DE LOGIQUE'}
                </h2>
              </div>

              {/* Interactive Chronometer */}
              <div
                className="px-5 py-3 rounded-[22px] text-[#0E1A22] flex items-center gap-4 shrink-0"
                style={{ backgroundColor: activeColor }}
              >
                <div className="flex items-center gap-2.5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="font-spartan text-[42px] leading-none tabular-nums pt-1">
                    {formatTimer(timerSeconds)}
                  </span>
                </div>

                <div className="flex items-center gap-2 pl-3 border-l-2 border-[#0E1A22]/25">
                  <button
                    type="button"
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    aria-label={isTimerRunning ? 'Mettre en pause le chronomètre' : 'Démarrer le chronomètre'}
                    className="w-11 h-11 rounded-full bg-[#0E1A22] text-white flex items-center justify-center cursor-pointer hover:opacity-90"
                  >
                    {isTimerRunning ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2">
                        <polygon points="6 4 20 12 6 20 6 4" />
                      </svg>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsTimerRunning(false);
                      if (activeTest === 1) setTimerSeconds(15 * 60);
                      else if (activeTest === 2) setTimerSeconds(10 * 60);
                      else setTimerSeconds(45 * 60);
                    }}
                    aria-label="Réinitialiser le chronomètre"
                    className="w-11 h-11 rounded-full bg-white/80 text-[#0E1A22] flex items-center justify-center cursor-pointer hover:bg-white"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.2">
                      <polyline points="1 4 1 10 7 10" />
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* TEST 1 CONTENT */}
            {activeTest === 1 && (
              <div className="flex-1 flex flex-col justify-between py-4 space-y-5">
                <div className="space-y-3 font-outfit text-[24px] leading-[1.42] text-[#2E3F4A]">
                  <p>
                    • Vous disposez de <strong className="font-semibold text-[#10222E]">15 minutes</strong>. Pour chaque série, <strong className="font-semibold text-[#10222E]">trois éléments</strong> vous sont présentés.
                  </p>
                  <p>
                    • Votre objectif est de comprendre la logique pour <strong className="font-semibold text-[#10222E]">trouver la 4e case</strong> et reporter le numéro de la bonne réponse sur votre feuille.
                  </p>
                </div>

                <div className="bg-[#F3F7F9] border border-[#DCE6EB] rounded-[24px] p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-spartan-700 text-[28px] text-[#0A8DB9]">
                      EXEMPLES D’APPLICATION (CLIQUER POUR RÉVÉLER)
                    </span>
                    <button
                      type="button"
                      onClick={handleToggleAllTest1}
                      className="px-5 py-2.5 rounded-full bg-[#12AEDB] text-[#0E1A22] font-outfit font-semibold text-[18px] uppercase tracking-wider cursor-pointer hover:bg-[#F39200] transition-colors"
                    >
                      {showAllTest1 ? 'Masquer tout' : 'Tout révéler'}
                    </button>
                  </div>

                  <div className="grid grid-cols-5 gap-4">
                    {test1Examples.map((ex) => {
                      const isRevealed = revealedTest1Examples.includes(ex.id) || showAllTest1;
                      return (
                        <button
                          key={ex.id}
                          type="button"
                          onClick={() => toggleTest1Example(ex.id)}
                          className={`h-[175px] rounded-[22px] border-2 p-4 flex flex-col items-center justify-between cursor-pointer transition-all ${
                            isRevealed
                              ? 'bg-[#D5F1EE] border-[#2BB3A3] text-[#0E1A22]'
                              : 'bg-white border-[#B9C8D0] text-[#10222E] hover:border-[#F39200]'
                          }`}
                        >
                          <span className="font-outfit font-semibold text-[16px] uppercase tracking-wider text-[#4E606B]">
                            EXEMPLE
                          </span>
                          <span className="font-spartan text-[56px] leading-none text-[#10222E]">
                            {ex.label}
                          </span>
                          <span
                            className={`px-3 py-1.5 rounded-full font-outfit font-semibold text-[18px] w-full text-center ${
                              isRevealed
                                ? 'bg-[#2BB3A3] text-[#0E1A22]'
                                : 'bg-[#D3F0FA] text-[#0E1A22]'
                            }`}
                          >
                            {isRevealed ? ex.answer : 'Révéler'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TEST 2 CONTENT */}
            {activeTest === 2 && (
              <div className="flex-1 flex flex-col justify-between py-3 space-y-4">
                <div className="space-y-2 font-outfit text-[24px] leading-[1.4] text-[#2E3F4A]">
                  <p>
                    • Durée : <strong className="font-semibold text-[#10222E]">10 minutes</strong>. Sur <strong className="font-semibold text-[#10222E]">3 cases</strong>, des éléments sont disposés : devinez où ils seront placés dans les <strong className="font-semibold text-[#10222E]">2 cases suivantes</strong>.
                  </p>
                </div>

                {/* 5-Case Sequence + 3 Trial Columns */}
                <div className="bg-[#F3F7F9] border border-[#DCE6EB] rounded-[24px] p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-spartan-700 text-[26px] text-[#13806F]">
                      PRINCIPE DES 2 CASES SUIVANTES & DES 3 COLONNES D’ESSAIS
                    </span>
                    <span className="ds-pill ds-pill-teal !text-[16px] !py-1 !px-3.5">
                      1 SEULE COLONNE PRISE EN COMPTE
                    </span>
                  </div>

                  {/* Sequence 1-2-3 -> 4-5 */}
                  <div className="flex items-center justify-center gap-3 py-1">
                    {['Case 1', 'Case 2', 'Case 3'].map((c) => (
                      <div
                        key={c}
                        className="px-5 py-3 rounded-[16px] bg-white border-2 border-[#B9C8D0] font-spartan text-[26px] text-[#10222E]"
                      >
                        {c}
                      </div>
                    ))}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#13806F" strokeWidth="2.6">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    {['Case 4 (À deviner)', 'Case 5 (À deviner)'].map((c) => (
                      <div
                        key={c}
                        className="px-5 py-3 rounded-[16px] bg-[#D5F1EE] border-2 border-dashed border-[#13806F] font-spartan text-[26px] text-[#0E1A22]"
                      >
                        {c}
                      </div>
                    ))}
                  </div>

                  {/* 3 Trial Columns */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-[18px] bg-white border-2 border-[#B9C8D0] relative overflow-hidden">
                      <div className="font-spartan text-[24px] text-[#B35A00]">
                        1er ESSAI (RAYÉ)
                      </div>
                      <p className="font-outfit text-[20px] text-[#4E606B] line-through mt-1">
                        Erreur commise : rayez toute la colonne
                      </p>
                    </div>

                    <div className="p-4 rounded-[18px] bg-[#D5F1EE] border-2 border-[#2BB3A3]">
                      <div className="font-spartan text-[24px] text-[#0E1A22]">
                        2e ESSAI (VALIDÉ)
                      </div>
                      <p className="font-outfit font-semibold text-[20px] text-[#0E1A22] mt-1">
                        Réponse finale prise en compte
                      </p>
                    </div>

                    <div className="p-4 rounded-[18px] bg-white border-2 border-[#DCE6EB]">
                      <div className="font-spartan text-[24px] text-[#4E606B]">
                        3e ESSAI (SECOURS)
                      </div>
                      <p className="font-outfit text-[20px] text-[#4E606B] mt-1">
                        Colonne de secours si besoin
                      </p>
                    </div>
                  </div>
                </div>

                {/* Strategic Tip */}
                <div className="p-5 rounded-[22px] bg-[#FDE5C2] border-2 border-[#F39200] flex items-center gap-4 text-[#0E1A22]">
                  <div className="w-14 h-14 rounded-[16px] bg-[#F39200] flex items-center justify-center shrink-0">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.2">
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
                    </svg>
                  </div>
                  <p className="font-outfit text-[22px] leading-[1.35]">
                    <strong className="font-semibold">Astuce stratégique :</strong> lorsque vous avez plusieurs éléments à placer dans les cases, <strong className="font-semibold">analysez-les séparément</strong> car il n’y a pas forcément de logique de placement entre eux.
                  </p>
                </div>
              </div>
            )}

            {/* TEST 3 CONTENT */}
            {activeTest === 3 && (
              <div className="flex-1 flex flex-col justify-between py-4 space-y-5">
                <div className="space-y-2 font-outfit text-[24px] leading-[1.4] text-[#2E3F4A]">
                  <p>
                    • <strong className="font-semibold text-[#10222E]">Questionnaire</strong> de questions variées et de raisonnement logique.
                  </p>
                  <p>
                    • Pour chaque question, plusieurs réponses sont proposées dont <strong className="font-semibold text-[#10222E]">une seule est exacte</strong>. Cliquez sur la bonne réponse :
                  </p>
                </div>

                <div className="bg-[#F3F7F9] border border-[#DCE6EB] rounded-[24px] p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-spartan-700 text-[28px] text-[#B35A00]">
                      EXEMPLE TYPE (CLIQUER SUR LA BONNE RÉPONSE)
                    </span>
                    {selectedTest3Option && (
                      <button
                        type="button"
                        onClick={() => setSelectedTest3Option(null)}
                        className="px-4 py-1.5 rounded-full bg-white border border-[#B9C8D0] font-outfit font-semibold text-[18px] text-[#10222E] cursor-pointer"
                      >
                        Réinitialiser
                      </button>
                    )}
                  </div>

                  <div className="p-5 rounded-[20px] bg-white border border-[#DCE6EB] font-outfit font-semibold text-[25px] text-[#10222E]">
                    « Jacques possède 200 euros de plus que Jean. Jean possède 1.000 euros. Combien Jacques possède-t-il ? »
                  </div>

                  <div className="grid grid-cols-5 gap-4">
                    {test3Options.map((opt) => {
                      const isSelected = selectedTest3Option === opt.id;
                      const isCorrect = isSelected && opt.isCorrect;
                      const isWrong = isSelected && !opt.isCorrect;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedTest3Option(opt.id)}
                          className={`h-[110px] rounded-[20px] border-2 font-spartan text-[34px] flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                            isCorrect
                              ? 'bg-[#2BB3A3] border-[#2BB3A3] text-[#0E1A22]'
                              : isWrong
                              ? 'bg-[#FDE5C2] border-[#F39200] text-[#0E1A22]'
                              : 'bg-white border-[#B9C8D0] text-[#10222E] hover:border-[#F39200]'
                          }`}
                        >
                          <span>
                            {opt.id.toUpperCase()}) {opt.val}
                          </span>
                          {isCorrect && (
                            <span className="font-outfit font-semibold text-[16px] uppercase tracking-wider">
                              Exact !
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {selectedTest3Option === 'c' && (
                    <div className="p-4 rounded-[18px] bg-[#D5F1EE] border-2 border-[#2BB3A3] font-outfit font-semibold text-[22px] text-[#0E1A22]">
                      Exact ! Jacques possède 1.200 € (1.000 € + 200 €). Vous reportez la réponse C sur votre feuille.
                    </div>
                  )}
                  {selectedTest3Option && selectedTest3Option !== 'c' && (
                    <div className="p-4 rounded-[18px] bg-[#FDE5C2] border-2 border-[#F39200] font-outfit font-medium text-[22px] text-[#0E1A22]">
                      Additionnez ce que possède Jean (1.000 €) et les 200 € supplémentaires de Jacques (1.200 €).
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
