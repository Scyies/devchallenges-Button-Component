import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.scss';

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'text' | 'outline';
  disableShadow?: boolean;
  color?: 'default' | 'primary' | 'secondary';
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  startIcon?: string;
  endIcon?: string;
}

export function Button({
  color = 'default',
  children = 'Default',
  variant = 'default',
  disableShadow = false,
  size = 'md',
  startIcon,
  endIcon,
  ...rest
}: IProps) {
  return (
    <button
      className={`button ${variant} ${
        disableShadow && 'noShadow'
      } ${color} ${size}`}
      {...rest}
    >
      {startIcon && (
        <span className='material-symbols-outlined'>{startIcon}</span>
      )}
      {children}
      {endIcon && <span className='material-symbols-outlined'>{endIcon}</span>}
    </button>
  );
}
