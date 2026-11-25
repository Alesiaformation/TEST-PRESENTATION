import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UserCheck, 
  Building, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  FileText, 
  Star,
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  GraduationCap
} from 'lucide-react';

interface FormationOption {
  id: string;
  name: string;
  shortCode: string;
  email: string;
  note?: string;
}

interface CampusOption {
  id: 'lille' | 'lens' | 'amiens';
  name: string;
  formations: FormationOption[];
}

const RESPONSABLES_DATA: CampusOption[] = [
  {
    id: 'lille',
    name: 'Campus de Lille',
    formations: [
      { id: 'bts-sam', name: "BTS SAM (Support à l'Action Managériale)", shortCode: 'BTS SAM', email: 'vmaliet@alesiaformation.fr' },
      { id: 'bts-gpme', name: 'BTS GPME (Gestion de la PME)', shortCode: 'BTS GPME', email: 'vmaliet@alesiaformation.fr' },
      { id: 'crh', name: 'Bachelor RH / CRH (Chargé des Ressources Humaines)', shortCode: 'Bachelor RH', email: 'vmaliet@alesiaformation.fr' },
      { id: 'mrh', name: 'Mastère MRH (Manager des Ressources Humaines)', shortCode: 'Mastère MRH', email: 'slecerf@alesiaformation.fr' },
      { id: 'bts-mco', name: 'BTS MCO (Management Commercial Opérationnel)', shortCode: 'BTS MCO', email: 'proye@alesiaformation.fr' },
      { id: 'bts-ndrc', name: 'BTS NDRC (Négociation & Relation Client)', shortCode: 'BTS NDRC', email: 'proye@alesiaformation.fr' },
      { id: 'rda', name: 'Bachelor RDA (Responsable Dév. Activités)', shortCode: 'Bachelor RDA', email: 'proye@alesiaformation.fr' },
      { id: 'mcm', name: 'Mastère MCM (Manager Commercial & Marketing)', shortCode: 'Mastère MCM', email: 'jdondaine@alesiaformation.fr' },
      { id: 'bts-cg', name: 'BTS CG (Comptabilité et Gestion)', shortCode: 'BTS CG', email: 'jcpick@alesiaformation.fr' },
      { id: 'dcg', name: 'DCG (Comptabilité & Gestion - 2 & 3 ans)', shortCode: 'DCG', email: 'jcpick@alesiaformation.fr' },
      { id: 'dscg', name: 'DSCG (Supérieur Comptabilité & Gestion)', shortCode: 'DSCG', email: 'jcpick@alesiaformation.fr' },
    ],
  },
  {
    id: 'lens',
    name: 'Campus de Lens',
    formations: [
      { id: 'bts-sam', name: "BTS SAM (Support à l'Action Managériale)", shortCode: 'BTS SAM', email: 'slecerf@alesiaformation.fr' },
      { id: 'bts-gpme', name: 'BTS GPME (Gestion de la PME)', shortCode: 'BTS GPME', email: 'jdondaine@alesiaformation.fr' },
      { id: 'bts-mco', name: 'BTS MCO (Management Commercial Opérationnel)', shortCode: 'BTS MCO', email: 'aramaut@alesiaformation.fr' },
      { id: 'bts-ndrc', name: 'BTS NDRC (Négociation & Relation Client)', shortCode: 'BTS NDRC', email: 'aramaut@alesiaformation.fr' },
      { id: 'bts-cg', name: 'BTS CG (Comptabilité et Gestion)', shortCode: 'BTS CG', email: 'alabonte@alesiaformation.fr' },
    ],
  },
  {
    id: 'amiens',
    name: "Campus d'Amiens",
    formations: [
      { id: 'bts-cg', name: 'BTS CG (Comptabilité et Gestion)', shortCode: 'BTS CG', email: 'acharpentier@alesiaformation.fr' },
      { id: 'bts-gpme', name: 'BTS GPME (Gestion de la PME)', shortCode: 'BTS GPME', email: 'acharpentier@alesiaformation.fr' },
      { id: 'bts-mco', name: 'BTS MCO (Management Commercial Opérationnel)', shortCode: 'BTS MCO', email: 'amiens@alesiaformation.fr', note: 'Affectation en cours' },
      { id: 'bts-ndrc', name: 'BTS NDRC (Négociation & Relation Client)', shortCode: 'BTS NDRC', email: 'amiens@alesiaformation.fr', note: 'Affectation en cours' },
      { id: 'rda', name: 'Bachelor RDA (Responsable Dév. Activités)', shortCode: 'Bachelor RDA', email: 'amiens@alesiaformation.fr', note: 'Affectation en cours' },
    ],
  },
];

