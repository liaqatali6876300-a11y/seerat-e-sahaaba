import { ClassicalBook, VolumeInfo } from '../types/seerah';

export const CLASSICAL_BOOKS: ClassicalBook[] = [
  {
    id: 'al-isabah',
    order: 1,
    titleArabic: 'الإصابة في تمييز الصحابة',
    titleUrduMeaning: 'الاصابہ فی تمییز الصحابہ (صحابہ کو پہچاننے میں درست بات)',
    authorUrdu: 'حافظ ابن حجر عسقلانیؒ',
    authorArabic: 'الحافظ أحمد بن علي بن حجر العسقلاني',
    authorDeathHijri: 'وفات: 852ھ',
    totalVolumes: 8,
    volumeRange: 'جلد 1 تا جلد 8',
    descriptionUrdu:
      'صحابہ کرامؓ کے اسماء و احوال کی تحقیق میں سب سے جامع اور مستند انسائیکلوپیڈیا، جس میں حروفِ تہجی کے اعتبار سے ہزاروں صحابہ و صحابیات کا تذکرہ ہے۔',
    descriptionEnglish:
      'Al-Isabah by Hafiz Ibn Hajar al-Asqalani — the definitive 8-volume alphabetical dictionary verifying the Companions of the Prophet (PBUH).',
  },
  {
    id: 'usd-al-ghabah',
    order: 2,
    titleArabic: 'أسد الغابة في معرفة الصحابة',
    titleUrduMeaning: 'اسد الغابہ فی معرفۃ الصحابہ (صحابہ کو جاننے میں جنگل کا شیر)',
    authorUrdu: 'علامہ ابن اثیر جزریؒ',
    authorArabic: 'عز الدين علي بن محمد ابن الأثير الجزري',
    authorDeathHijri: 'وفات: 630ھ',
    totalVolumes: 7,
    volumeRange: 'جلد 9 تا جلد 15',
    descriptionUrdu:
      'گزشتہ تصنیفات کا نچوڑ اور ساڑھے سات ہزار سے زائد صحابہ کرامؓ کے سوانح و واقعات کا ولولہ انگیز علمی خزانہ۔',
    descriptionEnglish:
      'Usd al-Ghabah by Ibn al-Athir — synthesizing earlier biographical traditions across 7 volumes covering over 7,500 Companions.',
  },
  {
    id: 'tabaqat-ibn-sad',
    order: 3,
    titleArabic: 'الطبقات الكبرى (طبقات ابن سعد)',
    titleUrduMeaning: 'طبقات ابن سعد (طبقے / درجے)',
    authorUrdu: 'امام محمد بن سعدؒ',
    authorArabic: 'محمد بن سعد البغدادي',
    authorDeathHijri: 'وفات: 230ھ',
    totalVolumes: 8,
    volumeRange: 'جلد 16 تا جلد 23',
    descriptionUrdu:
      'ابتدائی اسلامی تاریخ کی بنیادی کتاب جو سیرتِ طیبہ، مہاجرین و انصار کے درجات، خواتین صحابیات اور تابعین کے مستند احوال محفوظ کرتی ہے۔',
    descriptionEnglish:
      'Al-Tabaqat al-Kubra by Muhammad ibn Sa’d — one of the earliest classical sources arranged by generations: Prophetic Sirah, Muhajirin, Ansar, women Companions, and Tabi’in.',
  },
  {
    id: 'sirah-ibn-hisham',
    order: 4,
    titleArabic: 'السيرة النبوية لابن هشام',
    titleUrduMeaning: 'سیرت ابن ہشام (ابن ہشام کی سیرت)',
    authorUrdu: 'علامہ عبدالملک ابن ہشامؒ',
    authorArabic: 'أبو محمد عبد الملك بن هشام',
    authorDeathHijri: 'وفات: 218ھ',
    totalVolumes: 4,
    volumeRange: 'جلد 24 تا جلد 27',
    descriptionUrdu:
      'سیرتِ نبوی ﷺ اور غزوات کے دوران صحابہ کرامؓ کی جاں نثاری، ہجرت اور فتحِ مکہ کے چشم دید تاریخی واقعات کی مستند ترین اساس۔',
    descriptionEnglish:
      'Sirah Ibn Hisham — the foundational classical narrative of the Prophet’s (PBUH) life, Hijrah, major battles, and the devotion of the Companions.',
  },
  {
    id: 'al-istiab',
    order: 5,
    titleArabic: 'الاستيعاب في معرفة الأصحاب',
    titleUrduMeaning: 'الاستیعاب فی معرفۃ الاصحاب (صحابہ کو جاننے میں مکمل کرنا)',
    authorUrdu: 'امام ابن عبدالبرؒ',
    authorArabic: 'الحافظ يوسف بن عبد الله بن عبد البر القرطبي',
    authorDeathHijri: 'وفات: 463ھ',
    totalVolumes: 4,
    volumeRange: 'جلد 28 تا جلد 31',
    descriptionUrdu:
      'اندلس کے عظیم محدث امام ابن عبدالبرؒ کی جامع کتاب جو ناموں کے ساتھ کنیت (ابو فلاں) والے صحابہ اور خواتینِ اسلام کے حالات کو سمیٹتی ہے۔',
    descriptionEnglish:
      'Al-Isti’ab by Imam Ibn Abd al-Barr — a revered Andalusian biographical masterpiece covering Companions by name, kunyah, and female Companions.',
  },
];

