'use client';

import React from 'react';
import { Player } from '@/types/game';

interface SquareProps {
  value: Player;
  onClick: () => void;
  isWinningSquare?: boolean;
  disabled?: boolean;
}

export default function Square({
  value,
  onClick,
  isWinningSquare = false,
  disabled = false
}: SquareProps) {
  const getSquareStyles = () => {
    const baseStyles = [
      'relative grid w-full place-items-center',
      'aspect-square',
      'min-h-[90px] min-w-[90px]',
      'max-h-[260px] max-w-[260px]',
      'rounded-[26px]',
      'border border-white/10',
      'bg-gradient-to-br from-slate-900/85 via-slate-950/60 to-slate-900/75',
      'text-[clamp(2.5rem,8vw,6.5rem)]',
      'font-semibold text-slate-100',
      'transition-all duration-200 ease-out',
      'shadow-square backdrop-blur-xl',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'focus-visible:outline-none',
      'focus-visible:ring-4 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    ];

    // Hover styles for empty squares
    if (!value && !disabled) {
      baseStyles.push(
        'cursor-pointer',
        'hover:-translate-y-1',
        'hover:border-indigo-300/70',
        'hover:bg-indigo-400/15',
        'hover:shadow-square-strong'
      );
    }

    // Winning square animation
    if (isWinningSquare) {
      baseStyles.push(
        'border-emerald-400/70',
        'bg-gradient-to-br from-emerald-500/25 via-emerald-400/10 to-transparent',
        'shadow-winning-square'
      );
    }

    // Player specific colors
    if (value === 'X') {
      baseStyles.push(
        'text-transparent',
        'bg-clip-text',
        'bg-gradient-to-br from-sky-300 via-cyan-300 to-blue-500',
        'drop-shadow-[0_0_22px_rgba(56,189,248,0.55)]'
      );
    } else if (value === 'O') {
      baseStyles.push(
        'text-transparent',
        'bg-clip-text',
        'bg-gradient-to-br from-rose-300 via-pink-300 to-orange-300',
        'drop-shadow-[0_0_22px_rgba(244,114,182,0.55)]'
      );
    }

    // Disabled state
    if (disabled && !value) {
      baseStyles.push('opacity-60');
    }

    return baseStyles.join(' ');
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || !!value}
      className={getSquareStyles()}
      aria-label={
        value
          ? `Square with ${value}`
          : `Empty square, click to place ${disabled ? 'disabled' : 'your mark'}`
      }
      type="button"
    >
      {value}
    </button>
  );
}
