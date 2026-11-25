import React, { useState, useEffect } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideJobDating8AvrilProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

const STEPS = [
  {
    num: '01',
    title: 'Je prépare mon pitch',
    kicker: 'TEMPS 1 · AVANT LE JOUR J',
    stat: '100 %',
    statLabel: 'PRÉPARÉ AVEC COACH',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
    desc: 'Tu reçois la liste des entreprises présentes à l’avance, tu sélectionnes tes cibles et tu répètes ton pitch avec nos coachs.',
  },
  {
    num: '02',
    title: 'Je rencontre 5 entreprises',
    kicker: 'TEMPS 2 · LE 8 AVRIL SUR CAMPUS',
    stat: '5 RDV',
    statLabel: 'DE 15 MINUTES',
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
    desc: 'En une seule demi-journée, tu passes jusqu’à 5 entretiens directs de 15 minutes avec des recruteurs venus embaucher.',
  },
  {
    num: '03',
    title: 'Je signe mon contrat',
    kicker: 'TEMPS 3 · CONCRÉTISATION',
    stat: '0 €',
    statLabel: 'FRAIS DE SCOLARITÉ',
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
    desc: 'Notre équipe assure le suivi post-entretien avec les entreprises et rédige ta convention et ton contrat d’apprentissage.',
  },
];

export const SlideJobDating8Avril: React.FC<SlideJobDating8AvrilProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [countdown, setCountdown] = useState({ days: 142, hours: 8, mins: 30, secs: 0 });

  useEffect(() => {
    const computeRemaining = () => {
      const now = new Date();
      let targetYear = now.getFullYear();
      let target = new Date(targetYear, 3, 8, 9, 0, 0); // April 8 at 09:00
      if (now.getTime() > target.getTime()) {
        target = new Date(targetYear + 1, 3, 8, 9, 0, 0);
      }
      const diffMs = Math.max(0, target.getTime() - now.getTime());
      const totalSeconds = Math.floor(diffMs / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;
      setCountdown({ days, hours, mins, secs });
    };

    computeRemaining();
    const id = window.setInterval(computeRemaining, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <SlideShell
      chapter="Outils & Ateliers"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 flex flex-col justify-between py-2">
        {/* Top Row: Title + Live Countdown to April 8 */}
        <div className="flex items-end justify-between gap-10 cascade-item cascade-delay-1">
          <div className="space-y-4">
            <span className="ds-pill ds-pill-orange">
              ÉVÉNEMENT MAJEUR · LILLE · LENS · AMIENS
            </span>
            <h1 className="font-spartan text-[116px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9]">JOB DATING </span>
              <span className="text-[#B35A00]">DU 8 AVRIL</span>
            </h1>
            <p className="ds-lead">
              Le rendez-vous décisif où nos <strong>entreprises partenaires</strong> viennent recruter directement sur nos campus.
            </p>
          </div>

          {/* Dark Countdown Block (#10222E, max 1 per screen, accents #FFB54D) */}
          <div className="bg-[#10222E] text-white rounded-[26px] px-8 py-6 shrink-0 space-y-2">
            <div className="font-outfit font-semibold text-[16px] uppercase tracking-[0.2em] text-[#FFB54D]">
              COMPTE À REBOURS JUSQU’AU 8 AVRIL
            </div>
            <div className="flex items-center gap-5">
              {[
                { val: countdown.days, label: 'JOURS' },
                { val: countdown.hours, label: 'HEURES' },
                { val: countdown.mins, label: 'MIN' },
                { val: countdown.secs, label: 'SEC' },
              ].map((unit, i) => (
                <React.Fragment key={unit.label}>
                  <div className="text-center">
                    <div className="font-spartan text-[64px] leading-none text-[#FFB54D] tabular-nums">
                      {String(unit.val).padStart(2, '0')}
                    </div>
                    <div className="font-outfit font-semibold text-[15px] tracking-[0.14em] text-white/80 mt-1">
                      {unit.label}
                    </div>
                  </div>
                  {i < 3 && (
                    <span className="font-spartan text-[44px] text-white/30 -mt-4">:</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Step Progression Cards (Je prépare mon pitch -> Je rencontre 5 entreprises -> Je signe) */}
        <div className="grid grid-cols-3 gap-8 my-auto pt-4 cascade-item cascade-delay-2">
          {STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.num}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveStep(idx)}
                className={`ds-card text-left cursor-pointer border-t-[12px] flex flex-col justify-between min-h-[430px] ${
                  isSelected ? 'ring-4 ring-[#10222E]/10 -translate-y-2' : ''
                }`}
                style={{ borderTopColor: step.color }}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="w-[82px] h-[82px] rounded-[22px] font-spartan text-[42px] flex items-center justify-center text-[#0E1A22] pt-1"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.num}
                    </div>

                    <div
                      className="px-4 py-2 rounded-[16px] text-right"
                      style={{ backgroundColor: step.softColor, color: '#0E1A22' }}
                    >
                      <div className="font-spartan text-[30px] leading-none">
                        {step.stat}
                      </div>
                      <div className="font-outfit font-semibold text-[14px] uppercase tracking-wider">
                        {step.statLabel}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span
                      className="ds-kicker !text-[16px] block"
                      style={{ color: step.inkColor }}
                    >
                      {step.kicker}
                    </span>
                    <h2 className="font-spartan-700 text-[38px] text-[#0A8DB9] leading-[0.95]">
                      {step.title}
                    </h2>
                  </div>

                  <p className="font-outfit text-[24px] leading-[1.42] text-[#2E3F4A]">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#DCE6EB] flex items-center justify-between">
                  <span className="font-outfit font-semibold text-[18px] text-[#10222E]">
                    Étape {idx + 1} sur 3
                  </span>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={step.inkColor} strokeWidth="2.4">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
};
