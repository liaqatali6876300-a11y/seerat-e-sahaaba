import React, { useState } from 'react';
import { ArrowUpLeft, Bookmark, Trash2 } from 'lucide-react';
import { ALL_BIOGRAPHIES } from '../data/biographies';

interface LifeComparisonMirrorProps {
  bookmarks: string[];
  onToggleBookmark: (bioId: string) => void;
  onOpenVolume: (volumeNumber: number) => void;
}

const MODERN_STRUGGLES = [
  {
    id: 'poverty',
    label: 'رزق کی تنگی یا بے روزگاری',
    matchedBioId: 'abu-hurayrah',
  },
  {
    id: 'criticism',
    label: 'لوگوں کی مخالفت یا حق گوئی کا خوف',
    matchedBioId: 'bilal-ibn-rabah',
  },
  {
    id: 'impatience',
    label: 'مشکلات کا طول پکڑنا اور بے صبری',
    matchedBioId: 'khabbab-ibn-al-aratt',
  },
  {
    id: 'family',
    label: 'عزیزوں کی جدائی یا گھریلو صدمہ',
    matchedBioId: 'umm-salamah',
  },
  {
    id: 'parents',
    label: 'والدین کی خدمت اور مصروفیت',
    matchedBioId: 'uways-al-qarani',
  },
];

