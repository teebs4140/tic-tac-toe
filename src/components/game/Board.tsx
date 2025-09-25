'use client';

import React from 'react';
import Square from './Square';
import { BoardState } from '@/types/game';

interface BoardProps {
  board: BoardState;
  onSquareClick: (index: number) => void;
  winningLine: number[] | null;
  disabled?: boolean;
}

export default function Board({ board, onSquareClick, winningLine, disabled = false }: BoardProps) {
  return (
    <div className="game-board-container flex flex-col items-center">
      <div
        className="grid grid-cols-3 gap-1 p-4 bg-gray-200 rounded-lg shadow-lg transition-all duration-300"
        role="grid"
        aria-label="Tic-tac-toe game board"
      >
        {board.map((square, index) => (
          <Square
            key={index}
            value={square}
            onClick={() => onSquareClick(index)}
            isWinningSquare={winningLine?.includes(index) || false}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}