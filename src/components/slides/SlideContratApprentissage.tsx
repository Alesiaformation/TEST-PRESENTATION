import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Banknote, Heart, GraduationCap, Calculator, CheckCircle2, Sparkles, Building, TrendingDown, Coins, HelpCircle } from 'lucide-react';

export const SlideContratApprentissage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'etudiant' | 'entreprise'>('etudiant');
  const [ageGroup, setAgeGroup] = useState<'under18' | '18to20' | '21to25' | '26plus'>('18to20');
  const [yearIndex, setYearIndex] = useState<number>(1);

  // SMIC Brut Mensuel Base (~1 801.80 €)
  const SMIC_BRUT = 1801.80;

  // Grille légale de rémunération minimale (% du SMIC)
  const salaryGrid: Record<string, number[]> = {
    under18: [27, 39, 55],
    '18to20': [43, 51, 67],
    '21to25': [53, 61, 78],
    '26plus': [100, 100, 100],
  };

  const percentage = salaryGrid[ageGroup][yearIndex - 1];
  const monthlySalary = Math.round((SMIC_BRUT * percentage) / 100);
  const annualGrossSalary = monthlySalary * 12;

  // Aide État Entreprise (4 500 € la 1ère année)
  const AIDE_ETAT = 4500;
  const costWithoutAidMonthly = Math.round(monthlySalary * 1.05); // charges patronales allégées
  const costWithoutAidAnnual = costWithoutAidMonthly * 12;
  const costWithAidAnnual = Math.max(0, costWithoutAidAnnual - (yearIndex === 1 ? AIDE_ETAT : 0));
  const costWithAidMonthly = Math.round(costWithAidAnnual / 12);
  const classicEmployeeMonthly = 2400; // SMIC chargé
  const economyPercent = Math.round(((classicEmployeeMonthly - costWithAidMonthly) / classicEmployeeMonthly) * 100);

  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-6 sm:p-10 bg-[#293137] text-white overflow-hidden select-none" id="slide-contrat-apprentissage">
      {/* Header with Dual Perspective Switcher */}
      <div className="border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-montserrat">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/20 text-[#ED7938] font-bold text-[10px] uppercase tracking-wider border border-[#ED7938]/30">
              Statut Salarié & Financement 100% OPCO
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#2EB29F]/20 text-[#2EB29F] font-bold text-[10px] uppercase tracking-wider border border-[#2EB29F]/30">
              Aide Entreprise : 4 500 €
            </span>
          </div>
          <h2 className="font-spartan font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
            Contrat d'Apprentissage : <span className="text-[#ED7938]">Salaire & Aides Entreprise</span>
          </h2>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-white/10 p-1 rounded-xl gap-1 border border-white/10">
          <button
            onClick={() => setViewMode('etudiant')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              viewMode === 'etudiant'
                ? 'bg-[#ED7938] text-white shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Pour l'Apprenti
          </button>
          <button
            onClick={() => setViewMode('entreprise')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              viewMode === 'entreprise'
                ? 'bg-[#2EB29F] text-white shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Aides & Coût Entreprise
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        
        {/* Left: 4 Pillars of Apprenticeship */}
        <div className="lg:col-span-6 space-y-2.5 font-montserrat">
          <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/15 shadow-xs flex items-start gap-3 hover-levitate">
            <div className="p-2 rounded-lg bg-[#2EB29F]/20 text-[#2EB29F] shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-spartan font-bold text-white uppercase block text-xs mb-0.5">
                01. 0 € de frais de scolarité (Reste à charge zéro)
              </span>
              <span className="text-slate-300 font-normal leading-relaxed">
                L'intégralité du coût pédagogique est financée par l'OPCO de l'entreprise d'accueil.
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/15 shadow-xs flex items-start gap-3 hover-levitate">
            <div className="p-2 rounded-lg bg-[#ED7938]/20 text-[#ED7938] shrink-0 mt-0.5">
              <Banknote className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-spartan font-bold text-white uppercase block text-xs mb-0.5">
                02. Salaire net mensuel exonéré de cotisations
              </span>
              <span className="text-slate-300 font-normal leading-relaxed">
                Votre salaire brut est perçu en quasi-totalité en net (exonération de cotisations salariales).
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/15 shadow-xs flex items-start gap-3 hover-levitate">
            <div className="p-2 rounded-lg bg-[#0CAFD1]/20 text-[#0CAFD1] shrink-0 mt-0.5">
              <Coins className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-spartan font-bold text-white uppercase block text-xs mb-0.5">
                03. Aide d'État de 4 500 € versée à l'entreprise
              </span>
              <span className="text-slate-300 font-normal leading-relaxed">
                L'État verse une prime de <strong>4 500 €</strong> dès la première année à toute entreprise qui recrute un alternant.
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/15 shadow-xs flex items-start gap-3 hover-levitate">
            <div className="p-2 rounded-lg bg-white/10 text-white shrink-0 mt-0.5">
              <GraduationCap className="w-4 h-4 text-[#ED7938]" />
            </div>
            <div className="text-xs">
              <span className="font-spartan font-bold text-white uppercase block text-xs mb-0.5">
                04. Aide financière de 500 € pour le Permis B
              </span>
              <span className="text-slate-300 font-normal leading-relaxed">
                Une aide directe de 500 € accordée par l'État pour financer votre permis de conduire.
              </span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Simulator */}
        <div className="lg:col-span-6">
          <div className="p-6 rounded-2xl bg-white/[0.06] border border-white/15 shadow-md space-y-4 hover-levitate font-montserrat">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#ED7938]" />
                <h4 className="font-spartan font-black text-sm text-white uppercase">
                  {viewMode === 'etudiant' ? 'Simulation de Rémunération' : 'Simulation Économie Entreprise'}
                </h4>
              </div>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#2EB29F]/20 text-[#2EB29F] border border-[#2EB29F]/30">
                {viewMode === 'etudiant' ? 'Statut Salarié' : 'Aide État 4 500 €'}
              </span>
            </div>

            {/* Age Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Tranche d'âge de l'apprenti :
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'under18', label: '- 18 ans' },
                  { id: '18to20', label: '18 - 20 ans' },
                  { id: '21to25', label: '21 - 25 ans' },
                  { id: '26plus', label: '26 ans et +' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAgeGroup(item.id as any)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      ageGroup === item.id
                        ? 'bg-[#ED7938] text-white shadow-md'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Année du contrat :
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { yr: 1, label: '1ère Année' },
                  { yr: 2, label: '2ème Année' },
                  { yr: 3, label: '3ème Année' },
                ].map((item) => (
                  <button
                    key={item.yr}
                    onClick={() => setYearIndex(item.yr)}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      yearIndex === item.yr
                        ? 'bg-[#2EB29F] text-white shadow-md'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Display based on view mode */}
            {viewMode === 'etudiant' ? (
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#2EB29F]/20 to-[#0CAFD1]/20 border border-[#2EB29F]/40 text-center space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Salaire net mensuel perçu estimé :
                </div>
                <div className="font-spartan font-black text-4xl text-white uppercase">
                  ~{monthlySalary.toLocaleString('fr-FR')} € <span className="text-base text-slate-400 font-normal">/ mois</span>
                </div>
                <div className="text-xs font-bold text-[#2EB29F] uppercase tracking-wider">
                  {percentage} % du SMIC ({yearIndex}e année) • 100 % exonéré d'impôts
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Salarié CDI standard</div>
                    <div className="font-spartan font-bold text-lg text-slate-200">~2 400 € / mois</div>
                    <div className="text-[10px] text-slate-400">28 800 € / an</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#2EB29F]/20 border border-[#2EB29F]/40 text-white">
                    <div className="text-[10px] uppercase font-bold text-[#2EB29F]">Coût Apprenti (avec aide 4,5k€)</div>
                    <div className="font-spartan font-black text-lg text-[#2EB29F]">~{costWithAidMonthly} € / mois</div>
                    <div className="text-[10px] font-bold text-[#2EB29F]">{costWithAidAnnual.toLocaleString('fr-FR')} € / an</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-[#ED7938]/20 to-[#f59e0b]/20 border border-[#ED7938]/40 flex items-center justify-between">
                  <div className="text-xs font-bold text-[#ED7938] uppercase">
                    Économie pour l'entreprise :
                  </div>
                  <div className="font-spartan font-black text-2xl text-[#ED7938]">
                    jusqu'à {economyPercent} %
                  </div>
                </div>
              </div>
            )}

            <div className="text-[10px] text-slate-400 italic">
              *Aide de l'État de 4 500 € versée mensuellement à l'employeur durant les 12 premiers mois du contrat d'apprentissage.
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Proof Bar */}
      <div className="p-3 rounded-xl bg-white/[0.08] border border-white/10 text-white flex flex-wrap items-center justify-between gap-2 text-xs font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <Sparkles className="w-4 h-4 text-[#ED7938] shrink-0" />
          <span>Grâce à l'aide de <strong>4 500 €</strong>, recruter un alternant d'Alésia est ultra avantageux pour les entreprises !</span>
        </div>
        <div className="text-slate-300 font-bold text-[11px] uppercase tracking-wider">
          Aide Unique État • Embauche Apprentis
        </div>
      </div>
    </div>
  );
};
