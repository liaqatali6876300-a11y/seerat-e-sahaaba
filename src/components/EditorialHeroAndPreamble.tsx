import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface EditorialHeroAndPreambleProps {
  onStartReading: () => void;
  onExploreVolumes: () => void;
}

const PRINCIPLES = [
  {
    number: '01',
    arabic: 'لا زیادۃ ولا نقصان',
    urduTitle: 'نہ بڑھانا ہے نہ گھٹانا ہے',
    detail: 'جو مستند کتبِ سیرت و تراجم میں درج ہے، بعینہ وہی بیان کیا جائے گا۔',
  },
  {
    number: '02',
    arabic: 'العربی مع الترجمة',
    urduTitle: 'عربی عبارت مع اردو ترجمہ',
    detail: 'ہر کلاسیکی عربی نص کے ساتھ سادہ اور رواں اردو ترجمہ موجود ہوگا۔',
  },
  {
    number: '03',
    arabic: 'تفسیر الکلمات الصعبۃ',
    urduTitle: 'مشکل لفظوں کی تشریح',
    detail: 'ہر مشکل عربی لفظ کا واضح معنی قوسین (بریکٹ) میں ساتھ لکھا جائے گا۔',
  },
  {
    number: '04',
    arabic: 'لب لباب',
    urduTitle: 'ہر واقعے کا خلاصہ',
    detail: 'ہر واقعے کے اختتام پر اس کا نچوڑ اور عملی زندگی کے لیے سبق درج ہوگا۔',
  },
  {
    number: '05',
    arabic: 'أسلوب سهل وعبرة',
    urduTitle: 'عام فہم انداز و موازنۂ حیات',
    detail: 'ایسا بیان کہ پاکستانی اور دنیا کے عام قارئین پڑھ کر اپنی زندگی سے موازنہ کر سکیں۔',
  },
];

