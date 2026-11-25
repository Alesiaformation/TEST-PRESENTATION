import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'orange' | 'mint' | 'cyan' | 'neutral';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'orange',
  className = '',
  size = 'md',
}) => {
  const variantStyles = {
    orange: 'badge-orange',
    mint: 'badge-mint',
    cyan: 'badge-cyan',
    neutral: 'bg-white/14 text-white border border-white/20',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-[10px] tracking-wider font-semibold',
    md: 'badge text-[11px] font-semibold',
    lg: 'px-5 py-2 text-xs tracking-wider font-bold',
  };

  return (
    <span
      className={`rounded-full backdrop-blur-sm transition-all ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {label}
    </span>
  );
};

