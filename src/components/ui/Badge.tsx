import { type ReactNode } from 'react';
import { cn } from '../../utils/helpers';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'info';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  const variants = {
    default: 'bg-sky-50 text-sky-700 border-sky-100',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    info: 'bg-gray-50 text-gray-600 border-gray-100',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
