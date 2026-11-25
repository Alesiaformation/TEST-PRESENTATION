import React, { useState } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideFiletSecuriteProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

const GUARANTEES = [
  {
    num: '01',
    title: 'Délai légal de 3 mois pour suivre les cours sans contrat',
    stat: '3 MOIS',
    statLabel: 'RENTRÉE GARANTIE',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
    desc: 'Tu démarres ta rentrée en septembre avec toute ta classe, même si tu n’as pas encore trouvé ton entreprise.',
    points: [
      'Aucun retard : tu suis 100 % des cours dès le premier jour avec ta promo.',
      'La loi t’autorise à commencer les cours pendant 3 mois le temps de signer.',
      '0 € à payer : tu n’avances aucun frais pendant ta recherche.',
    ],
  },
  {
    num: '02',
    title: 'Coaching renforcé jusqu’à fin NOVEMBRE',
    stat: 'NOVEMBRE',
    statLabel: 'SUIVI CHAQUE SEMAINE',
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
    desc: 'Notre équipe t’aide chaque semaine, de septembre à fin novembre, jusqu’à ce que tu signes ton contrat.',
    points: [
      'Un point individuel chaque semaine pour cibler les entreprises qui recrutent encore.',
      'Ton CV est envoyé en priorité à nos entreprises partenaires.',
      'On t’accompagne pour appeler et relancer les recruteurs.',
    ],
  },
  {
    num: '03',
    title: 'Accès maintenu aux job datings et à GRIMP',
    stat: '100 %',
    statLabel: 'ACCÈS AUX OFFRES',
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
    desc: 'Tu gardes l’accès à toutes nos offres sur GRIMP et aux nouveaux rendez-vous avec les recruteurs à la rentrée.',
    points: [
      'Tu reçois en priorité les nouvelles offres de dernière minute sur GRIMP.',
      'Tu participes aux rencontres recruteurs organisées à la rentrée.',
      'On te met directement en contact dès qu’une entreprise cherche un alternant.',
    ],
  },
];

export const SlideFiletSecurite: React.FC<SlideFiletSecuriteProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const current = GUARANTEES[activeIdx];

  return (
    <SlideShell
      chapter="Filet de sécurité"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 grid grid-cols-12 gap-12 items-center">
        {/* Left Column: Title + 3 Clickable Guarantee Buttons */}
        <div className="col-span-6 flex flex-col justify-between h-full py-1">
          <div className="space-y-4 cascade-item cascade-delay-1">
            <span className="ds-pill ds-pill-teal">FILET DE SÉCURITÉ ALÉSIA</span>

            <h1 className="font-spartan text-[96px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9] block">PAS ENCORE D’ALTERNANCE</span>
              <span className="text-[#B35A00] block">EN SEPTEMBRE ?</span>
              <span className="text-[#10222E] block">PAS DE PANIQUE.</span>
            </h1>

            <p className="ds-lead !text-[26px]">
              Chez Alésia Formation, <strong>personne n’est laissé de côté</strong> à la rentrée.
            </p>
          </div>

          {/* 3 Clickable Tab Buttons (aria-pressed) */}
          <div className="space-y-3.5 cascade-item cascade-delay-2">
            {GUARANTEES.map((g, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={g.num}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveIdx(idx)}
                  className="ds-tab-btn w-full justify-between !h-[82px]"
                  style={
                    isSelected
                      ? { backgroundColor: g.color, borderColor: g.color, color: '#0E1A22' }
                      : undefined
                  }
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className="ds-tab-num px-3.5 py-1.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: isSelected ? '#0E1A22' : g.softColor,
                        color: isSelected ? g.color : '#0E1A22',
                      }}
                    >
                      {g.num}
                    </span>
                    <span className="truncate text-[22px]">{g.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detail Panel + Simple 3-Month Timeline Infographic */}
        <div className="col-span-6 cascade-item cascade-delay-3">
          <div
            className="ds-detail-panel flex flex-col justify-between min-h-[680px]"
            style={{ borderTopColor: current.color }}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-2">
                <span className="ds-kicker" style={{ color: current.inkColor }}>
                  GARANTIE SÉRÉNITÉ {current.num}
                </span>
                <h2 className="font-spartan text-[46px] leading-[0.9] text-[#10222E]">
                  {current.title.toUpperCase()}
                </h2>
              </div>

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

            <p className="font-outfit text-[24px] leading-[1.4] text-[#2E3F4A] my-3">
              {current.desc}
            </p>

            <ul className="space-y-3.5">
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
                  <span className="font-outfit font-medium text-[22px] leading-[1.38] text-[#10222E]">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>

            {/* Infographie en bas à droite : langage simple et rassurant */}
            <div className="p-5 rounded-[22px] bg-[#F3F7F9] border-2 border-[#DCE6EB] space-y-3 mt-4">
              <div className="font-outfit font-bold text-[15px] uppercase tracking-[0.14em] text-[#13806F]">
                COMMENT ÇA SE PASSE CONCRÈTEMENT À LA RENTRÉE ?
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { month: '1. SEPTEMBRE', sub: 'Tu démarres les cours avec ta classe', bg: '#D3F0FA', border: '#12AEDB' },
                  { month: '2. OCTOBRE', sub: 'On cherche ton entreprise avec toi', bg: '#D5F1EE', border: '#2BB3A3' },
                  { month: '3. FIN NOVEMBRE', sub: 'Tu signes ton contrat (0 € à payer)', bg: '#FDE5C2', border: '#F39200' },
                ].map((m, i) => (
                  <button
                    key={m.month}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className="p-3.5 rounded-[16px] border-2 text-left cursor-pointer transition-all"
                    style={{
                      backgroundColor: activeIdx === i ? m.bg : '#FFFFFF',
                      borderColor: activeIdx === i ? m.border : '#DCE6EB',
                    }}
                  >
                    <div className="font-spartan text-[23px] text-[#0E1A22] leading-none">
                      {m.month}
                    </div>
                    <div className="font-outfit font-semibold text-[16px] text-[#2E3F4A] mt-1.5 leading-snug">
                      {m.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
