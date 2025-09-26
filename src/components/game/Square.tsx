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
      'max-h-[300px] max-w-[300px]',
      'rounded-[48px]',
      'border border-[rgba(45,60,90,0.12)]',
      'bg-[#F5F8FC]',
      'text-[clamp(2.5rem,8vw,6.5rem)]',
      'font-bold',
      'transition-all duration-200 ease-out',
      'shadow-[0_20px_35px_rgba(0,0,0,0.14)]',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'focus-visible:outline-none',
    ];

    if (glowEnabled) {
      baseStyles.push(
        'after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:bg-[radial-gradient(circle_at_50%_30%,rgba(255,224,232,0.3),transparent_75%)] after:opacity-0 after:transition after:duration-300',
        'hover:after:opacity-70'
      );
    }

    // Hover styles for empty squares
    if (!value && !disabled) {
      baseStyles.push(
        'cursor-pointer',
        'hover:-translate-y-1',
        'hover:bg-white',
        'hover:shadow-[0_26px_55px_rgba(0,0,0,0.18)]'
      );
    }

    // Winning square animation
    if (isWinningSquare) {
      baseStyles.push(
        'bg-[#EAF6FF]',
        'border-[rgba(45,60,90,0.28)]',
        'shadow-[0_30px_70px_rgba(45,60,90,0.22)]'
      );
    }

    // Player specific colors
    if (value === 'X') {
      baseStyles.push('text-[#2D3C5A]');
    } else if (value === 'O') {
      baseStyles.push('text-[#D46A93]');
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
