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
      'w-20 h-20',           // Size
      'md:w-24 md:h-24',     // Responsive size
      'border-2 border-gray-400',
      'bg-white',
      'text-2xl md:text-3xl', // Responsive text
      'font-bold',
      'transition-all duration-200',
      'focus:outline-none',
      'focus:ring-2 focus:ring-blue-500',
      'focus:ring-offset-2',
    ];

    // Hover styles for empty squares
    if (!value && !disabled) {
      baseStyles.push(
        'hover:bg-gray-100',
        'hover:border-gray-500',
        'hover:shadow-md',
        'cursor-pointer'
      );
    }

    // Winning square animation
    if (isWinningSquare) {
      baseStyles.push(
        'bg-green-100',
        'border-green-500',
        'animate-winner-pulse',
        'text-green-800'
      );
    }

    // Player specific colors
    if (value === 'X') {
      baseStyles.push('text-blue-600');
    } else if (value === 'O') {
      baseStyles.push('text-red-600');
    }

    // Disabled state
    if (disabled && !value) {
      baseStyles.push('cursor-not-allowed', 'opacity-50');
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