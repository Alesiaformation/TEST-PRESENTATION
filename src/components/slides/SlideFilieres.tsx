import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Briefcase, Sparkles } from 'lucide-react';

export const SlideFilieres: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<'commerce' | 'admin_rh' | 'compta'>('commerce');

  // Level Styling & Badges with distinct progressive color codes
  const levelStyles: Record<string, { badgeBg: string; text: string; border: string; step: string }> = {
    'Bac+2': {
      badgeBg: 'bg-[#0CAFD1]/20 text-[#0CAFD1] border-[#0CAFD1]/40',
      text: 'text-[#0CAFD1]',
      border: 'border-l-4 border-l-[#0CAFD1]',
      step: 'Niveau 5 (BTS)',
    },
    'Bac+3': {
      badgeBg: 'bg-[#2EB29F]/20 text-[#2EB29F] border-[#2EB29F]/40',
      text: 'text-[#2EB29F]',
      border: 'border-l-4 border-l-[#2EB29F]',
      step: 'Niveau 6 (Bachelor / DCG)',
    },
    'Bac+5': {
      badgeBg: 'bg-[#ED7938]/20 text-[#ED7938] border-[#ED7938]/40',
      text: 'text-[#ED7938]',
      border: 'border-l-4 border-l-[#ED7938]',
      step: 'Niveau 7 (Mastère / DSCG)',
    },
  };

  const domainsData = {
    commerce: {
      domainName: 'Commerce et Marketing',
      color: '#ED7938',
      description: 'Du Bac+2 au Bac+5 : négociation BtoB, relation client, retail et stratégie commerciale.',
      diplomes: [
        {
          level: 'Bac+2',
          code: 'BTS NDRC',
          name: 'Négociation et Digitalisation de la Relation Client',
          metiers: 'Commercial BtoB, Chargé d’affaires junior, Conseiller clientèle, Business Developer',
        },
        {
          level: 'Bac+2',
          code: 'BTS MCO',
          name: 'Management Commercial Opérationnel',
          metiers: 'Manager de rayon, Adjoint de magasin, Responsable d’agence, Conseiller de vente',
        },
        {
          level: 'Bac+3',
          code: 'Bachelor RDC',
          name: 'Responsable du Développement Commercial (RNCP 6)',
          metiers: 'Key Account Manager junior, Ingénieur d’affaires, Chef de secteur commercial',
        },
        {
          level: 'Bac+5',
          code: 'Mastère MCM',
          name: 'Manager Commercial et Marketing (RNCP 7)',
          metiers: 'Directeur commercial adjoint, Head of Sales, Business Unit Manager, Responsable Marketing',
        },
      ],
    },
    admin_rh: {
      domainName: 'Administratif et Ressources Humaines',
      color: '#2EB29F',
      description: 'De l’organisation d’entreprise (BTS SAM, BTS GPME) à la gestion des talents (Bachelor & Mastère RH).',
      diplomes: [
        {
          level: 'Bac+2',
          code: 'BTS SAM',
          name: 'Support à l’Action Managériale',
          metiers: 'Assistant de direction, Office Manager junior, Chargé de communication interne, Assistant RH',
        },
        {
          level: 'Bac+2',
          code: 'BTS GPME',
          name: 'Gestion de la PME',
          metiers: 'Bras droit de dirigeant, Assistant de gestion PME/PMI, Coordinateur administratif',
        },
        {
          level: 'Bac+3',
          code: 'Bachelor RH',
          name: 'Chargé des Ressources Humaines (RNCP 6)',
          metiers: 'Chargé de recrutement, Gestionnaire RH, Assistant formation & compétences',
        },
        {
          level: 'Bac+5',
          code: 'Mastère MRH',
          name: 'Manager des Ressources Humaines & Talents (RNCP 7)',
          metiers: 'Responsable des Ressources Humaines (RRH), Talent Acquisition Manager, Responsable RH',
        },
      ],
    },
    compta: {
      domainName: 'Comptabilité et Finance',
      color: '#ED7938',
      description: 'L’expertise comptable et financière : du BTS CG au DCG (Bac+3) et DSCG (Bac+5).',
      diplomes: [
        {
          level: 'Bac+2',
          code: 'BTS CG',
          name: 'Comptabilité et Gestion',
          metiers: 'Collaborateur comptable, Assistant contrôleur de gestion, Comptable général, Gestionnaire de paie',
        },
        {
          level: 'Bac+3',
          code: 'DCG',
          name: 'Diplôme de Comptabilité et de Gestion (Grade Licence)',
          metiers: 'Collaborateur confirmé d’expert-comptable, Responsable comptable, Auditeur junior',
        },
        {
          level: 'Bac+5',
          code: 'DSCG',
          name: 'Diplôme Supérieur de Comptabilité et de Gestion (Grade Master)',
          metiers: 'Futur Expert-comptable / Commissaire aux comptes, Directeur Financier (DAF)',
        },
      ],
    },
  };

  const currentDomain = domainsData[selectedDomain];

  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-6 sm:p-10 bg-[#293137] text-white overflow-hidden select-none" id="slide-filieres">
      {/* Header with Domain Filter & Color Legend */}
      <div className="border-b border-white/10 pb-3 flex flex-col lg:flex-row lg:items-center justify-between gap-3 font-montserrat">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/20 text-[#ED7938] font-bold text-[10px] uppercase tracking-wider border border-[#ED7938]/30">
              3 Grands Domaines Métiers
            </span>
            {/* Progression color pills */}
            <div className="flex items-center gap-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-[#0CAFD1]/20 text-[#0CAFD1] border border-[#0CAFD1]/40">
                Bac+2
              </span>
              <span className="text-white/30 text-xs">➔</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-[#2EB29F]/20 text-[#2EB29F] border border-[#2EB29F]/40">
                Bac+3
              </span>
              <span className="text-white/30 text-xs">➔</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-[#ED7938]/20 text-[#ED7938] border border-[#ED7938]/40">
                Bac+5
              </span>
            </div>
          </div>
          <h2 className="font-spartan font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
            Nos Formations & <span className="text-[#ED7938]">Métiers Visés</span>
          </h2>
        </div>

        {/* 3 Domain Selector Tabs */}
        <div className="flex flex-wrap items-center bg-white/10 p-1 rounded-xl gap-1 shrink-0 font-montserrat border border-white/10">
          <button
            onClick={() => setSelectedDomain('commerce')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedDomain === 'commerce'
                ? 'bg-[#ED7938] text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Commerce et Marketing
          </button>
          <button
            onClick={() => setSelectedDomain('admin_rh')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedDomain === 'admin_rh'
                ? 'bg-[#2EB29F] text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Administratif et RH
          </button>
          <button
            onClick={() => setSelectedDomain('compta')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedDomain === 'compta'
                ? 'bg-[#0CAFD1] text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Comptabilité et Finance
          </button>
        </div>
      </div>

      {/* Domain Description Banner */}
      <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-montserrat text-slate-300">
        <div className="font-spartan font-bold text-sm text-white uppercase flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[#ED7938]" />
          <span>{currentDomain.domainName}</span>
        </div>
        <span className="text-slate-300 font-medium hidden sm:inline">
          {currentDomain.description}
        </span>
      </div>

      {/* Grid of Diplomas */}
      <div className="my-auto py-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDomain}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`grid gap-3.5 ${
              currentDomain.diplomes.length <= 2
                ? 'grid-cols-1 md:grid-cols-2'
                : currentDomain.diplomes.length === 3
                ? 'grid-cols-1 md:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {currentDomain.diplomes.map((f, idx) => {
              const levelStyle = levelStyles[f.level] || levelStyles['Bac+2'];
              return (
                <div
                  key={idx}
                  className={`p-4.5 rounded-2xl bg-white/[0.06] border border-white/15 ${levelStyle.border} shadow-xs hover-levitate transition-all flex flex-col justify-between`}
                >
                  <div className="space-y-2.5">
                    {/* Level Badge */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white font-spartan font-black text-xs tracking-wider uppercase border border-white/15">
                        {f.code}
                      </span>
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-montserrat font-black uppercase border ${levelStyle.badgeBg}`}>
                        {f.level}
                      </span>
                    </div>

                    <h3 className="font-spartan font-bold text-sm text-white uppercase leading-snug">
                      {f.name}
                    </h3>

                    {/* Targeted Careers only */}
                    <div className="pt-2 border-t border-white/10 space-y-1">
                      <div className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-[#ED7938] flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-[#ED7938]" />
                        <span>Métiers visés :</span>
                      </div>
                      <p className="font-montserrat text-xs text-slate-300 leading-relaxed font-medium">
                        {f.metiers}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Passerelle Guarantee */}
      <div className="p-3.5 rounded-xl bg-white/[0.08] border border-white/10 text-white flex flex-wrap items-center justify-between gap-2 text-xs font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <Sparkles className="w-4 h-4 text-[#2EB29F] shrink-0" />
          <span>
            <strong>Passerelles directes :</strong> Démarrez en <span className="text-[#0CAFD1] font-bold">Bac+2</span> et poursuivez jusqu’au <span className="text-[#2EB29F] font-bold">Bac+3</span> et <span className="text-[#ED7938] font-bold">Bac+5</span> dans la même école.
          </span>
        </div>
        <div className="text-slate-300 font-bold text-[11px] uppercase tracking-wider">
          Formation 100% financée • 0 € de reste à charge
        </div>
      </div>
    </div>
  );
};
