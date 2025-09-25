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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Tic-Tac-Toe
          </h1>
          <p className="text-gray-600 text-lg">
            Classic game for two players
          </p>
        </div>

        {/* Score Board */}
        <ScoreBoard scores={scores} />

        {/* Game Status */}
        <GameStatus
          currentPlayer={currentPlayer}
          winner={winner}
          isDraw={isDraw}
        />

        {/* Game Board */}
        <div className="flex justify-center mb-8">
          <Board
            board={board}
            onSquareClick={handleSquareClick}
            winningLine={winningLine}
            disabled={gameIsOver}
          />
        </div>

        {/* Game Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={resetGame}
            variant="primary"
            size="lg"
            disabled={board.every(square => square === null)}
          >
            {gameIsOver ? 'Play Again' : 'Reset Game'}
          </Button>

          <Button
            onClick={newGame}
            variant="secondary"
            size="lg"
          >
            New Game
          </Button>
        </div>

        {/* Instructions */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">
            Click on an empty square to make your move. First to get three in a row wins!
          </p>
          <div className="mt-2 space-x-4 text-xs">
            <span>Use Tab to navigate</span>
            <span>•</span>
            <span>Use Space or Enter to select</span>
          </div>
        </div>
      </div>
    </main>
  );
}