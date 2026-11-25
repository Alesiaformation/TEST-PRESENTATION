import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Clock, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Zap, 
  UserCheck, 
  MapPin,
  Lock,
  Unlock,
  ExternalLink,
  KeyRound,
  Check,
  Copy,
  AlertCircle
} from 'lucide-react';

export const SlideGrimp: React.FC = () => {
  const [passcode, setPasscode] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const GRIMP_URL = 'https://alesia-formation.grimp.io/';
  const SECRET_CODE = 'ADMISSIONAF';

  const jobBoards = [
    { name: 'LinkedIn', color: 'bg-[#0077B5]/25 text-blue-200 border-[#0077B5]/50' },
    { name: 'Welcome to the Jungle', color: 'bg-yellow-500/25 text-yellow-200 border-yellow-500/50' },
    { name: 'La Bonne Alternance', color: 'bg-[#2EB29F]/25 text-[#2EB29F] border-[#2EB29F]/50' },
    { name: 'Indeed', color: 'bg-blue-600/25 text-blue-200 border-blue-600/50' },
    { name: 'HelloWork', color: 'bg-red-500/25 text-red-200 border-red-500/50' },
    { name: 'France Travail', color: 'bg-[#0CAFD1]/25 text-[#0CAFD1] border-[#0CAFD1]/50' },
    { name: 'MeteoJob', color: 'bg-[#ED7938]/25 text-[#ED7938] border-[#ED7938]/50' },
    { name: 'APEC', color: 'bg-purple-600/25 text-purple-200 border-purple-600/50' },
  ];

  const handleUnlock = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (passcode.trim().toUpperCase() === SECRET_CODE) {
      setIsUnlocked(true);
      setErrorMsg(null);
    } else {
      setErrorMsg('Code incorrect. Le code secret est transmis lors de votre admission.');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(GRIMP_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="w-full h-full min-h-[640px] flex flex-col justify-between p-5 sm:p-8 bg-[#293137] text-white overflow-hidden select-none" id="slide-grimp">
      {/* Header */}
      <div className="border-b border-white/10 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="px-2.5 py-0.5 rounded-md bg-[#ED7938]/20 text-[#ED7938] font-montserrat font-bold text-[10px] uppercase tracking-wider border border-[#ED7938]/30">
              Outil Exclusif Alésia
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#2EB29F]/20 text-[#2EB29F] font-montserrat font-bold text-[10px] uppercase tracking-wider border border-[#2EB29F]/30">
              Tout-en-un
            </span>
          </div>
          <h2 className="font-spartan font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-tight">
            Plateforme <span className="text-[#ED7938]">GRIMP</span> : votre accélérateur
          </h2>
          <p className="font-montserrat text-xs text-slate-300 font-medium">
            Toutes les offres du web réunies et pilotées au même endroit.
          </p>
        </div>

        {/* Time-Saving Pill */}
        <div className="p-2.5 rounded-2xl bg-gradient-to-r from-[#2EB29F] to-[#0CAFD1] text-white shadow-md flex items-center gap-3 shrink-0 hover-levitate">
          <div className="p-1.5 rounded-xl bg-white/20">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-spartan font-black text-lg tracking-tight leading-none uppercase">
              + de 2h
            </div>
            <div className="font-montserrat text-[10px] font-bold text-emerald-100 uppercase tracking-widest mt-0.5">
              Gagnées / Semaine
            </div>
          </div>
        </div>
      </div>

      {/* Main 3 Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 my-1.5 font-montserrat">
        
        {/* Pillar 1 */}
        <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-[#ED7938]/20 text-[#ED7938]">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Pilier 01</span>
            </div>

            <h3 className="font-spartan font-bold text-sm text-white uppercase leading-snug">
              Toutes les offres centralisées
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              Agrégation en direct des annonces de tous les sites d'emploi.
            </p>

            <div className="pt-1.5 border-t border-white/10">
              <div className="flex flex-wrap gap-1">
                {jobBoards.map((jb, i) => (
                  <span
                    key={i}
                    className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase border ${jb.color}`}
                  >
                    {jb.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-2 pt-1.5 text-[10px] font-bold text-[#ED7938] uppercase flex items-center gap-1 border-t border-white/10">
            <Zap className="w-3 h-3" />
            <span>Zéro doublon, alertes directes</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-[#0CAFD1]/20 text-[#0CAFD1]">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Pilier 02</span>
            </div>

            <h3 className="font-spartan font-bold text-sm text-white uppercase leading-snug">
              Accès aux entreprises ciblées
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              Module <strong>GRIMP Entreprises</strong> pour contacter les recruteurs de votre secteur.
            </p>

            <div className="space-y-1.5 pt-1.5 border-t border-white/10">
              <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#0CAFD1] shrink-0" />
                <span className="text-slate-200 font-medium">Recherche par zone géographique</span>
              </div>
              <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-[#2EB29F] shrink-0" />
                <span className="text-slate-200 font-medium">Employeurs actifs dans votre rayon</span>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-1.5 text-[10px] font-bold text-[#0CAFD1] uppercase flex items-center gap-1 border-t border-white/10">
            <Sparkles className="w-3 h-3" />
            <span>Multipliez les contacts directs</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 shadow-xs flex flex-col justify-between hover-levitate transition-all">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-[#2EB29F]/20 text-[#2EB29F]">
                <UserCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Pilier 03</span>
            </div>

            <h3 className="font-spartan font-bold text-sm text-white uppercase leading-snug">
              Coaching & Appui de vos candidatures
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              Vos chargés de relation suivent vos démarches pour <strong>appuyer votre dossier</strong> en direct.
            </p>

            <div className="p-2 rounded-xl bg-[#2EB29F]/15 border border-[#2EB29F]/30 text-xs space-y-0.5">
              <div className="font-spartan font-bold text-[11px] uppercase flex items-center gap-1.5 text-[#2EB29F]">
                <CheckCircle2 className="w-3 h-3" />
                <span>Recommandation Immédiate</span>
              </div>
              <p className="text-[10px] text-slate-200 font-medium">
                Dès qu'un partenaire recrute, votre profil est transmis en priorité.
              </p>
            </div>
          </div>

          <div className="mt-2 pt-1.5 text-[10px] font-bold text-[#2EB29F] uppercase flex items-center gap-1 border-t border-white/10">
            <UserCheck className="w-3 h-3" />
            <span>Vous n'êtes jamais seul</span>
          </div>
        </div>

      </div>

      {/* Secret Code Unlockable Banner for GRIMP Link */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-white/[0.08] to-white/[0.04] border-2 border-[#ED7938]/40 shadow-lg font-montserrat my-1">
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="locked-state"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#ED7938]/20 text-[#ED7938] shrink-0 border border-[#ED7938]/30">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-spartan font-bold text-xs uppercase text-white tracking-wide">
                      Accès Plateforme GRIMP Alésia
                    </span>
                    <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 text-[10px] font-bold uppercase border border-orange-500/30">
                      Code Requis
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    L'accès est débloqué avec le code secret transmis dès votre admission définitive.
                  </p>
                </div>
              </div>

              {/* Unlock Form */}
              <form onSubmit={handleUnlock} className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      if (errorMsg) setErrorMsg(null);
                    }}
                    placeholder="Code secret..."
                    className="bg-white/10 border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white placeholder:text-slate-400 font-bold uppercase tracking-wider focus:outline-none focus:border-[#ED7938] w-36 sm:w-40 transition-all"
                  />
                  {errorMsg && (
                    <span className="absolute -bottom-4 left-0 text-[9px] text-red-400 font-medium whitespace-nowrap">
                      Code incorrect
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="px-3.5 py-1.5 rounded-xl bg-[#ED7938] hover:bg-[#d66527] text-white text-xs font-bold uppercase flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Débloquer</span>
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked-state"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#2EB29F]/25 text-[#2EB29F] shrink-0 border border-[#2EB29F]/40">
                  <Unlock className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-spartan font-black text-xs uppercase text-white tracking-wide">
                      Plateforme GRIMP Débloquée
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#2EB29F]/20 text-[#2EB29F] text-[10px] font-bold uppercase border border-[#2EB29F]/30 flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Accès Autorisé
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Lien officiel : <strong className="text-emerald-300">{GRIMP_URL}</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold uppercase flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2EB29F]" />
                      <span className="text-[#2EB29F]">Lien copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                      <span>Copier le lien</span>
                    </>
                  )}
                </button>

                <a
                  href={GRIMP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#ED7938] to-[#ea580c] hover:from-[#d66527] hover:to-[#c2410c] text-white text-xs font-bold uppercase flex items-center gap-1.5 transition-all shadow-md cursor-pointer hover:scale-105"
                >
                  <span>Ouvrir GRIMP</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    setIsUnlocked(false);
                    setPasscode('');
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white text-xs cursor-pointer ml-1"
                  title="Verrouiller à nouveau"
                >
                  <Lock className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-2.5 rounded-xl bg-white/[0.08] border border-white/10 text-white flex flex-wrap items-center justify-between gap-2 text-xs font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <Sparkles className="w-4 h-4 text-[#ED7938] shrink-0" />
          <span>GRIMP est 100 % offert et débloqué dès votre admission définitive.</span>
        </div>
        <div className="text-slate-300 font-bold text-[11px] uppercase tracking-wider">
          Accès gratuit • Campus Lille • Lens • Amiens
        </div>
      </div>
    </div>
  );
};
