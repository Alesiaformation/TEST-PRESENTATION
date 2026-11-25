import React, { useState } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideContratEnBrefProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

const TILES = [
  {
    num: '01',
    title: '0 € de frais, financés par l’OPCO de l’entreprise',
    desc: 'Ta scolarité est intégralement prise en charge par l’opérateur de compétences de ton entreprise d’accueil.',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
  },
  {
    num: '02',
    title: 'Un vrai salaire et le statut de salarié(e)',
    desc: 'Un salaire mensuel de 504 € à 1 867 € / mois exonéré de charges salariales et d’impôt sur le revenu.',
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
  },
  {
    num: '03',
    title: '5 semaines de congés payés',
    desc: 'Tu bénéficies des mêmes congés payés que tous les salariés, plus 5 jours supplémentaires de révision d’examen.',
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
  },
  {
    num: '04',
    title: 'La carte étudiant des métiers',
    desc: 'Réductions étudiantes nationales, aide de 500 € pour le Permis B et aide Mobili-Jeune au logement.',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
  },
];

const SALARY_ROWS = [
  { age: 'Moins de 18 ans', y1: 27, y2: 39, y1Eur: '504 €', y2Eur: '728 €', color: '#12AEDB', soft: '#D3F0FA' },
  { age: '18 à 20 ans', y1: 43, y2: 51, y1Eur: '803 €', y2Eur: '952 €', color: '#2BB3A3', soft: '#D5F1EE' },
  { age: '21 à 25 ans', y1: 53, y2: 61, y1Eur: '990 €', y2Eur: '1 139 €', color: '#F39200', soft: '#FDE5C2' },
  { age: '26 ans et plus', y1: 100, y2: 100, y1Eur: '1 867 €', y2Eur: '1 867 €', color: '#2BB3A3', soft: '#D5F1EE' },
];

