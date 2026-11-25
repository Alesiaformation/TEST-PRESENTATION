import React, { useState, useEffect } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideEquipeProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

interface TeamMember {
  name: string;
  role: string;
  pole: string;
  initials: string;
  color: string;
  inkColor: string;
  softColor: string;
  isPlaceholder?: boolean;
}

const TEAM_BY_CAMPUS: Record<'amiens' | 'lille' | 'lens', TeamMember[]> = {
  amiens: [
    {
      name: 'M. Cordier',
      role: 'Directeur',
      pole: 'DIRECTION DU CAMPUS',
      initials: 'MC',
      color: '#12AEDB',
      inkColor: '#0A8DB9',
      softColor: '#D3F0FA',
    },
    {
      name: 'Aurélie Charpentier',
      role: 'Responsable du centre et des sections comptabilité et administratif',
      pole: 'COMPTABILITÉ & GESTION',
      initials: 'AC',
      color: '#2BB3A3',
      inkColor: '#13806F',
      softColor: '#D5F1EE',
    },
    {
      name: 'Cynthia Boully',
      role: 'Partenariats',
      pole: 'RELATIONS ENTREPRISES',
      initials: 'CB',
      color: '#F39200',
      inkColor: '#B35A00',
      softColor: '#FDE5C2',
    },
    {
      name: 'Julia Legris',
      role: 'Responsable des sections BTS MCO, BTS NDRC et Bachelor RDA',
      pole: 'COMMERCE & MARKETING',
      initials: 'JL',
      color: '#12AEDB',
      inkColor: '#0A8DB9',
      softColor: '#D3F0FA',
    },
  ],
  lille: [
    {
      name: '[À COMPLÉTER – nom, rôle, photo]',
      role: 'Direction du campus de Lille (Marcq-en-Barœul)',
      pole: 'DIRECTION DU CAMPUS',
      initials: 'L1',
      color: '#12AEDB',
      inkColor: '#0A8DB9',
      softColor: '#D3F0FA',
      isPlaceholder: true,
    },
    {
      name: '[À COMPLÉTER – nom, rôle, photo]',
      role: 'Responsable des sections Comptabilité & Gestion (BTS CG, DCG, DSCG)',
      pole: 'PÔLE COMPTABILITÉ',
      initials: 'L2',
      color: '#2BB3A3',
      inkColor: '#13806F',
      softColor: '#D5F1EE',
      isPlaceholder: true,
    },
    {
      name: '[À COMPLÉTER – nom, rôle, photo]',
      role: 'Responsable des sections Commerce, Marketing & RH',
      pole: 'PÔLE COMMERCE & RH',
      initials: 'L3',
      color: '#F39200',
      inkColor: '#B35A00',
      softColor: '#FDE5C2',
      isPlaceholder: true,
    },
    {
      name: '[À COMPLÉTER – nom, rôle, photo]',
      role: 'Chargé(e) des partenariats entreprises & placement',
      pole: 'RELATIONS ENTREPRISES',
      initials: 'L4',
      color: '#12AEDB',
      inkColor: '#0A8DB9',
      softColor: '#D3F0FA',
      isPlaceholder: true,
    },
  ],
  lens: [
    {
      name: '[À COMPLÉTER – nom, rôle, photo]',
      role: 'Direction du campus de Lens',
      pole: 'DIRECTION DU CAMPUS',
      initials: 'LE',
      color: '#12AEDB',
      inkColor: '#0A8DB9',
      softColor: '#D3F0FA',
      isPlaceholder: true,
    },
    {
      name: '[À COMPLÉTER – nom, rôle, photo]',
      role: 'Responsable pédagogique & suivi des sections BTS',
      pole: 'SUIVI PÉDAGOGIQUE',
      initials: 'RS',
      color: '#2BB3A3',
      inkColor: '#13806F',
      softColor: '#D5F1EE',
      isPlaceholder: true,
    },
    {
      name: '[À COMPLÉTER – nom, rôle, photo]',
      role: 'Chargé(e) des partenariats entreprises & alternance',
      pole: 'RELATIONS ENTREPRISES',
      initials: 'PE',
      color: '#F39200',
      inkColor: '#B35A00',
      softColor: '#FDE5C2',
      isPlaceholder: true,
    },
    {
      name: '[À COMPLÉTER – nom, rôle, photo]',
      role: 'Coordinateur(trice) vie étudiante & admission',
      pole: 'ACCOMPAGNEMENT',
      initials: 'CA',
      color: '#12AEDB',
      inkColor: '#0A8DB9',
      softColor: '#D3F0FA',
      isPlaceholder: true,
    },
  ],
};

