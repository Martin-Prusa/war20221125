import * as React from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    text: string
}

export const Button = ({children, text}: ButtonProps) => {
    const handleEvent = () => {
        alert('Click')
    }
    
    return (<button onClick={handleEvent}>{children}</button>)
}