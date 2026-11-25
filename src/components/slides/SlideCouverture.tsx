import React from 'react';
import { CampusId, SlideRegistryItem } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideCouvertureProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
  activeSlides: SlideRegistryItem[];
  onGoToSlideId: (slideId: string) => void;
  onChangeCampus?: (campus: CampusId) => void;
}

export const SlideCouverture: React.FC<SlideCouvertureProps> = ({
  campus,
  slideNumber,
  totalSlides,
  onChangeCampus,
}) => {
  const campuses: {
    id: 'lille' | 'lens' | 'amiens';
    label: string;
    sub: string;
    color: string;
    soft: string;
    ink: string;
    rate: string;
    programs: string;
  }[] = [
    {
      id: 'lille',
      label: 'LILLE',
      sub: 'Marcq-en-Barœul',
      color: '#12AEDB',
      soft: '#D3F0FA',
      ink: '#0A8DB9',
      rate: 'Bac+2 à Bac+5',
      programs: '12 formations',
    },
    {
      id: 'lens',
      label: 'LENS',
      sub: 'Bassin de l’Artois',
      color: '#2BB3A3',
      soft: '#D5F1EE',
      ink: '#13806F',
      rate: '100 % Réussite BTS',
      programs: '5 BTS en alternance',
    },
    {
      id: 'amiens',
      label: 'AMIENS',
      sub: 'Capitale Picarde',
      color: '#F39200',
      soft: '#FDE5C2',
      ink: '#B35A00',
      rate: '100 % sur 4 cursus',
      programs: 'Du BTS au Bachelor',
    },
  ];

  const renderMonumentIcon = (id: 'lille' | 'lens' | 'amiens', strokeColor: string) => {
    if (id === 'lille') {
      return (
        <svg width="54" height="54" viewBox="0 0 64 64" fill="none" stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 6V14" />
          <path d="M27 14H37L39 24H25L27 14Z" />
          <rect x="24" y="24" width="16" height="22" />
          <circle cx="32" cy="33" r="3.5" />
          <rect x="18" y="46" width="28" height="12" />
          <line x1="24" y1="58" x2="24" y2="51" />
          <line x1="32" y1="58" x2="32" y2="51" />
          <line x1="40" y1="58" x2="40" y2="51" />
          <line x1="12" y1="58" x2="52" y2="58" />
        </svg>
      );
    }
    if (id === 'lens') {
      return (
        <svg width="54" height="54" viewBox="0 0 64 64" fill="none" stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="18" r="7" />
          <circle cx="40" cy="18" r="7" />
          <path d="M16 54L24 18L32 54" />
          <path d="M32 54L40 18L48 54" />
          <line x1="19" y1="38" x2="45" y2="38" />
          <rect x="12" y="46" width="40" height="8" />
          <line x1="8" y1="54" x2="56" y2="54" />
        </svg>
      );
    }
    return (
      <svg width="54" height="54" viewBox="0 0 64 64" fill="none" stroke={strokeColor} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 56V16L22 10L26 16V56" />
        <path d="M38 56V16L42 10L48 16V56" />
        <path d="M26 26H38" />
        <circle cx="32" cy="36" r="5" />
        <path d="M28 56V46C28 43.8 29.8 42 32 42C34.2 42 36 43.8 36 46V56" />
        <line x1="12" y1="56" x2="52" y2="56" />
      </svg>
    );
  };

  return (
    <SlideShell
      chapter="Introduction"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 flex flex-col justify-between py-2">
        {/* Top Pills Row */}
        <div className="flex items-center justify-between gap-6 cascade-item cascade-delay-1">
          <div className="flex items-center gap-4">
            <span className="ds-pill ds-pill-teal">
              DEPUIS 1996 · +30 ANS D’EXPÉRIENCE
            </span>
            <span className="ds-pill ds-pill-orange">
              BAC +2 AU BAC +5 · 100 % EN ALTERNANCE
            </span>
          </div>

          {/* Google Reviews Badge from Triptyque */}
          <div className="px-6 py-2.5 rounded-full bg-white border-2 border-[#DCE6EB] flex items-center gap-3 shadow-2xs">
            <span className="font-spartan text-[28px] text-[#10222E] leading-none pt-1">
              GOOGLE 4,6/5
            </span>
            <div className="flex items-center gap-1 text-[#F39200]">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill="#F39200" stroke="#F39200" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="font-outfit font-semibold text-[18px] text-[#4E606B]">
              (186 avis vérifiés)
            </span>
          </div>
        </div>

        {/* Center Hero Split: Left Monumental Typography + Right Graphic Infographic Wheel */}
        <div className="grid grid-cols-12 gap-8 items-center my-auto cascade-item cascade-delay-2">
          <div className="col-span-8 space-y-5">
            <h1
              className="font-spartan text-[#0A8DB9] uppercase tracking-[-0.035em] leading-[0.82]"
              style={{ fontSize: '205px' }}
            >
              BIENVENUE
            </h1>

            <h2 className="font-spartan text-[68px] leading-[0.9] text-[#10222E]">
              ALÉSIA FORMATION —{' '}
              <span className="text-[#B35A00]">VOTRE AVENIR COMMENCE MAINTENANT</span>
            </h2>

            <p className="ds-lead !text-[30px] max-w-[1120px]">
              Devenez un professionnel du <strong>commerce</strong>, de la <strong>gestion & RH</strong> ou de la <strong>comptabilité</strong>. Tu ne seras <strong>jamais seul(e)</strong> : on t’accompagne jusqu’à la signature de ton contrat.
            </p>
          </div>

          {/* Right: Editorial Graphic Infographic Composition */}
          <div className="col-span-4 flex items-center justify-center">
            <div className="relative w-[430px] h-[430px] flex items-center justify-center">
              <svg viewBox="0 0 440 440" className="w-full h-full">
                {/* Outer Dashed Ring */}
                <circle
                  cx="220"
                  cy="220"
                  r="195"
                  fill="#FFFFFF"
                  stroke="#DCE6EB"
                  strokeWidth="3"
                />
                <circle
                  cx="220"
                  cy="220"
                  r="175"
                  fill="none"
                  stroke="#12AEDB"
                  strokeWidth="12"
                  strokeDasharray="340 210"
                  strokeLinecap="round"
                />
                <circle
                  cx="220"
                  cy="220"
                  r="142"
                  fill="none"
                  stroke="#2BB3A3"
                  strokeWidth="12"
                  strokeDasharray="260 180"
                  strokeDashoffset="90"
                  strokeLinecap="round"
                />
                <circle
                  cx="220"
                  cy="220"
                  r="110"
                  fill="#10222E"
                />
                {/* Center Text */}
                <text
                  x="220"
                  y="206"
                  textAnchor="middle"
                  fill="#FFB54D"
                  fontFamily="League Spartan, sans-serif"
                  fontWeight="800"
                  fontSize="58"
                >
                  93 %
                </text>
                <text
                  x="220"
                  y="236"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontFamily="Outfit, sans-serif"
                  fontWeight="600"
                  fontSize="16"
                  letterSpacing="2"
                >
                  RÉUSSITE BTS
                </text>
                <text
                  x="220"
                  y="260"
                  textAnchor="middle"
                  fill="#12AEDB"
                  fontFamily="Outfit, sans-serif"
                  fontWeight="700"
                  fontSize="15"
                >
                  0 € DE FRAIS
                </text>
              </svg>

              {/* Floating Graphic Stat Pills */}
              <div className="absolute top-3 left-2 px-4 py-2 rounded-full bg-[#12AEDB] text-[#0E1A22] font-spartan text-[24px] shadow-md">
                +30 ANS
              </div>
              <div className="absolute bottom-4 right-2 px-4 py-2 rounded-full bg-[#F39200] text-[#0E1A22] font-spartan text-[24px] shadow-md">
                1 500 PARTENAIRES
              </div>
              <div className="absolute top-6 right-0 px-4 py-2 rounded-full bg-[#2BB3A3] text-[#0E1A22] font-spartan text-[24px] shadow-md">
                504 € À 1 867 € / MOIS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: 3 Interactive Campus Monument Cards (Lille · Lens · Amiens) */}
        <div className="grid grid-cols-3 gap-8 cascade-item cascade-delay-3">
          {campuses.map((c) => {
            const isHighlighted = campus === 'tous' || campus === c.id;
            const isSingleSelected = campus === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={isSingleSelected}
                onClick={() =>
                  onChangeCampus && onChangeCampus(campus === c.id ? 'tous' : c.id)
                }
                className={`h-[136px] px-7 rounded-[26px] border-2 flex items-center justify-between transition-all cursor-pointer text-left ${
                  isSingleSelected
                    ? 'shadow-xl -translate-y-1.5'
                    : isHighlighted
                    ? 'bg-white hover:-translate-y-1 hover:shadow-md'
                    : 'opacity-50 bg-white/70 border-[#DCE6EB]'
                }`}
                style={{
                  backgroundColor: isSingleSelected ? c.color : '#FFFFFF',
                  borderColor: isHighlighted ? c.color : '#DCE6EB',
                }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-[84px] h-[84px] rounded-[22px] flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: isSingleSelected ? '#FFFFFF' : c.soft,
                    }}
                  >
                    {renderMonumentIcon(c.id, '#0E1A22')}
                  </div>

                  <div>
                    <div
                      className="font-outfit font-semibold text-[15px] uppercase tracking-[0.18em]"
                      style={{ color: isSingleSelected ? '#0E1A22' : c.ink }}
                    >
                      {c.programs}
                    </div>
                    <div className="font-spartan text-[46px] leading-none text-[#0E1A22] mt-1">
                      {c.label}
                    </div>
                    <div className="font-outfit font-medium text-[19px] text-[#2E3F4A]">
                      {c.sub}
                    </div>
                  </div>
                </div>

                <span
                  className="px-4 py-1.5 rounded-full font-outfit font-semibold text-[16px] uppercase tracking-wider shrink-0"
                  style={{
                    backgroundColor: isSingleSelected ? '#0E1A22' : c.soft,
                    color: isSingleSelected ? c.color : '#0E1A22',
                  }}
                >
                  {c.rate}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
};
