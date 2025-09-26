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
        className: 'text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent',
      };
    }

    if (isDraw) {
      return {
        message: "🤝 It's a draw!",
        className: 'text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent',
      };
    }

    return {
      message: `Player ${currentPlayer}'s turn`,
      className: `text-3xl font-semibold ${
        currentPlayer === 'X'
          ? 'bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent'
          : 'bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent'
      }`,
    };
  };

  const status = getStatusMessage();

  return (
    <div className="text-center" role="status" aria-live="polite">
      <div className="inline-block rounded-2xl bg-white/80 backdrop-blur-sm px-8 py-4 shadow-lg border border-white/50">
        <p className={`transition-all duration-300 ${status.className} drop-shadow-sm`}>
          {status.message}
        </p>
      </div>
    </div>
  );
}