export const SlideEquipe: React.FC<SlideEquipeProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [selectedCampus, setSelectedCampus] = useState<'amiens' | 'lille' | 'lens'>(
    campus === 'tous' ? 'amiens' : campus
  );

  useEffect(() => {
    if (campus !== 'tous') {
      setSelectedCampus(campus);
    }
  }, [campus]);

  const members = TEAM_BY_CAMPUS[selectedCampus];

  return (
    <SlideShell
      chapter="L’équipe"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 flex flex-col justify-between py-2">
        {/* Top Row: Title + Campus Selector Tabs */}
        <div className="flex items-end justify-between gap-10 cascade-item cascade-delay-1">
          <div className="space-y-3">
            <span className="ds-pill ds-pill-cyan">
              VOS INTERLOCUTEURS DÉDIÉS SUR LE CAMPUS
            </span>
            <h1 className="font-spartan text-[116px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9]">NOTRE </span>
              <span className="text-[#B35A00]">ÉQUIPE</span>
            </h1>
            <p className="ds-lead !text-[26px]">
              Une équipe à taille humaine qui te connaît par ton prénom et suit ton évolution.
            </p>
          </div>

          {/* 3 Campus Filter Buttons (aria-pressed for Auto-Play) */}
          <div className="flex items-center gap-3 shrink-0">
            {[
              { id: 'amiens' as const, num: '01', label: 'Campus Amiens', color: '#2BB3A3' },
              { id: 'lille' as const, num: '02', label: 'Campus Lille', color: '#12AEDB' },
              { id: 'lens' as const, num: '03', label: 'Campus Lens', color: '#F39200' },
            ].map((tab) => {
              const isSelected = selectedCampus === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCampus(tab.id)}
                  className="ds-tab-btn !h-[70px] !px-6"
                  style={
                    isSelected
                      ? { backgroundColor: tab.color, borderColor: tab.color, color: '#0E1A22' }
                      : undefined
                  }
                >
                  <span className="ds-tab-num">{tab.num}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-4 gap-7 my-auto pt-4 cascade-item cascade-delay-2">
          {members.map((member, idx) => (
            <div
              key={`${selectedCampus}-${idx}`}
              className="ds-card border-t-[12px] flex flex-col justify-between min-h-[470px] !p-8"
              style={{ borderTopColor: member.color }}
            >
              <div className="space-y-6">
                {/* Stylized SVG Portrait Frame (No AI photos per charte graphique) */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-[104px] h-[104px] rounded-[26px] flex items-center justify-center relative overflow-hidden border-2"
                    style={{
                      backgroundColor: member.softColor,
                      borderColor: member.color,
                    }}
                  >
                    <svg width="62" height="62" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="1.9">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>

                  <span
                    className="px-3.5 py-1.5 rounded-full font-spartan text-[24px] text-[#0E1A22]"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </span>
                </div>

                <div className="space-y-2">
                  <span
                    className="ds-kicker !text-[15px] block"
                    style={{ color: member.inkColor }}
                  >
                    {member.pole}
                  </span>
                  <h2 className="font-spartan-700 text-[34px] text-[#0A8DB9] leading-[0.95]">
                    {member.name}
                  </h2>
                </div>

                <p className="font-outfit text-[23px] leading-[1.4] text-[#2E3F4A]">
                  {member.role}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCE6EB] flex items-center justify-between">
                <span className="font-outfit font-semibold text-[16px] uppercase tracking-wider text-[#4E606B]">
                  {selectedCampus.toUpperCase()}
                </span>
                <span className="font-outfit font-semibold text-[16px] text-[#10222E]">
                  {member.isPlaceholder ? 'Fiche à compléter' : 'Équipe Alésia'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
};
