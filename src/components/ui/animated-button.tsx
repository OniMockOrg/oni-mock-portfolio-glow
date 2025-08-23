import React from 'react';
import { Button } from './button';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'gradient' | 'outline' | 'default';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className,
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'group relative transition-all duration-500 transform hover:scale-105 overflow-hidden font-semibold';
  
  const variantClasses = {
    gradient: 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white shadow-2xl hover:shadow-purple-500/40 backdrop-blur-sm',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent',
    default: 'bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white shadow-2xl hover:shadow-purple-500/40 backdrop-blur-sm'
  };
  
  const sizeClasses = {
    sm: 'px-6 py-3 text-sm rounded-xl',
    md: 'px-8 py-4 text-base rounded-2xl',
    lg: 'px-12 py-6 text-lg rounded-2xl'
  };
  
  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      style={variant === 'gradient' || variant === 'default' ? { boxShadow: '0 2px 16px 0 #a78bfa44' } : undefined}
    >
      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {Icon && iconPosition === 'left' && (
          <Icon className={cn(
            iconSizeClasses[size],
            'group-hover:rotate-12 transition-transform duration-300'
          )} />
        )}
        {children}
        {Icon && iconPosition === 'right' && (
          <Icon className={cn(
            iconSizeClasses[size],
            iconPosition === 'right' ? 'group-hover:translate-x-1' : 'group-hover:rotate-12',
            'transition-transform duration-300'
          )} />
        )}
      </span>
    </Button>
  );
};

export default AnimatedButton;