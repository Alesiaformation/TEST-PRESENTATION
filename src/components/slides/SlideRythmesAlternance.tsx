import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Building, 
  GraduationCap, 
  ShieldCheck, 
  Sun, 
  AlertCircle, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  Info
} from 'lucide-react';
import { RYTHMES_DATA, CampusRythmes, FormationRythme } from '../../data/rythmesAlternanceData';

export const SlideRythmesAlternance: React.FC = () => {
  // State for Step 1: Campus
  const [selectedCampusId, setSelectedCampusId] = useState<'amiens' | 'lens' | 'lille'>('lille');
  
  // Current Campus object
  const currentCampus = useMemo(() => {
    return RYTHMES_DATA.find((c) => c.id === selectedCampusId) || RYTHMES_DATA[2];
  }, [selectedCampusId]);

  // State for Step 2: Formation
  const [selectedFormationId, setSelectedFormationId] = useState<string>(currentCampus.formations[0].id);

  // When campus changes, if selected formation is not in that campus, switch to the first one
  const currentFormation = useMemo(() => {
    const found = currentCampus.formations.find((f) => f.id === selectedFormationId);
    if (found) return found;
    return currentCampus.formations[0];
  }, [currentCampus, selectedFormationId]);

  const handleCampusChange = (campusId: 'amiens' | 'lens' | 'lille') => {
    setSelectedCampusId(campusId);
    const targetCampus = RYTHMES_DATA.find((c) => c.id === campusId);
    if (targetCampus && targetCampus.formations.length > 0) {
      setSelectedFormationId(targetCampus.formations[0].id);
    }
  };

  const daysOfWeek = [
    { day: 'Lun', full: 'Lundi' },
    { day: 'Mar', full: 'Mardi' },
    { day: 'Mer', full: 'Mercredi' },
    { day: 'Jeu', full: 'Jeudi' },
    { day: 'Ven', full: 'Vendredi' },
    { day: 'Sam', full: 'Samedi' },
    { day: 'Dim', full: 'Dimanche' },
  ];

  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-5 sm:p-8 bg-[#F5F7FA] text-[#293137] overflow-hidden select-none" id="slide-rythmes-alternance">
      {/* Header with Navigation Stepper */}
      <div className="border-b border-[#EDF1F5] pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-montserrat">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/15 text-[#ED7938] font-bold text-[10px] uppercase tracking-wider">
              Outil Interactif
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#2EB29F]/15 text-[#2EB29F] font-bold text-[10px] uppercase tracking-wider">
              Plannings Officiels
            </span>
          </div>
          <h2 className="font-spartan font-black text-2xl sm:text-3xl text-[#293137] tracking-tight uppercase">
            Vos <span className="text-[#ED7938]">Rythmes d'Alternance</span> par Campus
          </h2>
        </div>

        {/* 3-Step Breadcrumb Bar */}
        <div className="flex items-center gap-1.5 text-xs bg-white px-3 py-1.5 rounded-xl border border-[#EDF1F5] shadow-2xs font-semibold">
          <span className="flex items-center gap-1 text-[#ED7938]">
            <span className="w-5 h-5 rounded-full bg-[#ED7938] text-white flex items-center justify-center text-[10px] font-bold">1</span>
            <span>Campus</span>
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="flex items-center gap-1 text-[#0CAFD1]">
            <span className="w-5 h-5 rounded-full bg-[#0CAFD1] text-white flex items-center justify-center text-[10px] font-bold">2</span>
            <span>Formation</span>
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="flex items-center gap-1 text-[#2EB29F]">
            <span className="w-5 h-5 rounded-full bg-[#2EB29F] text-white flex items-center justify-center text-[10px] font-bold">3</span>
            <span>Calendrier</span>
          </span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto py-1 font-montserrat">
        
        {/* Left Column (5 cols): Step 1 Campus + Step 2 Formations */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          
          {/* Étape 1 : Choix du Campus */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#EDF1F5] shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-spartan font-black text-xs text-[#293137] uppercase flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#ED7938] text-white flex items-center justify-center text-[9px]">1</span>
                Étape 1 : Choisissez votre Campus
              </span>
              <span className="text-[10px] font-bold uppercase text-slate-400">3 Campus</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {RYTHMES_DATA.map((campus) => {
                const isSelected = campus.id === selectedCampusId;
                return (
                  <button
                    key={campus.id}
                    onClick={() => handleCampusChange(campus.id)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? 'bg-[#ED7938] border-[#ED7938] text-white shadow-md scale-[1.02]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-slate-700 hover:border-[#ED7938]/50 hover:bg-orange-50/40'
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#ED7938]'}`} />
                    <span className="font-spartan font-black text-xs uppercase tracking-tight">
                      {campus.name.replace("Campus d'", "").replace("Campus de ", "")}
                    </span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider ${isSelected ? 'text-orange-100' : 'text-slate-500'}`}>
                      {campus.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Étape 2 : Choix de la Formation */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#EDF1F5] shadow-xs space-y-2 flex-1 flex flex-col">
            <div className="flex items-center justify-between text-xs">
              <span className="font-spartan font-black text-xs text-[#293137] uppercase flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#0CAFD1] text-white flex items-center justify-center text-[9px]">2</span>
                Étape 2 : Choisissez votre Formation
              </span>
              <span className="text-[10px] font-bold text-[#0CAFD1] uppercase">
                {currentCampus.formations.length} au choix
              </span>
            </div>

            {/* Scrollable / Grid Formations List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 overflow-y-auto max-h-[190px] pr-1">
              {currentCampus.formations.map((f) => {
                const isSelected = f.id === currentFormation.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFormationId(f.id)}
                    className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? 'bg-[#0CAFD1]/10 border-[#0CAFD1] text-[#0CAFD1] ring-1 ring-[#0CAFD1]/40'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-slate-700 hover:border-[#0CAFD1]/40 hover:bg-cyan-50/30'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className={`px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider ${
                          f.level === 'BTS' ? 'bg-[#ED7938]/15 text-[#ED7938]' :
                          f.level === 'Bachelor' ? 'bg-[#0CAFD1]/15 text-[#0CAFD1]' :
                          f.level === 'Master' ? 'bg-[#2EB29F]/15 text-[#2EB29F]' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {f.code}
                        </span>
                        <span className="font-spartan font-bold text-xs text-[#293137] truncate block">
                          {f.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        Jours de cours : <strong className="text-slate-800">{f.scheduleLabel}</strong>
                      </span>
                    </div>

                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#0CAFD1] text-white' : 'border border-slate-300'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column (7 cols): Step 3 Calendar & Rythme Display */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          
          {/* Étape 3 : Fiche Planning & Calendrier Hebdomadaire */}
          <div className="p-4 rounded-2xl bg-white border-2 border-[#ED7938]/30 shadow-xs space-y-3">
            
            {/* Selected Formation Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EDF1F5] pb-2.5">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="px-2 py-0.5 rounded bg-[#ED7938] text-white font-spartan font-black text-[10px] uppercase tracking-wider">
                    {currentFormation.code}
                  </span>
                  <span className="text-xs font-bold text-[#0CAFD1] uppercase">
                    {currentCampus.name}
                  </span>
                </div>
                <h3 className="font-spartan font-black text-sm sm:text-base text-[#293137] uppercase">
                  {currentFormation.name}
                </h3>
              </div>

              {/* Rhythm Badge */}
              <div className="px-3 py-1.5 rounded-xl bg-[#ED7938]/10 border border-[#ED7938]/30 text-[#ED7938] shrink-0 text-right">
                <span className="text-[9px] font-bold uppercase text-slate-500 block">Jours en centre :</span>
                <span className="font-spartan font-black text-xs sm:text-sm uppercase">
                  {currentFormation.scheduleLabel}
                </span>
              </div>
            </div>

            {/* 7-Day Visual Interactive Planner */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold uppercase text-slate-500 mb-1.5">
                <span className="flex items-center gap-1.5 text-[#293137]">
                  <Calendar className="w-3.5 h-3.5 text-[#ED7938]" />
                  <span>Planning de la Semaine Type (35h / semaine)</span>
                </span>
                <span className="text-[#ED7938] font-bold">8h00 - 17h00</span>
              </div>

              <div className="grid grid-cols-7 gap-1.5 text-center font-montserrat">
                {daysOfWeek.map((item, idx) => {
                  const isRegularSchool = currentFormation.schoolDays.includes(idx);
                  const occasionalMatch = currentFormation.occasionalDays?.find((od) => od.dayIndex === idx);
                  const isWeekend = idx >= 5;

                  let cardStyle = 'bg-[#2EB29F]/10 border-[#2EB29F]/30 text-[#2EB29F]';
                  let badgeText = 'Entreprise';
                  let subText = '7h / jour';

                  if (isRegularSchool) {
                    cardStyle = 'bg-[#ED7938]/15 border-[#ED7938]/50 text-[#ED7938] ring-1 ring-[#ED7938]/30 shadow-2xs';
                    badgeText = 'École';
                    subText = '8h-17h';
                  } else if (occasionalMatch) {
                    cardStyle = 'bg-[#0CAFD1]/15 border-[#0CAFD1]/50 text-[#0CAFD1]';
                    badgeText = 'École*';
                    subText = occasionalMatch.label.replace('+ ', '');
                  } else if (isWeekend) {
                    cardStyle = 'bg-slate-100 border-slate-200 text-slate-600';
                    badgeText = 'Entreprise*';
                    subText = 'Selon conv.';
                  }

                  return (
                    <motion.div
                      key={item.day}
                      initial={{ scale: 0.95, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`p-1.5 rounded-xl border flex flex-col justify-between h-24 sm:h-28 transition-all ${cardStyle}`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
                        {item.day}
                      </span>

                      <div className="my-auto flex flex-col items-center">
                        {isRegularSchool ? (
                          <>
                            <GraduationCap className="w-4 h-4 text-[#ED7938] mb-0.5" />
                            <span className="font-spartan font-black text-[10px] uppercase text-[#ED7938]">
                              COURS
                            </span>
                          </>
                        ) : occasionalMatch ? (
                          <>
                            <GraduationCap className="w-4 h-4 text-[#0CAFD1] mb-0.5" />
                            <span className="font-spartan font-black text-[9px] uppercase text-[#0CAFD1] leading-tight">
                              COURS*
                            </span>
                          </>
                        ) : (
                          <>
                            <Building className={`w-3.5 h-3.5 mb-0.5 ${isWeekend ? 'text-slate-500' : 'text-[#2EB29F]'}`} />
                            <span className={`font-spartan font-black text-[9px] uppercase ${isWeekend ? 'text-slate-600' : 'text-[#2EB29F]'}`}>
                              {badgeText}
                            </span>
                          </>
                        )}
                      </div>

                      <span className="text-[8px] sm:text-[9px] font-bold leading-tight line-clamp-2">
                        {subText}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Note if occasional days exist */}
            {currentFormation.note && (
              <div className="p-2 rounded-lg bg-[#0CAFD1]/10 border border-[#0CAFD1]/20 flex items-center gap-1.5 text-[11px] text-[#0CAFD1]">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span><strong>Remarque :</strong> {currentFormation.note}</span>
              </div>
            )}

            {/* Two Information Cards: 5 weeks vacation + Weekend rules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-0.5">
                <div className="flex items-center gap-1.5 font-bold text-[#ED7938]">
                  <Sun className="w-3.5 h-3.5" />
                  <span className="uppercase text-[10px]">5 Semaines de Congés Payés</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Congés rémunérés posés sur les périodes en entreprise avec l'accord de l'employeur.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-0.5">
                <div className="flex items-center gap-1.5 font-bold text-[#0CAFD1]">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span className="uppercase text-[10px]">Samedi & Dimanche en Entreprise</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Possibilité de travail le week-end selon le secteur d'activité (commerce, distribution...).
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Legal & Operational Bar */}
      <div className="p-3 rounded-xl bg-[#293137] text-white flex flex-wrap items-center justify-between gap-2 text-xs font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#2EB29F] shrink-0" />
          <span>
            Horaires fixes en centre de formation : <strong>8h00 - 17h00</strong>. Planning annuel remis dès l'admission.
          </span>
        </div>
        <div className="text-[#ED7938] font-bold text-[11px] uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Contrat d'apprentissage 100% sécurisé</span>
        </div>
      </div>
    </div>
  );
};
