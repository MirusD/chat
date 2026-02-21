import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
    return (
        <input
            style={{ padding: '10px', marginRight: '10px' }}
            {...props}
        />
    )
}