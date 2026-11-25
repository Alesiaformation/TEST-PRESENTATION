import React from 'react';
import { motion } from 'motion/react';
import { Handshake, Users, Sparkles, Building2, CheckCircle2, Clock, Zap, ShieldCheck } from 'lucide-react';

export const SlideJobDatings: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-6 sm:p-10 bg-[#293137] text-white overflow-hidden select-none" id="slide-job-datings">
      {/* Header */}
      <div className="border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/20 text-[#ED7938] font-montserrat font-bold text-[10px] uppercase tracking-wider border border-[#ED7938]/30">
              Événements Recrutement
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#2EB29F]/20 text-[#2EB29F] font-montserrat font-bold text-[10px] uppercase tracking-wider border border-[#2EB29F]/30">
              Sur Nos Campus
            </span>
          </div>
          <h2 className="font-spartan font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
            Les <span className="text-[#ED7938]">Job Datings</span> Alésia Formation
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-slate-300 font-medium">
            Rencontrez directement les recruteurs en face-à-face sur nos campus.
          </p>
        </div>

        {/* 100% Recrutement Actif Badge */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#2EB29F] to-[#0CAFD1] text-white shadow-lg flex items-center gap-3 shrink-0 hover-levitate">
          <div className="p-2 rounded-xl bg-white/20">
            <Handshake className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-spartan font-black text-2xl tracking-tight leading-none uppercase">
              100 %
            </div>
            <div className="font-montserrat text-[10px] font-bold text-emerald-100 uppercase tracking-widest mt-0.5">
              Entreprises qui recrutent
            </div>
          </div>
        </div>
      </div>

      {/* Main 3 Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-auto py-2 font-montserrat">
        
        {/* Pillar 1 */}
        <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15 shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#ED7938]/20 text-[#ED7938]">
                <Clock className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-[#ED7938]/20 text-[#ED7938] border border-[#ED7938]/30 text-[10px] font-bold uppercase">15 Min / Échange</span>
            </div>

            <h3 className="font-spartan font-black text-base text-white uppercase leading-snug">
              Speed Interviews Directs
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              15 minutes pour convaincre les recruteurs et les dirigeants d'entreprise.
            </p>

            <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EB29F] shrink-0" />
                <span>Jusqu'à 5 entretiens en 1 demi-journée</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EB29F] shrink-0" />
                <span>Contact direct sans intermédiaire</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 text-[11px] font-bold uppercase text-[#ED7938] flex items-center gap-1 border-t border-white/10">
            <Zap className="w-3.5 h-3.5" />
            <span>Votre personnalité fait la différence</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15 shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#0CAFD1]/20 text-[#0CAFD1]">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-[#0CAFD1]/20 text-[#0CAFD1] border border-[#0CAFD1]/30 text-[10px] font-bold uppercase">Offres Validées</span>
            </div>

            <h3 className="font-spartan font-black text-base text-white uppercase leading-snug">
              Postes Concrets à Pourvoir
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              Uniquement des entreprises ayant des postes d'alternance ouverts pour la rentrée.
            </p>

            <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0CAFD1] shrink-0" />
                <span>PME, Startups & Grands Groupes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0CAFD1] shrink-0" />
                <span>Missions alignées avec votre diplôme</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 text-[11px] font-bold uppercase text-[#0CAFD1] flex items-center gap-1 border-t border-white/10">
            <Building2 className="w-3.5 h-3.5" />
            <span>Vivier d'opportunités réelles</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15 shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-[#2EB29F]/20 text-[#2EB29F]">
                <Users className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-[#2EB29F]/20 text-[#2EB29F] border border-[#2EB29F]/30 text-[10px] font-bold uppercase">Coaching</span>
            </div>

            <h3 className="font-spartan font-black text-base text-white uppercase leading-snug">
              Préparation Sur-Mesure
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              Liste des entreprises communiquée à l'avance et pitch préparé avec nos coachs.
            </p>

            <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EB29F] shrink-0" />
                <span>Simulation de pitch & posture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EB29F] shrink-0" />
                <span>Fiches d'entreprises fournies</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 text-[11px] font-bold uppercase text-[#2EB29F] flex items-center gap-1 border-t border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vous arrivez 100% prêt(e)</span>
          </div>
        </div>

      </div>

      {/* Bottom Proof Bar */}
      <div className="p-3.5 rounded-xl bg-white/[0.08] border border-white/10 text-white flex flex-wrap items-center justify-between gap-3 text-xs font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#2EB29F] shrink-0" />
          <span>Sessions organisées régulièrement sur nos campus de <strong>Lille, Lens et Amiens</strong>.</span>
        </div>
        <div className="text-slate-300 font-bold text-[11px] uppercase tracking-wider">
          Accès exclusif aux admis Alésia
        </div>
      </div>
    </div>
  );
};
