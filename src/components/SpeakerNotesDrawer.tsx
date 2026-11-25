import React from 'react';
import { SlideData } from '../types';
import { MessageSquare, Clock, Sparkles, X, CheckCircle, Volume2 } from 'lucide-react';

interface SpeakerNotesDrawerProps {
  slide: SlideData;
  isOpen: boolean;
  onClose: () => void;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({
  slide,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <aside
      className="fixed bottom-4 right-4 z-50 w-full max-w-md bg-[#1E2429]/95 text-white rounded-[24px] p-5 lg:p-6 border border-white/20 shadow-2xl backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      {/* Drawer Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#ED7938]/20 text-[#ED7938] flex items-center justify-center">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#ED7938]">
              Notes Intervenant • Slide {slide.number.toString().padStart(2, '0')}
            </div>
            <div className="text-sm font-bold text-white truncate max-w-[240px]">
              {slide.titlePrefix} {slide.titleHighlight} {slide.titleSuffix}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#8A949C] hover:text-white transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Content Section */}
      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
        {slide.speakerNotes.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-[#2EB29F]">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {section.title}
              </span>
              {section.duration && (
                <span className="flex items-center gap-1 text-[#8A949C] font-mono">
                  <Clock className="w-3 h-3" />
                  {section.duration}
                </span>
              )}
            </div>

            {/* Talking Points List */}
            <div className="space-y-2 text-xs text-[#EDF1F5]/90">
              {section.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ED7938] flex-shrink-0 mt-1.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Key Verbal Cue Punchline */}
            {section.verbalCue && (
              <div className="p-3 rounded-2xl bg-[#ED7938]/15 border border-[#ED7938]/30 text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-[#ED7938] font-bold uppercase tracking-wider text-[10px]">
                  <Volume2 className="w-3 h-3" />
                  <span>Phrase Clé à Poser (Impact Fort)</span>
                </div>
                <div className="font-semibold text-white italic">
                  {section.verbalCue}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Hint */}
      <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-[#8A949C] flex items-center justify-between">
        <span>Appuyez sur [N] pour masquer / afficher</span>
        <span className="text-[#2EB29F]">Posture Gen Z : Dynamique & Pro</span>
      </div>
    </aside>
  );
};
