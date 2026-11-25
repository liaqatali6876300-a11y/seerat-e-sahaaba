import React from 'react';

interface ArabicGlossaryTextProps {
  text: string;
  highlightGlossary: boolean;
  showInlineGlossary: boolean;
  className?: string;
}

export const ArabicGlossaryText: React.FC<ArabicGlossaryTextProps> = ({
  text,
  highlightGlossary,
  showInlineGlossary,
  className = '',
}) => {
  // Splits text into segments preserving parenthetical Urdu explanations like (لفظ کا معنی)
  const parts = text.split(/(\([^)]+\))/g);

  return (
    <span className={className} dir="rtl">
      {parts.map((part, index) => {
        const isBracketed = part.startsWith('(') && part.endsWith(')');
        if (!isBracketed) {
          return <React.Fragment key={index}>{part}</React.Fragment>;
        }
        if (!showInlineGlossary) {
          return null;
        }
        return (
          <span
            key={index}
            className={
              highlightGlossary
                ? 'mx-1 inline font-ui text-[0.78em] font-medium text-[#854D0E] dark:text-[#E5B85C] bg-[#854D0E]/8 dark:bg-[#E5B85C]/12 px-1.5 py-0.5 rounded'
                : 'mx-1 inline font-ui text-[0.78em] font-normal text-[#57534E] dark:text-[#B8B0A4]'
            }
          >
            {part}
          </span>
        );
      })}
    </span>
  );
};
