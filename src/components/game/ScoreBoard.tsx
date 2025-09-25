'use client';

import React from 'react';
import { ScoreState } from '@/types/game';

interface ScoreBoardProps {
  scores: ScoreState;
}

export default function ScoreBoard({ scores }: ScoreBoardProps) {
  return (
    <div className="scoreboard w-full max-w-md mx-auto py-4" role="region" aria-label="Game scores">
      <h3 className="text-lg font-bold text-center mb-4 text-gray-700">Score Board</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* Player X Score */}
        <div className="score-card bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md">
          <div className="text-blue-600 font-bold text-lg mb-1">Player X</div>
          <div className="text-2xl font-bold text-blue-800 animate-score-bump" key={scores.X}>
            {scores.X}
          </div>
          <div className="text-sm text-blue-600">wins</div>
        </div>

        {/* Draws */}
        <div className="score-card bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md">
          <div className="text-yellow-600 font-bold text-lg mb-1">Draws</div>
          <div className="text-2xl font-bold text-yellow-800 animate-score-bump" key={scores.draws}>
            {scores.draws}
          </div>
          <div className="text-sm text-yellow-600">ties</div>
        </div>

        {/* Player O Score */}
        <div className="score-card bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md">
          <div className="text-red-600 font-bold text-lg mb-1">Player O</div>
          <div className="text-2xl font-bold text-red-800 animate-score-bump" key={scores.O}>
            {scores.O}
          </div>
          <div className="text-sm text-red-600">wins</div>
        </div>
      </div>
    </div>
  );
}