export const EditorialHeroAndPreamble: React.FC<EditorialHeroAndPreambleProps> = ({
  onStartReading,
  onExploreVolumes,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="tahreer-namah" className="border-b border-[#E4DDD0] dark:border-[#2C2823]">
      {/* Sacred Opening Preamble */}
      <div className="border-b border-[#E4DDD0] bg-[#F4EFE4]/60 dark:border-[#2C2823] dark:bg-[#1B1815]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-center">
          <p className="font-arabic text-2xl sm:text-3xl font-bold text-[#14532D] dark:text-[#86C99B]">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="mt-2 font-arabic text-lg text-[#1C1917] dark:text-[#F3EFE6]">
            السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ{' '}
            <span className="font-ui text-sm text-[#57534E] dark:text-[#B8B0A4]">
              (سلامتی ہو آپ پر اور اللہ کی رحمت اور اس کی برکتیں)
            </span>
          </p>
          <div className="mt-3 flex flex-col items-center gap-1 text-sm text-[#44403C] dark:text-[#D6CFC2]">
            <p className="font-arabic text-base sm:text-lg">
              الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ{' '}
              <span className="font-ui text-xs sm:text-sm text-[#57534E] dark:text-[#B8B0A4]">
                (تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کو پالنے والا ہے)
              </span>
            </p>
            <p className="font-arabic text-base sm:text-lg">
              وَالصَّلَاةُ وَالسَّلَامُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَأَصْحَابِهِ أَجْمَعِينَ{' '}
              <span className="font-ui text-xs sm:text-sm text-[#57534E] dark:text-[#B8B0A4]">
                (اور درود و سلام ہو ہمارے سردار محمد ﷺ پر اور ان کی آل اور ان کے تمام صحابہ پر)
              </span>
            </p>
            <p className="mt-1 font-arabic text-base text-[#854D0E] dark:text-[#E5B85C]">
              أَهْلًا وَسَهْلًا وَمَرْحَبًا بِكُمْ{' '}
              <span className="font-ui text-xs sm:text-sm text-[#57534E] dark:text-[#B8B0A4]">
                (خوش آمدید آپ سب کو)
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Main 2-Column Editorial Hero Split */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Editorial Text Column */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#57534E] dark:text-[#B8B0A4]">
                <span>تحریر نامہ</span>
                <span aria-hidden="true">·</span>
                <span>پانچ مستند کلاسیکی کتب</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">31 جلدوں کا جامع ذخیرہ</span>
              </div>

              <h1
                className="mt-4 font-arabic text-3xl sm:text-4xl lg:text-[2.9rem] font-bold leading-[1.4] text-[#1C1917] dark:text-[#F3EFE6]"
                style={{ textWrap: 'balance' }}
              >
                سیرتِ صحابہ کرام رضوان اللہ علیہم اجمعین
              </h1>

              <p className="mt-5 max-w-2xl font-ui text-base sm:text-lg leading-relaxed text-[#44403C] dark:text-[#D6CFC2]">
                ان 31 جلدوں کو ایسے عام فہم اور دل نشین انداز میں پیش کیا گیا ہے کہ پاکستانی بھی پڑھیں اور دنیا کے عام لوگ بھی پڑھیں، پڑھ کر حیران ہوں، علمی استفادہ (علم سے فائدہ) حاصل کریں، اپنی زندگی کو سنواریں، اور دیکھیں کہ ہماری زندگی میں کتنی معمولی مشکلات ہیں اور صحابہ کرامؓ کی زندگی میں کیسی کیسی آزمائشیں آئی تھیں۔
              </p>

              {/* Qur'anic Ayah Citation with Translation */}
              <div className="mt-7 border-y border-[#E4DDD0] py-5 dark:border-[#2C2823]">
                <p className="text-xs font-medium text-[#854D0E] dark:text-[#E5B85C]">
                  قَالَ اللَّهُ تَعَالَىٰ
                </p>
                <p className="mt-2 font-arabic text-xl sm:text-2xl font-bold text-[#14532D] dark:text-[#86C99B]">
                  رَضِيَ اللَّهُ عَنْهُمْ{' '}
                  <span className="font-ui text-sm font-normal text-[#57534E] dark:text-[#B8B0A4]">
                    (اللہ ان سے راضی ہو گیا)
                  </span>{' '}
                  وَرَضُوا عَنْهُ{' '}
                  <span className="font-ui text-sm font-normal text-[#57534E] dark:text-[#B8B0A4]">
                    (اور وہ اللہ سے راضی ہو گئے)
                  </span>
                </p>
              </div>
            </div>

            {/* Hero Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onStartReading}
                className="rounded-lg bg-[#14532D] px-6 py-3 text-sm font-medium text-[#FAF8F3] hover:bg-[#0F3F22] dark:bg-[#1E6B3E] dark:hover:bg-[#16522F] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                پہلی جلد سے مطالعہ شروع کریں
              </button>
              <button
                type="button"
                onClick={onExploreVolumes}
                className="rounded-lg border border-[#D6CEBE] bg-transparent px-6 py-3 text-sm font-medium text-[#1C1917] hover:bg-[#F1ECE2] dark:border-[#3A342C] dark:text-[#F3EFE6] dark:hover:bg-[#221F1B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                31 جلدوں کی فہرست دیکھیں
              </button>
            </div>
          </div>

          {/* Museum Archival Image Column */}
          <div className="lg:col-span-5 flex flex-col">
            <figure className="flex h-full flex-col justify-between">
              <div className="relative h-64 sm:h-80 lg:h-full min-h-[280px] overflow-hidden rounded-xl border border-[#E4DDD0] bg-[#EBE6DF] dark:border-[#2C2823] dark:bg-[#221F1B]">
                {!imgError ? (
                  <img
                    src="/src/assets/images/hero_manuscript_library_1795581811391.jpg"
                    alt="کلاسیکی اسلامی کتبِ سیرت و تراجم کے قدیم مخطوطات اور قلم دوات"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#EBE6DF] to-[#DFD7C8] p-6 text-center dark:from-[#221F1B] dark:to-[#181512]">
                    <BookOpen className="h-10 w-10 text-[#14532D] dark:text-[#86C99B]" />
                    <p className="mt-3 font-arabic text-xl font-bold text-[#1C1917] dark:text-[#F3EFE6]">
                      سیرتِ صحابہ کرامؓ — 31 جلدیں
                    </p>
                  </div>
                )}
              </div>
              <figcaption className="mt-2.5 text-xs text-[#57534E] dark:text-[#B8B0A4]">
                تصویر ۱: الاصابہ، اسد الغابہ، طبقات ابن سعد، سیرت ابن ہشام اور الاستیعاب کی 31 جلدوں کا تحقیقی خاکہ
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Five Editorial Principles Strip */}
        <div className="mt-14 pt-10 border-t border-[#E4DDD0] dark:border-[#2C2823]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-medium text-[#854D0E] dark:text-[#E5B85C]">
                اصولِ تحریر و تدوین
              </p>
              <h2 className="mt-1 font-arabic text-2xl font-bold text-[#1C1917] dark:text-[#F3EFE6]">
                ان 31 جلدوں کی پیشکش کے پانچ بنیادی اصول
              </h2>
            </div>
            <p className="text-xs text-[#57534E] dark:text-[#B8B0A4]">
              ہر صحابی کی تحریر: الاسم · النسب · السیرۃ · الواقعۃ · لب لباب
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-[#E4DDD0] bg-[#FFFFFF]/70 p-4 dark:border-[#2C2823] dark:bg-[#1B1815]"
              >
                <div className="flex items-center justify-between text-xs text-[#57534E] dark:text-[#B8B0A4]">
                  <span className="tabular-nums font-medium">اصول {item.number}</span>
                </div>
                <p className="mt-2 font-arabic text-lg font-bold text-[#14532D] dark:text-[#86C99B]">
                  {item.arabic}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[#1C1917] dark:text-[#F3EFE6]">
                  {item.urduTitle}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#57534E] dark:text-[#B8B0A4]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
