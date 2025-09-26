'use client';

import React from 'react';
import { ScoreState, Player, PlayerNames } from '@/types/game';

interface ScoreBoardProps {
  scores: ScoreState;
  currentPlayer: Player;
  winner: Player;
  isDraw: boolean;
  playerNames: PlayerNames;
  onPlayerNameChange: (player: Exclude<Player, null>, name: string) => void;
  onResetScores?: () => void;
}

export default function ScoreBoard({
  scores,
  currentPlayer,
  winner,
  isDraw,
  playerNames,
  onPlayerNameChange,
  onResetScores,
}: ScoreBoardProps) {
  const getTileState = (player: Player) => {
    if (!player) return { active: false, highlight: false };
    return {
      active: !winner && !isDraw && currentPlayer === player,
      highlight: winner === player,
    };
  };

  const playerXName = playerNames.X || 'Player X';
  const playerOName = playerNames.O || 'Player O';

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
          name={playerXName}
          editable
          inputId="player-name-x"
          onNameChange={name => onPlayerNameChange('X', name)}
          {...getTileState('X')}
        />
        <ScoreTile
          label="Draws"
          value={scores.draws}
        />
        <ScoreTile
          label="Player O"
          value={scores.O}
          name={playerOName}
          editable
          inputId="player-name-o"
          onNameChange={name => onPlayerNameChange('O', name)}
          {...getTileState('O')}
        />
      </div>
      {onResetScores && (
        <div className="scoreboard-card__footer">
          <button type="button" onClick={onResetScores} className="scoreboard-card__reset">
            Reset scores
          </button>
        </div>
      )}
    </section>
  );
}

interface ScoreTileProps {
  label: string;
  value: number;
  active?: boolean;
  highlight?: boolean;
  editable?: boolean;
  name?: string;
  onNameChange?: (value: string) => void;
  inputId?: string;
}

function ScoreTile({
  label,
  value,
  active = false,
  highlight = false,
  editable = false,
  name,
  onNameChange,
  inputId,
}: ScoreTileProps) {
  const inputValue = name ?? '';
  const displayName = editable ? (inputValue.trim().length > 0 ? inputValue : label) : label;
  const labelClassName = `score-tile-simple__label${editable ? ' score-tile-simple__label--editable' : ''}`;

  return (
    <article
      className={`score-tile-simple ${active ? 'score-tile-simple--active' : ''} ${highlight ? 'score-tile-simple--highlight' : ''}`}
      aria-label={`${displayName} has ${value} ${label === 'Draws' ? 'draws' : 'wins'}`}
    >
      {editable ? (
        <div className="score-tile-simple__editable">
          <label className={labelClassName} htmlFor={inputId}>
            {label}
          </label>
          <input
            id={inputId}
            type="text"
            value={inputValue}
            onChange={event => onNameChange?.(event.target.value)}
            placeholder={label}
            maxLength={18}
            className="score-tile-simple__input"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      ) : (
        <p className={labelClassName}>{label}</p>
      )}
      <div className={`score-tile-simple__counter ${active ? 'score-tile-simple__counter--active' : ''}`}>
        <span key={`${label}-${value}`}>{value}</span>
      </div>
    </article>
  );
}
