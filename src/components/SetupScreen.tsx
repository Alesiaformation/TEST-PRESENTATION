import React from 'react';
import {
  CampusId,
  FiliereId,
  MusicStyle,
  MusicVolume,
  PresentationConfig,
  SlideRegistryItem,
} from '../types';
import { CAMPUS_LABELS, FILIERE_LABELS } from '../data/slidesData';

interface SetupScreenProps {
  config: PresentationConfig;
  onChange: (newConfig: PresentationConfig) => void;
  activeSlides: SlideRegistryItem[];
  estimatedDurationFormatted: string;
  chapters: string[];
  onStartPresentation: (startSlideId?: string) => void;
  onExportHtml: () => void;
}

const CAMPUS_OPTIONS: CampusId[] = ['lille', 'lens', 'amiens', 'tous'];
const FILIERE_OPTIONS: FiliereId[] = ['comptabilite', 'commerce', 'rh'];
const STEP_SEC_OPTIONS: (3 | 4 | 6 | 8)[] = [3, 4, 6, 8];
const SLIDE_SEC_OPTIONS: (10 | 15 | 20)[] = [10, 15, 20];
const MUSIC_STYLES: MusicStyle[] = [
  'Corporate',
  'Pop',
  'Groove',
  'House',
  'Mix',
  'Chill',
  'Lo-fi',
  'Électro',
  'Ciné',
];
const MUSIC_VOLUMES: MusicVolume[] = ['Faible', 'Moyen', 'Fort'];

