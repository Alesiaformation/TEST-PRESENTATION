import React, { useState } from 'react';
import { Badge } from '../Badge';
import { Video, BookOpen, LayoutDashboard, Play, CheckCircle2, MessageSquare, ChevronRight } from 'lucide-react';

export const SlideKitCandidat: React.FC = () => {
  const [activeTool, setActiveTool] = useState<number>(0);

  const tools = [
    {
      id: 0,
      title: "Simulateur d'Entretien Vidéo",
      badge: 'Entraînement IA & Caméra',
      color: '#0CAFD1',
      icon: Video,
      description: "Entraînez-vous face caméra aux 30 questions les plus posées par les recruteurs régionaux.",
      features: [
        'Analyse du débit de parole, du regard et de la clarté',
        'Scénarios réalistes par filière (Commerce, RH, Gestion)',
        'Feedback instantané et conseils d’amélioration',
      ],
      previewHeadline: 'Pitch 2 minutes : « Parlez-moi de vous »',
      previewSub: 'Simulation guidée avec chrono et suggestions d’arguments clés',
    },
    {
      id: 1,
      title: 'Fiches Métiers & Questions Pièges',
      badge: 'Expertise Sectorielle',
      color: '#ED7938',
      icon: BookOpen,
      description: "Maîtrisez le jargon technique et les attentes concrètes du poste avant de vous présenter.",
      features: [
        'Lexique métier essentiel pour briller dès la première phrase',
        'Réponses recommandées aux questions déstabilisantes',
        'Grilles d’évaluation utilisées par les tuteurs d’entreprise',
      ],
      previewHeadline: 'Fiche Réflexe : « Pourquoi notre entreprise ? »',
      previewSub: 'Structure en 3 temps pour transformer une hésitation en opportunité',
    },
    {
      id: 2,
      title: 'Dashboard de Suivi de Candidatures',
      badge: 'Pilotage & Relances',
      color: '#2EB29F',
      icon: LayoutDashboard,
      description: "Ne perdez plus jamais le fil d'un contact avec notre outil de relance automatisé.",
      features: [
        'Statut en direct de chaque envoi (Envoyé, Relancé, Entretien fixé)',
        'Alertes intelligentes de relance à J+5 et J+10',
        'Historique des échanges et coordonnées des tuteurs',
      ],
      previewHeadline: 'Tableau de Bord : 24 candidatures actives',
      previewSub: '2 relances recommandées aujourd’hui • 3 entretiens programmés',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 lg:p-14 bg-[#F5F7FA] text-[#293137] select-none overflow-y-auto">
      {/* Top Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Badge label="Suite Digitale Alésia" variant="cyan" size="md" />
          <Badge label="100% Inclus" variant="mint" size="md" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#293137]">
          Le <span className="text-[#ED7938]">kit</span> digital complet du candidat parfait
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-[#5B6670] font-medium max-w-3xl">
          Des outils technologiques exclusifs pour vous préparer et piloter vos recherches comme un professionnel.
        </p>
      </div>

      {/* Main 3 Bento Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-auto pt-4">
        {tools.map((tool, idx) => {
          const Icon = tool.icon;
          const isSelected = activeTool === idx;
          return (
            <div
              key={tool.id}
              onClick={() => setActiveTool(idx)}
              className={`bg-white rounded-[24px] p-6 lg:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'border-[#ED7938] shadow-alesia-elevated ring-2 ring-[#ED7938]/20 -translate-y-1'
                  : 'border-[#EDF1F5] shadow-alesia-card hover:-translate-y-1 hover:border-gray-300'
              }`}
            >
              <div className="space-y-4">
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
                  >
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span
                    className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
                  >
                    {tool.badge}
                  </span>
                </div>

                {/* Title & Desc */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#293137]">
                    {tool.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6670] mt-1.5 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                {/* Feature bullets */}
                <div className="space-y-2 pt-2 border-t border-[#EDF1F5] text-xs text-[#293137]">
                  {tool.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: tool.color }}
                      />
                      <span className="text-[#5B6670] font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Tool Preview Box */}
              <div className="mt-4 p-3.5 rounded-2xl bg-[#F5F7FA] border border-[#EDF1F5] text-xs space-y-1">
                <div className="font-bold text-[#293137] flex items-center justify-between">
                  <span>{tool.previewHeadline}</span>
                  <ChevronRight className="w-4 h-4 text-[#8A949C]" />
                </div>
                <div className="text-[11px] text-[#8A949C]">{tool.previewSub}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Reassurance Banner */}
      <div className="bg-white rounded-2xl p-4 lg:p-5 border border-[#EDF1F5] shadow-alesia-card flex items-center justify-between gap-4 mt-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#0CAFD1]" />
          <span className="text-sm sm:text-base font-bold text-[#293137]">
            Accessible 24h/24 & 7j/7 dès votre admissibilité sur votre espace personnel.
          </span>
        </div>
        <span className="text-xs uppercase font-bold tracking-wider text-[#ED7938]">
          Prêt pour l'emploi
        </span>
      </div>
    </div>
  );
};
