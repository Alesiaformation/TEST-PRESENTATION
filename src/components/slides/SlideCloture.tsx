import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  HeartHandshake,
  AlertCircle,
  Search,
  DollarSign,
  Briefcase,
  FileText,
  ExternalLink
} from 'lucide-react';

interface SlideClotureProps {
  onNextSlide?: () => void;
}

interface FaqItem {
  id: string;
  question: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  answer: string;
  points?: string[];
}

export const SlideCloture: React.FC<SlideClotureProps> = () => {
  const DOSSIER_URL = 'https://alesia_formation.osc3.tech/';

  const faqs: FaqItem[] = [
    {
      id: 'faq-septembre',
      question: "Qu'est-ce qui se passe si je n'ai pas mon alternance en septembre ?",
      badge: 'Garantie & Sérénité',
      badgeColor: 'bg-[#ED7938]/20 text-[#ED7938] border-[#ED7938]/30',
      icon: <AlertCircle className="w-4 h-4 text-[#ED7938]" />,
      answer: "Pas de panique ! La loi et Alésia Formation vous protègent :",
      points: [
        "Délai légal de 3 mois : vous intégrez les cours dès la rentrée sans contrat.",
        "Accompagnement intensif : nos coachs et Responsables de section vous coachent jusqu'à fin décembre.",
        "Accès maintenu à 100% à nos Job Datings et aux offres de la plateforme GRIMP.",
      ],
    },
    {
      id: 'faq-trouver',
      question: "Comment trouver mon alternance avec Alésia Formation ?",
      badge: 'Méthode Éprouvée',
      badgeColor: 'bg-[#0CAFD1]/20 text-[#0CAFD1] border-[#0CAFD1]/30',
      icon: <Search className="w-4 h-4 text-[#0CAFD1]" />,
      answer: "Vous bénéficiez d'un dispositif complet à 4 leviers :",
      points: [
        "1. Plateforme GRIMP : toutes les offres du marché centralisées et boostées.",
        "2. Ateliers CV 6s & Sprint : base d'entreprises ciblées et scripts d'accroche.",
        "3. Responsables de section : placement direct auprès de nos entreprises partenaires.",
        "4. Job Datings exclusifs : entretiens en face-à-face sur nos campus.",
      ],
    },
    {
      id: 'faq-cout',
      question: "Combien coûte ma formation en alternance ?",
      badge: '0 € Reste à Charge',
      badgeColor: 'bg-[#2EB29F]/20 text-[#2EB29F] border-[#2EB29F]/30',
      icon: <DollarSign className="w-4 h-4 text-[#2EB29F]" />,
      answer: "Strictement 0 € pour l'étudiant et sa famille !",
      points: [
        "100% financé par l'OPCO de l'entreprise d'accueil dans le cadre du contrat d'apprentissage.",
        "Zéro frais de scolarité, zéro frais de dossier ou d'inscription.",
      ],
    },
    {
      id: 'faq-statut',
      question: "Quel est mon statut et ma rémunération ?",
      badge: 'Statut Salarié',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      icon: <Briefcase className="w-4 h-4 text-purple-400" />,
      answer: "Vous êtes salarié à part entière de l'entreprise :",
      points: [
        "Salaire mensuel net (exonéré d'impôts) fixé selon votre âge et niveau d'études.",
        "5 semaines de congés payés par an + couverture sociale complète.",
        "Carte Étudiant des Métiers (réductions transports, cinémas, restauration).",
      ],
    },
  ];

  const [activeFaqId, setActiveFaqId] = useState<string>(faqs[0].id);

  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-5 sm:p-8 bg-[#293137] text-white overflow-hidden select-none" id="slide-cloture">
      {/* Header */}
      <div className="border-b border-white/10 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-montserrat">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/20 text-[#ED7938] font-bold text-[10px] uppercase tracking-wider border border-[#ED7938]/30">
              Questions & Réponses
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#2EB29F]/20 text-[#2EB29F] font-bold text-[10px] uppercase tracking-wider border border-[#2EB29F]/30">
              Contacts Officiels
            </span>
          </div>
          <h2 className="font-spartan font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
            Vos questions fréquentes & <span className="text-[#ED7938]">Contacts</span>
          </h2>
        </div>

        <a
          href={DOSSIER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#ED7938] to-[#ea580c] hover:from-[#d66527] hover:to-[#c2410c] text-white text-xs font-bold uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer hover:scale-105 shrink-0"
        >
          <FileText className="w-4 h-4" />
          <span>Dossier de candidature</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Grid: FAQ Accordion on Left + Contacts on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto py-1 font-montserrat">
        
        {/* Left Column (8 cols): Interactive FAQ List */}
        <div className="lg:col-span-8 flex flex-col gap-2">
          <div className="text-xs font-spartan font-bold uppercase text-slate-300 flex items-center gap-1.5 mb-0.5">
            <HelpCircle className="w-4 h-4 text-[#ED7938]" />
            <span>Foire aux Questions Essentielles</span>
          </div>

          <div className="space-y-2">
            {faqs.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white/[0.09] border-[#ED7938]/60 shadow-lg'
                      : 'bg-white/[0.04] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaqId(isOpen ? '' : faq.id)}
                    className="w-full p-3 text-left flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded-lg bg-white/10 shrink-0">
                        {faq.icon}
                      </div>
                      <span className="font-spartan font-bold text-xs sm:text-sm text-white uppercase truncate">
                        {faq.question}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`hidden sm:inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase border ${faq.badgeColor}`}>
                        {faq.badge}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#ED7938]' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-3 pt-1 border-t border-white/10 font-montserrat"
                      >
                        <p className="text-xs text-slate-200 mb-2 font-medium">
                          {faq.answer}
                        </p>
                        {faq.points && (
                          <div className="space-y-1 pl-1">
                            {faq.points.map((pt, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EB29F] shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column (4 cols): Contacts & Confidence Box */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-3">
          
          {/* Motivation Box */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#ED7938]/20 via-white/[0.05] to-transparent border border-[#ED7938]/30 space-y-1.5 hover-levitate">
            <div className="flex items-center gap-1.5 text-[#ED7938] font-bold text-[10px] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engagement Alésia</span>
            </div>
            <h3 className="font-spartan font-black text-xs sm:text-sm text-white uppercase leading-snug">
              Votre réussite et votre alternance sécurisées
            </h3>
            <p className="text-xs text-slate-300 font-normal leading-relaxed">
              En appliquant nos méthodes et ateliers, vous bénéficiez d'un accompagnement personnalisé jusqu'à votre signature de contrat.
            </p>
          </div>

          {/* Contacts Box */}
          <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 space-y-2">
            <h4 className="font-spartan font-bold text-xs text-white uppercase border-b border-white/10 pb-1.5 flex items-center justify-between">
              <span>Coordonnées Officielles</span>
              <span className="text-[10px] text-[#2EB29F] font-semibold">3 Campus</span>
            </h4>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-[#ED7938]/20 text-[#ED7938] shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-xs">contact@alesiaformation.fr</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-[#0CAFD1]/20 text-[#0CAFD1] shrink-0">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-xs">www.alesia-formation.fr</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-[#2EB29F]/20 text-[#2EB29F] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-xs">09 70 24 95 10 (Non surtaxé)</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-white/10 text-slate-300 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-xs">Campus : Lille • Lens • Amiens</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Proof Bar */}
      <div className="p-2.5 rounded-xl bg-white/[0.08] border border-white/10 text-white flex flex-wrap items-center justify-between gap-2 text-xs font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <HeartHandshake className="w-4 h-4 text-[#ED7938] shrink-0" />
          <span>Toute l'équipe d'Alésia Formation vous souhaite une excellente session d'admission !</span>
        </div>
        <div className="text-slate-300 font-bold text-[11px] uppercase tracking-wider">
          Établissement Supérieur Privé • Qualiopi
        </div>
      </div>
    </div>
  );
};
