import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, MessageSquare, ArrowRight, Zap, ExternalLink, FileSpreadsheet, FileText } from 'lucide-react';

export const SlideAdmissionEtapes: React.FC = () => {
  const DOSSIER_URL = 'https://alesia_formation.osc3.tech/';

  const etapes = [
    {
      num: '01',
      title: 'Tests Écrits',
      when: "Aujourd'hui",
      color: '#ED7938',
      badgeBg: 'bg-[#ED7938] text-white',
      desc: '3 épreuves de logique et de raisonnement.',
      points: [
        'Chronométré (15 min • 10 min)',
        'Évaluation du potentiel & logique',
      ],
      highlight: 'Session immédiate',
      action: null,
    },
    {
      num: '02',
      title: 'Dossier Candidature',
      when: 'Sous 48h à 72h',
      color: '#0CAFD1',
      badgeBg: 'bg-[#0CAFD1] text-white',
      desc: 'Complétez votre dossier officiel 100% en ligne.',
      points: [
        'Analyse de votre parcours',
        'Notification rapide des résultats',
      ],
      highlight: 'Plateforme en ligne',
      action: {
        label: 'Compléter mon dossier',
        url: DOSSIER_URL,
      },
    },
    {
      num: '03',
      title: 'Visio WhatsApp',
      when: '15 minutes',
      color: '#2EB29F',
      badgeBg: 'bg-[#2EB29F] text-white',
      desc: 'Échange individuel avec le Directeur de campus.',
      points: [
        'Directement sur smartphone',
        'Zéro déplacement nécessaire',
      ],
      highlight: 'Simple & direct',
      action: null,
    },
    {
      num: '04',
      title: 'Atelier et accès à nos outils',
      when: '15 jours max',
      color: '#ED7938',
      badgeBg: 'bg-[#ED7938] text-white',
      desc: 'Activation immédiate de tout votre dispositif.',
      points: [
        'Accès complet à la plateforme GRIMP',
        'Ateliers CV & Sprint de placement',
      ],
      highlight: 'Recherche lancée',
      action: null,
    },
  ];

  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-5 sm:p-8 bg-[#293137] text-white overflow-hidden select-none" id="slide-admission-etapes">
      {/* Header with Direct Candidature Link Pill */}
      <div className="border-b border-white/10 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-montserrat">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/20 text-[#ED7938] font-bold text-[10px] uppercase tracking-wider border border-[#ED7938]/30">
              Parcours Express
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#2EB29F]/20 text-[#2EB29F] font-bold text-[10px] uppercase tracking-wider border border-[#2EB29F]/30">
              15 Jours Max
            </span>
          </div>
          <h2 className="font-spartan font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
            Admission en <span className="text-[#ED7938]">4 étapes simples</span>
          </h2>
        </div>

        {/* Dossier de Candidature Link Button */}
        <a
          href={DOSSIER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#0CAFD1] to-[#2EB29F] hover:from-[#099ab8] hover:to-[#259b8a] text-white text-xs font-bold uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer hover:scale-105 shrink-0"
        >
          <FileText className="w-4 h-4" />
          <span>Dossier de candidature en ligne</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 my-auto py-1">
        {etapes.map((step, idx) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            className={`p-4 rounded-2xl bg-white/[0.06] border flex flex-col justify-between hover-levitate transition-all ${
              step.action ? 'border-[#0CAFD1]/40 ring-1 ring-[#0CAFD1]/30' : 'border-white/15'
            }`}
          >
            <div className="space-y-2 font-montserrat">
              {/* Step Header */}
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${step.badgeBg}`}>
                  ÉTAPE {step.num}
                </span>
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {step.when}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="font-spartan font-black text-sm text-white uppercase truncate">
                {step.title}
              </h3>

              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                {step.desc}
              </p>

              {/* Bullet Points */}
              <div className="space-y-1.5 pt-2 border-t border-white/10">
                {step.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2EB29F] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action or Highlight */}
            <div className="mt-3 pt-2 border-t border-white/10">
              {step.action ? (
                <a
                  href={step.action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-2.5 rounded-lg bg-[#0CAFD1] hover:bg-[#099ab8] text-white text-[11px] font-bold uppercase flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <span>{step.action.label}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <div className="flex items-center gap-1.5 text-[10px] font-montserrat font-bold uppercase tracking-wider text-[#ED7938]">
                  <Sparkles className="w-3 h-3 text-[#ED7938] shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-3 rounded-xl bg-white/[0.08] border border-white/10 text-white flex flex-wrap items-center justify-between gap-3 text-xs font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <MessageSquare className="w-4 h-4 text-[#2EB29F] shrink-0" />
          <span>
            <strong>Entretien en Visio WhatsApp :</strong> Simple, rapide et sans déplacement inutile.
          </span>
        </div>
        <div className="text-[#ED7938] font-bold text-[11px] uppercase tracking-wider flex items-center gap-1">
          <Zap className="w-3.5 h-3.5" />
          <span>Résultats immédiats par SMS</span>
        </div>
      </div>
    </div>
  );
};
