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
        message: `Winner: Player ${winner}`,
        variant: 'winner',
      };
    }

    if (isDraw) {
      return {
        message: 'Result: Draw',
        variant: 'draw',
      };
    }

    return {
      message: `Turn: Player ${currentPlayer}`,
      variant: currentPlayer === 'X' ? 'x' : 'o',
    };
  };

  const status = getStatusMessage();

  return (
    <div className="turn-chip" role="status" aria-live="polite">
      <span className={`turn-chip__content turn-chip__content--${status.variant}`}>
        {status.message}
      </span>
    </div>
  );
}
