import React from 'react';

import './input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
    return (
        <input
            className='input'
            {...props}
        />
    )
}