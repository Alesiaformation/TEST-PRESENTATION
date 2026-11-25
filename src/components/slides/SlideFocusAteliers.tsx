import React, { useState } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideFocusAteliersProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

interface WorkshopItem {
  num: string;
  title: string;
  stat: string;
  statLabel: string;
  color: string;
  inkColor: string;
  softColor: string;
  objectif: string;
  format: string;
  repartAvec: string;
}

const WORKSHOPS: WorkshopItem[] = [
  {
    num: '01',
    title: 'La candidature qui se démarque',
    stat: '6 SEC',
    statLabel: 'POUR CONVAINCRE',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
    objectif: 'Faire un CV clair et efficace qui donne tout de suite envie au recruteur de te recevoir en entretien.',
    format: 'Atelier en petit groupe + correction individuelle de ton CV avec un coach de l’école.',
    repartAvec: 'Ton CV prêt à être envoyé, les mots importants de ton futur métier et un modèle de lettre de motivation.',
  },
  {
    num: '02',
    title: 'Le marché caché de l’alternance',
    stat: '70 %',
    statLabel: 'OFFRES NON PUBLIÉES',
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
    objectif: 'Contacter directement les 70 % d’entreprises qui prennent des alternants sans jamais mettre d’annonce sur internet.',
    format: 'Atelier pratique pour cibler les entreprises près de chez toi et les contacter efficacement.',
    repartAvec: 'La liste de nos entreprises partenaires, un modèle d’email prêt à envoyer et quoi dire au téléphone.',
  },
  {
    num: '03',
    title: 'Simulations d’entretien',
    stat: '15 MIN',
    statLabel: 'POUR RÉUSSIR',
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
    objectif: 'S’entraîner aux vraies questions des recruteurs pour être à l’aise et savoir parler de soi et de sa motivation.',
    format: 'Entretien d’entraînement avec un formateur suivi de conseils personnalisés pour progresser.',
    repartAvec: 'Une présentation claire de 2 minutes et les bonnes réponses aux questions les plus fréquentes.',
  },
  {
    num: '04',
    title: 'Gestion du stress',
    stat: '100 %',
    statLabel: 'EN CONFIANCE',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
    objectif: 'Apprendre à gérer son stress avant un entretien d’embauche, le job dating ou un examen.',
    format: 'Exercices simples sur la respiration, la posture et la façon de prendre la parole.',
    repartAvec: 'Des astuces faciles à utiliser en 3 minutes juste avant d’entrer en entretien.',
  },
];

