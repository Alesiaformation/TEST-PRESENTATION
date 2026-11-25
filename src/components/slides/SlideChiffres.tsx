import React from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Briefcase, Building2, GraduationCap, Star, CheckCircle, ShieldCheck } from 'lucide-react';

export const SlideChiffres: React.FC = () => {
  const stats = [
    {
      id: 'reussite',
      icon: Award,
      badge: 'Excellence Académique',
      iconBg: 'bg-[#ED7938]/10 text-[#ED7938]',
      accentColor: 'text-[#ED7938]',
      value: '+91 %',
      label: "Réussite aux examens d'État",
      detail: "Une préparation rigoureuse et un encadrement d'excellence du Bac+2 au Bac+5.",
      comparison: 'vs 74,7 % moyenne nationale académique',
    },
    {
      id: 'moyenne',
      icon: TrendingUp,
      badge: 'Niveau d’Exigence',
      iconBg: 'bg-[#0CAFD1]/10 text-[#0CAFD1]',
      accentColor: 'text-[#0CAFD1]',
      value: '13 / 20',
      label: 'Moyenne aux examens BTS',
      detail: 'Des performances académiques largement au-dessus des standards nationaux.',
      comparison: 'vs 11,5 / 20 moyenne nationale',
    },
    {
      id: 'insertion',
      icon: Briefcase,
      badge: 'Débouchés Directs',
      iconBg: 'bg-[#2EB29F]/10 text-[#2EB29F]',
      accentColor: 'text-[#2EB29F]',
      value: '+86 %',
      label: 'Insertion globale à +6 mois',
      detail: 'Nos diplômés sont rapidement en poste (CDI/CDD) ou poursuivent leurs études supérieures.',
      comparison: 'Emploi direct ou tremplin Bac+3/Bac+5',
    },
    {
      id: 'entreprises',
      icon: Building2,
      badge: 'Réseau Territorial',
      iconBg: 'bg-[#ED7938]/10 text-[#ED7938]',
      accentColor: 'text-[#ED7938]',
      value: '1 500',
      label: 'Entreprises partenaires',
      detail: 'Un réseau solide et actif dans les Hauts-de-France pour trouver facilement votre alternance.',
      comparison: 'Accès direct via nos chargés de relation',
    },
    {
      id: 'poursuite',
      icon: GraduationCap,
      badge: 'Ascenseur Social',
      iconBg: 'bg-[#0CAFD1]/10 text-[#0CAFD1]',
      accentColor: 'text-[#0CAFD1]',
      value: '73 %',
      label: 'Poursuite d’études',
      detail: 'Un véritable tremplin pour continuer à monter en compétences jusqu’au niveau Bac+5.',
      comparison: 'Passerelles directes BTS ➔ Bachelor ➔ Mastère',
    },
    {
      id: 'satisfaction',
      icon: Star,
      badge: 'Avis Apprentis',
      iconBg: 'bg-[#2EB29F]/10 text-[#2EB29F]',
      accentColor: 'text-[#2EB29F]',
      value: '8 / 10',
      label: 'Satisfaction globale',
      detail: 'Une expérience de formation et un accompagnement humain validés par nos alternants.',
      comparison: 'Évaluations certifiées chaque semestre',
    },
  ];

  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-6 sm:p-10 bg-[#F5F7FA] text-[#293137] overflow-hidden select-none" id="slide-chiffres">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EDF1F5] pb-4 font-montserrat">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/15 text-[#ED7938] font-bold text-[10px] uppercase tracking-wider">
              Données Vérifiées
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#2EB29F]/15 text-[#2EB29F] font-bold text-[10px] uppercase tracking-wider">
              Hauts-de-France
            </span>
          </div>
          <h2 className="font-spartan font-black text-2xl sm:text-3xl text-[#293137] tracking-tight uppercase">
            Nos Chiffres Clés : <span className="text-[#ED7938]">Du Bac+2 au Bac+5</span>
          </h2>
        </div>
      </div>

      {/* Grid of all 6 Key Numbers with hover-levitate */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-auto py-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-5 rounded-2xl bg-white border border-[#EDF1F5] shadow-sm hover-levitate transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className={`p-2.5 rounded-xl ${stat.iconBg} shadow-xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-montserrat font-bold text-slate-500 uppercase tracking-wider">
                    {stat.badge}
                  </span>
                </div>

                {/* Big Number Display in League Spartan */}
                <div className={`font-spartan font-black text-4xl sm:text-5xl ${stat.accentColor} tracking-tight uppercase mb-1`}>
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="font-spartan font-bold text-sm text-[#293137] uppercase mb-1.5 leading-snug">
                  {stat.label}
                </h3>

                {/* Detail */}
                <p className="font-montserrat text-xs text-slate-600 leading-relaxed font-normal">
                  {stat.detail}
                </p>
              </div>

              {/* Bottom Comparison pill */}
              <div className="mt-4 pt-3 border-t border-[#EDF1F5] flex items-center gap-1.5 text-[11px] font-montserrat font-bold text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-[#2EB29F] shrink-0" />
                <span>{stat.comparison}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Proof Banner */}
      <div className="p-3.5 rounded-xl bg-[#293137] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#ED7938] shrink-0" />
          <span>
            Des résultats audités et constants depuis <strong>30 ans</strong> sur nos campus de <strong>Lille, Lens et Amiens</strong>.
          </span>
        </div>
        <div className="text-slate-300 shrink-0 font-bold text-[11px] uppercase tracking-wider">
          Taux certifié conforme France Compétences & Éducation Nationale
        </div>
      </div>
    </div>
  );
};
