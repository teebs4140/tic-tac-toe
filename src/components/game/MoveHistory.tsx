'use client';

import React from 'react';
import { MoveHistoryEntry } from '@/types/game';

interface MoveHistoryProps {
  history: MoveHistoryEntry[];
}

const positionLabels = [
  'top-left',
  'top-center',
  'top-right',
  'middle-left',
  'center',
  'middle-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

function formatMove(entry: MoveHistoryEntry, index: number) {
  const row = Math.floor(entry.index / 3) + 1;
  const col = (entry.index % 3) + 1;
  const moveNumber = index + 1;
  const label = positionLabels[entry.index] ?? `square ${entry.index + 1}`;

  return {
    moveNumber,
    label,
    coordinates: `row ${row}, column ${col}`,
  };
}

export default function MoveHistory({ history }: MoveHistoryProps) {
  return (
    <section
      className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-blue-950/70 p-6 shadow-panel backdrop-blur-xl"
      aria-label="Move history"
    >
      <div className="absolute -top-20 left-[-100px] h-56 w-56 rounded-full bg-gradient-to-br from-sky-500/25 via-blue-400/15 to-transparent blur-3xl" />
      <header className="relative mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Move log</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-100">This round</h3>
        </div>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-slate-200">
          {history.length ? `${history.length} moves` : 'No moves yet'}
        </span>
      </header>

      <ol className="relative mt-2 max-h-52 space-y-3 overflow-y-auto pr-1 text-sm text-slate-300">
        {history.length === 0 && (
          <li className="rounded-2xl border border-dashed border-white/20 bg-white/10 px-4 py-3 text-center text-slate-300">
            Moves will appear here as the round unfolds.
          </li>
        )}

        {history.map((entry, idx) => {
          const moveMeta = formatMove(entry, idx);
          const isLast = idx === history.length - 1;
          const accentGradient =
            entry.player === 'X'
              ? 'from-sky-400/30 via-cyan-400/10 to-transparent'
              : 'from-rose-400/30 via-pink-400/10 to-transparent';

          return (
            <li
              key={`${entry.player}-${entry.index}-${entry.timestamp}`}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 shadow-inner-panel ${
                isLast ? 'ring-1 ring-white/20' : ''
              }`}
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${accentGradient} opacity-80`} />
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                <span>
                  Move {moveMeta.moveNumber.toString().padStart(2, '0')}
                </span>
                <span className={entry.player === 'X' ? 'text-sky-300' : 'text-rose-300'}>
                  Player {entry.player}
                </span>
              </div>
              <div className="mt-2 text-base font-medium text-slate-100">
                {moveMeta.label}
              </div>
              <p className="text-xs text-slate-400">{moveMeta.coordinates}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
