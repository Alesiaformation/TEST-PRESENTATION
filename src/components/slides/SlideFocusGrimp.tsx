import React, { useState } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideFocusGrimpProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

const BENEFITS = [
  {
    id: 'centraliser',
    num: '01',
    title: 'Centraliser',
    desc: 'LinkedIn, Indeed, HelloWork, La Bonne Alternance et les offres exclusives Alésia réunis sur un seul tableau.',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
  },
  {
    id: 'alerter',
    num: '02',
    title: 'Être alerté',
    desc: 'Notifications instantanées dès qu’une offre correspond à ta filière et à ton campus, sans aucun doublon.',
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
  },
  {
    id: 'contacter',
    num: '03',
    title: 'Contacter directement',
    desc: 'Accès direct aux coordonnées des tuteurs et recruteurs partenaires avec suivi de tes candidatures.',
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
  },
];

const MOCK_OFFERS = [
  {
    filiere: 'Comptabilité',
    company: 'Cabinet Fiduciaire Hauts-de-France',
    role: 'Alternant(e) Comptable — BTS CG / DCG',
    city: 'Lille · Marcq-en-Barœul',
    source: 'Partenaire Alésia',
    tagColor: '#12AEDB',
  },
  {
    filiere: 'Commerce',
    company: 'Groupe Distribution Nord',
    role: 'Chargé(e) de Développement Commercial — BTS NDRC / RDA',
    city: 'Amiens · Somme',
    source: 'HelloWork + GRIMP',
    tagColor: '#F39200',
  },
  {
    filiere: 'RH',
    company: 'Industrie & Services Artois',
    role: 'Assistant(e) Ressources Humaines — BTS GPME / Bachelor RH',
    city: 'Lens · Artois',
    source: 'LinkedIn + Alésia',
    tagColor: '#2BB3A3',
  },
];

