'use client';

import React from 'react';
import { useGame } from '@/hooks/useGame';
import Board from '@/components/game/Board';
import GameStatus from '@/components/game/GameStatus';
import ScoreBoard from '@/components/game/ScoreBoard';
import MoveHistory from '@/components/game/MoveHistory';
import SettingsPanel from '@/components/game/SettingsPanel';
import Button from '@/components/ui/Button';
import CelebrationBurst from '@/components/ui/CelebrationBurst';

export default function HomePage() {
  const {
    board,
    currentPlayer,
    winner,
    isDraw,
    winningLine,
    scores,
    history,
    preferences,
    handleSquareClick,
    resetGame,
    newGame,
    toggleCelebrations,
    toggleAmbientGlow,
    setTheme,
  } = useGame();

  const gameIsOver = !!winner || isDraw;
  const celebrationActive = preferences.celebrationsEnabled && !!winner;
  const celebrationKey = celebrationActive ? `${winner}-${history.length}` : null;

  const themeBackgroundClass = 'bg-sky-200/90';

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-800">
      {/* Cherry Blossom Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-sky-100/50 to-pink-50/40" />
        <div className="absolute inset-0 flower-overlay">
          {/* Top corners only */}
          <span className="flower-dot flower-dot--md" style={{ top: '8%', right: '8%' }} />
          <span className="flower-dot flower-dot--lg" style={{ top: '4%', right: '15%' }} />

          {/* Left side sparse distribution */}
          <span className="flower-dot flower-dot--sm" style={{ top: '25%', left: '3%' }} />
          <span className="flower-dot flower-dot--xs" style={{ top: '45%', left: '5%' }} />
          <span className="flower-dot flower-dot--md" style={{ top: '68%', left: '2%' }} />

          {/* Right side sparse distribution */}
          <span className="flower-dot flower-dot--xs" style={{ top: '32%', right: '4%' }} />
          <span className="flower-dot flower-dot--sm" style={{ top: '55%', right: '6%' }} />
          <span className="flower-dot flower-dot--lg" style={{ top: '75%', right: '3%', animationDuration: '14s' }} />

          {/* Bottom corners */}
          <span className="flower-dot flower-dot--md" style={{ bottom: '12%', left: '8%' }} />
          <span className="flower-dot flower-dot--sm" style={{ bottom: '8%', left: '18%' }} />
          <span className="flower-dot flower-dot--lg" style={{ bottom: '6%', right: '12%', animationDuration: '16s' }} />
          <span className="flower-dot flower-dot--xs" style={{ bottom: '15%', right: '6%' }} />

          {/* Very sparse center area - only a few subtle ones */}
          <span className="flower-dot flower-dot--xs" style={{ top: '15%', left: '25%' }} />
          <span className="flower-dot flower-dot--xs" style={{ top: '20%', right: '30%' }} />
          <span className="flower-dot flower-dot--sm" style={{ bottom: '25%', left: '20%' }} />
          <span className="flower-dot flower-dot--xs" style={{ bottom: '30%', right: '25%' }} />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1100px] flex-col items-center px-4 py-16 md:px-8 lg:px-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-6xl font-bold text-pink-900 drop-shadow-sm md:text-7xl">
            Tic-Tac-Toe
          </h1>
          <p className="mt-4 text-xl text-slate-700 md:text-2xl">
            Classic strategy, beautiful design
          </p>
        </header>

        <div className="flex w-full flex-1 flex-col items-center gap-12">
          {/* Primary play surface */}
          <section className="relative flex w-full flex-1 items-center justify-center">
            <div className="relative rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 shadow-2xl">
              <CelebrationBurst active={celebrationActive} burstKey={celebrationKey} />
              <Board
                board={board}
                onSquareClick={handleSquareClick}
                winningLine={winningLine}
                disabled={gameIsOver}
                glowEnabled={preferences.ambientGlow}
              />
            </div>
          </section>

          <div className="flex w-full flex-col items-center gap-8">
            {/* Game Controls */}
            <div className="flex w-full max-w-md flex-col items-center gap-3 sm:flex-row">
              <Button
                onClick={resetGame}
                variant="primary"
                size="lg"
                className="w-full sm:flex-1"
                disabled={board.every(square => square === null)}
              >
                {gameIsOver ? 'Play Again' : 'Reset'}
              </Button>

              <Button
                onClick={newGame}
                variant="secondary"
                size="lg"
                className="w-full sm:flex-1"
              >
                New Game
              </Button>
            </div>

            {/* Simple Game Status */}
            <div className="text-center">
              <GameStatus currentPlayer={currentPlayer} winner={winner} isDraw={isDraw} />
            </div>

            {/* Elegant Score Display */}
            <div className="flex items-center justify-center gap-16 mt-8">
              <div className="text-center">
                <div className="text-5xl font-light bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent mb-2 drop-shadow-sm">{scores.X}</div>
                <div className="text-xl font-medium text-blue-600 tracking-wide">Player X</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2 drop-shadow-sm">{scores.draws}</div>
                <div className="text-xl font-medium text-amber-600 tracking-wide">Draws</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-2 drop-shadow-sm">{scores.O}</div>
                <div className="text-xl font-medium text-red-600 tracking-wide">Player O</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
