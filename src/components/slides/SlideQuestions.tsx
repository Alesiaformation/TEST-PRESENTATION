import React, { useState } from 'react';
import { CampusId } from '../../types';
import { SlideShell } from '../SlideShell';

interface SlideQuestionsProps {
  campus: CampusId;
  slideNumber: number;
  totalSlides: number;
}

interface FaqItem {
  id: string;
  topic: string;
  question: string;
  answer: string;
  color: string;
}

const FAQ_DATA: Record<'parents' | 'etudiants', FaqItem[]> = {
  parents: [
    {
      id: 'p-accompagnement',
      topic: 'ACCOMPAGNEMENT',
      question: 'Comment mon enfant est-il accompagné pour trouver son entreprise ?',
      answer: 'Dès son admission, votre enfant bénéficie de la plateforme GRIMP, de 4 ateliers pratiques (CV, marché caché, entretien, gestion du stress), du Job dating du 8 avril et du suivi personnalisé de son responsable de section qui recommande son profil aux recruteurs.',
      color: '#12AEDB',
    },
    {
      id: 'p-septembre',
      topic: 'ABSENCE D’ALTERNANCE EN SEPTEMBRE',
      question: 'Que se passe-t-il s’il n’a pas encore d’entreprise à la rentrée de septembre ?',
      answer: 'Aucune panique : la loi autorise un délai de 3 mois pour suivre les cours sans contrat signé. Votre enfant fait sa rentrée normalement et bénéficie d’un coaching renforcé jusqu’à fin novembre avec accès maintenu aux job datings et à GRIMP.',
      color: '#2BB3A3',
    },
    {
      id: 'p-cout',
      topic: 'COÛT (0 €)',
      question: 'Y a-t-il des frais de scolarité ou d’inscription à prévoir pour la famille ?',
      answer: 'Non, 0 € de frais pour l’étudiant et sa famille. L’intégralité du coût de la formation est financée par l’OPCO de l’entreprise d’accueil, et l’apprenti perçoit un salaire mensuel dès le premier mois.',
      color: '#F39200',
    },
    {
      id: 'p-avenir',
      topic: 'AVENIR APRÈS LE DIPLÔME',
      question: 'Les diplômes sont-ils reconnus et quels sont les débouchés ?',
      answer: 'Toutes nos formations préparent à des Diplômes d’État (BTS, DCG, DSCG) ou des Titres RNCP reconnus par l’État. Plus de 90 % de nos candidats réussissent leurs examens et 8 sur 10 sont en emploi ou en poursuite d’études 6 mois après.',
      color: '#12AEDB',
    },
  ],
  etudiants: [
    {
      id: 'e-accompagnement',
      topic: 'ACCOMPAGNEMENT',
      question: 'Est-ce que je dois chercher mon alternance tout(e) seul(e) ?',
      answer: 'Jamais ! Tu accèdes immédiatement à GRIMP (+2 h gagnées par semaine), on retravaille ton CV, on t’ouvre notre carnet de 1 500 entreprises partenaires et on te prépare pour rencontrer 5 recruteurs au Job dating du 8 avril.',
      color: '#12AEDB',
    },
    {
      id: 'e-septembre',
      topic: 'ABSENCE D’ALTERNANCE EN SEPTEMBRE',
      question: 'Si je n’ai pas signé en septembre, est-ce que je perds ma place ?',
      answer: 'Non ! Tu rentres en cours en septembre avec ta promo grâce au délai légal de 3 mois. Notre équipe placement continue de te coacher chaque semaine jusqu’à fin novembre pour signer ton contrat.',
      color: '#2BB3A3',
    },
    {
      id: 'e-cout',
      topic: 'COÛT (0 €) & SALAIRE',
      question: 'Combien coûte l’école et combien vais-je gagner par mois ?',
      answer: 'L’école est 100 % gratuite (0 € de frais). En plus, tu es salarié(e) rémunéré(e) entre 27 % et 100 % du SMIC selon ton âge et ton année, avec 5 semaines de congés payés et la carte étudiant des métiers.',
      color: '#F39200',
    },
    {
      id: 'e-avenir',
      topic: 'AVENIR APRÈS LE DIPLÔME',
      question: 'Puis-je continuer mes études chez Alésia après mon BTS ou mon Bachelor ?',
      answer: 'Oui ! Tu peux construire tout ton parcours du BTS (Bac+2) au Bachelor/DCG (Bac+3) jusqu’au Mastère/DSCG (Bac+5) sur nos campus, ou entrer directement sur le marché du travail avec 2 à 5 ans d’expérience solide.',
      color: '#12AEDB',
    },
  ],
};

