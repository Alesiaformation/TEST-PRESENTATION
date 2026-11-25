import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  HeartHandshake, 
  Zap, 
  ShieldCheck, 
  Briefcase, 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin 
} from 'lucide-react';

const CRE_CAMPUS_DATA = [
  {
    id: 'lille',
    name: 'Campus de Lille',
    email: 'sbauw@alesiaformation.fr',
    role: 'Chargée de Relation Entreprises (Lille)',
  },
  {
    id: 'lens',
    name: 'Campus de Lens',
    email: 'sbauw@alesiaformation.fr',
    role: 'Chargée de Relation Entreprises (Lens)',
  },
  {
    id: 'amiens',
    name: "Campus d'Amiens",
    email: 'cboully@alesiaformation.fr',
    role: 'Chargé(e) de Relation Entreprises (Amiens)',
  },
];

export const SlideAtelier01: React.FC = () => {
  const [selectedCampusId, setSelectedCampusId] = useState<'lille' | 'lens' | 'amiens'>('lille');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const currentCre = CRE_CAMPUS_DATA.find((c) => c.id === selectedCampusId) || CRE_CAMPUS_DATA[0];

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-5 sm:p-8 bg-[#F5F7FA] text-[#293137] overflow-hidden select-none" id="slide-atelier-01">
      {/* Header */}
      <div className="border-b border-[#EDF1F5] pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/15 text-[#ED7938] font-montserrat font-bold text-[10px] uppercase tracking-wider">
              Atelier Exclusif Alésia
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#2EB29F]/15 text-[#2EB29F] font-montserrat font-bold text-[10px] uppercase tracking-wider">
              Coaching Direct
            </span>
          </div>
          <h2 className="font-spartan font-black text-2xl sm:text-3xl text-[#293137] tracking-tight uppercase">
            <span className="text-[#ED7938]">Atelier 01 :</span> Démarquez-vous en <span className="text-[#ED7938]">6 secondes</span>
          </h2>
          <p className="font-montserrat text-xs sm:text-sm text-slate-600 font-medium">
            Un CV percutant qui capte l'attention du recruteur en un coup d'œil.
          </p>
        </div>

        {/* 6s Badge */}
        <div className="p-3 rounded-2xl bg-gradient-to-r from-[#ED7938] to-[#f59e0b] text-white shadow-md flex items-center gap-3 shrink-0 hover-levitate">
          <div className="p-2 rounded-xl bg-white/20">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-spartan font-black text-2xl tracking-tight leading-none uppercase">
              6s
            </div>
            <div className="font-montserrat text-[10px] font-bold text-orange-100 uppercase tracking-widest mt-0.5">
              Temps de lecture moyen
            </div>
          </div>
        </div>
      </div>

      {/* Main 3 Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 my-auto py-1 font-montserrat">
        
        {/* Pillar 1 */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF1F5] shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-[#ED7938]/15 text-[#ED7938]">
                <Zap className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-[#ED7938]/10 text-[#ED7938] text-[10px] font-bold uppercase">Impact Immédiat</span>
            </div>

            <h3 className="font-spartan font-black text-sm text-[#293137] uppercase leading-snug">
              Top 10 Recruteur
            </h3>
            <p className="text-xs text-slate-600 font-normal">
              Fini les CV ignorés : mise en avant directe de vos atouts et réalisations.
            </p>

            <div className="space-y-1.5 pt-2 border-t border-[#EDF1F5] text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EB29F] shrink-0" />
                <span>Titres percutants ciblés</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EB29F] shrink-0" />
                <span>Chiffres & résultats concrets</span>
              </div>
            </div>
          </div>

          <div className="mt-2.5 pt-1.5 text-[10px] font-bold uppercase text-[#ED7938] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>4x plus d'entretiens décrochés</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF1F5] shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-[#0CAFD1]/15 text-[#0CAFD1]">
                <Bot className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-[#0CAFD1]/10 text-[#0CAFD1] text-[10px] font-bold uppercase">Robots ATS</span>
            </div>

            <h3 className="font-spartan font-black text-sm text-[#293137] uppercase leading-snug">
              100% Filtres ATS Validés
            </h3>
            <p className="text-xs text-slate-600 font-normal">
              Les entreprises filtrent par algorithmes. Nous intégrons les bons mots-clés.
            </p>

            <div className="space-y-1.5 pt-2 border-t border-[#EDF1F5] text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0CAFD1] shrink-0" />
                <span>Format optimisé logiciels RH</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0CAFD1] shrink-0" />
                <span>Mots-clés de votre futur métier</span>
              </div>
            </div>
          </div>

          <div className="mt-2.5 pt-1.5 text-[10px] font-bold uppercase text-[#0CAFD1] flex items-center gap-1">
            <Bot className="w-3.5 h-3.5" />
            <span>Zéro CV bloqué au tri</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-4 rounded-2xl bg-white border border-[#EDF1F5] shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-[#2EB29F]/15 text-[#2EB29F]">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-[#2EB29F]/10 text-[#2EB29F] text-[10px] font-bold uppercase">Personnalité</span>
            </div>

            <h3 className="font-spartan font-black text-sm text-[#293137] uppercase leading-snug">
              Valorisation des Soft Skills
            </h3>
            <p className="text-xs text-slate-600 font-normal">
              Les recruteurs recherchent votre motivation, ponctualité et dynamisme.
            </p>

            <div className="space-y-1.5 pt-2 border-t border-[#EDF1F5] text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EB29F] shrink-0" />
                <span>Mise en avant du savoir-être</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EB29F] shrink-0" />
                <span>Arguments concrets & percutants</span>
              </div>
            </div>
          </div>

          <div className="mt-2.5 pt-1.5 text-[10px] font-bold uppercase text-[#2EB29F] flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>La différence en entretien</span>
          </div>
        </div>

      </div>

      {/* Interactive Chargé(e) de Relation Entreprises (CRE) Dropdown Bar */}
      <div className="p-3.5 rounded-2xl bg-white border-2 border-[#2EB29F]/40 shadow-sm font-montserrat flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#2EB29F]/15 text-[#2EB29F] shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase text-[#2EB29F] tracking-wider">
              Votre Contact Placement Entreprise
            </div>
            <div className="font-spartan font-bold text-xs text-[#293137] uppercase">
              Chargé(e) de Relation Entreprises
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          {/* Campus Dropdown */}
          <div className="flex items-center gap-1.5 bg-[#F5F7FA] border border-[#EDF1F5] rounded-xl px-2.5 py-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#ED7938] shrink-0" />
            <label htmlFor="cre-campus-select" className="text-[11px] font-bold uppercase text-slate-500">
              Campus :
            </label>
            <select
              id="cre-campus-select"
              value={selectedCampusId}
              onChange={(e) => setSelectedCampusId(e.target.value as any)}
              className="bg-transparent text-xs font-bold text-[#293137] uppercase focus:outline-none cursor-pointer pr-1"
            >
              {CRE_CAMPUS_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Email Display & Actions */}
          <div className="flex items-center justify-between gap-2 bg-[#293137] text-white px-3 py-1.5 rounded-xl">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#2EB29F] shrink-0" />
              <span className="font-spartan font-bold text-xs text-white selection:bg-[#2EB29F]">
                {currentCre.email}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => handleCopyEmail(currentCre.email)}
                className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold uppercase flex items-center gap-1 transition-all cursor-pointer"
                title="Copier l'adresse email"
              >
                {copiedEmail === currentCre.email ? (
                  <>
                    <Check className="w-3 h-3 text-[#2EB29F]" />
                    <span className="text-[#2EB29F]">Copié</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-300" />
                    <span>Copier</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${currentCre.email}?subject=Placement%20Alternance%20-%20${encodeURIComponent(currentCre.name)}`}
                className="px-2.5 py-1 rounded bg-[#2EB29F] hover:bg-[#259b8a] text-white text-[10px] font-bold uppercase flex items-center gap-1 transition-all shadow-xs cursor-pointer"
              >
                <Send className="w-3 h-3" />
                <span>Écrire</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Definition Bar */}
      <div className="p-2.5 rounded-xl bg-[#293137] text-white flex items-center justify-between gap-2 text-xs font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#ED7938] shrink-0" />
          <span>Atelier pratique inclus dès votre admission pour transformer votre CV en arme de recrutement.</span>
        </div>
        <span className="text-[11px] text-slate-300 uppercase font-bold tracking-wider hidden sm:inline">Session animée par nos coachs</span>
      </div>
    </div>
  );
};