export const SetupScreen: React.FC<SetupScreenProps> = ({
  config,
  onChange,
  activeSlides,
  estimatedDurationFormatted,
  chapters,
  onStartPresentation,
  onExportHtml,
}) => {
  const toggleFiliere = (filiere: FiliereId) => {
    const exists = config.filieres.includes(filiere);
    if (exists && config.filieres.length === 1) {
      return; // Keep at least one filière selected
    }
    const nextFilieres = exists
      ? config.filieres.filter((f) => f !== filiere)
      : [...config.filieres, filiere];
    onChange({ ...config, filieres: nextFilieres });
  };

  return (
    <div className="relative w-[1920px] h-[1080px] bg-[#F3F7F9] text-[#2E3F4A] overflow-hidden select-none flex flex-col justify-between px-[96px] pt-[56px] pb-[42px]">
      {/* Top Header */}
      <div className="flex items-end justify-between border-b border-[#DCE6EB] pb-5">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="ds-pill ds-pill-cyan !text-[16px] !py-1.5 !px-4">
              ALÉSIA FORMATION · DEPUIS 1996
            </span>
            <span className="ds-kicker text-[#B35A00]">
              SALONS · PORTES OUVERTES · SESSIONS D’ADMISSION
            </span>
          </div>
          <h1 className="font-spartan text-[76px] leading-[0.88] tracking-[-0.035em] uppercase">
            <span className="text-[#0A8DB9]">PARAMÉTRER </span>
            <span className="text-[#B35A00]">LA PRÉSENTATION</span>
          </h1>
          <p className="font-outfit font-light text-[24px] text-[#4E606B] mt-1">
            Les diapositives s’adaptent <strong className="font-semibold text-[#10222E]">automatiquement</strong>.
          </p>
        </div>

        {/* Mode de session (Conservation de la présentation des tests d'admission) */}
        <div className="bg-white border border-[#DCE6EB] rounded-[22px] p-4 flex flex-col gap-2 shadow-xs">
          <div className="flex items-center justify-between gap-6">
            <span className="font-outfit font-semibold text-[16px] uppercase tracking-[0.16em] text-[#13806F]">
              FORMAT DE LA SESSION
            </span>
            <button
              type="button"
              onClick={onExportHtml}
              className="font-outfit font-semibold text-[16px] text-[#0A8DB9] hover:text-[#B35A00] underline cursor-pointer flex items-center gap-1.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Exporter en HTML autonome</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            {[
              { id: 'complet', label: 'Tests d’admission + Présentation (18 diapos)' },
              { id: 'presentation-16', label: 'Présentation Salon / JPO (16 diapos)' },
              { id: 'tests-only', label: 'Tests d’admission seuls (2 diapos)' },
            ].map((mode) => {
              const active = config.deckMode === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    onChange({
                      ...config,
                      deckMode: mode.id as PresentationConfig['deckMode'],
                    })
                  }
                  className={`px-4 py-2 rounded-[16px] font-outfit font-semibold text-[17px] transition-all cursor-pointer border-2 ${
                    active
                      ? 'bg-[#2BB3A3] border-[#2BB3A3] text-[#0E1A22]'
                      : 'bg-[#F3F7F9] border-[#B9C8D0] text-[#2E3F4A] hover:border-[#F39200]'
                  }`}
                >
                  {mode.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4 Numbered Blocks Grid */}
      <div className="grid grid-cols-2 gap-6 my-auto py-3">
        {/* BLOC 01 : CAMPUS */}
        <div className="bg-white border border-[#DCE6EB] border-t-[10px] border-t-[#12AEDB] rounded-[24px] p-6 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-[14px] bg-[#12AEDB] text-[#0E1A22] font-spartan text-[26px] flex items-center justify-center pt-0.5">
                01
              </span>
              <div>
                <h2 className="font-spartan-700 text-[30px] text-[#0A8DB9]">
                  CAMPUS (CHOIX UNIQUE)
                </h2>
                <p className="font-outfit text-[18px] text-[#4E606B]">
                  Met en avant le campus choisi sur la couverture, les formations et l’équipe.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {CAMPUS_OPTIONS.map((c) => {
              const isSelected = config.campus === c;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onChange({ ...config, campus: c })}
                  className={`h-[60px] px-5 rounded-[30px] border-2 font-outfit font-semibold text-[20px] flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#12AEDB] border-[#12AEDB] text-[#0E1A22]'
                      : 'bg-white border-[#B9C8D0] text-[#10222E] hover:border-[#F39200]'
                  }`}
                >
                  <span className="truncate">{CAMPUS_LABELS[c]}</span>
                  <span
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-[#0E1A22] bg-[#0E1A22]' : 'border-[#B9C8D0]'
                    }`}
                  >
                    {isSelected && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#12AEDB" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* BLOC 02 : FILIÈRES */}
        <div className="bg-white border border-[#DCE6EB] border-t-[10px] border-t-[#2BB3A3] rounded-[24px] p-6 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-[14px] bg-[#2BB3A3] text-[#0E1A22] font-spartan text-[26px] flex items-center justify-center pt-0.5">
                02
              </span>
              <div>
                <h2 className="font-spartan-700 text-[30px] text-[#13806F]">
                  FILIÈRES (UNE OU PLUSIEURS)
                </h2>
                <p className="font-outfit text-[18px] text-[#4E606B]">
                  Elles filtrent uniquement la diapo « Nos formations en un coup d’œil ».
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onChange({ ...config, filieres: [...FILIERE_OPTIONS] })}
              className="font-outfit font-semibold text-[16px] text-[#13806F] hover:text-[#B35A00] underline cursor-pointer"
            >
              Tout sélectionner
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {FILIERE_OPTIONS.map((f) => {
              const isSelected = config.filieres.includes(f);
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => toggleFiliere(f)}
                  className={`h-[120px] px-5 rounded-[22px] border-2 font-outfit font-semibold text-[21px] flex flex-col items-start justify-between p-4 transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-[#2BB3A3] border-[#2BB3A3] text-[#0E1A22]'
                      : 'bg-white border-[#B9C8D0] text-[#10222E] hover:border-[#F39200]'
                  }`}
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="font-spartan text-[22px] opacity-80">FILIÈRE</span>
                    <span
                      className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center ${
                        isSelected ? 'bg-[#0E1A22] border-[#0E1A22]' : 'border-[#B9C8D0]'
                      }`}
                    >
                      {isSelected && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2BB3A3" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <span className="leading-tight">{FILIERE_LABELS[f]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* BLOC 03 : DÉFILEMENT AUTOMATIQUE */}
        <div className="bg-white border border-[#DCE6EB] border-t-[10px] border-t-[#F39200] rounded-[24px] p-6 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-[14px] bg-[#F39200] text-[#0E1A22] font-spartan text-[26px] flex items-center justify-center pt-0.5">
                03
              </span>
              <div>
                <h2 className="font-spartan-700 text-[30px] text-[#B35A00]">
                  DÉFILEMENT AUTOMATIQUE
                </h2>
                <p className="font-outfit text-[18px] text-[#4E606B]">
                  Clique chaque bouton interactif dans l’ordre, puis passe à la diapo suivante.
                </p>
              </div>
            </div>

            {/* Interrupteur */}
            <button
              type="button"
              role="switch"
              aria-checked={config.autoPlay.enabled}
              onClick={() =>
                onChange({
                  ...config,
                  autoPlay: { ...config.autoPlay, enabled: !config.autoPlay.enabled },
                })
              }
              className={`px-5 py-2.5 rounded-full font-outfit font-semibold text-[18px] flex items-center gap-3 cursor-pointer border-2 transition-all ${
                config.autoPlay.enabled
                  ? 'bg-[#F39200] border-[#F39200] text-[#0E1A22]'
                  : 'bg-[#F3F7F9] border-[#B9C8D0] text-[#4E606B]'
              }`}
            >
              <span>{config.autoPlay.enabled ? 'ACTIVÉ' : 'DÉSACTIVÉ'}</span>
              <span
                className={`w-4 h-4 rounded-full ${
                  config.autoPlay.enabled ? 'bg-[#0E1A22]' : 'bg-[#B9C8D0]'
                }`}
              />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-1">
            {/* Par info dans une diapo */}
            <div className="bg-[#F3F7F9] rounded-[18px] p-3.5 border border-[#DCE6EB]">
              <div className="font-outfit font-semibold text-[16px] uppercase tracking-[0.1em] text-[#4E606B] mb-2">
                Par info dans une diapo
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {STEP_SEC_OPTIONS.map((sec) => {
                  const active = config.autoPlay.stepSeconds === sec;
                  return (
                    <button
                      key={sec}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        onChange({
                          ...config,
                          autoPlay: { ...config.autoPlay, stepSeconds: sec },
                        })
                      }
                      className={`h-11 rounded-[12px] font-outfit font-semibold text-[18px] cursor-pointer border transition-all ${
                        active
                          ? 'bg-[#F39200] border-[#F39200] text-[#0E1A22]'
                          : 'bg-white border-[#B9C8D0] text-[#10222E] hover:border-[#F39200]'
                      }`}
                    >
                      {sec}s
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Par diapo sans bouton */}
            <div className="bg-[#F3F7F9] rounded-[18px] p-3.5 border border-[#DCE6EB]">
              <div className="font-outfit font-semibold text-[16px] uppercase tracking-[0.1em] text-[#4E606B] mb-2">
                Par diapo sans bouton
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {SLIDE_SEC_OPTIONS.map((sec) => {
                  const active = config.autoPlay.slideSeconds === sec;
                  return (
                    <button
                      key={sec}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        onChange({
                          ...config,
                          autoPlay: { ...config.autoPlay, slideSeconds: sec },
                        })
                      }
                      className={`h-11 rounded-[12px] font-outfit font-semibold text-[18px] cursor-pointer border transition-all ${
                        active
                          ? 'bg-[#F39200] border-[#F39200] text-[#0E1A22]'
                          : 'bg-white border-[#B9C8D0] text-[#10222E] hover:border-[#F39200]'
                      }`}
                    >
                      {sec}s
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Boucle */}
            <div className="bg-[#F3F7F9] rounded-[18px] p-3.5 border border-[#DCE6EB]">
              <div className="font-outfit font-semibold text-[16px] uppercase tracking-[0.1em] text-[#4E606B] mb-2">
                Boucle continue
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Oui', val: true },
                  { label: 'Non', val: false },
                ].map((opt) => {
                  const active = config.autoPlay.loop === opt.val;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        onChange({
                          ...config,
                          autoPlay: { ...config.autoPlay, loop: opt.val },
                        })
                      }
                      className={`h-11 rounded-[12px] font-outfit font-semibold text-[18px] cursor-pointer border transition-all ${
                        active
                          ? 'bg-[#F39200] border-[#F39200] text-[#0E1A22]'
                          : 'bg-white border-[#B9C8D0] text-[#10222E] hover:border-[#F39200]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* BLOC 04 : MUSIQUE DE FOND (Web Audio API) */}
        <div className="bg-white border border-[#DCE6EB] border-t-[10px] border-t-[#12AEDB] rounded-[24px] p-6 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-[14px] bg-[#12AEDB] text-[#0E1A22] font-spartan text-[26px] flex items-center justify-center pt-0.5">
                04
              </span>
              <div>
                <h2 className="font-spartan-700 text-[30px] text-[#0A8DB9]">
                  MUSIQUE DE FOND (WEB AUDIO API)
                </h2>
                <p className="font-outfit text-[18px] text-[#4E606B]">
                  Générée en direct sans fichier, renouvelée toutes les 2 à 3 minutes.
                </p>
              </div>
            </div>

            {/* Interrupteur Musique */}
            <button
              type="button"
              role="switch"
              aria-checked={config.music.enabled}
              onClick={() =>
                onChange({
                  ...config,
                  music: { ...config.music, enabled: !config.music.enabled },
                })
              }
              className={`px-5 py-2.5 rounded-full font-outfit font-semibold text-[18px] flex items-center gap-3 cursor-pointer border-2 transition-all ${
                config.music.enabled
                  ? 'bg-[#12AEDB] border-[#12AEDB] text-[#0E1A22]'
                  : 'bg-[#F3F7F9] border-[#B9C8D0] text-[#4E606B]'
              }`}
            >
              <span>{config.music.enabled ? 'MUSIQUE ON' : 'MUSIQUE OFF'}</span>
              <span
                className={`w-4 h-4 rounded-full ${
                  config.music.enabled ? 'bg-[#0E1A22]' : 'bg-[#B9C8D0]'
                }`}
              />
            </button>
          </div>

          <div className="space-y-2.5">
            {/* Styles */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {MUSIC_STYLES.map((style) => {
                const active = config.music.style === style;
                return (
                  <button
                    key={style}
                    type="button"
                    aria-pressed={active}
                    onClick={() =>
                      onChange({
                        ...config,
                        music: { ...config.music, style },
                      })
                    }
                    className={`px-3.5 py-1.5 rounded-[14px] font-outfit font-semibold text-[17px] cursor-pointer border transition-all ${
                      active
                        ? 'bg-[#12AEDB] border-[#12AEDB] text-[#0E1A22]'
                        : 'bg-[#F3F7F9] border-[#B9C8D0] text-[#10222E] hover:border-[#F39200]'
                    }`}
                  >
                    {style}
                  </button>
                );
              })}
            </div>

            {/* Volume */}
            <div className="flex items-center justify-between bg-[#F3F7F9] rounded-[16px] px-4 py-2 border border-[#DCE6EB]">
              <span className="font-outfit font-semibold text-[17px] uppercase tracking-[0.12em] text-[#4E606B]">
                Volume (fondu d’entrée et de sortie) :
              </span>
              <div className="flex items-center gap-2">
                {MUSIC_VOLUMES.map((vol) => {
                  const active = config.music.volume === vol;
                  return (
                    <button
                      key={vol}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        onChange({
                          ...config,
                          music: { ...config.music, volume: vol },
                        })
                      }
                      className={`px-4 py-1 rounded-[12px] font-outfit font-semibold text-[17px] cursor-pointer border transition-all ${
                        active
                          ? 'bg-[#2BB3A3] border-[#2BB3A3] text-[#0E1A22]'
                          : 'bg-white border-[#B9C8D0] text-[#10222E] hover:border-[#F39200]'
                      }`}
                    >
                      {vol}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary & Launch CTA */}
      <div className="bg-[#10222E] text-white rounded-[26px] px-8 py-5 flex items-center justify-between gap-8">
        <div className="space-y-2 flex-1 min-w-0">
          <div className="flex items-center gap-4">
            <span className="font-spartan text-[34px] text-[#FFB54D] tracking-tight">
              {activeSlides.length} DIAPOSITIVES · DURÉE ESTIMÉE {estimatedDurationFormatted}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#2BB3A3] text-[#0E1A22] font-outfit font-semibold text-[16px] uppercase tracking-wider">
              {CAMPUS_LABELS[config.campus]}
            </span>
          </div>

          {/* Chapters List */}
          <div className="flex items-center gap-2 flex-wrap text-[17px] text-[#D3F0FA]">
            <span className="font-semibold text-[#FFB54D] uppercase tracking-wider text-[15px]">
              Chapitres :
            </span>
            {chapters.map((chap, idx) => (
              <React.Fragment key={chap}>
                <span className="font-outfit font-medium text-white/90">{chap}</span>
                {idx < chapters.length - 1 && <span className="text-[#12AEDB]">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          {/* Quick launch to Tests Instructions */}
          <button
            type="button"
            onClick={() => onStartPresentation('instructions-tests')}
            className="h-[66px] px-7 rounded-[33px] bg-[#2BB3A3] hover:bg-[#12AEDB] text-[#0E1A22] font-outfit font-semibold text-[20px] flex items-center gap-3 cursor-pointer transition-all"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Accès direct Consignes Tests</span>
          </button>

          {/* Big Orange Button: Lancer la présentation */}
          <button
            type="button"
            onClick={() => onStartPresentation()}
            className="h-[68px] px-9 rounded-[34px] bg-[#F39200] hover:bg-[#12AEDB] text-[#0E1A22] font-outfit font-semibold text-[23px] flex items-center gap-3.5 cursor-pointer transition-all hover:translate-x-1.5 shadow-lg"
          >
            <span>Lancer la présentation</span>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.4">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
