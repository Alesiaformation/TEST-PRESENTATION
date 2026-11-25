import React from 'react';
import { CampusId } from '../types';
import { CAMPUS_SHORT_LABELS } from '../data/slidesData';

interface SlideShellProps {
  chapter: string;
  slideNumber: number;
  totalSlides: number;
  campus?: CampusId;
  children: React.ReactNode;
}

export const SlideShell: React.FC<SlideShellProps> = ({
  chapter,
  slideNumber,
  totalSlides,
  campus = 'tous',
  children,
}) => {
  return (
    <div
      id="slide-content-area"
      className="relative w-[1920px] h-[1080px] bg-[#F3F7F9] text-[#2E3F4A] overflow-hidden select-none flex flex-col justify-between px-[96px] pt-[104px] pb-[38px]"
    >
      {/* Subtle geometric editorial accent lines in background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[96px] right-[96px] h-[1px] bg-[#DCE6EB]/60" />
        <svg
          className="absolute -top-[180px] -right-[140px] w-[620px] h-[620px] opacity-[0.14]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="300" cy="300" r="260" stroke="#12AEDB" strokeWidth="2" strokeDasharray="12 18" />
          <circle cx="300" cy="300" r="195" stroke="#2BB3A3" strokeWidth="2" />
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 w-full flex flex-col justify-between overflow-hidden">
        {children}
      </div>

      {/* Bottom Footer Bar: Logo + Chapter Name on Left (per spec), Campus & Slide Counter on Right */}
      <div className="relative z-10 pt-5 mt-4 border-t border-[#DCE6EB] flex items-center justify-between shrink-0">
        {/* Left: Logo Alésia Formation + Chapter Name */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            {/* Editorial Geometric Mark */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect width="40" height="40" rx="11" fill="#10222E" />
              <path
                d="M12 29L20 11L28 29"
                stroke="#12AEDB"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 23H25"
                stroke="#F39200"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <circle cx="20" cy="11" r="2.5" fill="#2BB3A3" />
            </svg>
            <div className="flex items-baseline gap-2">
              <span className="font-spartan text-[28px] tracking-tight text-[#10222E] leading-none">
                ALÉSIA
              </span>
              <span className="font-outfit font-semibold text-[16px] uppercase tracking-[0.22em] text-[#0A8DB9]">
                FORMATION
              </span>
            </div>
          </div>

          <span className="w-[2px] h-6 bg-[#B9C8D0]" aria-hidden="true" />

          <span className="font-outfit font-semibold text-[18px] uppercase tracking-[0.18em] text-[#B35A00]">
            {chapter}
          </span>
        </div>

        {/* Right: Active Campus & Slide Number */}
        <div className="flex items-center gap-4 font-outfit text-[18px] font-medium text-[#4E606B]">
          <span>
            Campus : <strong className="font-semibold text-[#10222E]">{CAMPUS_SHORT_LABELS[campus]}</strong>
          </span>
          <span className="text-[#B9C8D0]">·</span>
          <span className="font-spartan text-[24px] text-[#0A8DB9] tabular-nums">
            {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};
