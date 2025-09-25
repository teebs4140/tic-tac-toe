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
        return 'bg-blue-600 hover:bg-blue-700 text-white border-transparent';
      case 'secondary':
        return 'bg-gray-200 hover:bg-gray-300 text-gray-900 border-gray-300';
      case 'danger':
        return 'bg-red-600 hover:bg-red-700 text-white border-transparent';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white border-transparent';
    }
  };

  const getSizeStyles = (size: ButtonProps['size']) => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'md':
        return 'px-4 py-2 text-base';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  const baseStyles = [
    'inline-flex items-center justify-center',
    'font-medium rounded-md border',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'hover:shadow-md transform hover:scale-105 active:scale-95',
  ];

  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size);

  // Focus ring color based on variant
  const focusRingColor = variant === 'danger' ? 'focus:ring-red-500' :
                        variant === 'secondary' ? 'focus:ring-gray-500' :
                        'focus:ring-blue-500';

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