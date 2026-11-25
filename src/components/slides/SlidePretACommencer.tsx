import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlidePretACommencerProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
  onRestart: () => void;
}

const URL_CANDIDATURE = 'https://alesia_formation.osc3.tech/';
const URL_EVENTS = 'https://evenements.alesiaformationapp.cloud';

export const SlidePretACommencer: React.FC<SlidePretACommencerProps> = ({
  campus,
  slideNumber,
  totalSlides,
  onRestart,
}) => {
  const [qrCandidatureDataUrl, setQrCandidatureDataUrl] = useState<string>('');
  const [qrEventsDataUrl, setQrEventsDataUrl] = useState<string>('');

  useEffect(() => {
    QRCode.toDataURL(URL_CANDIDATURE, {
      width: 280,
      margin: 1,
      color: { dark: '#10222E', light: '#FFFFFF' },
    })
      .then(setQrCandidatureDataUrl)
      .catch(() => {});

    QRCode.toDataURL(URL_EVENTS, {
      width: 280,
      margin: 1,
      color: { dark: '#10222E', light: '#FFFFFF' },
    })
      .then(setQrEventsDataUrl)
      .catch(() => {});
  }, []);

  return (
    <SlideShell
      chapter="Conclusion"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 flex flex-col justify-between py-2">
        {/* Header */}
        <div className="flex items-end justify-between gap-8 cascade-item cascade-delay-1">
          <div className="space-y-3">
            <span className="ds-pill ds-pill-orange">PASSEZ À L’ACTION DÈS AUJOURD’HUI</span>
            <h1 className="font-spartan text-[116px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9]">PRÊT(E) À </span>
              <span className="text-[#B35A00]">COMMENCER ?</span>
            </h1>
            <p className="ds-lead">
              Scannez avec votre téléphone pour remplir votre <strong>dossier de candidature</strong> ou découvrir nos <strong>prochains événements</strong>.
            </p>
          </div>

          {/* Bouton Revenir au début */}
          <button
            type="button"
            onClick={onRestart}
            className="ds-cta shrink-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.4">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            <span>Revenir au début</span>
          </button>
        </div>

        {/* 2 QR Code Cards */}
        <div className="grid grid-cols-2 gap-10 my-auto py-2 cascade-item cascade-delay-2">
          {/* QR 1: Dossier de candidature */}
          <div className="bg-white border-2 border-[#DCE6EB] border-t-[12px] border-t-[#12AEDB] rounded-[28px] p-8 flex items-center justify-between gap-8 shadow-md">
            <div className="space-y-4 flex-1">
              <span className="ds-pill ds-pill-cyan !text-[16px]">
                ÉTAPE 01 · INSCRIPTION EN LIGNE
              </span>
              <h2 className="font-spartan text-[48px] leading-[0.9] text-[#0A8DB9]">
                DOSSIER DE CANDIDATURE
              </h2>
              <p className="font-outfit text-[23px] leading-[1.38] text-[#2E3F4A]">
                Complète ton dossier de candidature directement en ligne en quelques minutes (hors Parcoursup, 0 € de frais).
              </p>
              <a
                href={URL_CANDIDATURE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-outfit font-semibold text-[18px] text-[#0A8DB9] underline break-all"
              >
                {URL_CANDIDATURE}
              </a>
            </div>

            <div className="w-[240px] h-[240px] rounded-[24px] bg-[#F3F7F9] border-2 border-[#12AEDB] p-4 flex items-center justify-center shrink-0">
              {qrCandidatureDataUrl ? (
                <img
                  src={qrCandidatureDataUrl}
                  alt="QR Code Dossier de candidature"
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="font-outfit text-[18px] text-[#4E606B]">QR Code...</span>
              )}
            </div>
          </div>

          {/* QR 2: Nos prochains événements */}
          <div className="bg-white border-2 border-[#DCE6EB] border-t-[12px] border-t-[#F39200] rounded-[28px] p-8 flex items-center justify-between gap-8 shadow-md">
            <div className="space-y-4 flex-1">
              <span className="ds-pill ds-pill-orange !text-[16px]">
                PORTES OUVERTES · IMMERSIONS · JOB DATING
              </span>
              <h2 className="font-spartan text-[48px] leading-[0.9] text-[#B35A00]">
                NOS PROCHAINS ÉVÉNEMENTS
              </h2>
              <p className="font-outfit text-[23px] leading-[1.38] text-[#2E3F4A]">
                Retrouve toutes les dates d’immersion, de portes ouvertes et du Job dating sur nos 3 campus.
              </p>
              <a
                href={URL_EVENTS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-outfit font-semibold text-[18px] text-[#B35A00] underline break-all"
              >
                {URL_EVENTS}
              </a>
            </div>

            <div className="w-[240px] h-[240px] rounded-[24px] bg-[#F3F7F9] border-2 border-[#F39200] p-4 flex items-center justify-center shrink-0">
              {qrEventsDataUrl ? (
                <img
                  src={qrEventsDataUrl}
                  alt="QR Code Nos prochains événements"
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="font-outfit text-[18px] text-[#4E606B]">QR Code...</span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Contact Bar (#10222E dark block, max 1 per screen, accents #FFB54D) */}
        <div className="bg-[#10222E] text-white rounded-[24px] px-10 py-5 flex items-center justify-between gap-6 cascade-item cascade-delay-3">
          <div className="font-spartan text-[34px] text-[#FFB54D] tracking-tight">
            CONTACTEZ-NOUS :
          </div>

          <div className="flex items-center gap-8 font-outfit font-semibold text-[24px]">
            <span className="text-white">contact@alesiaformation.fr</span>
            <span className="text-[#12AEDB]">·</span>
            <span className="text-[#FFB54D] tabular-nums">09 70 24 95 10</span>
            <span className="text-[#12AEDB]">·</span>
            <span className="text-white">alesia-formation.fr</span>
          </div>
        </div>
      </div>
    </SlideShell>
  );
};
