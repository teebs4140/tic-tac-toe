'use client';

import React from 'react';
import { Player } from '@/types/game';

interface GameStatusProps {
  currentPlayer: Player;
  winner: Player;
  isDraw: boolean;
}

export default function GameStatus({ currentPlayer, winner, isDraw }: GameStatusProps) {
  const getStatusMessage = () => {
    if (winner) {
      return {
        message: `🏆 Player ${winner} wins!`,
        className: 'text-2xl font-bold text-green-700',
      };
    }

    if (isDraw) {
      return {
        message: "🤝 It's a draw!",
        className: 'text-2xl font-bold text-amber-700',
      };
    }

    return {
      message: `Player ${currentPlayer}'s turn`,
      className: `text-xl font-semibold ${
        currentPlayer === 'X' ? 'text-blue-700' : 'text-red-700'
      }`,
    };
  };

  const status = getStatusMessage();

  return (
    <div className="text-center" role="status" aria-live="polite">
      <p className={`transition-all duration-300 ${status.className} drop-shadow-sm`}>
        {status.message}
      </p>
    </div>
  );
}