export const SlideResponsablesSection: React.FC = () => {
  const [selectedCampusId, setSelectedCampusId] = useState<'lille' | 'lens' | 'amiens'>('lille');
  
  const currentCampus = RESPONSABLES_DATA.find((c) => c.id === selectedCampusId) || RESPONSABLES_DATA[0];
  const [selectedFormationId, setSelectedFormationId] = useState<string>(currentCampus.formations[0].id);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCampusChange = (campusId: 'lille' | 'lens' | 'amiens') => {
    setSelectedCampusId(campusId);
    const targetCampus = RESPONSABLES_DATA.find((c) => c.id === campusId);
    if (targetCampus && targetCampus.formations.length > 0) {
      setSelectedFormationId(targetCampus.formations[0].id);
    }
  };

  const currentFormation = currentCampus.formations.find((f) => f.id === selectedFormationId) || currentCampus.formations[0];

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-5 sm:p-8 bg-[#F5F7FA] text-[#293137] overflow-hidden select-none" id="slide-responsables-section">
      {/* Header */}
      <div className="border-b border-[#EDF1F5] pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-montserrat">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/15 text-[#ED7938] font-bold text-[10px] uppercase tracking-wider">
              Accompagnement Dédié
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#0CAFD1]/15 text-[#0CAFD1] font-bold text-[10px] uppercase tracking-wider">
              Lien Entreprise Direct
            </span>
          </div>
          <h2 className="font-spartan font-black text-2xl sm:text-3xl text-[#293137] tracking-tight uppercase">
            Vos Responsables de Section : <span className="text-[#ED7938]">votre lien direct</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Un tuteur dédié pour votre placement et votre réussite sur le terrain.
          </p>
        </div>

        <div className="p-2.5 rounded-2xl bg-white border border-[#EDF1F5] shadow-xs flex items-center gap-3 shrink-0 hover-levitate">
          <div className="p-2 rounded-xl bg-[#ED7938]/15 text-[#ED7938]">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-spartan font-black text-xs text-[#293137] uppercase leading-none">
              Suivi & Placement
            </div>
            <div className="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-wider">
              Étudiant • Tuteur • École
            </div>
          </div>
        </div>
      </div>

      {/* 4 Main Action Pillars (Preserved from initial version) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-auto py-1 font-montserrat">
        
        {/* Pillar 1 */}
        <div className="p-3.5 rounded-2xl bg-white border border-[#EDF1F5] shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-[#ED7938]/15 text-[#ED7938]">
                <FileText className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-[#ED7938]/10 text-[#ED7938] text-[10px] font-bold uppercase">Placement</span>
            </div>

            <h3 className="font-spartan font-black text-xs text-[#293137] uppercase leading-snug">
              CV Métier & Placement Direct
            </h3>
            <p className="text-[11px] text-slate-600 font-normal">
              Adaptation de votre CV et transmission directe aux employeurs partenaires.
            </p>

            <div className="space-y-1 pt-1.5 border-t border-[#EDF1F5] text-[11px] font-semibold text-slate-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#2EB29F] shrink-0" />
                <span>Recommandation directe</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#2EB29F] shrink-0" />
                <span>Entreprises fidèles</span>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-1.5 text-[10px] font-bold text-[#ED7938] uppercase flex items-center gap-1">
            <Star className="w-3 h-3" />
            <span>Placement prioritaire</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-3.5 rounded-2xl bg-white border border-[#EDF1F5] shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-[#0CAFD1]/15 text-[#0CAFD1]">
                <Building className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-[#0CAFD1]/10 text-[#0CAFD1] text-[10px] font-bold uppercase">Sur Site</span>
            </div>

            <h3 className="font-spartan font-black text-xs text-[#293137] uppercase leading-snug">
              Visites en Entreprise
            </h3>
            <p className="text-[11px] text-slate-600 font-normal">
              Votre responsable vient sur votre lieu de travail échanger avec votre tuteur.
            </p>

            <div className="space-y-1 pt-1.5 border-t border-[#EDF1F5] text-[11px] font-semibold text-slate-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#0CAFD1] shrink-0" />
                <span>Bilan d'intégration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#0CAFD1] shrink-0" />
                <span>Missions adaptées</span>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-1.5 text-[10px] font-bold text-[#0CAFD1] uppercase flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span>Cadre rassurant</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-3.5 rounded-2xl bg-white border border-[#EDF1F5] shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-[#2EB29F]/15 text-[#2EB29F]">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-[#2EB29F]/10 text-[#2EB29F] text-[10px] font-bold uppercase">Suivi</span>
            </div>

            <h3 className="font-spartan font-black text-xs text-[#293137] uppercase leading-snug">
              Bilans Semestriels
            </h3>
            <p className="text-[11px] text-slate-600 font-normal">
              Évaluation régulière pour valider vos compétences et sécuriser votre diplôme.
            </p>

            <div className="space-y-1 pt-1.5 border-t border-[#EDF1F5] text-[11px] font-semibold text-slate-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#2EB29F] shrink-0" />
                <span>Livret dématérialisé</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#2EB29F] shrink-0" />
                <span>Dossiers d'examen</span>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-1.5 text-[10px] font-bold text-[#2EB29F] uppercase flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>Objectif réussite</span>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="p-3.5 rounded-2xl bg-white border border-[#EDF1F5] shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-[#ED7938]/15 text-[#ED7938]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="px-2 py-0.5 rounded bg-[#ED7938]/10 text-[#ED7938] text-[10px] font-bold uppercase">Écoute</span>
            </div>

            <h3 className="font-spartan font-black text-xs text-[#293137] uppercase leading-snug">
              Disponibilité & Réactivité
            </h3>
            <p className="text-[11px] text-slate-600 font-normal">
              Une question ou un imprévu ? Votre responsable est joignable immédiatement.
            </p>

            <div className="space-y-1 pt-1.5 border-t border-[#EDF1F5] text-[11px] font-semibold text-slate-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#ED7938] shrink-0" />
                <span>Ligne directe email</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#ED7938] shrink-0" />
                <span>Solutions rapides</span>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-1.5 text-[10px] font-bold text-[#ED7938] uppercase flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            <span>Vous n'êtes jamais seul</span>
          </div>
        </div>

      </div>

      {/* Interactive Dropdowns & Contact Link Box at the Bottom */}
      <div className="p-4 rounded-2xl bg-white border-2 border-[#ED7938]/30 shadow-md font-montserrat space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          
          {/* Dropdown 1: Campus & Dropdown 2: Formation */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-1">
            {/* Campus Select */}
            <div className="flex items-center gap-2 bg-[#F5F7FA] border border-[#EDF1F5] rounded-xl px-3 py-2">
              <MapPin className="w-4 h-4 text-[#ED7938] shrink-0" />
              <label htmlFor="campus-select" className="text-xs font-bold uppercase text-slate-500 whitespace-nowrap">
                Campus :
              </label>
              <select
                id="campus-select"
                value={selectedCampusId}
                onChange={(e) => handleCampusChange(e.target.value as any)}
                className="bg-transparent text-xs font-bold text-[#293137] uppercase focus:outline-none cursor-pointer pr-2"
              >
                <option value="lille">Campus de Lille</option>
                <option value="lens">Campus de Lens</option>
                <option value="amiens">Campus d'Amiens</option>
              </select>
            </div>

            {/* Formation Select */}
            <div className="flex items-center gap-2 bg-[#F5F7FA] border border-[#EDF1F5] rounded-xl px-3 py-2 flex-1">
              <GraduationCap className="w-4 h-4 text-[#0CAFD1] shrink-0" />
              <label htmlFor="formation-select" className="text-xs font-bold uppercase text-slate-500 whitespace-nowrap">
                Formation :
              </label>
              <select
                id="formation-select"
                value={selectedFormationId}
                onChange={(e) => setSelectedFormationId(e.target.value)}
                className="bg-transparent text-xs font-bold text-[#293137] focus:outline-none cursor-pointer w-full"
              >
                {currentCampus.formations.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Contact Display & 1-Click Action Buttons */}
          <div className="flex items-center justify-between sm:justify-end gap-2 bg-[#293137] text-white p-2 rounded-xl shrink-0">
            <div className="flex items-center gap-2 px-2 min-w-0">
              <Mail className="w-4 h-4 text-[#ED7938] shrink-0" />
              <div className="min-w-0">
                <div className="text-[9px] uppercase font-bold text-slate-400">Responsable de Section Référent</div>
                <div className="font-spartan font-bold text-xs text-white truncate selection:bg-[#ED7938]">
                  {currentFormation.email}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => handleCopyEmail(currentFormation.email)}
                className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold uppercase flex items-center gap-1 transition-all cursor-pointer"
                title="Copier l'adresse email"
              >
                {copiedEmail === currentFormation.email ? (
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
                href={`mailto:${currentFormation.email}?subject=Contact%20Alternance%20-%20${encodeURIComponent(currentFormation.name)}`}
                className="px-3 py-1.5 rounded-lg bg-[#ED7938] hover:bg-[#d66527] text-white text-[11px] font-bold uppercase flex items-center gap-1 transition-all shadow-xs cursor-pointer"
              >
                <Send className="w-3 h-3" />
                <span>Écrire</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Proof Bar */}
      <div className="p-2.5 rounded-xl bg-[#293137] text-white flex flex-wrap items-center justify-between gap-2 text-xs font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <Sparkles className="w-4 h-4 text-[#ED7938] shrink-0" />
          <span>Grâce à ce suivi de proximité, les recruteurs privilégient les candidats d'Alésia Formation.</span>
        </div>
        <div className="text-slate-300 font-bold text-[11px] uppercase tracking-wider">
          Campus Lille • Lens • Amiens
        </div>
      </div>
    </div>
  );
};
