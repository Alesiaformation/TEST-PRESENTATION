import React, { useState, useEffect } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideCampusProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

interface CampusDetail {
  id: 'lille' | 'lens' | 'amiens';
  num: string;
  name: string;
  cityTag: string;
  tagline: string;
  stat: string;
  statLabel: string;
  color: string;
  inkColor: string;
  softColor: string;
  coords: { x: number; y: number };
  points: string[];
}

const CAMPUS_LIST: CampusDetail[] = [
  {
    id: 'lille',
    num: '01',
    name: 'Lille (Marcq-en-Barœul)',
    cityTag: 'MÉTROPOLE EUROPÉENNE DE LILLE',
    tagline: 'Au cœur du premier bassin tertiaire des Hauts-de-France : du BTS au Mastère Bac+5.',
    stat: 'BAC+2 À +5',
    statLabel: 'TOUTES LES FILIÈRES',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
    coords: { x: 320, y: 120 },
    points: [
      'Accès rapide en tramway et transports depuis les gares de Lille.',
      'Offre complète en Comptabilité (BTS CG, DCG, DSCG), Commerce et RH.',
      'Réseau dense de sièges sociaux, cabinets d’expertise et PME dynamiques.',
    ],
  },
  {
    id: 'lens',
    num: '02',
    name: 'Lens',
    cityTag: 'BASSIN DE L’ARTOIS',
    tagline: 'Un campus de proximité à taille humaine avec 100 % de réussite aux examens BTS.',
    stat: '100 %',
    statLabel: 'RÉUSSITE BTS 2026',
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
    coords: { x: 270, y: 215 },
    points: [
      'Accompagnement ultra-personnalisé au plus près des entreprises de l’Artois.',
      'Formations phares : BTS CG, BTS MCO, BTS NDRC, BTS GPME et BTS SAM.',
      'Suivi individuel renforcé et lien direct avec les recruteurs locaux.',
    ],
  },
  {
    id: 'amiens',
    num: '03',
    name: 'Amiens',
    cityTag: 'CAPITALE PICARDE · SOMME',
    tagline: 'Une équipe dédiée et reconnue pour son excellence pédagogique et ses partenariats.',
    stat: '100 %',
    statLabel: 'SUR 4 FILIÈRES CLÉS',
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
    coords: { x: 215, y: 370 },
    points: [
      'Parcours du BTS au Bachelor (BTS CG, BTS MCO, BTS NDRC, BTS GPME, Bachelor RDA).',
      'Équipe pédagogique stable et engagée auprès de chaque apprenti.',
      'Job datings réguliers avec les entreprises partenaires de la Somme.',
    ],
  },
];

export const SlideCampus: React.FC<SlideCampusProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [selectedId, setSelectedId] = useState<'lille' | 'lens' | 'amiens'>(
    campus === 'tous' ? 'lille' : campus
  );

  useEffect(() => {
    if (campus !== 'tous') {
      setSelectedId(campus);
    }
  }, [campus]);

  const current = CAMPUS_LIST.find((c) => c.id === selectedId) || CAMPUS_LIST[0];

  return (
    <SlideShell
      chapter="L’école"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 grid grid-cols-12 gap-12 items-center">
        {/* Left Column: Clean Title + 3 Campus Tabs + Stylized Map */}
        <div className="col-span-6 flex flex-col justify-between h-full py-2">
          <div className="space-y-3 cascade-item cascade-delay-1">
            <span className="ds-pill ds-pill-cyan">HAUTS-DE-FRANCE · PROXIMITÉ</span>
            <h1 className="font-spartan text-[116px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9]">3 CAMPUS, </span>
              <span className="text-[#B35A00]">1 VISION</span>
            </h1>
          </div>

          {/* 3 Clean Tab Buttons */}
          <div className="grid grid-cols-3 gap-4 cascade-item cascade-delay-2">
            {CAMPUS_LIST.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(item.id)}
                  className="h-[88px] rounded-[24px] border-2 px-5 flex items-center gap-3.5 cursor-pointer transition-all text-left"
                  style={{
                    backgroundColor: isSelected ? item.color : '#FFFFFF',
                    borderColor: isSelected ? item.color : '#B9C8D0',
                    color: '#0E1A22',
                  }}
                >
                  <span
                    className="font-spartan text-[28px] px-3 py-1 rounded-full leading-none pt-1.5"
                    style={{
                      backgroundColor: isSelected ? '#0E1A22' : item.softColor,
                      color: isSelected ? item.color : '#0E1A22',
                    }}
                  >
                    {item.num}
                  </span>
                  <span className="font-spartan text-[30px] leading-none pt-1">
                    {item.id.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stylized Hauts-de-France Map */}
          <div className="bg-white border border-[#DCE6EB] rounded-[26px] p-6 flex items-center justify-center h-[390px] cascade-item cascade-delay-3">
            <svg width="520" height="360" viewBox="0 0 540 460" fill="none">
              <path
                d="M175 45 L295 25 L415 95 L465 205 L430 345 L345 435 L175 440 L95 350 L105 205 Z"
                fill="#F3F7F9"
                stroke="#B9C8D0"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <line x1="320" y1="120" x2="270" y2="215" stroke="#12AEDB" strokeWidth="3" strokeDasharray="8 8" />
              <line x1="270" y1="215" x2="215" y2="370" stroke="#2BB3A3" strokeWidth="3" strokeDasharray="8 8" />

              {CAMPUS_LIST.map((item) => {
                const isActive = item.id === selectedId;
                return (
                  <g
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className="cursor-pointer"
                  >
                    {isActive && (
                      <circle
                        cx={item.coords.x}
                        cy={item.coords.y}
                        r="38"
                        fill={item.softColor}
                        stroke={item.color}
                        strokeWidth="3"
                      />
                    )}
                    <circle
                      cx={item.coords.x}
                      cy={item.coords.y}
                      r={isActive ? '20' : '15'}
                      fill={isActive ? item.color : '#FFFFFF'}
                      stroke={isActive ? '#0E1A22' : item.color}
                      strokeWidth="4"
                    />
                    <text
                      x={item.coords.x + 30}
                      y={item.coords.y + 8}
                      fill="#10222E"
                      fontFamily="League Spartan, sans-serif"
                      fontWeight="800"
                      fontSize="26"
                    >
                      {item.name.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right Column: Concise Campus Panel */}
        <div className="col-span-6 cascade-item cascade-delay-3">
          <div
            className="ds-detail-panel flex flex-col justify-between min-h-[660px]"
            style={{ borderTopColor: current.color }}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-2">
                <span className="ds-kicker" style={{ color: current.inkColor }}>
                  {current.cityTag}
                </span>
                <h2 className="font-spartan text-[56px] leading-[0.9] text-[#10222E]">
                  {current.name.toUpperCase()}
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

            <div
              className="p-6 rounded-[22px] my-6 font-outfit font-semibold text-[27px] leading-[1.38] text-[#0E1A22]"
              style={{ backgroundColor: current.softColor }}
            >
              « {current.tagline} »
            </div>

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
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
