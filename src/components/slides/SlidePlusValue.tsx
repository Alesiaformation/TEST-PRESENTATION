import React, { useState } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlidePlusValueProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

const PICTOS = [
  {
    num: '01',
    title: 'GRIMP',
    desc: 'Toutes les offres centralisées, alertes sans doublon, +2 h gagnées / semaine.',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    icon: 'radar',
  },
  {
    num: '02',
    title: 'ATELIERS',
    desc: 'CV compatible ATS, marché caché (70 % des offres), simulations et gestion du stress.',
    color: '#2BB3A3',
    inkColor: '#13806F',
    icon: 'sliders',
  },
  {
    num: '03',
    title: 'JOB DATING',
    desc: 'Le 8 avril sur nos campus : jusqu’à 5 entretiens de 15 minutes en une demi-journée.',
    color: '#F39200',
    inkColor: '#B35A00',
    icon: 'calendar',
  },
  {
    num: '04',
    title: 'RESPONSABLE DE SECTION',
    desc: 'Un interlocuteur dédié qui recommande ton profil et te suit en entreprise.',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    icon: 'usercheck',
  },
  {
    num: '05',
    title: 'FILET DE SÉCURITÉ',
    desc: '3 mois de délai légal en septembre et coaching maintenu jusqu’à fin novembre.',
    color: '#2BB3A3',
    inkColor: '#13806F',
    icon: 'shield',
  },
  {
    num: '06',
    title: 'EFFECTIFS RÉDUITS',
    desc: '16 apprentis maximum par promotion pour un suivi humain et +90 % de réussite.',
    color: '#F39200',
    inkColor: '#B35A00',
    icon: 'users',
  },
];

export const SlidePlusValue: React.FC<SlidePlusValueProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'radar':
        return (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        );
      case 'sliders':
        return (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        );
      case 'calendar':
        return (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case 'usercheck':
        return (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <polyline points="17 11 19 13 23 9" />
          </svg>
        );
      case 'shield':
        return (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
        );
      default:
        return (
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
    }
  };

  return (
    <SlideShell
      chapter="Questions & Synthèse"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 flex flex-col justify-between py-1">
        {/* Header */}
        <div className="flex items-end justify-between gap-8 cascade-item cascade-delay-1">
          <div>
            <span className="ds-pill ds-pill-cyan mb-2">SYNTHÈSE DE NOTRE DISPOSITIF</span>
            <h1 className="font-spartan text-[104px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9]">NOTRE PLUS-VALUE </span>
              <span className="text-[#B35A00]">EN UNE DIAPO</span>
            </h1>
          </div>
        </div>

        {/* 6 Visual Pictos Grid (3x2) */}
        <div className="grid grid-cols-3 gap-6 my-auto py-2 cascade-item cascade-delay-2">
          {PICTOS.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.num}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveIdx(idx)}
                className={`p-6 rounded-[24px] border-2 border-t-[10px] bg-white text-left cursor-pointer transition-all flex items-start gap-5 ${
                  isSelected ? 'shadow-lg -translate-y-1.5' : 'border-[#DCE6EB]'
                }`}
                style={{
                  borderTopColor: item.color,
                  borderColor: isSelected ? item.color : undefined,
                }}
              >
                <div
                  className="ds-icon-box !w-[78px] !h-[78px]"
                  style={{ backgroundColor: item.color }}
                >
                  {renderIcon(item.icon)}
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="font-spartan text-[26px]"
                      style={{ color: item.inkColor }}
                    >
                      {item.num}
                    </span>
                    <h2 className="font-spartan-700 text-[30px] text-[#0A8DB9]">
                      {item.title}
                    </h2>
                  </div>
                  <p className="font-outfit text-[21px] leading-[1.35] text-[#2E3F4A]">
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Final Signature Phrase (#10222E block, max 1 per screen, accent #FFB54D) */}
        <div className="bg-[#10222E] text-white rounded-[26px] px-10 py-6 flex items-center justify-between cascade-item cascade-delay-3">
          <div className="font-spartan text-[64px] leading-none tracking-tight text-[#FFB54D] uppercase">
            « JAMAIS SEUL, JAMAIS PERDU. »
          </div>
          <span className="px-6 py-2.5 rounded-full bg-[#2BB3A3] text-[#0E1A22] font-outfit font-semibold text-[20px]">
            On t’accompagne jusqu’à la signature
          </span>
        </div>
      </div>
    </SlideShell>
  );
};
