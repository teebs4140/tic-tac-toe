'use client';

import { useState, useCallback } from 'react';
import { Player, BoardState, ScoreState } from '@/types/game';
import { checkWinner, checkDraw, initializeBoard } from '@/lib/gameLogic';

export interface UseGameReturn {
  // Game state
  board: BoardState;
  currentPlayer: Player;
  winner: Player;
  isDraw: boolean;
  winningLine: number[] | null;
  scores: ScoreState;

  // Game actions
  handleSquareClick: (index: number) => void;
  resetGame: () => void;
  newGame: () => void;
}

export function useGame(): UseGameReturn {
  // Initialize game state
  const [board, setBoard] = useState<BoardState>(() => initializeBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player>(null);
  const [isDraw, setIsDraw] = useState(false);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [scores, setScores] = useState<ScoreState>({
    X: 0,
    O: 0,
    draws: 0,
  });

  // Handle square click with game logic
  const handleSquareClick = useCallback((index: number) => {
    // Validation: Check if square is empty and game is still active
    if (board[index] || winner || isDraw) return;

    // Update board with current player's move
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    // Check for winner
    const winnerResult = checkWinner(newBoard);
    if (winnerResult.winner) {
      setWinner(winnerResult.winner);
      setWinningLine(winnerResult.line);

      // Update scores with a slight delay for animation
      setTimeout(() => {
        setScores(prev => ({
          ...prev,
          [winnerResult.winner as 'X' | 'O']: prev[winnerResult.winner as 'X' | 'O'] + 1,
        }));
      }, 500);
    } else if (checkDraw(newBoard)) {
      // Check for draw
      setIsDraw(true);
      setTimeout(() => {
        setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
      }, 500);
    } else {
      // Switch players
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }, [board, currentPlayer, winner, isDraw]);

  // Reset game while preserving scores
  const resetGame = useCallback(() => {
    setBoard(initializeBoard());
    setCurrentPlayer('X');
    setWinner(null);
    setIsDraw(false);
    setWinningLine(null);
  }, []);

  // Start completely new game (reset scores too)
  const newGame = useCallback(() => {
    resetGame();
    setScores({ X: 0, O: 0, draws: 0 });
  }, [resetGame]);

  return {
    // Game state
    board,
    currentPlayer,
    winner,
    isDraw,
    winningLine,
    scores,

    // Game actions
    handleSquareClick,
    resetGame,
    newGame,
  };
}