export const SlideContratEnBref: React.FC<SlideContratEnBrefProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [activeTile, setActiveTile] = useState<number>(0);
  const [selectedRowIdx, setSelectedRowIdx] = useState<number>(1);
  const [selectedYear, setSelectedYear] = useState<1 | 2>(1);

  const activeRow = SALARY_ROWS[selectedRowIdx];
  const currentPercent = selectedYear === 1 ? activeRow.y1 : activeRow.y2;
  const currentEur = selectedYear === 1 ? activeRow.y1Eur : activeRow.y2Eur;

  return (
    <SlideShell
      chapter="Admission & Contrat"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 grid grid-cols-12 gap-10 items-center">
        {/* Left Column: Title + 4 Interactive Tiles */}
        <div className="col-span-6 flex flex-col justify-between h-full py-1">
          <div className="space-y-2 cascade-item cascade-delay-1">
            <span className="ds-pill ds-pill-teal">STATUT SALARIÉ · 100 % FINANCÉ</span>
            <h1 className="font-spartan text-[92px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9] block">LE CONTRAT D’APPRENTISSAGE</span>
              <span className="text-[#B35A00] block">EN BREF</span>
            </h1>
          </div>

          {/* 4 Tiles (2x2 Grid, aria-pressed for Auto-Play) */}
          <div className="grid grid-cols-2 gap-4 my-auto pt-2 cascade-item cascade-delay-2">
            {TILES.map((t, idx) => {
              const isSelected = activeTile === idx;
              return (
                <button
                  key={t.num}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveTile(idx)}
                  className={`p-5 rounded-[24px] border-2 border-t-[10px] text-left cursor-pointer transition-all flex flex-col justify-between min-h-[245px] ${
                    isSelected
                      ? 'bg-white shadow-lg -translate-y-1'
                      : 'bg-white border-[#DCE6EB] hover:border-[#F39200]'
                  }`}
                  style={{
                    borderTopColor: t.color,
                    borderColor: isSelected ? t.color : undefined,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-12 h-12 rounded-[14px] font-spartan text-[26px] flex items-center justify-center text-[#0E1A22] pt-0.5"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.num}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full font-outfit font-semibold text-[15px] uppercase text-[#0E1A22]"
                      style={{ backgroundColor: t.softColor }}
                    >
                      Avantage {t.num}
                    </span>
                  </div>

                  <h2 className="font-spartan-700 text-[28px] text-[#0A8DB9] leading-[0.96] my-2">
                    {t.title}
                  </h2>

                  <p className="font-outfit text-[19px] leading-[1.35] text-[#2E3F4A]">
                    {t.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Salary Infographic & Table (% du SMIC + Euros from Triptyque) */}
        <div className="col-span-6 cascade-item cascade-delay-3">
          <div className="ds-detail-panel border-t-[#F39200] flex flex-col justify-between min-h-[690px] !p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="ds-kicker text-[#B35A00]">
                  SIMULATEUR INTERACTIF (CLIQUER SUR UNE TRANCHE D’ÂGE)
                </span>
                <h2 className="font-spartan text-[46px] leading-[0.9] text-[#10222E] mt-1">
                  SALAIRE MINIMUM (% DU SMIC)
                </h2>
              </div>

              {/* Year switcher */}
              <div className="flex items-center gap-2 shrink-0">
                {[1, 2].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setSelectedYear(yr as 1 | 2)}
                    className={`px-4 py-2 rounded-full font-outfit font-bold text-[17px] cursor-pointer border-2 transition-all ${
                      selectedYear === yr
                        ? 'bg-[#F39200] border-[#F39200] text-[#0E1A22]'
                        : 'bg-white border-[#B9C8D0] text-[#10222E]'
                    }`}
                  >
                    {yr}re année
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Visual Gauge Banner */}
            <div className="p-5 rounded-[22px] bg-[#10222E] text-white space-y-3 my-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-outfit font-semibold text-[16px] uppercase tracking-wider text-[#12AEDB]">
                    {activeRow.age} · {selectedYear}re année de contrat
                  </span>
                  <div className="font-spartan text-[54px] leading-none text-[#FFB54D] pt-1">
                    {currentPercent} % DU SMIC{' '}
                    <span className="text-white text-[36px]">({currentEur} / MOIS)</span>
                  </div>
                </div>
                <span className="px-4 py-2 rounded-full bg-[#2BB3A3] text-[#0E1A22] font-outfit font-bold text-[16px] uppercase">
                  Net ≈ Brut
                </span>
              </div>
              <div className="w-full h-4 rounded-full bg-white/15 overflow-hidden">
                <div
                  className="h-full bg-[#FFB54D] rounded-full transition-all duration-300"
                  style={{ width: `${currentPercent}%` }}
                />
              </div>
            </div>

            {/* Clickable Salary Table */}
            <div className="rounded-[22px] border-2 border-[#DCE6EB] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F3F7F9] text-[#10222E] font-spartan text-[24px] border-b-2 border-[#DCE6EB]">
                    <th className="py-3.5 px-6">ÂGE</th>
                    <th className="py-3.5 px-6 text-center">1RE ANNÉE</th>
                    <th className="py-3.5 px-6 text-center">2E ANNÉE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DCE6EB]">
                  {SALARY_ROWS.map((row, idx) => {
                    const isRowSelected = selectedRowIdx === idx;
                    return (
                      <tr
                        key={row.age}
                        onClick={() => setSelectedRowIdx(idx)}
                        className={`cursor-pointer transition-colors ${
                          isRowSelected ? 'bg-[#FDE5C2]/60' : 'bg-white hover:bg-[#F3F7F9]'
                        }`}
                      >
                        <td className="py-4 px-6 font-outfit font-bold text-[22px] text-[#10222E]">
                          {row.age}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span
                            className="px-4 py-1 rounded-full font-spartan text-[28px] text-[#0E1A22] tabular-nums inline-block"
                            style={{ backgroundColor: row.soft }}
                          >
                            {row.y1} %
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span
                            className="px-4 py-1 rounded-full font-spartan text-[28px] text-[#0E1A22] tabular-nums inline-block"
                            style={{ backgroundColor: row.soft }}
                          >
                            {row.y2} %
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-3.5 rounded-[18px] bg-[#D5F1EE] text-[#0E1A22] font-outfit font-semibold text-[19px] text-center">
              Un salaire de <strong>504 € à 1 867 € / mois</strong> tout au long de votre formation.
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
