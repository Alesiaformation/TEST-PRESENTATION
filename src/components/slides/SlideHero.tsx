import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, MapPin, ChevronRight, Sparkles, CheckCircle2, Zap, Target, Users } from 'lucide-react';

interface SlideHeroProps {
  onNextSlide?: () => void;
}

export const SlideHero: React.FC<SlideHeroProps> = ({ onNextSlide }) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full min-h-[640px] flex flex-col justify-between p-6 sm:p-10 text-white overflow-hidden select-none bg-[#293137]"
      id="hero-slide-container"
    >
      {/* Apple-style Ambient Luminescence */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[160px] opacity-25 transition-transform duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, #ED7938 0%, rgba(237,121,56,0.2) 45%, transparent 70%)',
            left: `${mousePos.x * 60 + 20}%`,
            top: `${mousePos.y * 50 + 15}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 transition-transform duration-1200 ease-out"
          style={{
            background: 'radial-gradient(circle, #2EB29F 0%, rgba(46,178,159,0.15) 50%, transparent 70%)',
            left: `${(1 - mousePos.x) * 60 + 20}%`,
            top: `${(1 - mousePos.y) * 50 + 25}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Header Badges */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-montserrat">
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/15 text-slate-200 font-semibold text-xs uppercase tracking-wider backdrop-blur-xl">
            <span className="text-[#ED7938] font-bold">30 ans d'expertise</span> • Hauts-de-France
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 text-xs uppercase font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#0CAFD1]" />
            <span>Lille • Lens • Amiens</span>
          </div>
        </div>

        <div className="px-3.5 py-1 rounded-full bg-[#ED7938]/15 border border-[#ED7938]/30 text-[#ED7938] font-bold text-xs uppercase tracking-wider backdrop-blur-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ED7938] animate-ping" />
          <span>Session d'Admission</span>
        </div>
      </div>

      {/* Central Content Area: Gen Z Focused (Big Headlines, Punchy Micro-Cards) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4">
        
        {/* Left Column: Direct Impact Title */}
        <div className="lg:col-span-6 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-montserrat font-bold uppercase tracking-widest text-[#0CAFD1]"
          >
            <Sparkles className="w-4 h-4 text-[#0CAFD1]" />
            <span>L'École Supérieure d'Alternance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-spartan font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.98]"
          >
            Bienvenue chez <br />
            <span className="text-[#ED7938]">Alésia Formation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-montserrat text-base sm:text-lg text-slate-200 font-normal leading-relaxed"
          >
            Un dispositif unique et exclusif pour <strong className="text-white">sécuriser votre alternance</strong>.
          </motion.p>
        </div>

        {/* Right Column: 3 Ultra-Punchy Visual Cards (Zero Fluff) */}
        <div className="lg:col-span-6 space-y-3 font-montserrat">
          
          {/* Card 1: Alternance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-xl flex items-center gap-4 hover-levitate"
          >
            <div className="p-2.5 rounded-xl bg-[#ED7938]/20 text-[#ED7938] shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-spartan font-black text-sm text-white uppercase tracking-tight">
                Trouvez votre alternance
              </h3>
              <p className="text-xs text-slate-300 font-normal">
                Méthodes concrètes, offres ciblées et coaching direct.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Ateliers & Outils */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-xl flex items-center gap-4 hover-levitate"
          >
            <div className="p-2.5 rounded-xl bg-[#0CAFD1]/20 text-[#0CAFD1] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-spartan font-black text-sm text-white uppercase tracking-tight">
                Ateliers & Outils Exclusifs
              </h3>
              <p className="text-xs text-slate-300 font-normal">
                Plateforme GRIMP, CV en 6 secondes et sprint de placement.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Suivi & Espace Dédié */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-xl flex items-center gap-4 hover-levitate"
          >
            <div className="p-2.5 rounded-xl bg-[#2EB29F]/20 text-[#2EB29F] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-spartan font-black text-sm text-white uppercase tracking-tight">
                Suivi Dédié & Lien Entreprise
              </h3>
              <p className="text-xs text-slate-300 font-normal">
                Responsables de section dédiés et placement direct.
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Footer Info */}
      <div className="relative z-10 flex flex-wrap items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/10 font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#2EB29F]" />
          <span>100 % alternance rémunérée • 0 € de reste à charge</span>
        </div>
        <div className="font-bold text-slate-400 uppercase tracking-widest text-[11px]">
          Filières : Commerce • Gestion & RH • Comptabilité
        </div>
      </div>
    </div>
  );
};
