import React from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'danger-outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    disabled?: boolean;
    children: React.ReactNode;
}

export const Button = ({ variant = 'primary', disabled = false, children, ...props }: ButtonProps) => {
    
    const className = [
        styles.button,
        styles[`button--${variant}`],
        disabled ? styles['button--disabled'] : ''
    ].filter(Boolean).join(' ');

    return (
        <button
            className={className}
            {...props}
        >
            {children}
        </button>
    );
};