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
    <div className="rounded-xl bg-white/30 backdrop-blur-md border border-white/40 px-6 py-3 shadow-lg" role="status" aria-live="polite">
      <p className={`transition-all duration-300 ${status.className}`}>
        {status.message}
      </p>
    </div>
  );
}
