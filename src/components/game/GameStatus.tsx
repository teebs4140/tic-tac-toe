'use client';

import React from 'react';
import { Player, PlayerNames } from '@/types/game';

interface GameStatusProps {
  currentPlayer: Player;
  winner: Player;
  isDraw: boolean;
  playerNames: PlayerNames;
}

export default function GameStatus({ currentPlayer, winner, isDraw, playerNames }: GameStatusProps) {
  const resolveName = (player: Player) => {
    if (!player) return '';
    const mapped = playerNames[player];
    const fallback = `Player ${player}`;
    return mapped && mapped.trim().length > 0 ? mapped : fallback;
  };

  const getStatusMessage = () => {
    if (winner) {
      return {
        message: `Winner: ${resolveName(winner)}`,
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
      message: `Turn: ${resolveName(currentPlayer)}`,
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
