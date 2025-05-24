import React, { ReactNode, ElementType } from 'react';

export type SectionTitleProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

const DEFAULT_TAG: ElementType = 'h2';

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  as = DEFAULT_TAG,
  className = '',
}) => {
  const Tag = as;
  const isHeadingTag = typeof as === 'string' && /^h[1-6]$/.test(as);
  return (
    <Tag
      className={`text-[32px] md:text-[48px] font-bold text-[#163651] mb-8 font-inter leading-tight ${className}`.trim()}
      {...(!isHeadingTag && { role: 'heading', 'aria-level': 2 })}
    >
      {children}
    </Tag>
  );
};

export default SectionTitle; 