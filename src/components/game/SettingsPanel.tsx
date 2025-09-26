'use client';

import React from 'react';
import { GamePreferences, ThemeVariant } from '@/types/game';

interface SettingsPanelProps {
  preferences: GamePreferences;
  onToggleCelebrations: () => void;
  onToggleGlow: () => void;
  onSetTheme: (theme: ThemeVariant) => void;
}

const themes: { label: string; value: ThemeVariant; description: string }[] = [
  {
    label: 'Neon Night',
    value: 'neon',
    description: 'Violet and cyan accents with deep slate backdrop.',
  },
  {
    label: 'Aurora Drift',
    value: 'aurora',
    description: 'Emerald hues and midnight blues inspired by aurora skies.',
  },
];

export default function SettingsPanel({
  preferences,
  onToggleCelebrations,
  onToggleGlow,
  onSetTheme,
}: SettingsPanelProps) {
  return (
    <section
      className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-blue-950/70 p-6 shadow-panel backdrop-blur-xl"
      aria-label="Game settings"
    >
      <div className="absolute -top-24 right-[-120px] h-56 w-56 rounded-full bg-gradient-to-br from-indigo-400/35 via-sky-400/15 to-transparent blur-3xl" />
      <header className="relative mb-6">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Settings</p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-100">Personalize the experience</h3>
      </header>

      <div className="relative space-y-6 text-sm text-slate-300">
        <div className="flex items-start justify-between gap-6 rounded-2xl border border-white/20 bg-slate-950/55 p-4">
          <div>
            <h4 className="text-base font-semibold text-slate-100">Celebration effects</h4>
            <p className="text-xs text-slate-400">Show confetti bursts when a round is won.</p>
          </div>
          <button
            type="button"
            onClick={onToggleCelebrations}
            className={`inline-flex h-10 w-20 items-center rounded-full border border-white/15 bg-slate-900/70 px-1 transition ${
              preferences.celebrationsEnabled
                ? 'justify-end bg-gradient-to-r from-emerald-400/60 to-sky-400/60'
                : 'justify-start'
            }`}
            aria-pressed={preferences.celebrationsEnabled}
          >
            <span className="h-8 w-8 rounded-full bg-white/90 shadow-md" />
          </button>
        </div>

        <div className="flex items-start justify-between gap-6 rounded-2xl border border-white/20 bg-slate-950/55 p-4">
          <div>
            <h4 className="text-base font-semibold text-slate-100">Ambient hover glow</h4>
            <p className="text-xs text-slate-400">Add a radiant trail when hovering empty squares.</p>
          </div>
          <button
            type="button"
            onClick={onToggleGlow}
            className={`inline-flex h-10 w-20 items-center rounded-full border border-white/15 bg-slate-900/70 px-1 transition ${
              preferences.ambientGlow
                ? 'justify-end bg-gradient-to-r from-violet-400/60 to-rose-400/60'
                : 'justify-start'
            }`}
            aria-pressed={preferences.ambientGlow}
          >
            <span className="h-8 w-8 rounded-full bg-white/90 shadow-md" />
          </button>
        </div>

        <div className="rounded-2xl border border-white/20 bg-slate-950/55 p-4">
          <h4 className="text-base font-semibold text-slate-100">Theme</h4>
          <p className="text-xs text-slate-400">Choose the ambient gradient that frames the board.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {themes.map(theme => {
              const active = preferences.theme === theme.value;
              return (
                <button
                  key={theme.value}
                  type="button"
                  onClick={() => onSetTheme(theme.value)}
                  className={`group relative overflow-hidden rounded-2xl border px-4 py-4 text-left transition ${
                    active
                      ? 'border-white/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/50 shadow-inner-panel'
                      : 'border-white/15 bg-slate-950/45'
                  }`}
                  aria-pressed={active}
                >
                  <div
                    className={`absolute inset-0 -z-10 bg-gradient-to-br opacity-70 transition ${
                      theme.value === 'neon'
                        ? 'from-violet-500/25 via-indigo-400/15 to-sky-400/25'
                        : 'from-emerald-400/25 via-cyan-300/15 to-blue-500/25'
                    } ${active ? 'opacity-80' : 'opacity-40 group-hover:opacity-70'}`}
                  />
                  <div className="relative">
                    <p className="text-sm font-semibold text-slate-100">{theme.label}</p>
                    <p className="mt-1 text-xs text-slate-400">{theme.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
