export interface OccasionalDay {
  dayIndex: number; // 0: Lun, 1: Mar, 2: Mer, 3: Jeu, 4: Ven, 5: Sam, 6: Dim
  label: string;
}

export interface FormationRythme {
  id: string;
  code: string;
  name: string;
  level: 'BTS' | 'Bachelor' | 'DCG' | 'Master' | 'DSCG';
  schoolDays: number[]; // 0: Lun, 1: Mar, 2: Mer, 3: Jeu, 4: Ven, 5: Sam, 6: Dim
  occasionalDays?: OccasionalDay[];
  scheduleLabel: string;
  hours: string;
  note?: string;
}

export interface CampusRythmes {
  id: 'amiens' | 'lens' | 'lille';
  name: string;
  badge: string;
  formations: FormationRythme[];
}

export const RYTHMES_DATA: CampusRythmes[] = [
  {
    id: 'amiens',
    name: "Campus d'Amiens",
    badge: '5 Formations',
    formations: [
      {
        id: 'amiens-bts-cg',
        code: 'BTS CG',
        name: 'BTS Comptabilité et Gestion',
        level: 'BTS',
        schoolDays: [3, 4], // Jeu, Ven
        scheduleLabel: 'Jeudi et vendredi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'amiens-bts-gpme',
        code: 'BTS GPME',
        name: 'BTS Gestion de la PME',
        level: 'BTS',
        schoolDays: [3, 4], // Jeu, Ven
        scheduleLabel: 'Jeudi et vendredi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'amiens-bts-ndrc',
        code: 'BTS NDRC',
        name: 'BTS Négociation et Digitalisation de la Relation Client',
        level: 'BTS',
        schoolDays: [3, 4], // Jeu, Ven
        scheduleLabel: 'Jeudi et vendredi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'amiens-bts-mco',
        code: 'BTS MCO',
        name: 'BTS Management Commercial Opérationnel',
        level: 'BTS',
        schoolDays: [2, 3], // Mer, Jeu
        scheduleLabel: 'Mercredi et jeudi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'amiens-bachelor-rda',
        code: 'Bachelor RDA',
        name: 'Bachelor Responsable du Développement des Activités',
        level: 'Bachelor',
        schoolDays: [4], // Ven
        occasionalDays: [{ dayIndex: 0, label: '+ 1 lundi par mois' }],
        scheduleLabel: 'Vendredi + un lundi par mois',
        hours: '8h00 - 17h00',
        note: '1 lundi de cours par mois selon le calendrier annuel',
      },
    ],
  },
  {
    id: 'lens',
    name: 'Campus de Lens',
    badge: '5 Formations',
    formations: [
      {
        id: 'lens-bts-sam',
        code: 'BTS SAM',
        name: "BTS Support à l'Action Managériale",
        level: 'BTS',
        schoolDays: [0, 2], // Lun, Mer
        scheduleLabel: 'Lundi et mercredi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'lens-bts-cg',
        code: 'BTS CG',
        name: 'BTS Comptabilité et Gestion',
        level: 'BTS',
        schoolDays: [0, 1], // Lun, Mar
        scheduleLabel: 'Lundi et mardi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'lens-bts-gpme',
        code: 'BTS GPME',
        name: 'BTS Gestion de la PME',
        level: 'BTS',
        schoolDays: [0, 1], // Lun, Mar
        scheduleLabel: 'Lundi et mardi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'lens-bts-ndrc',
        code: 'BTS NDRC',
        name: 'BTS Négociation et Digitalisation de la Relation Client',
        level: 'BTS',
        schoolDays: [0, 1], // Lun, Mar
        scheduleLabel: 'Lundi et mardi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'lens-bts-mco',
        code: 'BTS MCO',
        name: 'BTS Management Commercial Opérationnel',
        level: 'BTS',
        schoolDays: [0, 1], // Lun, Mar
        scheduleLabel: 'Lundi et mardi',
        hours: '8h00 - 17h00',
      },
    ],
  },
  {
    id: 'lille',
    name: 'Campus de Lille',
    badge: '11 Formations',
    formations: [
      {
        id: 'lille-bts-sam',
        code: 'BTS SAM',
        name: "BTS Support à l'Action Managériale",
        level: 'BTS',
        schoolDays: [3, 4], // Jeu, Ven
        scheduleLabel: 'Jeudi et vendredi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'lille-bts-cg',
        code: 'BTS CG',
        name: 'BTS Comptabilité et Gestion',
        level: 'BTS',
        schoolDays: [0, 1], // Lun, Mar
        scheduleLabel: 'Lundi et mardi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'lille-bts-gpme',
        code: 'BTS GPME',
        name: 'BTS Gestion de la PME',
        level: 'BTS',
        schoolDays: [0, 1], // Lun, Mar
        scheduleLabel: 'Lundi et mardi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'lille-bts-ndrc',
        code: 'BTS NDRC',
        name: 'BTS Négociation et Digitalisation de la Relation Client',
        level: 'BTS',
        schoolDays: [0, 1], // Lun, Mar
        scheduleLabel: 'Lundi et mardi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'lille-bts-mco',
        code: 'BTS MCO',
        name: 'BTS Management Commercial Opérationnel',
        level: 'BTS',
        schoolDays: [0, 1], // Lun, Mar
        scheduleLabel: 'Lundi et mardi',
        hours: '8h00 - 17h00',
      },
      {
        id: 'lille-bachelor-rda',
        code: 'Bachelor RDA',
        name: 'Bachelor Responsable du Développement des Activités',
        level: 'Bachelor',
        schoolDays: [4], // Ven
        occasionalDays: [{ dayIndex: 3, label: '+ 1 jeudi par mois' }],
        scheduleLabel: 'Vendredi + un jeudi par mois',
        hours: '8h00 - 17h00',
        note: '1 jeudi de cours par mois selon le planning annuel',
      },
      {
        id: 'lille-bachelor-crh',
        code: 'Bachelor CRH',
        name: 'Bachelor Chargé des Ressources Humaines',
        level: 'Bachelor',
        schoolDays: [4], // Ven
        occasionalDays: [{ dayIndex: 3, label: '+ 1 jeudi par mois' }],
        scheduleLabel: 'Vendredi + un jeudi par mois',
        hours: '8h00 - 17h00',
        note: '1 jeudi de cours par mois selon le planning annuel',
      },
      {
        id: 'lille-dcg-2ans',
        code: 'DCG 2 ans',
        name: 'DCG (Diplôme de Comptabilité et Gestion) - 2 ans',
        level: 'DCG',
        schoolDays: [0], // Lun
        occasionalDays: [{ dayIndex: 1, label: '+ certains mardis' }],
        scheduleLabel: 'Lundi + certains mardis',
        hours: '8h00 - 17h00',
        note: 'Certains mardis de formation selon le calendrier',
      },
      {
        id: 'lille-dcg-3ans',
        code: 'DCG 3 ans',
        name: 'DCG (Diplôme de Comptabilité et Gestion) - 3 ans',
        level: 'DCG',
        schoolDays: [0], // Lun
        occasionalDays: [{ dayIndex: 1, label: '+ certains mardis' }],
        scheduleLabel: 'Lundi + certains mardis',
        hours: '8h00 - 17h00',
        note: 'Certains mardis de formation selon le calendrier',
      },
      {
        id: 'lille-master-mrh',
        code: 'Master MRH',
        name: 'Master Ressources Humaines',
        level: 'Master',
        schoolDays: [4], // Ven
        occasionalDays: [{ dayIndex: 3, label: '+ certains jeudis' }],
        scheduleLabel: 'Vendredi + certains jeudis',
        hours: '8h00 - 17h00',
        note: 'Certains jeudis de formation selon le calendrier',
      },
      {
        id: 'lille-dscg',
        code: 'DSCG',
        name: 'DSCG (Diplôme Supérieur de Comptabilité et Gestion)',
        level: 'DSCG',
        schoolDays: [4], // Ven
        occasionalDays: [
          { dayIndex: 2, label: '+ certains mercredis' },
          { dayIndex: 3, label: '+ certains jeudis' },
        ],
        scheduleLabel: 'Vendredi + certains mercredis et jeudis',
        hours: '8h00 - 17h00',
        note: 'Certains mercredis et jeudis selon le calendrier annuel',
      },
    ],
  },
];
