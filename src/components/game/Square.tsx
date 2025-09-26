'use client';

import React from 'react';
import { Player } from '@/types/game';

interface SquareProps {
  value: Player;
  onClick: () => void;
  isWinningSquare?: boolean;
  disabled?: boolean;
  glowEnabled?: boolean;
}

export default function Square({
  value,
  onClick,
  isWinningSquare = false,
  disabled = false,
  glowEnabled = true,
}: SquareProps) {
  const getSquareStyles = () => {
    const baseStyles = [
      'relative grid w-full place-items-center overflow-hidden',
      'aspect-square',
      'min-h-[90px] min-w-[90px]',
      'max-h-[260px] max-w-[260px]',
      'rounded-[24px]',
      'bg-white/90 backdrop-blur-sm',
      'text-[clamp(2.5rem,8vw,6.5rem)]',
      'font-bold',
      'transition-all duration-200 ease-out',
      'shadow-xl shadow-black/10',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'focus-visible:outline-none',
    ];

    if (glowEnabled) {
      baseStyles.push(
        'before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_70%)] before:opacity-0 before:transition before:duration-300',
        'hover:before:opacity-70'
      );
    }

    // Hover styles for empty squares
    if (!value && !disabled) {
      baseStyles.push(
        'cursor-pointer',
        'hover:-translate-y-2',
        'hover:bg-white/95',
        'hover:shadow-2xl hover:shadow-black/20'
      );
    }

    // Winning square animation
    if (isWinningSquare) {
      baseStyles.push(
        'bg-green-100/90',
        'shadow-2xl shadow-green-400/40'
      );
    }

    // Player specific colors
    if (value === 'X') {
      baseStyles.push('text-blue-700');
    } else if (value === 'O') {
      baseStyles.push('text-red-700');
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
