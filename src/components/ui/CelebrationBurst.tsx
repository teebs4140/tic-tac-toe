'use client';

import React, { useMemo } from 'react';

interface CelebrationBurstProps {
  active: boolean;
  burstKey: string | number | null;
}

interface ConfettiPiece {
  left: string;
  delay: string;
  duration: string;
  colorClass: string;
}

const colorClasses = [
  'bg-sky-400',
  'bg-emerald-400',
  'bg-rose-400',
  'bg-indigo-400',
  'bg-amber-300',
  'bg-cyan-300',
];

function generateConfetti(seed: string | number | null): ConfettiPiece[] {
  const random = seed ? Math.abs(Number(String(seed).replace(/[^0-9]/g, '').slice(-6))) : Date.now();
  const pieces: ConfettiPiece[] = [];
  for (let i = 0; i < 24; i += 1) {
    const offsetSeed = (random + i * 97) % 1000;
    const left = `${offsetSeed % 100}%`;
    const delay = `${((offsetSeed % 7) * 0.08).toFixed(2)}s`;
    const duration = `${(3.5 + (offsetSeed % 5) * 0.3).toFixed(2)}s`;
    const colorClass = colorClasses[(offsetSeed + i) % colorClasses.length];
    pieces.push({ left, delay, duration, colorClass });
  }
  return pieces;
}

export default function CelebrationBurst({ active, burstKey }: CelebrationBurstProps) {
  const confettiPieces = useMemo(() => generateConfetti(burstKey), [burstKey]);

  if (!active) {
    return null;
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-x-0 top-0 mx-auto h-0 max-w-3xl">
        {confettiPieces.map((piece, index) => (
          <span
            key={`${piece.left}-${index}`}
            className={`confetti-piece ${piece.colorClass}`}
            style={{
              left: piece.left,
              animationDelay: piece.delay,
              animationDuration: piece.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
