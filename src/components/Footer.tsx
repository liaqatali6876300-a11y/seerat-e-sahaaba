import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F3] py-12 dark:bg-[#141210]">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-medium text-[#854D0E] dark:text-[#E5B85C]">
          قَالَ رَسُولُ اللَّهِ ﷺ
        </p>

        <p className="mt-3 font-arabic text-2xl sm:text-3xl font-bold text-[#14532D] dark:text-[#86C99B]">
          خَيْرُ الْقُرُونِ{' '}
          <span className="font-ui text-sm font-normal text-[#57534E] dark:text-[#B8B0A4]">
            (سب سے بہترین زمانہ)
          </span>{' '}
          قَرْنِي{' '}
          <span className="font-ui text-sm font-normal text-[#57534E] dark:text-[#B8B0A4]">
            (میرا زمانہ ہے)
          </span>
        </p>

        <p className="mt-2 text-sm text-[#44403C] dark:text-[#D6CFC2]">
          ترجمہ: سب سے بہترین زمانہ میرا زمانہ ہے۔
        </p>

        <div className="my-7 border-t border-[#E4DDD0] dark:border-[#2C2823]" />

        <p className="font-arabic text-lg sm:text-xl text-[#1C1917] dark:text-[#F3EFE6]">
          وَآخِرُ دَعْوَانَا أَنِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
        </p>
        <p className="mt-1 text-xs sm:text-sm text-[#57534E] dark:text-[#B8B0A4]">
          (اور ہماری آخری دعا یہ ہے کہ تمام تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا رب ہے)
        </p>
      </div>
    </footer>
  );
};
