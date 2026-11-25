import React from 'react';
import { SlideData } from '../types';
import { X, Check } from 'lucide-react';

interface SlideOverviewModalProps {
  slides: SlideData[];
  currentSlide: number;
  isOpen: boolean;
  onSelectSlide: (slideNumber: number) => void;
  onClose: () => void;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  slides,
  currentSlide,
  isOpen,
  onSelectSlide,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 lg:p-10 select-none animate-in fade-in">
      <div className="bg-[#1E2429] text-white rounded-[28px] border border-white/20 shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#ED7938]">
              Vue Globale • 13 Slides
            </div>
            <h2 className="text-xl font-bold text-white">
              Sélectionnez une slide pour y accéder instantanément
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slides Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {slides.map((s) => {
            const isCurrent = s.number === currentSlide;
            return (
              <div
                key={s.id}
                onClick={() => {
                  onSelectSlide(s.number);
                  onClose();
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 text-left ${
                  isCurrent
                    ? 'bg-[#ED7938]/20 border-[#ED7938] ring-2 ring-[#ED7938]/40 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#8A949C]">
                    Slide {s.number.toString().padStart(2, '0')}
                  </span>
                  <span
                    className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                      s.theme === 'anthracite'
                        ? 'bg-white/10 text-white'
                        : 'bg-[#2EB29F]/20 text-[#2EB29F]'
                    }`}
                  >
                    {s.theme === 'anthracite' ? 'Héros' : 'Contenu'}
                  </span>
                </div>

                <div>
                  <div className="text-xs text-[#ED7938] font-bold uppercase tracking-wider mb-0.5">
                    {s.category}
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">
                    {s.titlePrefix} {s.titleHighlight} {s.titleSuffix}
                  </h4>
                </div>

                <div className="text-[11px] text-[#8A949C] line-clamp-2">
                  {s.subtitle}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/20 text-xs text-[#8A949C] flex items-center justify-between">
          <span>Appuyez sur [G] ou [Échap] pour fermer</span>
          <span className="text-[#0CAFD1]">Présentation Admission Alésia Formation</span>
        </div>
      </div>
    </div>
  );
};