export const SlideFocusGrimp: React.FC<SlideFocusGrimpProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [activeBenefit, setActiveBenefit] = useState<number>(0);
  const [contactedIdx, setContactedIdx] = useState<number | null>(null);
  const [filterFiliere, setFilterFiliere] = useState<'Toutes' | 'Comptabilité' | 'Commerce' | 'RH'>('Toutes');

  const visibleOffers = MOCK_OFFERS.filter(
    (o) => filterFiliere === 'Toutes' || o.filiere === filterFiliere
  );

  return (
    <SlideShell
      chapter="Outils & Ateliers"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 grid grid-cols-12 gap-10 items-center">
        {/* Left Column: Title + 3 Animated Benefit Buttons */}
        <div className="col-span-5 flex flex-col justify-between h-full py-2">
          <div className="space-y-4 cascade-item cascade-delay-1">
            <span className="ds-pill ds-pill-cyan">
              PLATEFORME EXCLUSIVE · +2 H GAGNÉES / SEMAINE
            </span>

            <h1 className="font-spartan text-[110px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9] block">FOCUS OUTIL :</span>
              <span className="text-[#B35A00] block">GRIMP</span>
            </h1>

            <p className="ds-lead !text-[26px]">
              Toutes les offres d’alternance du marché et de nos <strong>1 500 partenaires</strong> réunies dans un seul espace.
            </p>
          </div>

          {/* 3 Benefits (interactive buttons with aria-pressed for Auto-Play) */}
          <div className="space-y-4 cascade-item cascade-delay-2">
            {BENEFITS.map((b, idx) => {
              const isSelected = activeBenefit === idx;
              return (
                <button
                  key={b.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveBenefit(idx)}
                  className="w-full p-5 rounded-[24px] border-2 text-left transition-all cursor-pointer flex items-start gap-4"
                  style={{
                    backgroundColor: isSelected ? b.softColor : '#FFFFFF',
                    borderColor: isSelected ? b.color : '#DCE6EB',
                  }}
                >
                  <span
                    className="w-12 h-12 rounded-[16px] font-spartan text-[28px] flex items-center justify-center shrink-0 text-[#0E1A22] pt-0.5"
                    style={{ backgroundColor: b.color }}
                  >
                    {b.num}
                  </span>
                  <div className="space-y-1">
                    <div className="font-spartan-700 text-[30px] text-[#10222E]">
                      {b.title}
                    </div>
                    <p className="font-outfit text-[21px] leading-[1.35] text-[#2E3F4A]">
                      {b.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Stylized GRIMP Screen Mockup + Interactive Filière Filter */}
        <div className="col-span-7 cascade-item cascade-delay-3">
          <div
            className="bg-white border-2 border-[#DCE6EB] border-t-[12px] rounded-[28px] p-7 shadow-lg space-y-4"
            style={{ borderTopColor: BENEFITS[activeBenefit].color }}
          >
            {/* Top Mock Browser Bar */}
            <div className="flex items-center justify-between border-b border-[#DCE6EB] pb-3.5">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-[#F39200]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#2BB3A3]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#12AEDB]" />
                <span className="ml-2 font-spartan text-[28px] text-[#10222E]">
                  PORTAIL GRIMP × ALÉSIA FORMATION
                </span>
              </div>

              <div
                className={`px-4 py-1.5 rounded-full font-outfit font-semibold text-[17px] flex items-center gap-2 transition-all ${
                  activeBenefit === 1
                    ? 'bg-[#2BB3A3] text-[#0E1A22] scale-105'
                    : 'bg-[#D5F1EE] text-[#0E1A22]'
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span>Alertes temps réel actives · Zéro doublon</span>
              </div>
            </div>

            {/* Visual Aggregation Funnel Infographic + Interactive Filter */}
            <div
              className={`p-4 rounded-[20px] border-2 transition-all flex items-center justify-between gap-3 ${
                activeBenefit === 0
                  ? 'bg-[#D3F0FA] border-[#12AEDB]'
                  : 'bg-[#F3F7F9] border-[#DCE6EB]'
              }`}
            >
              <div className="flex items-center gap-2">
                {(['Toutes', 'Comptabilité', 'Commerce', 'RH'] as const).map((f) => {
                  const active = filterFiliere === f;
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFilterFiliere(f)}
                      className={`px-4 py-1.5 rounded-full font-outfit font-semibold text-[17px] cursor-pointer border transition-all ${
                        active
                          ? 'bg-[#10222E] border-[#10222E] text-[#FFB54D]'
                          : 'bg-white border-[#B9C8D0] text-[#10222E] hover:border-[#F39200]'
                      }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>
              <span className="font-spartan text-[26px] text-[#0A8DB9] shrink-0">
                5 SOURCES CENTRALISÉES
              </span>
            </div>

            {/* Table of Job Offers */}
            <div className="space-y-3">
              {visibleOffers.map((offer, i) => {
                const isContacted = contactedIdx === i;
                return (
                  <div
                    key={offer.company}
                    className={`p-4.5 rounded-[22px] border-2 transition-all flex items-center justify-between gap-4 ${
                      activeBenefit === 2 && i === 0
                        ? 'bg-[#FDE5C2]/50 border-[#F39200]'
                        : 'bg-[#F3F7F9] border-[#DCE6EB]'
                    }`}
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="px-3 py-0.5 rounded-full font-outfit font-semibold text-[15px] uppercase text-[#0E1A22]"
                          style={{ backgroundColor: offer.tagColor }}
                        >
                          {offer.source}
                        </span>
                        <span className="font-outfit font-semibold text-[17px] text-[#4E606B]">
                          {offer.city}
                        </span>
                      </div>
                      <div className="font-spartan-700 text-[27px] text-[#10222E] truncate">
                        {offer.role}
                      </div>
                      <div className="font-outfit font-medium text-[19px] text-[#4E606B]">
                        {offer.company}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setContactedIdx(i)}
                      className={`h-[52px] px-5 rounded-full font-outfit font-semibold text-[18px] shrink-0 flex items-center gap-2 cursor-pointer transition-all ${
                        isContacted
                          ? 'bg-[#2BB3A3] text-[#0E1A22]'
                          : 'bg-[#12AEDB] hover:bg-[#F39200] text-[#0E1A22]'
                      }`}
                    >
                      <span>
                        {isContacted ? 'Candidature envoyée' : 'Contacter le recruteur'}
                      </span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.3">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
