export type CampusId = 'lille' | 'lens' | 'amiens' | 'tous';

export type FiliereId = 'comptabilite' | 'commerce' | 'rh';

export type MusicStyle =
  | 'Corporate'
  | 'Pop'
  | 'Groove'
  | 'House'
  | 'Mix'
  | 'Chill'
  | 'Lo-fi'
  | 'Électro'
  | 'Ciné';

export type MusicVolume = 'Faible' | 'Moyen' | 'Fort';

export type DeckMode = 'complet' | 'presentation-16' | 'tests-only';

export interface PresentationConfig {
  campus: CampusId;
  filieres: FiliereId[];
  deckMode: DeckMode;
  autoPlay: {
    enabled: boolean;
    stepSeconds: 3 | 4 | 6 | 8;
    slideSeconds: 10 | 15 | 20;
    loop: boolean;
  };
  music: {
    enabled: boolean;
    style: MusicStyle;
    volume: MusicVolume;
  };
}

export interface SlideRegistryItem {
  id: string;
  number: number;
  title: string;
  chapter: string;
  campusFilter: CampusId[];
  filiereFilter: FiliereId[];
  interactiveSteps: number; // number of interactive buttons/tabs for duration calculation
  isTestSlide?: boolean;
}

export type SlideTheme = 'anthracite' | 'light';

export interface SlideBadge {
  label: string;
  variant?: 'orange' | 'mint' | 'cyan' | 'neutral';
}

export interface SpeakerNoteSection {
  title: string;
  points: string[];
  verbalCue?: string;
  duration?: string;
}

export interface SlideData {
  id: string;
  number: number;
  titlePrefix?: string;
  titleHighlight: string;
  titleSuffix?: string;
  subtitle?: string;
  theme: SlideTheme;
  category: string;
  badges?: SlideBadge[];
  speakerNotes: SpeakerNoteSection[];
}
