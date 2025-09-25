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
        message: `Player ${winner} takes the round`,
        textClass: 'text-transparent bg-gradient-to-r from-emerald-200 via-emerald-300 to-teal-200 bg-clip-text',
        emoji: '🏆',
        accent: 'from-emerald-500/35 via-emerald-400/15 to-transparent',
        borderClass: 'border-emerald-400/40 shadow-winning-status',
        caption: 'Hit Play Again to chase the rematch.',
      };
    }

    if (isDraw) {
      return {
        message: "It’s a stalemate",
        textClass: 'text-transparent bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-300 bg-clip-text',
        emoji: '🌀',
        accent: 'from-amber-400/25 via-amber-300/15 to-transparent',
        borderClass: 'border-amber-300/40',
        caption: 'Nobody blinked—start a new round to break the tie.',
      };
    }

    return {
      message: `Player ${currentPlayer}’s move`,
      textClass: currentPlayer === 'X'
        ? 'text-transparent bg-gradient-to-r from-sky-200 via-cyan-200 to-blue-300 bg-clip-text'
        : 'text-transparent bg-gradient-to-r from-rose-200 via-pink-200 to-orange-300 bg-clip-text',
      emoji: currentPlayer === 'X' ? '🎯' : '⏳',
      accent: currentPlayer === 'X'
        ? 'from-sky-400/25 via-sky-300/10 to-transparent'
        : 'from-rose-400/25 via-rose-300/10 to-transparent',
      borderClass: 'border-white/15',
      caption: 'Choose an open square to claim the advantage.',
    };
  };

  const status = getStatusMessage();

  return (
    <section
      className={`relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur-xl ${status.borderClass}`}
      role="status"
      aria-live="polite"
    >
      <div className={`absolute -top-20 right-[-100px] h-56 w-56 rounded-full bg-gradient-to-br blur-3xl ${status.accent}`} />
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl">
          <span aria-hidden>{status.emoji}</span>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Game status</p>
          <h2 className={`mt-2 text-2xl font-semibold transition-all duration-300 ${status.textClass}`}>
            {status.message}
          </h2>
          {status.caption && (
            <p className="mt-2 text-sm text-slate-300/80">
              {status.caption}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
