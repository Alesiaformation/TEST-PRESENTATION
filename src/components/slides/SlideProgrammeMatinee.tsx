import React, { useState } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideProgrammeMatineeProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
  onNextSlide: () => void;
}

export const SlideProgrammeMatinee: React.FC<SlideProgrammeMatineeProps> = ({
  campus,
  slideNumber,
  totalSlides,
  onNextSlide,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      timing: '1re ÉTAPE · ÉPREUVES ÉCRITES',
      title: 'TESTS D’ADMISSION',
      desc: '3 épreuves chronométrées de logique et de raisonnement pour valoriser votre potentiel académique et professionnel.',
      stat: '3 ÉPREUVES',
      statLabel: 'CHRONOMÉTRÉES',
      color: '#12AEDB',
      softColor: '#D3F0FA',
      inkColor: '#0A8DB9',
      points: [
        'Test 1 (15 min) : comprendre la logique et trouver la 4e case.',
        'Test 2 (10 min) : déplacement d’éléments sur les 2 cases suivantes avec 3 colonnes d’essais.',
        'Test 3 : questionnaire de logique et de raisonnement avec choix unique.',
      ],
    },
    {
      num: '02',
      timing: '2e ÉTAPE · IMMERSION CAMPUS',
      title: 'VISITE DE L’ÉCOLE',
      desc: 'Découverte guidée des salles de cours, des espaces de travail collaboratif et de la vie quotidienne sur votre campus.',
      stat: '16 MAX',
      statLabel: 'APPRENTIS PAR PROMO',
      color: '#2BB3A3',
      softColor: '#D5F1EE',
      inkColor: '#13806F',
      points: [
        'Découverte des salles équipées et des espaces dédiés aux alternants.',
        'Rencontre avec l’équipe pédagogique et administrative du campus.',
        'Présentation du cadre de travail à taille humaine (16 apprentis maximum).',
      ],
    },
    {
      num: '03',
      timing: '3e ÉTAPE · VOTRE ALTERNANCE',
      title: 'PRÉSENTATION D’ALÉSIA & DE SES ATOUTS',
      desc: 'Notre dispositif d’accompagnement exclusif (plateforme GRIMP, ateliers, job dating, coaching) jusqu’à la signature de votre contrat.',
      stat: '100 %',
      statLabel: 'ACCOMPAGNÉ(E)',
      color: '#F39200',
      softColor: '#FDE5C2',
      inkColor: '#B35A00',
      points: [
        'Accès immédiat à la plateforme GRIMP dès votre admission validée.',
        'Ateliers CV, marché caché (70 % des offres) et simulations d’entretien.',
        'Job dating du 8 avril et suivi dédié par votre responsable de section.',
      ],
    },
  ];

  const current = steps[activeStep];

  return (
    <SlideShell
      chapter="Tests d’admission"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 grid grid-cols-12 gap-12 items-center">
        {/* Left Column: Title, Lead & 3 Interactive Tab Buttons */}
        <div className="col-span-6 flex flex-col justify-between h-full py-2">
          <div className="space-y-5 cascade-item cascade-delay-1">
            <span className="ds-pill ds-pill-orange">
              SESSION D’ACCUEIL & TESTS D’ADMISSION
            </span>

            <h1 className="font-spartan text-[116px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9] block">VOTRE</span>
              <span className="text-[#B35A00] block">PROGRAMME</span>
            </h1>

            <p className="ds-lead">
              <strong>3 temps forts</strong> pensés pour évaluer votre potentiel, découvrir votre campus et vous projeter sereinement vers <strong>votre contrat d’alternance</strong>.
            </p>
          </div>

          {/* 3 Clickable Tab Buttons (aria-pressed for auto-play) */}
          <div className="space-y-4 cascade-item cascade-delay-2">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.num}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveStep(idx)}
                  className="ds-tab-btn w-full justify-between"
                  style={
                    isSelected
                      ? { backgroundColor: step.color, borderColor: step.color, color: '#0E1A22' }
                      : undefined
                  }
                >
                  <div className="flex items-center gap-5 min-w-0">
                    <span
                      className="ds-tab-num px-3.5 py-1.5 rounded-full"
                      style={{
                        backgroundColor: isSelected ? '#0E1A22' : step.softColor,
                        color: isSelected ? step.color : '#0E1A22',
                      }}
                    >
                      {step.num}
                    </span>
                    <span className="truncate">{step.title}</span>
                  </div>
                  <span className="font-outfit font-semibold text-[18px] uppercase tracking-[0.12em] shrink-0">
                    {idx + 1}e étape
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detail Panel */}
        <div className="col-span-6 cascade-item cascade-delay-3">
          <div
            className="ds-detail-panel flex flex-col justify-between min-h-[680px]"
            style={{ borderTopColor: current.color }}
          >
            {/* Top row with kicker + stat badge */}
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-3">
                <span className="ds-kicker" style={{ color: current.inkColor }}>
                  {current.timing}
                </span>
                <h2 className="font-spartan text-[54px] leading-[0.9] text-[#10222E]">
                  {current.title}
                </h2>
              </div>

              {/* Stat Badge */}
              <div
                className="px-6 py-4 rounded-[22px] text-[#0E1A22] shrink-0 text-right"
                style={{ backgroundColor: current.color }}
              >
                <div className="font-spartan text-[38px] leading-none tabular-nums">
                  {current.stat}
                </div>
                <div className="font-outfit font-semibold text-[15px] uppercase tracking-[0.12em] mt-1">
                  {current.statLabel}
                </div>
              </div>
            </div>

            <p className="font-outfit text-[26px] leading-[1.42] text-[#2E3F4A] my-6">
              {current.desc}
            </p>

            {/* Bullet points */}
            <ul className="space-y-4">
              {current.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="w-[34px] h-[34px] rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: current.softColor }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-outfit font-medium text-[24px] leading-[1.4] text-[#10222E]">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bottom CTA */}
            <div className="pt-8 mt-6 border-t border-[#DCE6EB] flex items-center justify-between">
              <span className="font-outfit font-semibold text-[18px] uppercase tracking-[0.14em] text-[#4E606B]">
                ÉTAPE {activeStep + 1} SUR 3
              </span>

              <button
                type="button"
                onClick={() => {
                  if (activeStep < 2) {
                    setActiveStep(activeStep + 1);
                  } else {
                    onNextSlide();
                  }
                }}
                className="ds-cta"
              >
                <span>
                  {activeStep < 2 ? 'Étape suivante' : 'Consignes des tests'}
                </span>
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
