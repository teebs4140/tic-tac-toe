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
        className="relative grid h-full w-full max-h-[820px] max-w-[820px] grid-cols-3 gap-6 rounded-[36px] border border-white/10 bg-slate-900/70 p-6 shadow-board backdrop-blur-xl transition-all duration-300"
        style={{ width: 'min(92vw, 82vh)', height: 'min(92vw, 82vh)' }}
        role="grid"
        aria-label="Tic-tac-toe game board"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/5" />
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
