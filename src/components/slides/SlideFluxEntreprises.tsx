import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Award, Building, CheckCircle2, TrendingUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const SlideFluxEntreprises: React.FC = () => {
  const searchQueries = [
    {
      id: 'bts-commerce',
      label: 'BTS Commerce alternance Lille',
      title: 'BTS Commerce / NDRC / MCO en Alternance à Lille | Alésia Formation',
      url: 'https://www.alesia-formation.fr/bts-commerce',
      desc: 'N°1 de l’alternance dans la région. 100% financé, 0€ de frais. +500 offres de nos entreprises partenaires.',
      sitelinks: ['Offres d’alternance', 'Candidature Express', 'Campus Lille, Lens, Amiens', 'Outil GRIMP'],
      volume: '12 400 req/mois',
      rank: 'Top 1 Organique',
    },
    {
      id: 'bts-admin',
      label: 'BTS Administratif / SAM alternance',
      title: 'BTS SAM & Gestion Administrative en Alternance | Alésia Formation',
      url: 'https://www.alesia-formation.fr/bts-gestion-sam',
      desc: 'BTS SAM & GPME en apprentissage. Entreprises en recrutement actif dans la métropole lilloise.',
      sitelinks: ['Déposer candidature', 'Programme SAM & GPME', 'Job Datings', 'Ateliers CV 6s'],
      volume: '8 900 req/mois',
      rank: 'Top 1 Organique',
    },
    {
      id: 'bts-alternance-region',
      label: 'BTS alternance Hauts-de-France',
      title: 'Top École BTS en Alternance Lille - Lens - Amiens | Alésia Formation',
      url: 'https://www.alesia-formation.fr',
      desc: 'Formations du Bac+2 au Bac+5. +91% de réussite, 97% d’insertion. Dispositif unique de placement.',
      sitelinks: ['Commerce & Vente', 'Gestion & RH', 'Comptabilité & Finance', 'Statut Salarié 0€'],
      volume: '24 800 req/mois',
      rank: 'Top 1 Organique',
    },
    {
      id: 'bts-cg',
      label: 'BTS Comptabilité Gestion alternance',
      title: 'BTS CG & Filière Comptabilité en Alternance | Alésia Formation',
      url: 'https://www.alesia-formation.fr/bts-cg',
      desc: 'Formez-vous aux métiers de la gestion en entreprise ou cabinet. Passerelle DCG et DSCG.',
      sitelinks: ['Programme BTS CG', 'Passerelle DCG Bac+3', 'Cabinets Partenaires', 'Taux de réussite'],
      volume: '7 800 req/mois',
      rank: 'Top 1 Organique',
    },
  ];

  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const activeQuery = searchQueries[activeQueryIndex];

  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-6 sm:p-10 bg-[#F5F7FA] text-[#293137] overflow-hidden select-none" id="slide-flux-entreprises">
      {/* Header */}
      <div className="border-b border-[#EDF1F5] pb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/15 text-[#ED7938] font-montserrat font-bold text-[10px] uppercase tracking-wider">
            Visibilité Maximale
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-[#0CAFD1]/15 text-[#0CAFD1] font-montserrat font-bold text-[10px] uppercase tracking-wider">
            Flux Direct
          </span>
        </div>
        <h2 className="font-spartan font-black text-2xl sm:text-3xl text-[#293137] tracking-tight uppercase">
          Alésia Formation : <span className="text-[#ED7938]">N°1 sur Google</span>
        </h2>
        <p className="font-montserrat text-xs sm:text-sm text-slate-600 font-medium">
          Les recruteurs tapent ces recherches et déposent leurs offres en priorité chez nous.
        </p>
      </div>

      {/* Main interactive area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        
        {/* Left: Google Search Simulator */}
        <div className="lg:col-span-7 space-y-3">
          {/* Query Selector Tabs */}
          <div className="flex flex-wrap gap-1.5 font-montserrat">
            {searchQueries.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => setActiveQueryIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeQueryIndex === idx
                    ? 'bg-[#293137] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-[#EDF1F5] border border-[#EDF1F5]'
                }`}
              >
                <Search className="w-3 h-3 text-[#ED7938]" />
                <span>{q.label}</span>
              </button>
            ))}
          </div>

          {/* Realistic Google Search Card */}
          <div className="p-5 rounded-2xl bg-white border border-[#EDF1F5] shadow-md space-y-4 hover-levitate">
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#F5F7FA] border border-[#EDF1F5] text-xs sm:text-sm">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="font-montserrat font-bold text-[#293137] flex-1 truncate">
                {activeQuery.label}
              </span>
              <span className="text-[10px] font-montserrat font-bold uppercase px-2 py-0.5 rounded bg-[#2EB29F]/15 text-[#2EB29F] shrink-0">
                {activeQuery.volume}
              </span>
            </div>

            {/* Google Search Result Preview */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeQuery.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-2 text-left"
              >
                {/* Ranking Tag */}
                <div className="flex items-center gap-2 font-montserrat">
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-[#ED7938] text-white flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {activeQuery.rank}
                  </span>
                  <span className="text-xs text-slate-400 font-mono truncate">
                    {activeQuery.url}
                  </span>
                </div>

                {/* SERP Title */}
                <h3 className="font-spartan font-bold text-base sm:text-lg text-blue-700 leading-snug">
                  {activeQuery.title}
                </h3>

                {/* SERP Snippet */}
                <p className="font-montserrat text-xs text-slate-600 leading-relaxed font-normal">
                  {activeQuery.desc}
                </p>

                {/* Google Sitelinks Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#EDF1F5]">
                  {activeQuery.sitelinks.map((link, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-lg bg-[#F5F7FA] border border-[#EDF1F5] text-xs font-montserrat font-semibold text-blue-600 flex items-center justify-between"
                    >
                      <span>{link}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Direct Impact for Gen Z */}
        <div className="lg:col-span-5 space-y-3 font-montserrat">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#ED7938]/15 to-[#ED7938]/5 border border-[#ED7938]/30 hover-levitate">
            <div className="flex items-center gap-2 text-[#ED7938] font-bold text-xs uppercase tracking-wider mb-1">
              <Zap className="w-4 h-4" />
              <span>L'avantage pour vous</span>
            </div>
            <h4 className="font-spartan font-black text-lg text-[#293137] uppercase leading-tight">
              Les recruteurs viennent à nous
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-normal mt-1">
              Des dizaines d'entreprises nous appellent en direct avant même de publier une offre en ligne.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="p-3.5 rounded-xl bg-white border border-[#EDF1F5] shadow-xs flex items-center gap-3 hover-levitate">
              <div className="p-2 rounded-lg bg-[#2EB29F]/15 text-[#2EB29F] shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-spartan font-bold text-xs text-[#293137] uppercase">Offres Exclusives</h5>
                <p className="text-[11px] text-slate-600 font-normal">
                  Accès réservé à nos étudiants admissibles.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#EDF1F5] shadow-xs flex items-center gap-3 hover-levitate">
              <div className="p-2 rounded-lg bg-[#0CAFD1]/15 text-[#0CAFD1] shrink-0">
                <Building className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-spartan font-bold text-xs text-[#293137] uppercase">Placement Direct</h5>
                <p className="text-[11px] text-slate-600 font-normal">
                  Votre profil transmis dès vos tests validés.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Proof bar */}
      <div className="p-3 rounded-xl bg-[#293137] text-white flex flex-wrap items-center justify-between text-xs gap-2 font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#2EB29F] shrink-0" />
          <span>Alésia Formation : la référence N°1 dans les Hauts-de-France.</span>
        </div>
        <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Indexation Google Certifiée</span>
      </div>
    </div>
  );
};
