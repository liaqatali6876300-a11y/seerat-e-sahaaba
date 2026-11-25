import React, { useMemo, useState } from 'react';
import {
  Bookmark,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Moon,
  Search,
  Sun,
} from 'lucide-react';
import { ALL_BIOGRAPHIES } from '../data/biographies';
import { CLASSICAL_BOOKS, VOLUMES_31 } from '../data/volumes';
import { LifeTheme, SahabiBiography } from '../types/seerah';
import { ArabicGlossaryText } from './ArabicGlossaryText';

interface SeerahReaderProps {
  selectedVolumeNumber: number;
  onSelectVolume: (volumeNumber: number) => void;
  bookmarks: string[];
  onToggleBookmark: (bioId: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const LIFE_THEMES: Array<'تمام' | LifeTheme> = [
  'تمام',
  'صبر و استقامت',
  'رزق و فاقہ',
  'ایثار و قربانی',
  'خواتینِ اسلام کی جرات',
  'عدل و امانت',
  'تلاشِ حق و توکل',
  'والدین و وفاداری',
];

export const SeerahReader: React.FC<SeerahReaderProps> = ({
  selectedVolumeNumber,
  onSelectVolume,
  bookmarks,
  onToggleBookmark,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<'تمام' | LifeTheme>('تمام');
  const [showInlineGlossary, setShowInlineGlossary] = useState(true);
  const [highlightGlossary, setHighlightGlossary] = useState(true);
  const [showEnglishHelper, setShowEnglishHelper] = useState(false);
  const [fontScale, setFontScale] = useState<'normal' | 'large'>('normal');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredList = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ALL_BIOGRAPHIES.filter((bio) => {
      const themeMatch = selectedTheme === 'تمام' || bio.lifeTheme === selectedTheme;
      if (!themeMatch) return false;
      if (!q) return true;
      return (
        bio.alIsm.urdu.toLowerCase().includes(q) ||
        bio.alIsm.arabic.toLowerCase().includes(q) ||
        bio.sourceCitation.toLowerCase().includes(q) ||
        bio.lifeTheme.toLowerCase().includes(q) ||
        String(bio.volumeNumber).includes(q) ||
        bio.lubbELubab.essenceUrdu.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedTheme]);

  const activeBio: SahabiBiography = useMemo(() => {
    return (
      ALL_BIOGRAPHIES.find((b) => b.volumeNumber === selectedVolumeNumber) ||
      ALL_BIOGRAPHIES[0]
    );
  }, [selectedVolumeNumber]);

  const activeBook = CLASSICAL_BOOKS.find((b) => b.id === activeBio.bookId);
  const activeVolumeInfo = VOLUMES_31.find((v) => v.volumeNumber === activeBio.volumeNumber);
  const isBookmarked = bookmarks.includes(activeBio.id);

  const handleCopy = async () => {
    const formatted = [
      `بسم اللہ الرحمن الرحیم`,
      `${activeBio.sourceCitation}`,
      ``,
      `۱۔ الاسم (نام): ${activeBio.alIsm.arabic} — ${activeBio.alIsm.urdu}`,
      `۲۔ النسب (نسب): ${activeBio.alNasab.urdu}`,
      `۳۔ السیرۃ (زندگی کا حال):`,
      ...activeBio.alSeerah.map((p) => `${p.arabicWithGlossary}\nترجمہ: ${p.urduTranslation}`),
      ``,
      `۴۔ الواقعۃ (واقعہ): ${activeBio.alWaqiah.headingUrdu}`,
      ...activeBio.alWaqiah.paragraphs.map(
        (p) => `${p.arabicWithGlossary}\nترجمہ: ${p.urduTranslation}`
      ),
      ``,
      `۵۔ لب لباب (خلاصہ): ${activeBio.lubbELubab.essenceUrdu}`,
      `میری زندگی سے موازنہ: ${activeBio.lubbELubab.modernLifeComparison}`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedId(activeBio.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Clipboard blocked in restricted context — ignore silently
    }
  };

  const arabicTextSize =
    fontScale === 'large'
      ? 'text-2xl sm:text-[1.7rem] leading-[2.2]'
      : 'text-xl sm:text-[1.45rem] leading-[2.1]';
  const urduTextSize =
    fontScale === 'large' ? 'text-lg leading-[2]' : 'text-base leading-[1.9]';

  return (
    <section
      id="seerah-reader"
      className="border-b border-[#E4DDD0] py-14 dark:border-[#2C2823]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Workspace Header + Controls Toolbar */}
        <div className="mb-8 flex flex-col gap-5 border-b border-[#E4DDD0] pb-6 dark:border-[#2C2823]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-[#854D0E] dark:text-[#E5B85C]">
                سیرتِ صحابہ مطالعہ گاہ
              </p>
              <h2 className="mt-1 font-arabic text-3xl font-bold text-[#1C1917] dark:text-[#F3EFE6]">
                العربی مع الترجمة · تفسیر الکلمات الصعبۃ · لب لباب
              </h2>
            </div>

            {/* Reading Preferences Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setShowInlineGlossary((v) => !v)}
                className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  showInlineGlossary
                    ? 'border-[#14532D] bg-[#14532D]/8 text-[#14532D] dark:border-[#86C99B] dark:bg-[#14532D]/25 dark:text-[#86C99B]'
                    : 'border-[#D6CEBE] text-[#57534E] dark:border-[#3A342C] dark:text-[#B8B0A4]'
                }`}
              >
                {showInlineGlossary ? 'بریکٹ تشریح: آن' : 'بریکٹ تشریح: آف'}
              </button>

              {showInlineGlossary && (
                <button
                  type="button"
                  onClick={() => setHighlightGlossary((v) => !v)}
                  className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    highlightGlossary
                      ? 'border-[#854D0E] bg-[#854D0E]/10 text-[#854D0E] dark:border-[#E5B85C] dark:bg-[#E5B85C]/15 dark:text-[#E5B85C]'
                      : 'border-[#D6CEBE] text-[#57534E] dark:border-[#3A342C] dark:text-[#B8B0A4]'
                  }`}
                >
                  تشریح نمایاں
                </button>
              )}

              <button
                type="button"
                onClick={() => setShowEnglishHelper((v) => !v)}
                className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  showEnglishHelper
                    ? 'border-[#14532D] bg-[#14532D]/8 text-[#14532D] dark:border-[#86C99B] dark:bg-[#14532D]/25 dark:text-[#86C99B]'
                    : 'border-[#D6CEBE] text-[#57534E] dark:border-[#3A342C] dark:text-[#B8B0A4]'
                }`}
              >
                English Summary
              </button>

              <button
                type="button"
                onClick={() =>
                  setFontScale((s) => (s === 'normal' ? 'large' : 'normal'))
                }
                className="rounded-lg border border-[#D6CEBE] px-3 py-2 text-xs font-medium text-[#1C1917] hover:bg-[#F1ECE2] dark:border-[#3A342C] dark:text-[#F3EFE6] dark:hover:bg-[#221F1B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {fontScale === 'normal' ? 'خط بڑا کریں' : 'خط درمیانہ کریں'}
              </button>

              <button
                type="button"
                onClick={onToggleDarkMode}
                aria-label={isDarkMode ? 'روشن کاغذی موڈ' : 'شبینہ مطالعہ موڈ'}
                className="flex items-center gap-1.5 rounded-lg border border-[#D6CEBE] px-3 py-2 text-xs font-medium text-[#1C1917] hover:bg-[#F1ECE2] dark:border-[#3A342C] dark:text-[#F3EFE6] dark:hover:bg-[#221F1B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="h-3.5 w-3.5" />
                    <span>روشن صفحہ</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5" />
                    <span>شبینہ مطالعہ</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Search & Theme Filters */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#57534E] dark:text-[#B8B0A4]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="صحابی، جلد نمبر یا موضوع تلاش کریں..."
                className="w-full rounded-lg border border-[#D6CEBE] bg-[#FFFFFF] py-2 pr-9 pl-3 text-sm text-[#1C1917] placeholder:text-[#78716C] focus:border-[#14532D] focus:outline-none dark:border-[#3A342C] dark:bg-[#1B1815] dark:text-[#F3EFE6] dark:focus:border-[#86C99B]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {LIFE_THEMES.map((theme) => (
                <button
                  key={theme}
                  type="button"
                  onClick={() => setSelectedTheme(theme)}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedTheme === theme
                      ? 'bg-[#14532D] text-[#FAF8F3] dark:bg-[#1E6B3E]'
                      : 'bg-[#EBE6DF]/80 text-[#57534E] hover:text-[#1C1917] dark:bg-[#221F1B] dark:text-[#B8B0A4] dark:hover:text-[#F3EFE6]'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetric 30/70 Museum Editorial Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar Index (30%) */}
          <aside className="lg:col-span-4">
            <div className="rounded-xl border border-[#E4DDD0] bg-[#F4EFE4]/60 p-4 dark:border-[#2C2823] dark:bg-[#181512]">
              <div className="flex items-center justify-between border-b border-[#E4DDD0] pb-3 dark:border-[#2C2823]">
                <h3 className="text-sm font-semibold text-[#1C1917] dark:text-[#F3EFE6]">
                  جلدوں کی فہرست
                </h3>
                <span className="text-xs text-[#57534E] dark:text-[#B8B0A4] tabular-nums">
                  {filteredList.length} / 31
                </span>
              </div>

              {filteredList.length === 0 ? (
                <div className="py-10 text-center">
                  <p className="text-sm text-[#57534E] dark:text-[#B8B0A4]">
                    اس تلاش سے کوئی اندراج نہیں ملا۔
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedTheme('تمام');
                    }}
                    className="mt-3 text-xs font-medium text-[#14532D] underline dark:text-[#86C99B] cursor-pointer"
                  >
                    تمام جلدیں دکھائیں
                  </button>
                </div>
              ) : (
                <div className="mt-3 max-h-[640px] space-y-1.5 overflow-y-auto pl-1">
                  {filteredList.map((bio) => {
                    const isActive = bio.volumeNumber === activeBio.volumeNumber;
                    return (
                      <button
                        key={bio.id}
                        type="button"
                        onClick={() => onSelectVolume(bio.volumeNumber)}
                        className={`w-full rounded-lg border p-3 text-right transition-colors cursor-pointer ${
                          isActive
                            ? 'border-[#14532D] bg-[#FAF8F3] dark:border-[#86C99B] dark:bg-[#221F1B]'
                            : 'border-transparent hover:border-[#D6CEBE] hover:bg-[#FAF8F3]/70 dark:hover:border-[#3A342C] dark:hover:bg-[#1F1C18]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 text-xs text-[#57534E] dark:text-[#B8B0A4]">
                          <span className="font-semibold text-[#14532D] dark:text-[#86C99B] tabular-nums">
                            جلد {bio.volumeNumber}
                          </span>
                          <span>{bio.lifeTheme}</span>
                        </div>
                        <p className="mt-1 text-sm font-semibold text-[#1C1917] dark:text-[#F3EFE6]">
                          {bio.alIsm.urdu.split(' (')[0]}
                        </p>
                        <p className="mt-0.5 text-xs text-[#57534E] dark:text-[#B8B0A4] truncate">
                          {bio.alIsm.titleHonorific}
                        </p>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </aside>

          {/* Main Reading Sheet (70%) */}
          <article className="lg:col-span-8">
            <div className="rounded-xl border border-[#E4DDD0] bg-[#FFFFFF] p-6 sm:p-10 dark:border-[#2C2823] dark:bg-[#1B1815]">
              {/* Unboxed Accession & Citation Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E4DDD0] pb-5 dark:border-[#2C2823]">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E] dark:text-[#B8B0A4]">
                    <span className="font-semibold text-[#14532D] dark:text-[#86C99B] tabular-nums">
                      جلد {activeBio.volumeNumber}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{activeBook?.titleUrduMeaning.split(' (')[0]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeVolumeInfo?.scopeUrdu}</span>
                  </div>
                  <p className="text-xs text-[#854D0E] dark:text-[#E5B85C]">
                    حوالہ (لا زیادۃ ولا نقصان): {activeBio.sourceCitation}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onToggleBookmark(activeBio.id)}
                    className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isBookmarked
                        ? 'border-[#854D0E] bg-[#854D0E]/10 text-[#854D0E] dark:border-[#E5B85C] dark:bg-[#E5B85C]/15 dark:text-[#E5B85C]'
                        : 'border-[#D6CEBE] text-[#57534E] hover:text-[#1C1917] dark:border-[#3A342C] dark:text-[#B8B0A4] dark:hover:text-[#F3EFE6]'
                    }`}
                  >
                    <Bookmark className="h-3.5 w-3.5" />
                    <span>{isBookmarked ? 'بیاض میں محفوظ' : 'بیاض میں محفوظ کریں'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-lg border border-[#D6CEBE] px-3 py-1.5 text-xs font-medium text-[#57534E] hover:text-[#1C1917] dark:border-[#3A342C] dark:text-[#B8B0A4] dark:hover:text-[#F3EFE6] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {copiedId === activeBio.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#14532D] dark:text-[#86C99B]" />
                        <span>کاپی ہو گیا</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>تحریر کاپی کریں</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Reading Body constrained to comfortable measure */}
              <div className="mt-8 max-w-3xl space-y-10">
                {/* 1. الاسم (نام) */}
                <div>
                  <p className="text-xs font-medium text-[#57534E] dark:text-[#B8B0A4]">
                    ۱۔ الاسم (نام)
                  </p>
                  <h3 className="mt-2 font-arabic text-2xl sm:text-3xl font-bold text-[#14532D] dark:text-[#86C99B] leading-relaxed">
                    {activeBio.alIsm.arabic}
                  </h3>
                  <p className="mt-1 text-lg font-bold text-[#1C1917] dark:text-[#F3EFE6]">
                    {activeBio.alIsm.urdu}
                  </p>
                  <p className="mt-1 text-sm text-[#854D0E] dark:text-[#E5B85C]">
                    {activeBio.alIsm.titleHonorific}
                  </p>
                </div>

                {/* 2. النسب (نسب / خاندان) */}
                <div className="border-t border-[#E4DDD0] pt-7 dark:border-[#2C2823]">
                  <p className="text-xs font-medium text-[#57534E] dark:text-[#B8B0A4]">
                    ۲۔ النسب (نسب / خاندان)
                  </p>
                  <p className={`mt-3 font-arabic text-[#1C1917] dark:text-[#F3EFE6] ${arabicTextSize}`}>
                    <ArabicGlossaryText
                      text={activeBio.alNasab.arabicWithGlossary}
                      highlightGlossary={highlightGlossary}
                      showInlineGlossary={showInlineGlossary}
                    />
                  </p>
                  <p className={`mt-2 text-[#44403C] dark:text-[#D6CFC2] ${urduTextSize}`}>
                    {activeBio.alNasab.urdu}
                  </p>
                  <p className="mt-2 text-xs text-[#57534E] dark:text-[#B8B0A4]">
                    قبیلہ و نسبت: {activeBio.alNasab.tribeOrOrigin}
                  </p>
                </div>

                {/* 3. السیرۃ (زندگی کا حال) */}
                <div className="border-t border-[#E4DDD0] pt-7 dark:border-[#2C2823]">
                  <p className="text-xs font-medium text-[#57534E] dark:text-[#B8B0A4]">
                    ۳۔ السیرۃ (زندگی کا حال — العربی مع الترجمة)
                  </p>
                  <div className="mt-4 space-y-6">
                    {activeBio.alSeerah.map((para, idx) => (
                      <div key={idx} className="space-y-2.5">
                        <p className={`font-arabic text-[#1C1917] dark:text-[#F3EFE6] ${arabicTextSize}`}>
                          <ArabicGlossaryText
                            text={para.arabicWithGlossary}
                            highlightGlossary={highlightGlossary}
                            showInlineGlossary={showInlineGlossary}
                          />
                        </p>
                        <p className={`text-[#44403C] dark:text-[#D6CFC2] ${urduTextSize}`}>
                          <span className="font-semibold text-[#14532D] dark:text-[#86C99B]">
                            ترجمہ:{' '}
                          </span>
                          {para.urduTranslation}
                        </p>
                        {showEnglishHelper && (
                          <p
                            dir="ltr"
                            className="text-left text-sm leading-relaxed text-[#57534E] dark:text-[#B8B0A4] pt-1"
                          >
                            {para.englishTranslation}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. الواقعۃ (واقعہ) */}
                <div className="border-t border-[#E4DDD0] pt-7 dark:border-[#2C2823]">
                  <p className="text-xs font-medium text-[#57534E] dark:text-[#B8B0A4]">
                    ۴۔ الواقعۃ (واقعہ)
                  </p>
                  <h4 className="mt-2 font-arabic text-xl sm:text-2xl font-bold text-[#1C1917] dark:text-[#F3EFE6]">
                    {activeBio.alWaqiah.headingUrdu}
                  </h4>
                  <p className="mt-1 font-arabic text-base text-[#854D0E] dark:text-[#E5B85C]">
                    {activeBio.alWaqiah.headingArabic}
                  </p>

                  <div className="mt-5 space-y-6">
                    {activeBio.alWaqiah.paragraphs.map((para, idx) => (
                      <div key={idx} className="space-y-2.5">
                        <p className={`font-arabic text-[#1C1917] dark:text-[#F3EFE6] ${arabicTextSize}`}>
                          <ArabicGlossaryText
                            text={para.arabicWithGlossary}
                            highlightGlossary={highlightGlossary}
                            showInlineGlossary={showInlineGlossary}
                          />
                        </p>
                        <p className={`text-[#44403C] dark:text-[#D6CFC2] ${urduTextSize}`}>
                          <span className="font-semibold text-[#14532D] dark:text-[#86C99B]">
                            ترجمہ:{' '}
                          </span>
                          {para.urduTranslation}
                        </p>
                        {showEnglishHelper && (
                          <p
                            dir="ltr"
                            className="text-left text-sm leading-relaxed text-[#57534E] dark:text-[#B8B0A4] pt-1"
                          >
                            {para.englishTranslation}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* تفسیر الکلمات الصعبۃ (Glossary Definition List) */}
                <div className="border-t border-[#E4DDD0] pt-7 dark:border-[#2C2823]">
                  <p className="text-xs font-medium text-[#854D0E] dark:text-[#E5B85C]">
                    تفسیر الکلمات الصعبۃ (مشکل عربی الفاظ کی فرہنگ)
                  </p>
                  <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {activeBio.vocabulary.map((word, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-between rounded-lg border border-[#E4DDD0] bg-[#FAF8F3] px-4 py-3 dark:border-[#2C2823] dark:bg-[#141210]"
                      >
                        <dt className="font-arabic text-lg font-bold text-[#14532D] dark:text-[#86C99B]">
                          {word.arabic}
                        </dt>
                        <dd className="mt-1 text-sm text-[#44403C] dark:text-[#D6CFC2]">
                          ({word.urduMeaning})
                        </dd>
                        {showEnglishHelper && (
                          <dd dir="ltr" className="mt-1 text-left text-xs text-[#57534E] dark:text-[#B8B0A4]">
                            {word.englishMeaning}
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                </div>

                {/* 5. لب لباب (خلاصہ اور ہماری زندگی سے موازنہ) */}
                <div className="border-t border-[#E4DDD0] pt-7 dark:border-[#2C2823]">
                  <p className="text-xs font-medium text-[#14532D] dark:text-[#86C99B]">
                    ۵۔ لب لباب (خلاصہ — اس واقعے سے ہماری زندگی کے لیے کیا سبق ہے؟)
                  </p>

                  <div className="mt-4 rounded-xl border border-[#14532D]/25 bg-[#F4EFE4]/70 p-5 sm:p-6 dark:border-[#86C99B]/25 dark:bg-[#141210]">
                    <p className="text-base sm:text-lg font-semibold leading-relaxed text-[#1C1917] dark:text-[#F3EFE6]">
                      {activeBio.lubbELubab.essenceUrdu}
                    </p>

                    <div className="mt-5 grid grid-cols-1 gap-4 border-t border-[#E4DDD0] pt-4 sm:grid-cols-2 dark:border-[#2C2823]">
                      <div>
                        <p className="text-xs font-semibold text-[#854D0E] dark:text-[#E5B85C]">
                          صحابہؓ کی آزمائش
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#44403C] dark:text-[#D6CFC2]">
                          {activeBio.lubbELubab.sahabiHardship}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#14532D] dark:text-[#86C99B]">
                          ہماری آج کی زندگی سے موازنہ
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#44403C] dark:text-[#D6CFC2]">
                          {activeBio.lubbELubab.modernLifeComparison}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-[#E4DDD0] pt-4 dark:border-[#2C2823]">
                      <p className="text-xs font-semibold text-[#1C1917] dark:text-[#F3EFE6]">
                        آج کی عملی اصلاح:
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#44403C] dark:text-[#D6CFC2]">
                        {activeBio.lubbELubab.actionableLesson}
                      </p>
                      {showEnglishHelper && (
                        <p
                          dir="ltr"
                          className="mt-3 text-left text-xs leading-relaxed text-[#57534E] dark:text-[#B8B0A4]"
                        >
                          Key Takeaway: {activeBio.lubbELubab.englishTakeaway}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Previous / Next Volume Footer Controls */}
              <div className="mt-10 flex items-center justify-between border-t border-[#E4DDD0] pt-6 dark:border-[#2C2823]">
                <button
                  type="button"
                  disabled={activeBio.volumeNumber <= 1}
                  onClick={() => onSelectVolume(Math.max(1, activeBio.volumeNumber - 1))}
                  className="flex items-center gap-2 rounded-lg border border-[#D6CEBE] px-4 py-2 text-xs sm:text-sm font-medium text-[#1C1917] hover:bg-[#F1ECE2] disabled:opacity-40 disabled:cursor-not-allowed dark:border-[#3A342C] dark:text-[#F3EFE6] dark:hover:bg-[#221F1B] transition-colors cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="tabular-nums">
                    پچھلی جلد ({Math.max(1, activeBio.volumeNumber - 1)})
                  </span>
                </button>

                <span className="text-xs text-[#57534E] dark:text-[#B8B0A4] tabular-nums">
                  جلد {activeBio.volumeNumber} از 31
                </span>

                <button
                  type="button"
                  disabled={activeBio.volumeNumber >= 31}
                  onClick={() => onSelectVolume(Math.min(31, activeBio.volumeNumber + 1))}
                  className="flex items-center gap-2 rounded-lg border border-[#D6CEBE] px-4 py-2 text-xs sm:text-sm font-medium text-[#1C1917] hover:bg-[#F1ECE2] disabled:opacity-40 disabled:cursor-not-allowed dark:border-[#3A342C] dark:text-[#F3EFE6] dark:hover:bg-[#221F1B] transition-colors cursor-pointer"
                >
                  <span className="tabular-nums">
                    اگلی جلد ({Math.min(31, activeBio.volumeNumber + 1)})
                  </span>
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
