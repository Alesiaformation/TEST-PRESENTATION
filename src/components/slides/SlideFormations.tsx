import React, { useState } from 'react';
import { CampusId, FiliereId } from '../../types';
import { SlideShell } from '../SlideShell';
import { CAMPUS_LABELS } from '../../data/slidesData';

interface SlideFormationsProps {
  campus: CampusId;
  filieres: FiliereId[];
  slideNumber: number;
  totalSlides: number;
}

interface TriptyqueDiploma {
  id: string;
  shortName: string;
  fullName: string;
  level: 2 | 3 | 5;
  rncp: string;
  metiers: string;
  rates: {
    lille?: string;
    lens?: string;
    amiens?: string;
  };
}

interface TriptyqueFiliereBlock {
  id: FiliereId;
  title: string;
  tagline: string;
  color: string;
  inkColor: string;
  softColor: string;
  diplomas: TriptyqueDiploma[];
}

const TRIPTYQUE_FILIERES: TriptyqueFiliereBlock[] = [
  {
    id: 'comptabilite',
    title: 'COMPTABILITÉ ET GESTION',
    tagline:
      'Entrez dans l’univers des chiffres et prenez les rênes de la gestion des entreprises.',
    color: '#12AEDB',
    inkColor: '#0A8DB9',
    softColor: '#D3F0FA',
    diplomas: [
      {
        id: 'bts-cg',
        shortName: 'BTS CG',
        fullName: 'BTS Comptabilité et Gestion',
        level: 2,
        rncp: 'Diplôme d’État · Niveau 5',
        metiers: 'Collaborateur comptable, Gestionnaire paie, Assistant contrôleur de gestion',
        rates: { lille: '80 %', lens: '100 %', amiens: '100 %' },
      },
      {
        id: 'dcg',
        shortName: 'DCG en 2 ou 3 ans',
        fullName: 'Diplôme de Comptabilité et de Gestion',
        level: 3,
        rncp: 'Diplôme d’État Grade Licence · Niveau 6',
        metiers: 'Responsable comptable, Collaborateur cabinet d’expertise, Auditeur junior',
        rates: { lille: '77 %' },
      },
      {
        id: 'dscg',
        shortName: 'DSCG',
        fullName: 'Diplôme Supérieur de Comptabilité et de Gestion',
        level: 5,
        rncp: 'Diplôme d’État Grade Master · Niveau 7',
        metiers: 'Expert-comptable mémorialiste, Directeur administratif et financier (DAF)',
        rates: { lille: 'Campus Lille' },
      },
    ],
  },
  {
    id: 'rh',
    title: 'ADMINISTRATIF & RH',
    tagline:
      'Devenez l’allié stratégique des équipes et le moteur de leur réussite.',
    color: '#2BB3A3',
    inkColor: '#13806F',
    softColor: '#D5F1EE',
    diplomas: [
      {
        id: 'bts-gpme',
        shortName: 'BTS GPME',
        fullName: 'BTS Gestion de la PME',
        level: 2,
        rncp: 'Diplôme d’État · Niveau 5',
        metiers: 'Bras droit de dirigeant PME, Assistant de gestion polyvalent, Office Manager',
        rates: { lille: '100 %', lens: '100 %', amiens: '100 %' },
      },
      {
        id: 'bts-sam',
        shortName: 'BTS SAM',
        fullName: 'BTS Support à l’Action Managériale',
        level: 2,
        rncp: 'Diplôme d’État · Niveau 5',
        metiers: 'Assistant RH, Assistant de direction, Chargé de coordination administrative',
        rates: { lille: '100 %', lens: '100 %' },
      },
      {
        id: 'bachelor-rh',
        shortName: 'Chargé(e) des ressources humaines',
        fullName: 'Bachelor Chargé(e) des RH',
        level: 3,
        rncp: 'Titre RNCP · Niveau 6',
        metiers: 'Chargé de recrutement, Gestionnaire RH & paie, Chargé de formation',
        rates: { lille: '80 %' },
      },
      {
        id: 'mastere-rh',
        shortName: 'Manager en ressources humaines',
        fullName: 'Mastère Manager en RH',
        level: 5,
        rncp: 'Titre RNCP · Niveau 7',
        metiers: 'Responsable des Ressources Humaines (RRH), Talent Acquisition Manager, DRH adjoint',
        rates: { lille: '100 %' },
      },
    ],
  },
  {
    id: 'commerce',
    title: 'COMMERCE & MARKETING',
    tagline:
      'Transformez les idées en projets, et les clients en partenaires fidèles.',
    color: '#F39200',
    inkColor: '#B35A00',
    softColor: '#FDE5C2',
    diplomas: [
      {
        id: 'bts-mco',
        shortName: 'BTS MCO',
        fullName: 'BTS Management Commercial Opérationnel',
        level: 2,
        rncp: 'Diplôme d’État · Niveau 5',
        metiers: 'Manager d’unité commerciale, Responsable de boutique, Conseiller commercial',
        rates: { lille: '75 %', lens: '100 %', amiens: '80 %' },
      },
      {
        id: 'bts-ndrc',
        shortName: 'BTS NDRC',
        fullName: 'BTS Négociation et Digitalisation de la Relation Client',
        level: 2,
        rncp: 'Diplôme d’État · Niveau 5',
        metiers: 'Business Developer, Commercial BtoB, Chargé de clientèle et e-relation',
        rates: { lille: '80 %', lens: '100 %', amiens: '100 %' },
      },
      {
        id: 'bachelor-rda',
        shortName: 'Responsable du développement des activités',
        fullName: 'Bachelor RDA',
        level: 3,
        rncp: 'Titre RNCP · Niveau 6',
        metiers: 'Responsable développement commercial, Chef de projet marketing & ventes',
        rates: { lille: '100 %', amiens: '100 %' },
      },
      {
        id: 'mastere-mcm',
        shortName: 'Manager Commercial et Marketing',
        fullName: 'Mastère Manager commercial et marketing',
        level: 5,
        rncp: 'Titre RNCP · Niveau 7',
        metiers: 'Directeur commercial, Business Unit Manager, Responsable stratégie marketing',
        rates: { lille: '80 %' },
      },
    ],
  },
];

