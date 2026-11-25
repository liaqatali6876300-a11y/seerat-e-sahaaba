import React from 'react';

interface HeaderProps {
  onJumpToReader: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onJumpToReader }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E4DDD0] bg-[#FAF8F3]/95 backdrop-blur-sm dark:border-[#2C2823] dark:bg-[#141210]/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-arabic text-xl font-bold tracking-normal text-[#1C1917] whitespace-nowrap shrink-0 dark:text-[#F3EFE6]"
        >
          سیرتِ صحابہ کرامؓ
        </a>

        {/* Zone 2: 4 concise single-line text nav links */}
        <nav
          aria-label="بنیادی مینو"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#57534E] dark:text-[#B8B0A4]"
        >
          <a
            href="#tahreer-namah"
            className="hover:text-[#14532D] dark:hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 hover:underline underline-offset-8"
          >
            تحریر نامہ
          </a>
          <a
            href="#volumes-31"
            className="hover:text-[#14532D] dark:hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 hover:underline underline-offset-8"
          >
            31 جلدوں کی فہرست
          </a>
          <a
            href="#seerah-reader"
            className="hover:text-[#14532D] dark:hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 hover:underline underline-offset-8"
          >
            سیرت مطالعہ
          </a>
          <a
            href="#life-comparison"
            className="hover:text-[#14532D] dark:hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 hover:underline underline-offset-8"
          >
            موازنۂ حیات
          </a>
        </nav>

        {/* Zone 3: 1 primary CTA action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onJumpToReader}
            className="rounded-lg bg-[#14532D] px-4 py-2 text-xs sm:text-sm font-medium text-[#FAF8F3] hover:bg-[#0F3F22] dark:bg-[#1E6B3E] dark:hover:bg-[#16522F] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
          >
            مطالعہ شروع کریں
          </button>
        </div>
      </div>
    </header>
  );
};
