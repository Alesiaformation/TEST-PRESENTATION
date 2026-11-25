import React from 'react';
import { Badge } from '../Badge';
import {
  Compass,
  Clock,
  Lock,
  Layers,
  Sparkles,
  Search,
  CheckCircle2,
  TrendingUp,
  Send,
  Zap,
} from 'lucide-react';

export const SlideGrimpe: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 lg:p-12 bg-[#F5F7FA] text-[#293137] select-none overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Badge label="Outil Exclusif Alésia" variant="orange" size="sm" />
            <Badge label="Centralisation Intelligente" variant="cyan" size="sm" />
            <Badge label="+2h Gagnées / Semaine" variant="mint" size="sm" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#293137]">
            La Plateforme <span className="text-[#ED7938]">GRIMPE</span> : Votre Accélérateur
          </h2>
          <p className="text-sm sm:text-base text-[#5B6670] font-medium max-w-3xl">
            Toutes les offres d'alternance du marché et de notre réseau exclusif réunies en un seul endroit.
          </p>
        </div>
      </div>

      {/* Bento Grid layout for Grimpe */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 my-auto">
        {/* Card 1: Aspirateur Job Boards (5 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-[24px] p-5 lg:p-6 border border-[#EDF1F5] shadow-alesia-card flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-2xl bg-[#ED7938]/14 text-[#ED7938] flex items-center justify-center">
                <Search className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold font-display uppercase tracking-wider text-[#ED7938] bg-[#ED7938]/10 px-3 py-1 rounded-full">
                Aspirateur Web
              </span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-[#293137]">
              Toutes les offres en direct
            </h3>
            <p className="text-xs lg:text-sm text-[#5B6670] mt-1.5 leading-relaxed">
              Grimpe aspire et centralise 100 % des offres publiées sur les principaux job boards :
            </p>
          </div>

          {/* Job Board Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['LinkedIn', 'Indeed', 'HelloWork', 'France Travail', 'MeteoJob'].map((jb) => (
              <span
                key={jb}
                className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#F5F7FA] border border-[#EDF1F5] text-[#293137] shadow-sm"
              >
                {jb}
              </span>
            ))}
          </div>

          {/* Time Saved Highlight */}
          <div className="p-3.5 rounded-2xl bg-[#2EB29F]/10 border border-[#2EB29F]/25 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#2EB29F] text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-[#2EB29F] block text-sm">+2h gagnées par semaine</span>
              <span className="text-[#5B6670]">Plus besoin de naviguer sur 10 sites différents.</span>
            </div>
          </div>
        </div>

        {/* Card 2: Offres Exclusives & Partenaires (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-[24px] p-5 lg:p-6 border border-[#EDF1F5] shadow-alesia-card flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-2xl bg-[#0CAFD1]/14 text-[#0CAFD1] flex items-center justify-center">
                <Lock className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold font-display uppercase tracking-wider text-[#0CAFD1] bg-[#0CAFD1]/10 px-3 py-1 rounded-full">
                100% Exclusif
              </span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-[#293137]">
              Offres Partenaires Dédiées
            </h3>
            <p className="text-xs lg:text-sm text-[#5B6670] mt-1.5 leading-relaxed">
              Nos entreprises partenaires ont un accès direct et y déposent des offres exclusives <span className="font-bold text-[#293137]">réservées uniquement aux étudiants d'Alésia</span>.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2 text-xs font-medium text-[#293137]">
              <CheckCircle2 className="w-4 h-4 text-[#2EB29F] flex-shrink-0 mt-0.5" />
              <span>Offres entrantes de l'école publiées en temps réel</span>
            </div>
            <div className="flex items-start gap-2 text-xs font-medium text-[#293137]">
              <CheckCircle2 className="w-4 h-4 text-[#2EB29F] flex-shrink-0 mt-0.5" />
              <span>Accès direct des 1 500 entreprises partenaires</span>
            </div>
            <div className="flex items-start gap-2 text-xs font-medium text-[#293137]">
              <CheckCircle2 className="w-4 h-4 text-[#2EB29F] flex-shrink-0 mt-0.5" />
              <span>Priorité absolue accordée à votre profil</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#F5F7FA] border border-[#EDF1F5] text-xs font-semibold text-[#5B6670] text-center">
            Zéro concurrence extérieure sur ces postes
          </div>
        </div>

        {/* Card 3: Suivi & Push de Candidature (4 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-[24px] p-5 lg:p-6 border border-[#EDF1F5] shadow-alesia-card flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 rounded-2xl bg-[#2EB29F]/14 text-[#2EB29F] flex items-center justify-center">
                <Send className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold font-display uppercase tracking-wider text-[#2EB29F] bg-[#2EB29F]/10 px-3 py-1 rounded-full">
                Suivi 360°
              </span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-[#293137]">
              Cockpit & Push Candidature
            </h3>
            <p className="text-xs lg:text-sm text-[#5B6670] mt-1.5 leading-relaxed">
              Retrouvez toutes vos candidatures et déposez vos démarches spontanées pour un suivi sur-mesure.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#ED7938]/10 border border-[#ED7938]/25 space-y-2">
            <div className="flex items-center gap-2 text-[#ED7938] font-bold text-xs uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Pourquoi c'est décisif ?</span>
            </div>
            <p className="text-xs text-[#293137] font-semibold leading-relaxed">
              Votre Responsable de Section sait exactement où vous postulez et <span className="text-[#ED7938] font-bold">appelle directement les recruteurs</span> pour appuyer et pousser votre dossier !
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-[#8A949C] pt-1">
            <span>Synchronisation immédiate</span>
            <span className="text-[#2EB29F] font-bold">100% Opérationnel</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#EDF1F5] pt-3 text-xs text-[#8A949C] font-semibold">
        <span>Alésia Formation • Plateforme Grimpe Connectée</span>
        <span className="text-[#ED7938]">Accès offert à tous nos étudiants admis</span>
      </div>
    </div>
  );
};
