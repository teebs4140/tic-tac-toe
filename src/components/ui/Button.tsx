'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const getVariantStyles = (variant: ButtonProps['variant']) => {
    switch (variant) {
      case 'primary':
        return 'border-transparent bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-500 hover:from-violet-400 hover:via-indigo-400 hover:to-sky-400 text-white shadow-lg shadow-indigo-500/40';
      case 'secondary':
        return 'border-white/20 bg-white/10 text-slate-100 hover:bg-white/20 hover:border-white/30 shadow-lg shadow-slate-900/40';
      case 'danger':
        return 'border-transparent bg-gradient-to-br from-rose-500 via-red-500 to-orange-400 hover:from-rose-400 hover:via-red-400 hover:to-orange-300 text-white shadow-lg shadow-rose-500/40';
      default:
        return 'border-transparent bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-500 hover:from-violet-400 hover:via-indigo-400 hover:to-sky-400 text-white shadow-lg shadow-indigo-500/40';
    }
  };

  const getSizeStyles = (size: ButtonProps['size']) => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg font-semibold';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const baseStyles = [
    'inline-flex items-center justify-center',
    'font-semibold rounded-2xl border',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'hover:-translate-y-[2px] active:translate-y-[1px]',
  ];

  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size);

  // Focus ring color based on variant
  const focusRingColor = variant === 'danger'
    ? 'focus-visible:ring-rose-400/60'
    : variant === 'secondary'
      ? 'focus-visible:ring-white/50'
      : 'focus-visible:ring-indigo-400/60';

  const combinedClassName = [
    ...baseStyles,
    variantStyles,
    sizeStyles,
    focusRingColor,
    className,
  ].join(' ');

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
