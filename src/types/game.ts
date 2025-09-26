// TypeScript type definitions for the tic-tac-toe game

export type Player = 'X' | 'O' | null;
export type BoardState = Player[];

export interface GameState {
  board: BoardState;
  currentPlayer: Player;
  winner: Player;
  isDraw: boolean;
  winningLine: number[] | null;
}

export interface ScoreState {
  X: number;
  O: number;
  draws: number;
}

export interface PlayerNames {
  X: string;
  O: string;
}

export interface MoveHistoryEntry {
  player: Exclude<Player, null>;
  index: number;
  timestamp: number;
}

export type ThemeVariant = 'neon' | 'aurora';

export interface GamePreferences {
  celebrationsEnabled: boolean;
  ambientGlow: boolean;
  theme: ThemeVariant;
}

// All possible winning combinations in tic-tac-toe
export const WINNING_COMBINATIONS = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal
  [2, 4, 6], // Anti-diagonal
] as const;
