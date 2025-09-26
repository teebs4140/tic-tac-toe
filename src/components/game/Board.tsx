'use client';

import React, { useMemo } from 'react';
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
  const winningLineStyles = useMemo(() => {
    if (!winningLine || winningLine.length < 3) return null;

    const [a, b, c] = winningLine;
    const sameRow = Math.floor(a / 3) === Math.floor(b / 3) && Math.floor(a / 3) === Math.floor(c / 3);
    const sameCol = a % 3 === b % 3 && a % 3 === c % 3;

    if (sameRow) {
      return {
        type: 'horizontal' as const,
        style: { '--row': Math.floor(a / 3) } as React.CSSProperties,
      };
    }

    if (sameCol) {
      return {
        type: 'vertical' as const,
        style: { '--col': a % 3 } as React.CSSProperties,
      };
    }

    const isMainDiagonal = winningLine.includes(0) && winningLine.includes(4) && winningLine.includes(8);

    return {
      type: isMainDiagonal ? 'diagonal' : 'anti-diagonal',
      style: undefined,
    } as const;
  }, [winningLine]);

  return (
    <div className="game-board-container relative flex h-full w-full flex-col items-center justify-center">
      <div
        className="board-grid relative grid h-full w-full grid-cols-3 transition-all duration-300"
        style={{ gap: '18px', width: '100%', height: '100%' }}
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

        {winningLineStyles && (
          <div
            className={`winning-line winning-line--${winningLineStyles.type}`}
            style={winningLineStyles.style}
            aria-hidden
          />
        )}
      </div>
    </div>
  );
}
