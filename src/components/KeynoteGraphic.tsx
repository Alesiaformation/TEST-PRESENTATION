import React from 'react';

interface KeynoteGraphicProps {
  className?: string;
  variant?: 'hero' | 'accent' | 'closing';
}

export const KeynoteGraphic: React.FC<KeynoteGraphicProps> = ({ className = '', variant = 'hero' }) => {
  return (
    <div className={`relative pointer-events-none select-none overflow-hidden ${className}`}>
      {/* Abstract geometric composition (Alésia brand colors: Anthracite, Orange, Mint, Cyan) */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[500px] max-h-[500px] mx-auto drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="cyanMintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0CAFD1" />
            <stop offset="100%" stopColor="#2EB29F" />
          </linearGradient>
          <linearGradient id="mintCyanGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2EB29F" />
            <stop offset="100%" stopColor="#0CAFD1" />
          </linearGradient>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ED7938" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ED7938" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft atmospheric ambient glow */}
        <circle cx="250" cy="250" r="230" fill="url(#glowGrad)" />

        {/* Outer dotted orbit */}
        <circle
          cx="250"
          cy="250"
          r="190"
          stroke="#5B6670"
          strokeWidth="2"
          strokeDasharray="6 8"
          strokeOpacity="0.4"
        />

        {/* Main Thick Orange Ring */}
        <circle
          cx="250"
          cy="250"
          r="140"
          stroke="#ED7938"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray="600 120"
          className="transition-all duration-700"
        />

        {/* Large Gradient Orb (Cyan to Mint) */}
        <circle
          cx="210"
          cy="220"
          r="80"
          fill="url(#cyanMintGrad)"
        />

        {/* Secondary Mint Orb */}
        <circle
          cx="330"
          cy="280"
          r="54"
          fill="url(#mintCyanGrad)"
          fillOpacity="0.9"
        />

        {/* Solid Accent Dots in Brand Colors */}
        <circle cx="130" cy="180" r="14" fill="#ED7938" />
        <circle cx="370" cy="170" r="18" fill="#0CAFD1" />
        <circle cx="160" cy="340" r="10" fill="#2EB29F" />
        <circle cx="280" cy="390" r="16" fill="#ED7938" />
        <circle cx="250" cy="100" r="8" fill="#FFFFFF" fillOpacity="0.8" />

        {/* Small concentric precision rings */}
        <circle
          cx="370"
          cy="170"
          r="32"
          stroke="#0CAFD1"
          strokeWidth="3"
          strokeOpacity="0.4"
        />
        <circle
          cx="130"
          cy="180"
          r="26"
          stroke="#ED7938"
          strokeWidth="3"
          strokeOpacity="0.4"
        />
      </svg>
    </div>
  );
};
