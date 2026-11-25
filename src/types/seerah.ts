export type BookId =
  | 'al-isabah'
  | 'usd-al-ghabah'
  | 'tabaqat-ibn-sad'
  | 'sirah-ibn-hisham'
  | 'al-istiab';

export interface ClassicalBook {
  id: BookId;
  order: number;
  titleArabic: string;
  titleUrduMeaning: string;
  authorUrdu: string;
  authorArabic: string;
  authorDeathHijri: string;
  totalVolumes: number;
  volumeRange: string;
  descriptionUrdu: string;
  descriptionEnglish: string;
}

export interface VolumeInfo {
  volumeNumber: number;
  bookId: BookId;
  scopeUrdu: string;
  scopeEnglish: string;
  category: 'صحابی' | 'صحابیات' | 'سیرت و غزوات' | 'تابعین و کنیت';
}

export interface DifficultWord {
  arabic: string;
  urduMeaning: string;
  englishMeaning: string;
}

export interface BilingualParagraph {
  arabicWithGlossary: string;
  urduTranslation: string;
  englishTranslation: string;
}

export type LifeTheme =
  | 'صبر و استقامت'
  | 'رزق و فاقہ'
  | 'ایثار و قربانی'
  | 'خواتینِ اسلام کی جرات'
  | 'عدل و امانت'
  | 'تلاشِ حق و توکل'
  | 'والدین و وفاداری';

export interface SahabiBiography {
  id: string;
  volumeNumber: number;
  bookId: BookId;
  alIsm: {
    arabic: string;
    urdu: string;
    titleHonorific: string;
  };
  alNasab: {
    arabicWithGlossary: string;
    urdu: string;
    tribeOrOrigin: string;
  };
  sourceCitation: string;
  lifeTheme: LifeTheme;
  category: 'مہاجرین' | 'انصار' | 'خواتین صحابیات' | 'سیرت و غزوات' | 'تابعین';
  alSeerah: BilingualParagraph[];
  alWaqiah: {
    headingUrdu: string;
    headingArabic: string;
    paragraphs: BilingualParagraph[];
  };
  vocabulary: DifficultWord[];
  lubbELubab: {
    essenceUrdu: string;
    sahabiHardship: string;
    modernLifeComparison: string;
    actionableLesson: string;
    englishTakeaway: string;
  };
}
