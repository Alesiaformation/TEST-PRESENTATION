import React, { useState } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideJamaisSeulProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

interface TimelineStep {
  num: string;
  kicker: string;
  title: string;
  statNum: string;
  statLabel: string;
  color: string;
  inkColor: string;
  softColor: string;
  points: string[];
}

const STEPS: TimelineStep[] = [
  {
    num: '01',
    kicker: 'DÈS L’ADMISSION',
    title: 'Plateforme GRIMP',
    statNum: '+2 H',
    statLabel: 'GAGNÉES / SEMAINE',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
    points: [
      'LinkedIn, Indeed, HelloWork, La Bonne Alternance… réunis en un seul outil.',
      'Alertes directes personnalisées, zéro doublon.',
      'Recherche intelligente par zone géographique et par filière.',
    ],
  },
  {
    num: '02',
    kicker: 'ATELIER 01',
    title: 'La candidature qui se démarque',
    statNum: '1 CV',
    statLabel: 'ADAPTÉ À CHAQUE OFFRE',
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
    points: [
      'Un CV clair, structuré et adapté au poste visé.',
      'Les mots-clés stratégiques que repèrent les logiciels de recrutement.',
      'Ta motivation et tes atouts mis en avant dès le premier regard.',
    ],
  },
  {
    num: '03',
    kicker: 'ATELIER 02',
    title: 'Le marché caché de l’alternance',
    statNum: '70 %',
    statLabel: 'DES OFFRES JAMAIS PUBLIÉES',
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
    points: [
      'Accès privilégié à notre carnet d’adresses de 1 500 entreprises partenaires.',
      'Un modèle d’email de prospection prêt à l’envoi.',
      'Une trame d’appel téléphonique efficace pour décrocher un rendez-vous.',
    ],
  },
  {
    num: '04',
    kicker: 'LE 8 AVRIL',
    title: 'Job dating Alésia',
    statNum: '15 MIN',
    statLabel: 'PAR ENTRETIEN',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
    points: [
      'Jusqu’à 5 entretiens directs avec des recruteurs en une demi-journée.',
      'La liste des entreprises présentes communiquée à l’avance.',
      'Un pitch percutant préparé en amont avec nos coachs.',
    ],
  },
  {
    num: '05',
    kicker: 'TOUT AU LONG DU PARCOURS',
    title: 'Ton responsable de section',
    statNum: '1 DÉDIÉ',
    statLabel: 'INTERLOCUTEUR DÉDIÉ',
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
    points: [
      'Il recommande directement ton profil aux entreprises partenaires.',
      'Il vient te voir en entreprise pour assurer le suivi avec ton tuteur.',
      'Des bilans semestriels réguliers pour sécuriser ta réussite.',
    ],
  },
];

export const SlideJamaisSeul: React.FC<SlideJamaisSeulProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const current = STEPS[activeIdx];

  return (
    <SlideShell
      chapter="Accompagnement"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 grid grid-cols-12 gap-12 items-center">
        {/* Left Column: Title + Vertical Timeline (Frise verticale de 5 étapes cliquables) */}
        <div className="col-span-6 flex flex-col justify-between h-full py-1">
          <div className="space-y-2 cascade-item cascade-delay-1">
            <h1 className="font-spartan text-[104px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9] block">TU NE SERAS</span>
              <span className="text-[#B35A00] block">JAMAIS SEUL(E)</span>
            </h1>
            <p className="ds-lead !text-[25px]">
              On t’accompagne jusqu’à la <strong>signature de ton contrat</strong>.
            </p>
          </div>

          {/* Component 6: Frise verticale (trait 4px cyan->teal->orange + pastilles rondes 74px + carte-étiquette) */}
          <div className="relative pl-4 py-1 cascade-item cascade-delay-2">
            {/* 4px Vertical Line */}
            <div className="ds-timeline-line absolute left-[51px] top-[37px] bottom-[37px]" />

            <div className="space-y-3 relative z-10">
              {STEPS.map((step, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={step.num}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setActiveIdx(idx)}
                    className="w-full flex items-center gap-5 text-left cursor-pointer group"
                  >
                    {/* Pastille ronde de 74 px avec bordure de 3 px */}
                    <div
                      className="w-[74px] h-[74px] rounded-full border-[3px] flex items-center justify-center font-spartan text-[28px] shrink-0 transition-all pt-1"
                      style={{
                        backgroundColor: isSelected ? step.color : '#FFFFFF',
                        borderColor: step.color,
                        color: '#0E1A22',
                      }}
                    >
                      {step.num}
                    </div>

                    {/* Carte-étiquette à droite de chaque pastille (sur-titre et titre de 28 px) */}
                    <div
                      className={`flex-1 px-6 py-3 rounded-[20px] border transition-all ${
                        isSelected
                          ? 'bg-white border-2 shadow-md'
                          : 'bg-white/85 border-[#DCE6EB] group-hover:border-[#F39200]'
                      }`}
                      style={isSelected ? { borderColor: step.color } : undefined}
                    >
                      <div
                        className="font-outfit font-semibold text-[16px] uppercase tracking-[0.16em]"
                        style={{ color: step.inkColor }}
                      >
                        {step.kicker}
                      </div>
                      <div className="font-spartan-700 text-[28px] text-[#10222E] leading-tight">
                        {step.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Component 5 (Panneau de détail) */}
        <div className="col-span-6 cascade-item cascade-delay-3">
          <div
            className="ds-detail-panel flex flex-col justify-between min-h-[680px]"
            style={{ borderTopColor: current.color }}
          >
            {/* Header + Stat Badge */}
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-3">
                <span className="ds-kicker" style={{ color: current.inkColor }}>
                  ÉTAPE {current.num} · {current.kicker}
                </span>
                <h2 className="font-spartan text-[54px] leading-[0.9] text-[#10222E]">
                  {current.title.toUpperCase()}
                </h2>
              </div>

              {/* Badge statistique: aplat couleur, chiffre League Spartan 800 de 38 px et légende 15 px en MAJUSCULES */}
              <div
                className="px-6 py-4 rounded-[22px] text-[#0E1A22] shrink-0 text-right"
                style={{ backgroundColor: current.color }}
              >
                <div className="font-spartan text-[38px] leading-none tabular-nums">
                  {current.statNum}
                </div>
                <div className="font-outfit font-semibold text-[15px] uppercase tracking-[0.12em] mt-1">
                  {current.statLabel}
                </div>
              </div>
            </div>

            {/* Liste à puces : rond de 34 px sur fond soft, avec une coche */}
            <ul className="space-y-5 my-auto py-6">
              {current.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="w-[34px] h-[34px] rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: current.softColor }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-outfit font-medium text-[26px] leading-[1.42] text-[#2E3F4A]">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bouton « Étape suivante → » en bas à droite */}
            <div className="pt-6 border-t border-[#DCE6EB] flex items-center justify-between">
              <span className="font-outfit font-semibold text-[18px] uppercase tracking-[0.14em] text-[#4E606B]">
                PARCOURS D’ACCOMPAGNEMENT ({activeIdx + 1}/5)
              </span>

              <button
                type="button"
                onClick={() => setActiveIdx((prev) => (prev + 1) % STEPS.length)}
                className="ds-cta"
              >
                <span>Étape suivante</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.4">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
