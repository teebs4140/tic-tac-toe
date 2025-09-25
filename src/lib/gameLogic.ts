import { Player, BoardState, WINNING_COMBINATIONS } from '@/types/game';

/**
 * Check if there's a winner on the board
 * @param board - Current board state
 * @returns Object with winner and winning line if found
 */
export function checkWinner(board: BoardState): { winner: Player; line: number[] | null } {
  // Iterate through all possible winning combinations
  for (const combo of WINNING_COMBINATIONS) {
    const [a, b, c] = combo;
    // Check if all three squares match and are not null
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [...combo] };
    }
  }
  return { winner: null, line: null };
}

/**
 * Check if the game is a draw (board is full with no winner)
 * @param board - Current board state
 * @returns True if the game is a draw
 */
export function checkDraw(board: BoardState): boolean {
  // Game is a draw if all squares are filled and there's no winner
  return board.every(square => square !== null);
}

/**
 * Initialize an empty game board
 * @returns Array of 9 null values representing empty squares
 */
export function initializeBoard(): BoardState {
  return Array(9).fill(null);
}