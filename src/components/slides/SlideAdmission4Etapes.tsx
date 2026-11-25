import React, { useState } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideAdmission4EtapesProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
  onOpenTestsSlide?: () => void;
}

const ADMISSION_STEPS = [
  {
    num: '01',
    title: 'Tests d’admission',
    subtitle: 'Théorie et logique',
    stat: '3 TESTS',
    statLabel: 'ÉCRITS & LOGIQUE',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
    desc: 'Évaluation de ton potentiel logique, de ta rapidité d’analyse et de tes bases académiques (Test 1 : 15 min, Test 2 : 10 min, Test 3 : Questionnaire).',
  },
  {
    num: '02',
    title: 'Dossier',
    subtitle: 'Sous 48 h',
    stat: '48 H',
    statLabel: 'DÉLAI DE TRAITEMENT',
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
    desc: 'Étude rapide de ton dossier de candidature (bulletins, CV, projet professionnel) avec retour sous 48 heures.',
  },
  {
    num: '03',
    title: 'Entretien en visio',
    subtitle: '30 min',
    stat: '30 MIN',
    statLabel: 'DIAGNOSTIC PROJET',
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
    desc: 'Échange individuel de 30 minutes en visio pour valider ton orientation, ta motivation et tes objectifs d’alternance.',
  },
  {
    num: '04',
    title: 'Ateliers & coaching',
    subtitle: 'Dès l’admission',
    stat: '100 %',
    statLabel: 'ACCOMPAGNÉ(E)',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
    desc: 'Dès ton admission validée, tu intègres les ateliers CV, marché caché, GRIMP et la préparation au Job dating du 8 avril.',
  },
];

export const SlideAdmission4Etapes: React.FC<SlideAdmission4EtapesProps> = ({
  campus,
  slideNumber,
  totalSlides,
  onOpenTestsSlide,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <SlideShell
      chapter="Admission & Contrat"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 flex flex-col justify-between py-1">
        {/* Top Row: Title + Orange Callout "Vivement conseillé : hors Parcoursup" */}
        <div className="flex items-end justify-between gap-8 cascade-item cascade-delay-1">
          <div className="space-y-3">
            <span className="ds-pill ds-pill-cyan">PROCESSUS RAPIDE & FLUIDE</span>
            <h1 className="font-spartan text-[110px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9]">ADMISSION </span>
              <span className="text-[#B35A00]">EN 4 ÉTAPES</span>
            </h1>
          </div>

          {/* Encart orange : Vivement conseillé : hors Parcoursup */}
          <div className="px-8 py-5 rounded-[24px] bg-[#F39200] text-[#0E1A22] flex items-center gap-4 shrink-0 shadow-md">
            <div className="w-14 h-14 rounded-[16px] bg-[#0E1A22] text-[#F39200] flex items-center justify-center shrink-0">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F39200" strokeWidth="2.4">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <div className="font-outfit font-semibold text-[16px] uppercase tracking-[0.16em]">
                INSCRIPTION DIRECTE & LIBRE
              </div>
              <div className="font-spartan text-[38px] leading-none pt-1">
                VIVEMENT CONSEILLÉ : HORS PARCOURSUP
              </div>
            </div>
          </div>
        </div>

        {/* 4 Interactive Step Cards */}
        <div className="grid grid-cols-4 gap-6 my-auto py-3 cascade-item cascade-delay-2">
          {ADMISSION_STEPS.map((step, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={step.num}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveIdx(idx)}
                className={`ds-card text-left cursor-pointer border-t-[12px] !p-7 flex flex-col justify-between min-h-[395px] ${
                  isSelected ? 'ring-4 ring-[#10222E]/10 -translate-y-2' : ''
                }`}
                style={{ borderTopColor: step.color }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="w-16 h-16 rounded-[18px] font-spartan text-[34px] flex items-center justify-center text-[#0E1A22] pt-1"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.num}
                    </span>
                    <span
                      className="px-3.5 py-1.5 rounded-full font-outfit font-semibold text-[16px] uppercase text-[#0E1A22]"
                      style={{ backgroundColor: step.softColor }}
                    >
                      {step.subtitle}
                    </span>
                  </div>

                  <h2 className="font-spartan-700 text-[34px] text-[#0A8DB9] leading-[0.95] pt-1">
                    {step.title}
                  </h2>

                  <p className="font-outfit text-[22px] leading-[1.4] text-[#2E3F4A]">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DCE6EB] flex items-center justify-between">
                  <span
                    className="font-spartan text-[26px]"
                    style={{ color: step.inkColor }}
                  >
                    {step.stat}
                  </span>
                  <span className="font-outfit font-semibold text-[15px] uppercase tracking-wider text-[#4E606B]">
                    {step.statLabel}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Dates Banner + Direct Link to Tests Instructions */}
        <div className="bg-[#10222E] text-white rounded-[24px] px-8 py-5 flex items-center justify-between gap-6 cascade-item cascade-delay-3">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="font-spartan text-[28px] text-[#FFB54D] uppercase tracking-tight">
              DATES CLÉS :
            </span>
            {[
              'Immersion du 23 févr. au 2 mars',
              'Job dating le 8 avril',
              'Immersion du 20 au 27 avril',
            ].map((d, i) => (
              <React.Fragment key={d}>
                <span className="font-outfit font-semibold text-[21px] text-white">
                  {d}
                </span>
                {i < 2 && <span className="text-[#12AEDB] font-bold">·</span>}
              </React.Fragment>
            ))}
          </div>

          {onOpenTestsSlide && (
            <button
              type="button"
              onClick={onOpenTestsSlide}
              className="px-6 py-3 rounded-full bg-[#12AEDB] hover:bg-[#F39200] text-[#0E1A22] font-outfit font-semibold text-[19px] flex items-center gap-2.5 cursor-pointer transition-colors shrink-0"
            >
              <span>Voir les consignes des tests</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.4">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </SlideShell>
  );
};