export const VOLUMES_31: VolumeInfo[] = [
  // الاصابہ (1-8)
  { volumeNumber: 1, bookId: 'al-isabah', scopeUrdu: 'الف سے شروع ہونے والے صحابہ', scopeEnglish: 'Companions beginning with Alif', category: 'صحابی' },
  { volumeNumber: 2, bookId: 'al-isabah', scopeUrdu: 'ب سے ج تک', scopeEnglish: 'From Ba to Jim', category: 'صحابی' },
  { volumeNumber: 3, bookId: 'al-isabah', scopeUrdu: 'ح سے ذ تک', scopeEnglish: 'From Ha to Dhal', category: 'صحابی' },
  { volumeNumber: 4, bookId: 'al-isabah', scopeUrdu: 'ر سے ز تک', scopeEnglish: 'From Ra to Zay', category: 'صحابی' },
  { volumeNumber: 5, bookId: 'al-isabah', scopeUrdu: 'س سے ع تک', scopeEnglish: 'From Sin to Ayn', category: 'صحابی' },
  { volumeNumber: 6, bookId: 'al-isabah', scopeUrdu: 'غ سے م تک', scopeEnglish: 'From Ghayn to Mim', category: 'صحابی' },
  { volumeNumber: 7, bookId: 'al-isabah', scopeUrdu: 'ن سے ی تک', scopeEnglish: 'From Nun to Ya', category: 'صحابی' },
  { volumeNumber: 8, bookId: 'al-isabah', scopeUrdu: 'خواتین صحابیات (عورت صحابہ)', scopeEnglish: 'Female Companions (Sahabiyat)', category: 'صحابیات' },

  // اسد الغابہ (9-15)
  { volumeNumber: 9, bookId: 'usd-al-ghabah', scopeUrdu: 'الف سے ث تک', scopeEnglish: 'From Alif to Tha', category: 'صحابی' },
  { volumeNumber: 10, bookId: 'usd-al-ghabah', scopeUrdu: 'ج سے ح تک', scopeEnglish: 'From Jim to Ha', category: 'صحابی' },
  { volumeNumber: 11, bookId: 'usd-al-ghabah', scopeUrdu: 'خ سے س تک', scopeEnglish: 'From Kha to Sin', category: 'صحابی' },
  { volumeNumber: 12, bookId: 'usd-al-ghabah', scopeUrdu: 'ش سے ع تک', scopeEnglish: 'From Shin to Ayn', category: 'صحابی' },
  { volumeNumber: 13, bookId: 'usd-al-ghabah', scopeUrdu: 'غ سے ق تک', scopeEnglish: 'From Ghayn to Qaf', category: 'صحابی' },
  { volumeNumber: 14, bookId: 'usd-al-ghabah', scopeUrdu: 'ک سے م تک', scopeEnglish: 'From Kaf to Mim', category: 'صحابی' },
  { volumeNumber: 15, bookId: 'usd-al-ghabah', scopeUrdu: 'ن سے ی تک + خواتین', scopeEnglish: 'From Nun to Ya + Women', category: 'صحابیات' },

  // طبقات ابن سعد (16-23)
  { volumeNumber: 16, bookId: 'tabaqat-ibn-sad', scopeUrdu: 'سیرت النبی ﷺ (نبی ﷺ کی زندگی) حصہ 1', scopeEnglish: 'Life of the Prophet (PBUH) Part 1', category: 'سیرت و غزوات' },
  { volumeNumber: 17, bookId: 'tabaqat-ibn-sad', scopeUrdu: 'سیرت النبی ﷺ حصہ 2 + مہاجرین (ہجرت کرنے والے)', scopeEnglish: 'Life of Prophet Part 2 + Muhajirin', category: 'صحابی' },
  { volumeNumber: 18, bookId: 'tabaqat-ibn-sad', scopeUrdu: 'مہاجرین باقی', scopeEnglish: 'Remaining Muhajirin', category: 'صحابی' },
  { volumeNumber: 19, bookId: 'tabaqat-ibn-sad', scopeUrdu: 'انصار (مدینہ کے مددگار) حصہ 1', scopeEnglish: 'Ansar (Helpers of Madinah) Part 1', category: 'صحابی' },
  { volumeNumber: 20, bookId: 'tabaqat-ibn-sad', scopeUrdu: 'انصار حصہ 2', scopeEnglish: 'Ansar Part 2', category: 'صحابی' },
  { volumeNumber: 21, bookId: 'tabaqat-ibn-sad', scopeUrdu: 'خواتین + تابعین (صحابہ کے بعد والے)', scopeEnglish: 'Women + Tabi’in', category: 'صحابیات' },
  { volumeNumber: 22, bookId: 'tabaqat-ibn-sad', scopeUrdu: 'تابعین مدینہ', scopeEnglish: 'Tabi’in of Madinah', category: 'تابعین و کنیت' },
  { volumeNumber: 23, bookId: 'tabaqat-ibn-sad', scopeUrdu: 'تابعین دوسرے شہر', scopeEnglish: 'Tabi’in of Other Cities', category: 'تابعین و کنیت' },

  // سیرت ابن ہشام (24-27)
  { volumeNumber: 24, bookId: 'sirah-ibn-hisham', scopeUrdu: 'ولادت (پیدائش) سے نبوت (نبی بننے) تک', scopeEnglish: 'From Birth to Prophethood', category: 'سیرت و غزوات' },
  { volumeNumber: 25, bookId: 'sirah-ibn-hisham', scopeUrdu: 'ہجرت (مکہ سے مدینہ جانا) + غزوہ بدر (بدر کی جنگ)', scopeEnglish: 'Migration (Hijrah) + Battle of Badr', category: 'سیرت و غزوات' },
  { volumeNumber: 26, bookId: 'sirah-ibn-hisham', scopeUrdu: 'غزوہ احد (احد کی جنگ) + غزوہ خندق (خندق کی جنگ)', scopeEnglish: 'Battle of Uhud + Battle of the Trench', category: 'سیرت و غزوات' },
  { volumeNumber: 27, bookId: 'sirah-ibn-hisham', scopeUrdu: 'فتح مکہ (مکہ کی فتح) + وفات النبی ﷺ (نبی ﷺ کی وفات)', scopeEnglish: 'Conquest of Makkah + Passing of the Prophet (PBUH)', category: 'سیرت و غزوات' },

  // الاستیعاب (28-31)
  { volumeNumber: 28, bookId: 'al-istiab', scopeUrdu: 'الف سے ح تک', scopeEnglish: 'From Alif to Ha', category: 'صحابی' },
  { volumeNumber: 29, bookId: 'al-istiab', scopeUrdu: 'خ سے ع تک', scopeEnglish: 'From Kha to Ayn', category: 'صحابی' },
  { volumeNumber: 30, bookId: 'al-istiab', scopeUrdu: 'غ سے ی تک', scopeEnglish: 'From Ghayn to Ya', category: 'صحابی' },
  { volumeNumber: 31, bookId: 'al-istiab', scopeUrdu: 'خواتین صحابیات + کنیت (ابو فلاں) والے', scopeEnglish: 'Female Companions + Kunyah Entries', category: 'تابعین و کنیت' },
];