export const SlideFormations: React.FC<SlideFormationsProps> = ({
  campus,
  filieres,
  slideNumber,
  totalSlides,
}) => {
  const [localCampus, setLocalCampus] = useState<CampusId>(campus);
  const [selectedDiplomaId, setSelectedDiplomaId] = useState<string>('bts-cg');

  const visibleBlocks = TRIPTYQUE_FILIERES.filter((b) =>
    filieres.length > 0 ? filieres.includes(b.id) : true
  );

  // Find currently selected diploma for the interactive bottom infographic bar
  const allDiplomas = TRIPTYQUE_FILIERES.flatMap((b) =>
    b.diplomas.map((d) => ({ diploma: d, block: b }))
  );
  const selectedEntry =
    allDiplomas.find((e) => e.diploma.id === selectedDiplomaId) || allDiplomas[0];

  const getRateLabel = (d: TriptyqueDiploma): string | null => {
    if (localCampus !== 'tous') {
      const r = d.rates[localCampus];
      if (!r) return null;
      return r === 'Campus Lille' ? 'Lille' : `${r}`;
    }
    const parts: string[] = [];
    if (d.rates.lille) {
      parts.push(d.rates.lille === 'Campus Lille' ? 'Lille' : `Lille ${d.rates.lille}`);
    }
    if (d.rates.lens) parts.push(`Lens ${d.rates.lens}`);
    if (d.rates.amiens) parts.push(`Amiens ${d.rates.amiens}`);
    return parts.join(' · ');
  };

  // Exact Triptyque visual styling:
  // BAC +2 = Soft pastel pill
  // BAC +3 = Outlined pill (border 3px on white)
  // BAC +5 = Solid filled pill
  const renderDiplomaPill = (
    d: TriptyqueDiploma,
    block: TriptyqueFiliereBlock
  ) => {
    const isAvailableOnCampus =
      localCampus === 'tous' || Boolean(d.rates[localCampus]);
    const isSelected = selectedDiplomaId === d.id;
    const rateText = getRateLabel(d);

    let pillStyle: React.CSSProperties = {};
    if (d.level === 2) {
      pillStyle = {
        backgroundColor: block.softColor,
        borderColor: isSelected ? '#10222E' : block.softColor,
        color: '#0E1A22',
      };
    } else if (d.level === 3) {
      pillStyle = {
        backgroundColor: '#FFFFFF',
        borderColor: isSelected ? '#10222E' : block.color,
        color: '#0E1A22',
      };
    } else {
      pillStyle = {
        backgroundColor: block.color,
        borderColor: isSelected ? '#10222E' : block.color,
        color: '#0E1A22',
      };
    }

    return (
      <button
        key={d.id}
        type="button"
        onClick={() => setSelectedDiplomaId(d.id)}
        className={`w-full rounded-[20px] border-[3px] px-4 py-3 text-left cursor-pointer flex flex-col justify-between gap-1 transition-all ${
          isAvailableOnCampus ? 'opacity-100 hover:-translate-y-0.5' : 'opacity-30'
        } ${isSelected ? 'ring-3 ring-[#10222E]/20 scale-[1.01]' : ''}`}
        style={pillStyle}
      >
        <div className="flex items-center justify-between gap-2 w-full">
          <span className="font-outfit font-bold text-[20px] leading-tight text-[#0E1A22]">
            {d.shortName}
          </span>
          <span
            className="px-2.5 py-0.5 rounded-full font-spartan text-[16px] shrink-0 pt-1"
            style={{
              backgroundColor: d.level === 5 ? '#0E1A22' : block.color,
              color: d.level === 5 ? block.color : '#0E1A22',
            }}
          >
            BAC +{d.level}
          </span>
        </div>

        {rateText && (
          <div className="font-outfit font-semibold text-[15px] text-[#2E3F4A] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E1A22]" />
            <span>{rateText}</span>
          </div>
        )}
      </button>
    );
  };

  return (
    <SlideShell
      chapter="Formations"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={localCampus}
    >
      <div className="flex-1 flex flex-col justify-between py-1">
        {/* Header inspired directly by the Triptyque: "DE BAC +2 À BAC +5 / NOS FILIÈRES" */}
        <div className="flex items-end justify-between gap-8 cascade-item cascade-delay-1">
          <div>
            <div className="font-outfit font-bold text-[19px] uppercase tracking-[0.22em] text-[#13806F] mb-1">
              DE BAC +2 À BAC +5 · CLIQUEZ SUR UN DIPLÔME POUR VOIR LES MÉTIERS & TAUX
            </div>
            <h1 className="font-spartan text-[104px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#10222E]">NOS </span>
              <span className="text-[#B35A00]">FILIÈRES</span>
            </h1>
          </div>

          {/* Interactive Campus Filter Buttons (aria-pressed for Auto-Play) */}
          <div className="flex items-center gap-2.5">
            {(['tous', 'lille', 'lens', 'amiens'] as CampusId[]).map((c) => {
              const active = localCampus === c;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setLocalCampus(c)}
                  className={`h-[56px] px-5 rounded-full border-2 font-outfit font-semibold text-[19px] cursor-pointer transition-all whitespace-nowrap ${
                    active
                      ? 'bg-[#12AEDB] border-[#12AEDB] text-[#0E1A22]'
                      : 'bg-white border-[#B9C8D0] text-[#10222E] hover:border-[#F39200]'
                  }`}
                >
                  {c === 'tous' ? 'Tous les campus' : CAMPUS_LABELS[c]}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Visual Triptyque Cards */}
        <div
          className={`grid gap-7 my-auto py-2 cascade-item cascade-delay-2 ${
            visibleBlocks.length === 1
              ? 'grid-cols-1'
              : visibleBlocks.length === 2
              ? 'grid-cols-2'
              : 'grid-cols-3'
          }`}
        >
          {visibleBlocks.map((block) => {
            const bac2List = block.diplomas.filter((d) => d.level === 2);
            const bac3List = block.diplomas.filter((d) => d.level === 3);
            const bac5List = block.diplomas.filter((d) => d.level === 5);

            return (
              <div
                key={block.id}
                className="bg-white border border-[#DCE6EB] border-t-[12px] rounded-[28px] p-7 flex flex-col justify-between shadow-sm"
                style={{ borderTopColor: block.color }}
              >
                {/* Top: Filière Title + Inspiring Triptyque Tagline */}
                <div className="space-y-2 border-b border-[#DCE6EB] pb-4">
                  <h2
                    className="font-spartan text-[38px] leading-[0.92]"
                    style={{ color: block.inkColor }}
                  >
                    {block.title}
                  </h2>
                  <p className="font-outfit text-[20px] leading-[1.35] text-[#2E3F4A]">
                    {block.tagline}
                  </p>
                </div>

                {/* Visual Progression of Diplomas (Triptyque format: BAC+2 soft -> BAC+3 outline -> BAC+5 solid) */}
                <div className="space-y-3 pt-4 my-auto">
                  {bac2List.length > 0 && (
                    <div
                      className={`grid gap-3 ${
                        bac2List.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                      }`}
                    >
                      {bac2List.map((d) => renderDiplomaPill(d, block))}
                    </div>
                  )}

                  {/* Visual Connector Arrow */}
                  <div className="flex items-center justify-center">
                    <div className="h-3 w-0.5 bg-[#B9C8D0]" />
                  </div>

                  {bac3List.map((d) => renderDiplomaPill(d, block))}

                  <div className="flex items-center justify-center">
                    <div className="h-3 w-0.5 bg-[#B9C8D0]" />
                  </div>

                  {bac5List.map((d) => renderDiplomaPill(d, block))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Diploma Infographic Bar + Triptyque Legend */}
        <div className="bg-[#10222E] text-white rounded-[24px] px-8 py-4 flex items-center justify-between gap-6 cascade-item cascade-delay-3">
          {/* Selected Diploma Live Infographic */}
          <div className="flex items-center gap-5 min-w-0">
            <span
              className="px-4 py-2 rounded-[14px] font-spartan text-[28px] text-[#0E1A22] shrink-0 pt-2.5 leading-none"
              style={{ backgroundColor: selectedEntry.block.color }}
            >
              BAC +{selectedEntry.diploma.level}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="font-spartan text-[28px] text-[#FFB54D] leading-none">
                  {selectedEntry.diploma.fullName}
                </span>
                <span className="text-white/40">·</span>
                <span className="font-outfit font-semibold text-[17px] text-[#12AEDB]">
                  {selectedEntry.diploma.rncp}
                </span>
              </div>
              <div className="font-outfit text-[19px] text-white/90 truncate mt-0.5">
                <strong className="text-[#FFB54D]">Métiers visés :</strong> {selectedEntry.diploma.metiers}
              </div>
            </div>
          </div>

          {/* Right: Triptyque Level Legend + 0€ */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-4 py-1.5 rounded-full bg-[#D3F0FA] text-[#0E1A22] font-spartan text-[20px] pt-2 leading-none">
              BAC +2
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white border-2 border-[#12AEDB] text-[#0E1A22] font-spartan text-[20px] pt-2 leading-none">
              BAC +3
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#F39200] text-[#0E1A22] font-spartan text-[20px] pt-2 leading-none">
              BAC +5
            </span>
            <span className="px-5 py-1.5 rounded-full bg-[#2BB3A3] text-[#0E1A22] font-outfit font-bold text-[18px] uppercase">
              0 € · Salarié
            </span>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
