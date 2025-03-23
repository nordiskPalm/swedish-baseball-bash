
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, isLoading, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all btn-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-primary text-primary-foreground shadow hover:shadow-md',
      secondary: 'bg-secondary text-secondary-foreground',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline'
    };
    
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4',
      lg: 'h-11 px-6 text-lg'
    };
    
    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
