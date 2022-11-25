import * as React from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    text: string | undefined
}

export const Button = (props: ButtonProps) => {
    /*const handleEvent = () => {
        alert('Click')
    }
    
    return (<button onClick={handleEvent}>{children}</button>)*/
    return (<button {...props}>{props.children}</button>)
}