import { SlideRegistryItem, CampusId, FiliereId } from '../types';

export const CAMPUS_LABELS: Record<CampusId, string> = {
  lille: 'Lille (Marcq-en-Barœul)',
  lens: 'Lens',
  amiens: 'Amiens',
  tous: 'Tous les campus',
};

export const CAMPUS_SHORT_LABELS: Record<CampusId, string> = {
  lille: 'Lille',
  lens: 'Lens',
  amiens: 'Amiens',
  tous: 'Tous les campus',
};

export const FILIERE_LABELS: Record<FiliereId, string> = {
  comptabilite: 'Comptabilité',
  commerce: 'Commerce & marketing',
  rh: 'Gestion & RH',
};

const ALL_CAMPUS: CampusId[] = ['lille', 'lens', 'amiens', 'tous'];
const ALL_FILIERES: FiliereId[] = ['comptabilite', 'commerce', 'rh'];

export const SLIDES_REGISTRY: SlideRegistryItem[] = [
  // Diapos de présentation des Tests d'admission (conservées)
  {
    id: 'programme-matinee',
    number: 1,
    title: 'Programme de la session d’admission',
    chapter: 'Tests d’admission',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 3,
    isTestSlide: true,
  },
  {
    id: 'instructions-tests',
    number: 2,
    title: 'Consignes officielles des tests d’admission',
    chapter: 'Tests d’admission',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 3,
    isTestSlide: true,
  },
  // Les 16 diapos officielles de la présentation Alésia Formation
  {
    id: 'couverture',
    number: 1,
    title: 'Bienvenue chez Alésia Formation',
    chapter: 'Introduction',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 0,
  },
  {
    id: 'qui-sommes-nous',
    number: 2,
    title: 'Qui sommes-nous ?',
    chapter: 'L’école',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 0,
  },
  {
    id: 'campus',
    number: 3,
    title: '3 campus, 1 vision',
    chapter: 'L’école',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 3,
  },
  {
    id: 'formations',
    number: 4,
    title: 'Nos formations en un coup d’œil',
    chapter: 'Formations',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 3,
  },
  {
    id: 'difference',
    number: 5,
    title: 'Ce qui fait la différence',
    chapter: 'Notre plus-value',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 3,
  },
  {
    id: 'jamais-seul',
    number: 6,
    title: 'Tu ne seras jamais seul(e)',
    chapter: 'Accompagnement',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 5,
  },
  {
    id: 'focus-grimp',
    number: 7,
    title: 'Focus outil : GRIMP',
    chapter: 'Outils & Ateliers',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 3,
  },
  {
    id: 'focus-ateliers',
    number: 8,
    title: 'Focus ateliers',
    chapter: 'Outils & Ateliers',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 4,
  },
  {
    id: 'job-dating',
    number: 9,
    title: 'Job dating du 8 avril',
    chapter: 'Outils & Ateliers',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 3,
  },
  {
    id: 'filet-securite',
    number: 10,
    title: 'Pas encore d’alternance en septembre ?',
    chapter: 'Filet de sécurité',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 3,
  },
  {
    id: 'equipe',
    number: 11,
    title: 'Notre équipe',
    chapter: 'L’équipe',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 3,
  },
  {
    id: 'admission',
    number: 12,
    title: 'Admission en 4 étapes',
    chapter: 'Admission & Contrat',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 4,
  },
  {
    id: 'contrat',
    number: 13,
    title: 'Le contrat d’apprentissage en bref',
    chapter: 'Admission & Contrat',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 4,
  },
  {
    id: 'questions',
    number: 14,
    title: 'Parents & étudiants : vos questions',
    chapter: 'Questions & Synthèse',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 6,
  },
  {
    id: 'plus-value',
    number: 15,
    title: 'Notre plus-value en une diapo',
    chapter: 'Questions & Synthèse',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 6,
  },
  {
    id: 'pret-a-commencer',
    number: 16,
    title: 'Prêt(e) à commencer ?',
    chapter: 'Conclusion',
    campusFilter: ALL_CAMPUS,
    filiereFilter: ALL_FILIERES,
    interactiveSteps: 0,
  },
];

export interface FormationItem {
  id: string;
  filiere: FiliereId;
  level: 'Bac+2 · BTS' | 'Bac+3 · Bachelor / DCG' | 'Bac+5 · Mastère / DSCG';
  name: string;
  rates: {
    lille?: string;
    lens?: string;
    amiens?: string;
  };
}

export const FORMATIONS_DATA: FormationItem[] = [
  // Comptabilité
  {
    id: 'bts-cg',
    filiere: 'comptabilite',
    level: 'Bac+2 · BTS',
    name: 'BTS CG',
    rates: { lille: '80 %', lens: '100 %', amiens: '100 %' },
  },
  {
    id: 'dcg',
    filiere: 'comptabilite',
    level: 'Bac+3 · Bachelor / DCG',
    name: 'DCG',
    rates: { lille: '77 %' },
  },
  {
    id: 'dscg',
    filiere: 'comptabilite',
    level: 'Bac+5 · Mastère / DSCG',
    name: 'DSCG',
    rates: { lille: 'Disponible à Lille' },
  },

  // Commerce & marketing
  {
    id: 'bts-mco',
    filiere: 'commerce',
    level: 'Bac+2 · BTS',
    name: 'BTS MCO',
    rates: { lille: '75 %', lens: '100 %', amiens: '80 %' },
  },
  {
    id: 'bts-ndrc',
    filiere: 'commerce',
    level: 'Bac+2 · BTS',
    name: 'BTS NDRC',
    rates: { lille: '80 %', lens: '100 %', amiens: '100 %' },
  },
  {
    id: 'bachelor-rda',
    filiere: 'commerce',
    level: 'Bac+3 · Bachelor / DCG',
    name: 'Bachelor RDA',
    rates: { lille: '100 %', amiens: '100 %' },
  },
  {
    id: 'mastere-mcm',
    filiere: 'commerce',
    level: 'Bac+5 · Mastère / DSCG',
    name: 'Mastère Manager commercial et marketing',
    rates: { lille: '80 %' },
  },

  // Gestion & RH
  {
    id: 'bts-gpme',
    filiere: 'rh',
    level: 'Bac+2 · BTS',
    name: 'BTS GPME',
    rates: { lille: '100 %', lens: '100 %', amiens: '100 %' },
  },
  {
    id: 'bts-sam',
    filiere: 'rh',
    level: 'Bac+2 · BTS',
    name: 'BTS SAM',
    rates: { lille: '100 %', lens: '100 %' },
  },
  {
    id: 'bachelor-rh',
    filiere: 'rh',
    level: 'Bac+3 · Bachelor / DCG',
    name: 'Bachelor Chargé(e) des RH',
    rates: { lille: '80 %' },
  },
  {
    id: 'mastere-rh',
    filiere: 'rh',
    level: 'Bac+5 · Mastère / DSCG',
    name: 'Mastère Manager en RH',
    rates: { lille: '100 %' },
  },
];
