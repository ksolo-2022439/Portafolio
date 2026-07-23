import { type ReactNode } from 'react';
import { cn } from '../../utils/helpers';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  download?: boolean | string;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  download,
  className,
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-sky-500 text-white hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-200 active:scale-[0.98]',
    secondary:
      'border-2 border-sky-500 text-sky-600 hover:bg-sky-50 hover:shadow-md active:scale-[0.98]',
    ghost:
      'text-gray-600 hover:text-sky-600 hover:bg-sky-50 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        download={download}
        aria-label={ariaLabel}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      type="button"
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
