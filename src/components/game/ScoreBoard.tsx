'use client';

import React from 'react';
import { ScoreState } from '@/types/game';

interface ScoreBoardProps {
  scores: ScoreState;
}

export default function ScoreBoard({ scores }: ScoreBoardProps) {
  return (
    <section
      className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur-xl"
      role="region"
      aria-label="Game scores"
    >
      <div className="absolute -top-24 left-[-120px] h-56 w-56 rounded-full bg-gradient-to-br from-violet-500/35 via-indigo-500/15 to-transparent blur-3xl" />
      <header className="relative mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Scoreboard</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-100">Current standings</h3>
        </div>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-300">
          Live
        </span>
      </header>

      <div className="relative grid gap-4 sm:grid-cols-3">
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-sky-900/40 p-5 shadow-inner-panel transition-transform duration-300 ease-out hover:-translate-y-1">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-400/40 via-cyan-300/10 to-transparent opacity-70 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Player X</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-4xl font-semibold text-transparent bg-gradient-to-br from-sky-300 via-cyan-200 to-blue-400 bg-clip-text animate-score-bump" key={`score-x-${scores.X}`}>
              {scores.X}
            </span>
            <span className="text-sm text-slate-400">wins</span>
          </div>
          <p className="mt-3 text-xs text-slate-500/80">
            Opens the match and plays in neon blue.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-amber-900/30 p-5 shadow-inner-panel transition-transform duration-300 ease-out hover:-translate-y-1">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-300/35 via-amber-200/10 to-transparent opacity-70 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Draws</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-4xl font-semibold text-transparent bg-gradient-to-br from-amber-200 via-yellow-200 to-amber-300 bg-clip-text animate-score-bump" key={`score-draws-${scores.draws}`}>
              {scores.draws}
            </span>
            <span className="text-sm text-slate-400">ties</span>
          </div>
          <p className="mt-3 text-xs text-slate-500/80">
            Perfect balance—nobody let go of the line.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-rose-900/35 p-5 shadow-inner-panel transition-transform duration-300 ease-out hover:-translate-y-1">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-400/35 via-pink-300/10 to-transparent opacity-70 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Player O</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-4xl font-semibold text-transparent bg-gradient-to-br from-rose-300 via-pink-300 to-orange-300 bg-clip-text animate-score-bump" key={`score-o-${scores.O}`}>
              {scores.O}
            </span>
            <span className="text-sm text-slate-400">wins</span>
          </div>
          <p className="mt-3 text-xs text-slate-500/80">
            The closer—steady play with a vibrant finish.
          </p>
        </div>
      </div>
    </section>
  );
}
