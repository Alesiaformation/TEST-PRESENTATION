import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Flame, Target, PhoneCall, Mail, Sparkles, AlertTriangle, ShieldCheck, FileSpreadsheet } from 'lucide-react';

export const SlideAtelier02: React.FC = () => {
  const [candidaturesCount, setCandidaturesCount] = useState<number>(250);

  const progressRatio = (candidaturesCount - 100) / 1900;
  const minEntretiens = Math.max(1, Math.round(1 + progressRatio * 47));
  const maxEntretiens = minEntretiens + (candidaturesCount > 500 ? 5 : 2);
  const minSignatures = Math.max(1, Math.round(1 + progressRatio * 15));
  const maxSignatures = minSignatures + (candidaturesCount > 500 ? 3 : 1);

  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-6 sm:p-10 bg-[#F5F7FA] text-[#293137] overflow-hidden select-none" id="slide-atelier-02">
      {/* Header */}
      <div className="border-b border-[#EDF1F5] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/15 text-[#ED7938] font-montserrat font-bold text-[10px] uppercase tracking-wider">
              Atelier Exclusif Alésia
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#0CAFD1]/15 text-[#0CAFD1] font-montserrat font-bold text-[10px] uppercase tracking-wider">
              Prospection Directe
            </span>
          </div>
          <h2 className="font-spartan font-black text-2xl sm:text-3xl text-[#293137] tracking-tight uppercase">
            <span className="text-[#ED7938]">Atelier 02 :</span> Le Sprint de Placement
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-slate-600 font-medium">
            Passez à l'action avec notre boîte à outils de prospection ciblée.
          </p>
        </div>

        {/* Big Warning Badge */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#ED7938] to-[#ea580c] text-white shadow-lg flex items-center gap-3 shrink-0 hover-levitate">
          <div className="p-2 rounded-xl bg-white/20">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-spartan font-black text-2xl tracking-tight leading-none uppercase">
              +70 %
            </div>
            <div className="font-montserrat text-[10px] font-bold text-orange-100 uppercase tracking-widest mt-0.5">
              D'offres cachées hors-ligne
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        
        {/* Left: 3 Tools of Sprint */}
        <div className="lg:col-span-6 space-y-3 font-montserrat">
          
          {/* Market Insight */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#ED7938]/15 to-white border-2 border-[#ED7938]/30 shadow-xs space-y-1 hover-levitate">
            <div className="flex items-center gap-2 text-[#ED7938] font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-[#ED7938]" />
              <span>Le Marché Caché</span>
            </div>
            <h3 className="font-spartan font-black text-base text-[#293137] uppercase leading-tight">
              70% des postes ne sont jamais publiés sur Internet !
            </h3>
            <p className="text-xs text-slate-700 font-normal">
              Les entreprises recrutent d'abord par contact direct et candidature spontanée.
            </p>
          </div>

          {/* 3 Tools */}
          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-white border border-[#EDF1F5] shadow-xs flex items-center gap-3 hover-levitate">
              <div className="p-2 rounded-lg bg-[#ED7938]/15 text-[#ED7938] shrink-0">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-spartan font-bold text-[#293137] uppercase block">
                  01. Base d'entreprises personnalisée
                </span>
                <span className="text-slate-600 font-normal">
                  Tableau d'entreprises locales qualifiées selon votre métier.
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#EDF1F5] shadow-xs flex items-center gap-3 hover-levitate">
              <div className="p-2 rounded-lg bg-[#0CAFD1]/15 text-[#0CAFD1] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-spartan font-bold text-[#293137] uppercase block">
                  02. Modèle d'email prêt à l'envoi
                </span>
                <span className="text-slate-600 font-normal">
                  Script percutant pour capter l'intérêt immédiat des recruteurs.
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#EDF1F5] shadow-xs flex items-center gap-3 hover-levitate">
              <div className="p-2 rounded-lg bg-[#2EB29F]/15 text-[#2EB29F] shrink-0">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-spartan font-bold text-[#293137] uppercase block">
                  03. Trame d'appel téléphonique
                </span>
                <span className="text-slate-600 font-normal">
                  Arguments clés pour relancer avec assurance et obtenir l'entretien.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Funnel Simulator */}
        <div className="lg:col-span-6 font-montserrat">
          <div className="p-6 rounded-2xl bg-white border border-[#EDF1F5] shadow-md space-y-4 hover-levitate">
            <div className="flex items-center justify-between border-b border-[#EDF1F5] pb-2">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#ED7938]" />
                <h4 className="font-spartan font-black text-sm text-[#293137] uppercase">
                  Simulateur de Résultats
                </h4>
              </div>
              <span className="text-xs font-bold uppercase text-[#ED7938]">{candidaturesCount} Entreprises</span>
            </div>

            {/* Slider */}
            <div className="space-y-1.5">
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={candidaturesCount}
                onChange={(e) => setCandidaturesCount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ED7938]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
                <span>100 (Local)</span>
                <span>500 (Recommandé)</span>
                <span>2 000 (Large)</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-[#ED7938]/10 border border-[#ED7938]/30 text-center">
                <div className="font-spartan font-black text-3xl sm:text-4xl text-[#ED7938] uppercase">
                  {minEntretiens} à {maxEntretiens}
                </div>
                <div className="text-xs font-bold text-[#293137] uppercase mt-1">
                  Entretiens Décrochés
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#2EB29F]/10 border border-[#2EB29F]/30 text-center">
                <div className="font-spartan font-black text-3xl sm:text-4xl text-[#2EB29F] uppercase">
                  {minSignatures} à {maxSignatures}
                </div>
                <div className="text-xs font-bold text-[#293137] uppercase mt-1">
                  Offres de Contrat
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="p-2.5 rounded-xl bg-[#F5F7FA] border border-[#EDF1F5] text-xs text-slate-700 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ED7938] shrink-0" />
              <span>Base de données + Scripts offerts à tous nos admissibles.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Proof Bar */}
      <div className="p-3 rounded-xl bg-[#293137] text-white flex flex-wrap items-center justify-between text-xs gap-2 font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#2EB29F] shrink-0" />
          <span>La méthode Sprint permet à nos étudiants de décrocher leur entreprise en quelques semaines.</span>
        </div>
        <span className="text-[11px] text-[#ED7938] font-bold uppercase tracking-wider">Atelier pratique inclus</span>
      </div>
    </div>
  );
};