export const SlideQuestions: React.FC<SlideQuestionsProps> = ({
  campus,
  slideNumber,
  totalSlides,
}) => {
  const [audience, setAudience] = useState<'parents' | 'etudiants'>('parents');
  const [openIndex, setOpenIndex] = useState<number>(0);

  const items = FAQ_DATA[audience];

  return (
    <SlideShell
      chapter="Questions & Synthèse"
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      campus={campus}
    >
      <div className="flex-1 grid grid-cols-12 gap-12 items-start">
        {/* Left Column: Title + 2 Audience Tabs (Parents / Étudiants) */}
        <div className="col-span-5 flex flex-col justify-between h-full py-1">
          <div className="space-y-4 cascade-item cascade-delay-1">
            <span className="ds-pill ds-pill-orange">RÉPONSES CLAIRES & TRANSPARENTES</span>
            <h1 className="font-spartan text-[98px] leading-[0.86] tracking-[-0.035em] uppercase">
              <span className="text-[#0A8DB9] block">PARENTS & ÉTUDIANTS :</span>
              <span className="text-[#B35A00] block">VOS QUESTIONS</span>
            </h1>
            <p className="ds-lead !text-[26px]">
              Sélectionnez votre profil pour afficher les réponses aux <strong>4 questions essentielles</strong>.
            </p>
          </div>

          {/* 2 Tabs: Parents / Étudiants (aria-pressed for Auto-Play) */}
          <div className="space-y-4 my-auto cascade-item cascade-delay-2">
            {[
              { id: 'parents' as const, num: '01', label: 'Questions des Parents', color: '#12AEDB', soft: '#D3F0FA' },
              { id: 'etudiants' as const, num: '02', label: 'Questions des Étudiants', color: '#2BB3A3', soft: '#D5F1EE' },
            ].map((tab) => {
              const isSelected = audience === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    setAudience(tab.id);
                    setOpenIndex(0);
                  }}
                  className="ds-tab-btn w-full justify-between !h-[84px] !px-7"
                  style={
                    isSelected
                      ? { backgroundColor: tab.color, borderColor: tab.color, color: '#0E1A22' }
                      : undefined
                  }
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="ds-tab-num px-4 py-1.5 rounded-full"
                      style={{
                        backgroundColor: isSelected ? '#0E1A22' : tab.soft,
                        color: isSelected ? tab.color : '#0E1A22',
                      }}
                    >
                      {tab.num}
                    </span>
                    <span className="text-[26px]">{tab.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: 4 Accordion Questions (with aria-expanded for Auto-Play) */}
        <div className="col-span-7 space-y-4 my-auto cascade-item cascade-delay-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className="bg-white rounded-[24px] border-2 transition-all overflow-hidden shadow-xs"
                style={{
                  borderColor: isOpen ? item.color : '#DCE6EB',
                  borderTopWidth: isOpen ? '10px' : '2px',
                  borderTopColor: isOpen ? item.color : '#DCE6EB',
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(idx)}
                  className="w-full px-7 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="font-outfit font-semibold text-[15px] uppercase tracking-[0.18em] text-[#0A8DB9]">
                      0{idx + 1} · {item.topic}
                    </span>
                    <h2 className="font-spartan-700 text-[30px] text-[#10222E] leading-tight">
                      {item.question}
                    </h2>
                  </div>

                  <span
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform"
                    style={{
                      backgroundColor: isOpen ? item.color : '#F3F7F9',
                      color: '#0E1A22',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E1A22" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-7 pb-6 pt-1 border-t border-[#DCE6EB]">
                    <p className="font-outfit text-[23px] leading-[1.42] text-[#2E3F4A]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
};
