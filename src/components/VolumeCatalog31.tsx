import React, { useState } from 'react';
import { BookMarked, ArrowUpLeft } from 'lucide-react';
import { CLASSICAL_BOOKS, VOLUMES_31 } from '../data/volumes';
import { ALL_BIOGRAPHIES } from '../data/biographies';
import { BookId } from '../types/seerah';

interface VolumeCatalog31Props {
  selectedVolumeNumber: number;
  onSelectVolume: (volumeNumber: number) => void;
}

export const VolumeCatalog31: React.FC<VolumeCatalog31Props> = ({
  selectedVolumeNumber,
  onSelectVolume,
}) => {
  const [activeBookFilter, setActiveBookFilter] = useState<'all' | BookId>('all');
  const [illuminationError, setIlluminationError] = useState(false);

  const filteredVolumes =
    activeBookFilter === 'all'
      ? VOLUMES_31
      : VOLUMES_31.filter((v) => v.bookId === activeBookFilter);

  const selectedBook =
    activeBookFilter === 'all'
      ? null
      : CLASSICAL_BOOKS.find((b) => b.id === activeBookFilter) ?? null;

  return (
    <section
      id="volumes-31"
      className="border-b border-[#E4DDD0] bg-[#F4EFE4]/40 py-14 dark:border-[#2C2823] dark:bg-[#181512]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Artwork */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center mb-10">
          <div className="lg:col-span-8">
            <p className="text-xs font-medium text-[#854D0E] dark:text-[#E5B85C]">
              31 جلدوں کا پہلا نامہ
            </p>
            <h2 className="mt-1 font-arabic text-3xl font-bold text-[#1C1917] dark:text-[#F3EFE6]">
              پانچ مستند کتبِ سیرت و صحابہ کی مکمل فہرست
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-[#44403C] dark:text-[#D6CFC2]">
              ذیل میں ان پانچ بنیادی کتابوں کی تمام 31 جلدیں ترتیب وار درج ہیں۔ کسی بھی کتاب کو منتخب کریں یا براہِ راست کسی بھی جلد (جلد 1 تا جلد 31) پر کلک کر کے اس کا مستند مضمون مطالعہ کریں۔
            </p>
          </div>

          <div className="lg:col-span-4">
            <figure>
              <div className="h-36 overflow-hidden rounded-xl border border-[#E4DDD0] bg-[#EBE6DF] dark:border-[#2C2823] dark:bg-[#221F1B]">
                {!illuminationError ? (
                  <img
                    src="/src/assets/images/classical_illumination_border_1795581810726.jpg"
                    alt="کلاسیکی مخطوطے کا سنہرا اور سبز حاشیہ"
                    referrerPolicy="no-referrer"
                    onError={() => setIlluminationError(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-4">
                    <BookMarked className="h-8 w-8 text-[#14532D] dark:text-[#86C99B]" />
                  </div>
                )}
              </div>
              <figcaption className="mt-1.5 text-xs text-[#57534E] dark:text-[#B8B0A4]">
                تصویر ۲: قدیم مخطوطات کا تذهیب و جدول
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Interactive 5-Book Segmented Control */}
        <div
          role="tablist"
          aria-label="پانچ بنیادی کتب کی فہرست"
          className="flex flex-wrap items-center gap-1.5 rounded-xl border border-[#E4DDD0] bg-[#EBE6DF]/70 p-1.5 dark:border-[#2C2823] dark:bg-[#221F1B]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeBookFilter === 'all'}
            onClick={() => setActiveBookFilter('all')}
            className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeBookFilter === 'all'
                ? 'bg-[#FAF8F3] text-[#14532D] shadow-sm dark:bg-[#141210] dark:text-[#86C99B]'
                : 'text-[#57534E] hover:text-[#1C1917] dark:text-[#B8B0A4] dark:hover:text-[#F3EFE6]'
            }`}
          >
            تمام 31 جلدیں
          </button>
          {CLASSICAL_BOOKS.map((book) => (
            <button
              key={book.id}
              type="button"
              role="tab"
              aria-selected={activeBookFilter === book.id}
              onClick={() => setActiveBookFilter(book.id)}
              className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeBookFilter === book.id
                  ? 'bg-[#FAF8F3] text-[#14532D] shadow-sm dark:bg-[#141210] dark:text-[#86C99B]'
                  : 'text-[#57534E] hover:text-[#1C1917] dark:text-[#B8B0A4] dark:hover:text-[#F3EFE6]'
              }`}
            >
              {book.order}. {book.titleArabic.split(' (')[0]} ({book.totalVolumes} جلدیں)
            </button>
          ))}
        </div>

        {/* Selected Book Scholarly Dossier */}
        {selectedBook ? (
          <div className="mt-6 rounded-xl border border-[#E4DDD0] bg-[#FAF8F3] p-5 sm:p-6 dark:border-[#2C2823] dark:bg-[#1B1815]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E4DDD0] pb-4 dark:border-[#2C2823]">
              <div>
                <p className="text-xs text-[#57534E] dark:text-[#B8B0A4]">
                  {selectedBook.authorUrdu} · {selectedBook.authorDeathHijri} · {selectedBook.volumeRange}
                </p>
                <h3 className="mt-1 font-arabic text-2xl font-bold text-[#14532D] dark:text-[#86C99B]">
                  {selectedBook.titleUrduMeaning}
                </h3>
              </div>
              <p className="font-arabic text-base text-[#57534E] dark:text-[#B8B0A4]">
                {selectedBook.authorArabic}
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#44403C] dark:text-[#D6CFC2]">
              {selectedBook.descriptionUrdu}
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {CLASSICAL_BOOKS.map((book) => (
              <button
                key={book.id}
                type="button"
                onClick={() => setActiveBookFilter(book.id)}
                className="text-right rounded-xl border border-[#E4DDD0] bg-[#FAF8F3] p-4 hover:border-[#14532D]/50 dark:border-[#2C2823] dark:bg-[#1B1815] dark:hover:border-[#86C99B]/50 transition-colors cursor-pointer"
              >
                <p className="text-xs text-[#57534E] dark:text-[#B8B0A4] tabular-nums">
                  {book.volumeRange}
                </p>
                <p className="mt-1 font-arabic text-lg font-bold text-[#1C1917] dark:text-[#F3EFE6]">
                  {book.order}. {book.titleArabic.split(' (')[0]}
                </p>
                <p className="mt-1 text-xs text-[#14532D] dark:text-[#86C99B]">
                  مصنف: {book.authorUrdu}
                </p>
              </button>
            ))}
          </div>
        )}

        {/* 31-Volume Interactive Grid */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {filteredVolumes.map((vol) => {
            const book = CLASSICAL_BOOKS.find((b) => b.id === vol.bookId);
            const featuredEntry = ALL_BIOGRAPHIES.find(
              (bio) => bio.volumeNumber === vol.volumeNumber
            );
            const isSelected = selectedVolumeNumber === vol.volumeNumber;

            return (
              <button
                key={vol.volumeNumber}
                type="button"
                onClick={() => onSelectVolume(vol.volumeNumber)}
                className={`group flex flex-col justify-between rounded-xl border p-4 text-right transition-colors cursor-pointer ${
                  isSelected
                    ? 'border-[#14532D] bg-[#14532D]/6 dark:border-[#86C99B] dark:bg-[#14532D]/20'
                    : 'border-[#E4DDD0] bg-[#FAF8F3] hover:border-[#854D0E]/50 dark:border-[#2C2823] dark:bg-[#1B1815] dark:hover:border-[#E5B85C]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#57534E] dark:text-[#B8B0A4]">
                    <span className="font-semibold text-[#14532D] dark:text-[#86C99B] tabular-nums">
                      جلد {vol.volumeNumber}
                    </span>
                    <span className="truncate">{book?.titleArabic.split(' (')[0]}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-[#1C1917] dark:text-[#F3EFE6] leading-snug">
                    {vol.scopeUrdu}
                  </p>
                </div>

                {featuredEntry && (
                  <div className="mt-4 flex items-center justify-between border-t border-[#E4DDD0] pt-2.5 text-xs dark:border-[#2C2823]">
                    <span className="truncate font-medium text-[#854D0E] dark:text-[#E5B85C]">
                      {featuredEntry.alIsm.urdu.split(' (')[0]}
                    </span>
                    <ArrowUpLeft className="h-3.5 w-3.5 shrink-0 text-[#57534E] group-hover:text-[#14532D] dark:text-[#B8B0A4] dark:group-hover:text-[#86C99B]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