export const SlideFocusAteliers: React.FC<SlideFocusAteliersProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const current = WORKSHOPS[activeIdx];

  // Infographie en bas à droite avec un langage simple, direct et compréhensible par tous
  const renderWorkshopInfographic = (idx: number) => {
    if (idx === 0) {
      return (
        <div className="p-4 rounded-[20px] bg-white border-2 border-[#12AEDB] flex items-center justify-between gap-5">
          <div className="space-y-2 flex-1">
            <div className="font-outfit font-bold text-[15px] uppercase tracking-wider text-[#0A8DB9]">
              CE QUE LE RECRUTEUR REGARDE EN 6 SECONDES SUR TON CV
            </div>
            <div className="grid grid-cols-3 gap-2 font-outfit font-semibold text-[16px] text-[#0E1A22]">
              <div className="p-2 rounded-[12px] bg-[#D3F0FA] text-center">
                1. Le poste recherché
              </div>
              <div className="p-2 rounded-[12px] bg-[#D5F1EE] text-center">
                2. Tes compétences
              </div>
              <div className="p-2 rounded-[12px] bg-[#FDE5C2] text-center">
                3. Ta motivation
              </div>
            </div>
          </div>
          <div className="px-4 py-2.5 rounded-[14px] bg-[#12AEDB] text-[#0E1A22] font-spartan text-[26px] shrink-0 text-center leading-tight">
            4× PLUS<br />DE RÉPONSES
          </div>
        </div>
      );
    }
    if (idx === 1) {
      return (
        <div className="p-4 rounded-[20px] bg-white border-2 border-[#2BB3A3] flex items-center justify-between gap-6">
          <div className="flex-1 space-y-2">
            <div className="font-outfit font-bold text-[15px] uppercase tracking-wider text-[#13806F]">
              OÙ SE TROUVENT LES OFFRES D’ALTERNANCE ?
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[34%] py-2.5 px-3 rounded-[12px] bg-[#D3F0FA] text-[#0E1A22] font-outfit font-bold text-[17px] text-center">
                30 % sur les sites d’annonces
              </div>
              <div className="w-[66%] py-2.5 px-4 rounded-[12px] bg-[#2BB3A3] text-[#0E1A22] font-outfit font-bold text-[17px] text-center">
                70 % en contactant directement nos entreprises
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (idx === 2) {
      return (
        <div className="p-4 rounded-[20px] bg-white border-2 border-[#F39200] flex items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="font-outfit font-bold text-[15px] uppercase tracking-wider text-[#B35A00]">
              COMMENT SE PASSE UN ENTRETIEN DE 15 MINUTES ?
            </div>
            <div className="grid grid-cols-3 gap-2 font-outfit font-semibold text-[16px] text-[#0E1A22]">
              <div className="p-2 rounded-[12px] bg-[#D3F0FA] text-center">
                <strong>2 min :</strong> Te présenter
              </div>
              <div className="p-2 rounded-[12px] bg-[#D5F1EE] text-center">
                <strong>8 min :</strong> Ta motivation
              </div>
              <div className="p-2 rounded-[12px] bg-[#FDE5C2] text-center">
                <strong>5 min :</strong> Tes questions
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="p-4 rounded-[20px] bg-white border-2 border-[#12AEDB] flex items-center justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="font-outfit font-bold text-[15px] uppercase tracking-wider text-[#0A8DB9]">
            3 RÉFLEXES SIMPLES POUR ÊTRE À L’AISE LE JOUR J
          </div>
          <div className="grid grid-cols-3 gap-2 font-outfit font-semibold text-[16px] text-[#0E1A22]">
            <div className="p-2 rounded-[12px] bg-[#D3F0FA] text-center">
              1. Bien respirer
            </div>
            <div className="p-2 rounded-[12px] bg-[#D5F1EE] text-center">
              2. Sourire & regarder
            </div>
            <div className="p-2 rounded-[12px] bg-[#FDE5C2] text-center">
              3. Parler calmement
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SlideShell
      chapter="Outils & Ateliers"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 grid grid-cols-12 gap-12 items-center">
        {/* Left Column: Title + 4 Clickable Workshop Cards */}
        <div className="col-span-6 flex flex-col justify-between h-full py-1">
          <div className="space-y-3 cascade-item cascade-delay-1">
            <span className="ds-pill ds-pill-teal">PRÉPARATION INTENSIVE</span>
            <h1 className="font-spartan text-[112px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9]">FOCUS </span>
              <span className="text-[#B35A00]">ATELIERS</span>
            </h1>
            <p className="ds-lead !text-[26px]">
              <strong>4 ateliers concrets</strong> pour maîtriser chaque étape de ta recherche d’entreprise.
            </p>
          </div>

          {/* 4 Clickable Cards (2x2 Grid, aria-pressed for Auto-Play) */}
          <div className="grid grid-cols-2 gap-4 cascade-item cascade-delay-2">
            {WORKSHOPS.map((w, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={w.num}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveIdx(idx)}
                  className="h-[168px] rounded-[22px] border-2 p-5 flex flex-col justify-between text-left cursor-pointer transition-all"
                  style={{
                    backgroundColor: isSelected ? w.color : '#FFFFFF',
                    borderColor: isSelected ? w.color : '#B9C8D0',
                    color: '#0E1A22',
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className="font-spartan text-[36px] leading-none"
                      style={{ color: isSelected ? '#0E1A22' : w.inkColor }}
                    >
                      {w.num}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full font-outfit font-semibold text-[15px] uppercase"
                      style={{
                        backgroundColor: isSelected ? '#0E1A22' : w.softColor,
                        color: isSelected ? w.color : '#0E1A22',
                      }}
                    >
                      Atelier {w.num}
                    </span>
                  </div>

                  <div className="font-spartan-700 text-[28px] leading-[0.95] text-[#10222E]">
                    {w.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detail Panel showing Objectif, Format, Ce que l'étudiant repart avec + Infographic */}
        <div className="col-span-6 cascade-item cascade-delay-3">
          <div
            className="ds-detail-panel flex flex-col justify-between min-h-[690px] !p-9"
            style={{ borderTopColor: current.color }}
          >
            {/* Header + Stat Badge */}
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-1.5">
                <span className="ds-kicker" style={{ color: current.inkColor }}>
                  ATELIER {current.num} SUR 04
                </span>
                <h2 className="font-spartan text-[46px] leading-[0.9] text-[#10222E]">
                  {current.title.toUpperCase()}
                </h2>
              </div>

              <div
                className="px-6 py-3.5 rounded-[22px] text-[#0E1A22] shrink-0 text-right"
                style={{ backgroundColor: current.color }}
              >
                <div className="font-spartan text-[36px] leading-none tabular-nums">
                  {current.stat}
                </div>
                <div className="font-outfit font-semibold text-[14px] uppercase tracking-[0.12em] mt-1">
                  {current.statLabel}
                </div>
              </div>
            </div>

            {/* 3 Structured Blocks: Objectif / Format / Ce que l'étudiant repart avec */}
            <div className="space-y-3 my-auto py-2">
              <div className="p-4 rounded-[18px] bg-[#F3F7F9] border border-[#DCE6EB] space-y-0.5">
                <div className="ds-kicker !text-[15px]" style={{ color: current.inkColor }}>
                  01 · OBJECTIF DE L’ATELIER
                </div>
                <p className="font-outfit text-[21px] leading-[1.35] text-[#10222E]">
                  {current.objectif}
                </p>
              </div>

              <div className="p-4 rounded-[18px] bg-[#F3F7F9] border border-[#DCE6EB] space-y-0.5">
                <div className="ds-kicker !text-[15px]" style={{ color: current.inkColor }}>
                  02 · FORMAT DE L’ATELIER
                </div>
                <p className="font-outfit text-[21px] leading-[1.35] text-[#10222E]">
                  {current.format}
                </p>
              </div>

              <div
                className="p-4 rounded-[18px] border-2 space-y-0.5"
                style={{
                  backgroundColor: current.softColor,
                  borderColor: current.color,
                }}
              >
                <div className="ds-kicker !text-[15px] text-[#0E1A22]">
                  03 · CE QUE TU REPARS AVEC
                </div>
                <p className="font-outfit font-semibold text-[21px] leading-[1.35] text-[#0E1A22]">
                  {current.repartAvec}
                </p>
              </div>

              {/* Dynamic Workshop Infographic */}
              {renderWorkshopInfographic(activeIdx)}
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
