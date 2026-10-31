import React from 'react';

interface FractionProps {
  num: string | number;
  den: string | number;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
}

export const Fraction: React.FC<FractionProps> = ({
  num,
  den,
  className = '',
  size = 'base'
}) => {
  const sizeClasses = {
    sm: 'text-xs',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-2xl'
  };

  return (
    <span className={`inline-flex flex-col items-center justify-center align-middle mx-1 font-semibold leading-none ${sizeClasses[size]} ${className}`}>
      <span className="border-b-2 border-current px-1 py-0.5 text-center block w-full">
        {num}
      </span>
      <span className="px-1 py-0.5 text-center block w-full">
        {den}
      </span>
    </span>
  );
};

/**
 * Helper to render text containing fractions like "3/4" or "2 1/4" into React elements with true horizontal fraction bars
 */
export const renderElementaryMath = (text: string, size: 'sm' | 'base' | 'lg' | 'xl' = 'base'): React.ReactNode => {
  if (!text) return null;

  // Regex to match mixed numbers like "2 1/2" or fractions like "3/4" or "75/100"
  // Note: Avoid matching date patterns or regular slashes like "km/h" if needed
  const fractionRegex = /(\b\d+\s+)?(\b\d+)\/(\d+\b)/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = fractionRegex.exec(text)) !== null) {
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    const wholePart = match[1] ? match[1].trim() : null;
    const numerator = match[2];
    const denominator = match[3];

    parts.push(
      <span key={`frac-${matchIndex}`} className="inline-flex items-center align-middle mx-0.5">
        {wholePart && <span className="mr-1 font-bold">{wholePart}</span>}
        <Fraction num={numerator} den={denominator} size={size} />
      </span>
    );

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
};
