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
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/cherry-blossoms.webp)',
            filter: 'brightness(1.1) saturate(1.2) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-pink-50/10 to-white/30" />
        <div className="absolute inset-0 flower-overlay">
          {/* Top band */}
          <span className="flower-dot flower-dot--lg" style={{ top: '4%', left: '6%' }} />
          <span className="flower-dot flower-dot--md" style={{ top: '6%', left: '28%' }} />
          <span className="flower-dot flower-dot--xl" style={{ top: '5%', left: '50%', animationDuration: '16s' }} />
          <span className="flower-dot flower-dot--md" style={{ top: '6%', right: '28%' }} />
          <span className="flower-dot flower-dot--lg" style={{ top: '4%', right: '6%' }} />

          {/* Upper mid zone */}
          <span className="flower-dot flower-dot--sm" style={{ top: '18%', left: '12%' }} />
          <span className="flower-dot flower-dot--xs" style={{ top: '20%', left: '36%' }} />
          <span className="flower-dot flower-dot--md" style={{ top: '18%', left: '60%' }} />
          <span className="flower-dot flower-dot--sm" style={{ top: '20%', right: '14%' }} />

          {/* Center band */}
          <span className="flower-dot flower-dot--xs" style={{ top: '36%', left: '10%', animationDuration: '10s' }} />
          <span className="flower-dot flower-dot--sm" style={{ top: '38%', left: '32%' }} />
          <span className="flower-dot flower-dot--md" style={{ top: '40%', left: '52%' }} />
          <span className="flower-dot flower-dot--xs" style={{ top: '36%', right: '18%' }} />
          <span className="flower-dot flower-dot--sm" style={{ top: '42%', right: '6%', animationDuration: '13s' }} />

          {/* Lower mid zone */}
          <span className="flower-dot flower-dot--md" style={{ bottom: '24%', left: '14%' }} />
          <span className="flower-dot flower-dot--sm" style={{ bottom: '22%', left: '34%' }} />
          <span className="flower-dot flower-dot--xs" style={{ bottom: '26%', left: '52%' }} />
          <span className="flower-dot flower-dot--sm" style={{ bottom: '24%', right: '30%' }} />
          <span className="flower-dot flower-dot--md" style={{ bottom: '22%', right: '10%', animationDuration: '14s' }} />

          {/* Bottom band */}
          <span className="flower-dot flower-dot--lg" style={{ bottom: '6%', left: '6%' }} />
          <span className="flower-dot flower-dot--md" style={{ bottom: '4%', left: '26%' }} />
          <span className="flower-dot flower-dot--xl" style={{ bottom: '5%', left: '50%', animationDuration: '18s' }} />
          <span className="flower-dot flower-dot--md" style={{ bottom: '4%', right: '26%' }} />
          <span className="flower-dot flower-dot--lg" style={{ bottom: '6%', right: '6%' }} />
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
            <div className="flex items-center justify-center gap-32 mt-8">
              <div className="text-center">
                <div className="text-4xl font-light text-pink-800 mb-2 drop-shadow-sm">{scores.X}</div>
                <div className="text-lg font-medium text-pink-700 tracking-wide">Player X</div>
              </div>
              <div className="text-center px-8">
                <div className="text-4xl font-light text-rose-600 mb-2 drop-shadow-sm">{scores.draws}</div>
                <div className="text-lg font-medium text-rose-500 tracking-wide">Draws</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-pink-800 mb-2 drop-shadow-sm">{scores.O}</div>
                <div className="text-lg font-medium text-pink-700 tracking-wide">Player O</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