export const LifeComparisonMirror: React.FC<LifeComparisonMirrorProps> = ({
  bookmarks,
  onToggleBookmark,
  onOpenVolume,
}) => {
  const [selectedStruggleId, setSelectedStruggleId] = useState(MODERN_STRUGGLES[0].id);
  const [archImgError, setArchImgError] = useState(false);

  const selectedStruggle =
    MODERN_STRUGGLES.find((s) => s.id === selectedStruggleId) ?? MODERN_STRUGGLES[0];
  const matchedBio =
    ALL_BIOGRAPHIES.find((b) => b.id === selectedStruggle.matchedBioId) ?? ALL_BIOGRAPHIES[0];

  const bookmarkedEntries = ALL_BIOGRAPHIES.filter((b) => bookmarks.includes(b.id));

  return (
    <section
      id="life-comparison"
      className="border-b border-[#E4DDD0] bg-[#F4EFE4]/50 py-14 dark:border-[#2C2823] dark:bg-[#181512]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Interactive Reflection Mirror */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#854D0E] dark:text-[#E5B85C]">
                موازنۂ حیات — اصلاحِ نفس کا آئینہ
              </p>
              <h2 className="mt-1 font-arabic text-3xl font-bold text-[#1C1917] dark:text-[#F3EFE6]">
                آج آپ کس مشکل سے گزر رہے ہیں؟ صحابہؓ کی زندگی سے موازنہ کیجیے
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#44403C] dark:text-[#D6CFC2]">
                جب ہم اپنی روزمرہ تکلیفوں کو صحابہ کرامؓ کی آزمائشوں کے مقابل رکھتے ہیں تو دل کو غیر معمولی تسلی، شکر اور نیا حوصلہ نصیب ہوتا ہے۔
              </p>

              {/* Struggle Selector Buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                {MODERN_STRUGGLES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedStruggleId(item.id)}
                    className={`rounded-lg border px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      selectedStruggleId === item.id
                        ? 'border-[#14532D] bg-[#14532D] text-[#FAF8F3] dark:border-[#1E6B3E] dark:bg-[#1E6B3E]'
                        : 'border-[#D6CEBE] bg-[#FAF8F3] text-[#44403C] hover:border-[#14532D]/50 dark:border-[#3A342C] dark:bg-[#1B1815] dark:text-[#D6CFC2]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Comparison Card */}
              <div className="mt-6 rounded-xl border border-[#E4DDD0] bg-[#FAF8F3] p-6 dark:border-[#2C2823] dark:bg-[#1B1815]">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4DDD0] pb-3 dark:border-[#2C2823]">
                  <div>
                    <span className="text-xs text-[#57534E] dark:text-[#B8B0A4] tabular-nums">
                      جلد {matchedBio.volumeNumber} · {matchedBio.sourceCitation.split('—')[0]}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-[#14532D] dark:text-[#86C99B]">
                      {matchedBio.alIsm.urdu}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenVolume(matchedBio.volumeNumber)}
                    className="flex items-center gap-1 rounded-lg border border-[#D6CEBE] px-3 py-1.5 text-xs font-medium text-[#1C1917] hover:bg-[#F1ECE2] dark:border-[#3A342C] dark:text-[#F3EFE6] dark:hover:bg-[#221F1B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>مکمل واقعہ پڑھیں</span>
                    <ArrowUpLeft className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-[#854D0E] dark:text-[#E5B85C]">
                      صحابہؓ پر گزرنے والی مشکل
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#44403C] dark:text-[#D6CFC2]">
                      {matchedBio.lubbELubab.sahabiHardship}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#14532D] dark:text-[#86C99B]">
                      ہمارے لیے پیغام و موازنہ
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#44403C] dark:text-[#D6CFC2]">
                      {matchedBio.lubbELubab.modernLifeComparison}
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-[#E4DDD0] pt-3 dark:border-[#2C2823]">
                  <p className="text-sm font-medium text-[#1C1917] dark:text-[#F3EFE6]">
                    لبِ لباب: {matchedBio.lubbELubab.actionableLesson}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Peaceful Architectural Backdrop & Saved Bookmarks */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <figure>
              <div className="h-64 sm:h-72 overflow-hidden rounded-xl border border-[#E4DDD0] bg-[#EBE6DF] dark:border-[#2C2823] dark:bg-[#221F1B]">
                {!archImgError ? (
                  <img
                    src="/src/assets/images/madinah_limestone_arch_1795581811143.jpg"
                    alt="پرامن مسجد کی محرابیں اور صبح کی نرم دھوپ"
                    referrerPolicy="no-referrer"
                    onError={() => setArchImgError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-6 text-center">
                    <p className="font-arabic text-xl text-[#14532D] dark:text-[#86C99B]">
                      خَيْرُ الْقُرُونِ قَرْنِي
                    </p>
                  </div>
                )}
              </div>
              <figcaption className="mt-2 text-xs text-[#57534E] dark:text-[#B8B0A4]">
                تصویر ۳: علم و تقویٰ کے پرسکون گہوارے — صحابہؓ کا عہد، خیرالقرون
              </figcaption>
            </figure>

            {/* Personal Reflection Bookmarks (ذاتی بیاض) */}
            <div className="flex-1 rounded-xl border border-[#E4DDD0] bg-[#FAF8F3] p-5 dark:border-[#2C2823] dark:bg-[#1B1815]">
              <div className="flex items-center justify-between border-b border-[#E4DDD0] pb-3 dark:border-[#2C2823]">
                <div className="flex items-center gap-2">
                  <Bookmark className="h-4 w-4 text-[#854D0E] dark:text-[#E5B85C]" />
                  <h3 className="text-sm font-semibold text-[#1C1917] dark:text-[#F3EFE6]">
                    میری ذاتی بیاض (محفوظ کردہ اسباق)
                  </h3>
                </div>
                <span className="text-xs text-[#57534E] dark:text-[#B8B0A4] tabular-nums">
                  {bookmarkedEntries.length}
                </span>
              </div>

              {bookmarkedEntries.length === 0 ? (
                <p className="mt-4 text-xs leading-relaxed text-[#57534E] dark:text-[#B8B0A4]">
                  مطالعہ گاہ میں کسی بھی صحابیؓ کے مضمون پر "بیاض میں محفوظ کریں" کلک کریں تاکہ اس کا لبِ لباب یہاں یاددہانی کے لیے محفوظ رہے۔
                </p>
              ) : (
                <ul className="mt-3 space-y-2">
                  {bookmarkedEntries.map((entry) => (
                    <li
                      key={entry.id}
                      className="flex items-center justify-between gap-2 rounded-lg border border-[#E4DDD0] bg-[#FFFFFF] px-3 py-2 dark:border-[#2C2823] dark:bg-[#141210]"
                    >
                      <button
                        type="button"
                        onClick={() => onOpenVolume(entry.volumeNumber)}
                        className="text-right flex-1 cursor-pointer"
                      >
                        <p className="text-xs font-semibold text-[#14532D] dark:text-[#86C99B] tabular-nums">
                          جلد {entry.volumeNumber} · {entry.alIsm.urdu.split(' (')[0]}
                        </p>
                        <p className="text-xs text-[#57534E] dark:text-[#B8B0A4] truncate">
                          {entry.lubbELubab.actionableLesson}
                        </p>
                      </button>
                      <button
                        type="button"
                        aria-label="بیاض سے ہٹائیں"
                        onClick={() => onToggleBookmark(entry.id)}
                        className="p-1.5 text-[#78716C] hover:text-[#9A3412] dark:hover:text-[#F87171] cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
