import React, { useState } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideDifferenceProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

interface TabGroup {
  id: string;
  num: string;
  label: string;
  color: string;
  inkColor: string;
  softColor: string;
  cards: {
    title: string;
    desc: string;
    icon: 'users' | 'award' | 'globe' | 'briefcase' | 'database' | 'compass' | 'heart' | 'smile' | 'shield';
  }[];
}

const TABS: TabGroup[] = [
  {
    id: 'pedagogie',
    num: '01',
    label: 'Performance pédagogique',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
    cards: [
      {
        title: 'EFFECTIFS RÉDUITS',
        desc: '16 apprentis maximum par promotion pour garantir une vraie proximité avec chaque formateur.',
        icon: 'users',
      },
      {
        title: 'EXCELLENCE ACADÉMIQUE',
        desc: 'Des taux de réussite aux examens largement supérieurs aux moyennes nationales.',
        icon: 'award',
      },
      {
        title: 'FORMATEURS NATIFS',
        desc: 'Les langues étrangères sont enseignées par des formateurs natifs pour une maîtrise concrète.',
        icon: 'globe',
      },
    ],
  },
  {
    id: 'insertion',
    num: '02',
    label: 'Accompagnement & insertion',
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
    cards: [
      {
        title: 'AIDE ACTIVE AU PLACEMENT',
        desc: 'Ateliers CV, simulations d’entretien individuelles et mobilisation de notre réseau de partenaires.',
        icon: 'briefcase',
      },
      {
        title: 'JOB DATING & BASE ENTREPRISES',
        desc: 'Job dating dédié sur nos campus et accès direct à notre base de 1 500 entreprises partenaires.',
        icon: 'database',
      },
      {
        title: 'DIAGNOSTIC D’ORIENTATION',
        desc: 'Un diagnostic d’orientation personnalisé réalisé dès le dépôt de votre candidature.',
        icon: 'compass',
      },
    ],
  },
  {
    id: 'suivi',
    num: '03',
    label: 'Suivi & soutien individuel',
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
    cards: [
      {
        title: 'SUIVI PERSONNALISÉ & INTÉGRATION',
        desc: 'Accompagnement humain de votre rentrée jusqu’à l’obtention de votre diplôme en entreprise.',
        icon: 'heart',
      },
      {
        title: 'GESTION DU STRESS & ÉMOTIONS',
        desc: 'Séances de coaching dédiées à la gestion du stress, de la prise de parole et des émotions.',
        icon: 'smile',
      },
      {
        title: 'PRÉVENTION & HANDICAP',
        desc: 'Prévention active des abandons et accompagnement adapté des étudiants en situation de handicap.',
        icon: 'shield',
      },
    ],
  },
];

export const SlideDifference: React.FC<SlideDifferenceProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const currentTab = TABS[activeTabIdx];
  const cardColors = ['#12AEDB', '#2BB3A3', '#F39200'];

  const renderIcon = (name: TabGroup['cards'][number]['icon']) => {
    switch (name) {
      case 'users':
        return (
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'award':
        return (
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        );
      case 'globe':
        return (
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case 'database':
        return (
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        );
      case 'compass':
        return (
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        );
      case 'heart':
        return (
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        );
      case 'smile':
        return (
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        );
      case 'shield':
        return (
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
        );
    }
  };

  return (
    <SlideShell
      chapter="Notre plus-value"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 flex flex-col justify-between py-2">
        {/* Top Header */}
        <div className="space-y-5 cascade-item cascade-delay-1">
          <div className="flex items-center justify-between">
            <span className="ds-pill ds-pill-orange">NOTRE ENGAGEMENT QUALITÉ</span>
          </div>

          <h1 className="font-spartan text-[118px] leading-[0.86] tracking-[-0.035em] uppercase">
            <span className="text-[#0A8DB9]">CE QUI FAIT </span>
            <span className="text-[#B35A00]">LA DIFFÉRENCE</span>
          </h1>

          {/* 3 Interactive Tabs (ds-tab-btn, 76px height, aria-pressed) */}
          <div className="grid grid-cols-3 gap-6 pt-2">
            {TABS.map((tab, idx) => {
              const isSelected = activeTabIdx === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveTabIdx(idx)}
                  className="ds-tab-btn w-full justify-start"
                  style={
                    isSelected
                      ? { backgroundColor: tab.color, borderColor: tab.color, color: '#0E1A22' }
                      : undefined
                  }
                >
                  <span
                    className="ds-tab-num px-3.5 py-1.5 rounded-full"
                    style={{
                      backgroundColor: isSelected ? '#0E1A22' : tab.softColor,
                      color: isSelected ? tab.color : '#0E1A22',
                    }}
                  >
                    {tab.num}
                  </span>
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Content Cards (ds-card: 88x88 icon box, 46px stroke icon, League Spartan 700 32px cyan-ink title, 24px text) */}
        <div className="grid grid-cols-3 gap-8 my-auto pt-4 cascade-item cascade-delay-2">
          {currentTab.cards.map((card, i) => {
            const boxColor = cardColors[i % 3];
            return (
              <div
                key={card.title}
                className="ds-card border-t-[12px] flex flex-col justify-between min-h-[420px]"
                style={{ borderTopColor: boxColor }}
              >
                <div className="space-y-7">
                  <div className="flex items-center justify-between">
                    <div
                      className="ds-icon-box"
                      style={{ backgroundColor: boxColor }}
                    >
                      {renderIcon(card.icon)}
                    </div>
                    <span className="font-spartan text-[42px] text-[#DCE6EB]">
                      0{i + 1}
                    </span>
                  </div>

                  <h2 className="font-spartan-700 text-[34px] text-[#0A8DB9]">
                    {card.title}
                  </h2>

                  <p className="font-outfit text-[25px] leading-[1.42] text-[#2E3F4A]">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#DCE6EB] flex items-center justify-between">
                  <span
                    className="ds-kicker !text-[16px]"
                    style={{ color: currentTab.inkColor }}
                  >
                    {currentTab.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
};
