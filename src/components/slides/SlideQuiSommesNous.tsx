import React, { useState, useEffect } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideQuiSommesNousProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

interface StatCounterItem {
  id: string;
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
  benchmark: string;
  barPercent: number;
  color: string;
  inkColor: string;
  softColor: string;
}

const STATS: StatCounterItem[] = [
  {
    id: 'reussite',
    target: 90,
    prefix: '+',
    suffix: ' %',
    label: 'de réussite aux examens',
    benchmark: '93 % au BTS en 2026 · 13/20 de moyenne générale',
    barPercent: 93,
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
  },
  {
    id: 'emploi',
    target: 8,
    suffix: '/10',
    label: 'en emploi ou en études 6 mois après',
    benchmark: 'Insertion rapide en CDI/CDD ou poursuite Bac+3 / Bac+5',
    barPercent: 84,
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
  },
  {
    id: 'etudiants',
    target: 400,
    suffix: '',
    label: 'étudiants formés chaque année',
    benchmark: 'Promotions à taille humaine de 16 à 20 apprentis max',
    barPercent: 86,
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
  },
  {
    id: 'entreprises',
    target: 1500,
    suffix: '',
    label: 'entreprises partenaires',
    benchmark: 'PME, grands groupes et cabinets dans les Hauts-de-France',
    barPercent: 95,
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
  },
  {
    id: 'formations',
    target: 12,
    suffix: '',
    label: 'formations du BTS au Bac+5',
    benchmark: 'Diplômes d’État et titres professionnels RNCP niveaux 5 à 7',
    barPercent: 90,
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
  },
  {
    id: 'experience',
    target: 30,
    suffix: ' ans',
    label: 'd’expérience en alternance',
    benchmark: 'École de référence à Lille, Lens et Amiens depuis 1996',
    barPercent: 100,
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
  },
];

export const SlideQuiSommesNous: React.FC<SlideQuiSommesNousProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [replayKey, setReplayKey] = useState<number>(0);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  useEffect(() => {
    setProgress(0);
    const startTime = performance.now();
    const duration = 1200;
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [replayKey]);

  const formatVal = (target: number, p: number) => {
    const val = Math.round(target * p);
    if (target >= 1000) {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    return String(val);
  };

  return (
    <SlideShell
      chapter="L’école"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 flex flex-col justify-between py-1">
        {/* Top Header */}
        <div className="flex items-end justify-between gap-12 cascade-item cascade-delay-1">
          <div className="space-y-3 max-w-[1320px]">
            <span className="ds-pill ds-pill-teal">DEPUIS 1996</span>

            <h1 className="font-spartan text-[112px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9]">QUI SOMMES-</span>
              <span className="text-[#B35A00]">NOUS ?</span>
            </h1>

            <p className="ds-lead !text-[28px]">
              <strong>Alésia Formation</strong> prépare les professionnels de demain : <strong>30 ans d’expérience</strong>, du BTS au Bac+5 en alternance, des <strong>diplômes et titres RNCP reconnus par l’État</strong>.
            </p>
          </div>

          {/* Bouton Rejouer */}
          <button
            type="button"
            onClick={() => setReplayKey((k) => k + 1)}
            className="ds-cta shrink-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.3">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            <span>Rejouer</span>
          </button>
        </div>

        {/* 6 Interactive Animated Infographic Cards with Radial Gauges & Progress Bars */}
        <div className="grid grid-cols-3 gap-6 my-auto py-3 cascade-item cascade-delay-2">
          {STATS.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            const radius = 34;
            const circumference = 2 * Math.PI * radius;
            const dashOffset =
              circumference - (circumference * (item.barPercent * progress)) / 100;

            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedIdx(idx)}
                className={`ds-card text-left cursor-pointer flex flex-col justify-between !p-7 border-t-[10px] ${
                  isSelected ? 'ring-4 ring-[#10222E]/10 -translate-y-1.5' : ''
                }`}
                style={{ borderTopColor: item.color }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="stat-num" style={{ color: item.inkColor }}>
                      {item.prefix || ''}
                      {formatVal(item.target, progress)}
                      {item.suffix}
                    </div>
                    <p className="font-outfit font-semibold text-[24px] leading-[1.3] text-[#10222E] mt-2">
                      {item.label}
                    </p>
                  </div>

                  {/* Radial Donut Infographic Gauge */}
                  <div className="relative w-[84px] h-[84px] shrink-0 flex items-center justify-center">
                    <svg width="84" height="84" viewBox="0 0 84 84" className="-rotate-90">
                      <circle
                        cx="42"
                        cy="42"
                        r={radius}
                        fill="none"
                        stroke="#DCE6EB"
                        strokeWidth="8"
                      />
                      <circle
                        cx="42"
                        cy="42"
                        r={radius}
                        fill="none"
                        stroke={item.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                      />
                    </svg>
                    <span className="absolute font-spartan text-[20px] text-[#10222E] pt-0.5">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 mt-4">
                  <p className="font-outfit text-[18px] text-[#4E606B] leading-snug">
                    {item.benchmark}
                  </p>
                  {/* Animated Progress Bar */}
                  <div className="w-full h-3.5 rounded-full bg-[#D6E1E7] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-none"
                      style={{
                        width: `${item.barPercent * progress}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
};
