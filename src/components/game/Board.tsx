'use client';

import React from 'react';
import Square from './Square';
import { BoardState } from '@/types/game';

interface BoardProps {
  board: BoardState;
  onSquareClick: (index: number) => void;
  winningLine: number[] | null;
  disabled?: boolean;
  glowEnabled?: boolean;
}

export default function Board({
  board,
  onSquareClick,
  winningLine,
  disabled = false,
  glowEnabled = true,
}: BoardProps) {
  return (
    <div className="game-board-container flex flex-col items-center">
      <div
        className="relative grid h-full w-full max-h-[820px] max-w-[820px] grid-cols-3 gap-6 transition-all duration-300"
        style={{ width: 'min(92vw, 82vh)', height: 'min(92vw, 82vh)' }}
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
            glowEnabled={glowEnabled}
          />
        ))}
      </div>
    </div>
  );
}
