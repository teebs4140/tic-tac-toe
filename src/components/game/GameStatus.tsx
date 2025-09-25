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
        message: `🎉 Player ${winner} wins!`,
        className: 'text-green-600 animate-winner-pulse font-bold text-xl md:text-2xl',
      };
    }

    if (isDraw) {
      return {
        message: "🤝 It's a draw!",
        className: 'text-yellow-600 font-bold text-xl md:text-2xl',
      };
    }

    return {
      message: `Player ${currentPlayer}'s turn`,
      className: `font-semibold text-lg md:text-xl ${
        currentPlayer === 'X' ? 'text-blue-600' : 'text-red-600'
      }`,
    };
  };

  const status = getStatusMessage();

  return (
    <div className="game-status text-center py-4" role="status" aria-live="polite">
      <h2 className={`transition-all duration-300 ${status.className}`}>
        {status.message}
      </h2>
    </div>
  );
}