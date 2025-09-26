'use client';

import React from 'react';
import { ScoreState, Player } from '@/types/game';

interface ScoreBoardProps {
  scores: ScoreState;
  currentPlayer: Player;
  winner: Player;
  isDraw: boolean;
  onResetScores?: () => void;
}

export default function ScoreBoard({ scores, currentPlayer, winner, isDraw, onResetScores }: ScoreBoardProps) {
  const getTileState = (player: Player) => {
    if (!player) return { active: false, highlight: false };
    return {
      active: !winner && !isDraw && currentPlayer === player,
      highlight: winner === player,
    };
  };

  return (
    <section
      className="scoreboard-card"
      role="region"
      aria-label="Scoreboard"
      aria-live="polite"
    >

      <div className="scoreboard-card__grid">
        <ScoreTile
          label="Player X"
          value={scores.X}
          {...getTileState('X')}
        />
        <ScoreTile
          label="Draws"
          value={scores.draws}
        />
        <ScoreTile
          label="Player O"
          value={scores.O}
          {...getTileState('O')}
        />
      </div>
    </section>
  );
}

interface ScoreTileProps {
  label: string;
  value: number;
  active?: boolean;
  highlight?: boolean;
}

function ScoreTile({ label, value, active = false, highlight = false }: ScoreTileProps) {
  return (
    <article
      className={`score-tile-simple ${active ? 'score-tile-simple--active' : ''} ${highlight ? 'score-tile-simple--highlight' : ''}`}
      aria-label={`${label} has ${value} ${label === 'Draws' ? 'draws' : 'wins'}`}
    >
      <p className="score-tile-simple__label">{label}</p>
      <div className={`score-tile-simple__counter ${active ? 'score-tile-simple__counter--active' : ''}`}>
        <span key={`${label}-${value}`}>{value}</span>
      </div>
    </article>
  );
}
