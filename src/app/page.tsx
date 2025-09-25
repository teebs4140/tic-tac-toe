'use client';

import React from 'react';
import { useGame } from '@/hooks/useGame';
import Board from '@/components/game/Board';
import GameStatus from '@/components/game/GameStatus';
import ScoreBoard from '@/components/game/ScoreBoard';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const {
    board,
    currentPlayer,
    winner,
    isDraw,
    winningLine,
    scores,
    handleSquareClick,
    resetGame,
    newGame,
  } = useGame();

  const gameIsOver = !!winner || isDraw;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute right-[-120px] top-[200px] h-[380px] w-[380px] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[8%] h-[460px] w-[460px] rounded-full bg-rose-500/20 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1100px] flex-col items-center px-4 py-16 md:px-8 lg:px-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.45em] text-slate-400">
            Strategy meets style
          </span>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
              Tic-Tac-Toe
            </span>{' '}
            reimagined
          </h1>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            Battle your friends on a sleek, modern board crafted for quick rounds and dramatic wins.
          </p>
        </header>

        <div className="flex w-full flex-1 flex-col items-center gap-12">
          {/* Primary play surface */}
          <section className="relative flex w-full flex-1 items-center justify-center">
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-900/40 p-6 shadow-panel backdrop-blur-2xl md:p-10">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),rgba(15,23,42,0)_60%)]" />
              <Board
                board={board}
                onSquareClick={handleSquareClick}
                winningLine={winningLine}
                disabled={gameIsOver}
              />
            </div>
          </section>

          <div className="flex w-full flex-col items-center gap-8">
            <div className="flex w-full max-w-3xl flex-col items-center gap-4 sm:flex-row">
              <Button
                onClick={resetGame}
                variant="primary"
                size="lg"
                className="w-full sm:flex-1"
                disabled={board.every(square => square === null)}
              >
                {gameIsOver ? 'Play Again' : 'Reset Round'}
              </Button>

              <Button
                onClick={newGame}
                variant="secondary"
                size="lg"
                className="w-full sm:flex-1"
              >
                New Match
              </Button>
            </div>

            <GameStatus currentPlayer={currentPlayer} winner={winner} isDraw={isDraw} />
            <ScoreBoard scores={scores} />

            <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300/90 shadow-panel backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">How to play</p>
              <p className="mt-3 leading-relaxed">
                Select an open square to place your mark. Win the round by connecting three in a row
                horizontally, vertically, or diagonally.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-slate-400/90">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">Use Tab to navigate</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">Press Space or Enter to select</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
