'use client';

import React from 'react';
import { useGame } from '@/hooks/useGame';
import Board from '@/components/game/Board';
import GameStatus from '@/components/game/GameStatus';
import ScoreBoard from '@/components/game/ScoreBoard';
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
    playerNames,
    handleSquareClick,
    resetGame,
    newGame,
    setPlayerName,
  } = useGame();

  const gameIsOver = !!winner || isDraw;
  const celebrationActive = preferences.celebrationsEnabled && !!winner;
  const celebrationKey = celebrationActive ? `${winner}-${history.length}` : null;

  return (
    <main className="main-wrapper">
      <div className="blossom-scene" aria-hidden>
        <span className="blossom-cluster" />
        <span className="blossom-trail blossom-trail--right" />
        <span className="blossom-trail blossom-trail--left" />
        <div className="cherry-petals">
          <span className="petal-circle petal-circle--1" />
          <span className="petal-circle petal-circle--2" />
          <span className="petal-circle petal-circle--3" />
          <span className="petal-circle petal-circle--4" />
          <span className="petal-circle petal-circle--5" />
          <span className="petal-circle petal-circle--6" />
          <span className="petal-circle petal-circle--7" />
          <span className="petal-circle petal-circle--8" />
          <span className="petal-circle petal-circle--9" />
          <span className="petal-circle petal-circle--10" />
          <span className="petal-circle petal-circle--11" />
          <span className="petal-circle petal-circle--12" />
        </div>
      </div>

      <div className="main-content">
        <header className="hero">
          <h1 className="hero__title">Tic-Tac-Toe</h1>
          <p className="hero__subtitle">Classic strategy, serene design</p>
        </header>

        <section className="board-section">
          <div className="board-shell">
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

        <div className="controls">
          <Button
            onClick={resetGame}
            variant="secondary"
            size="lg"
            className="btn-new-game"
          >
            New Game
          </Button>
        </div>

        <div className="scoreboard-wrapper">
          <ScoreBoard
            scores={scores}
            currentPlayer={currentPlayer}
            winner={winner}
            isDraw={isDraw}
            playerNames={playerNames}
            onPlayerNameChange={setPlayerName}
            onResetScores={newGame}
          />
        </div>

        <div className="status-wrapper">
          <GameStatus
            currentPlayer={currentPlayer}
            winner={winner}
            isDraw={isDraw}
            playerNames={playerNames}
          />
        </div>
      </div>
    </main>
  );
}
