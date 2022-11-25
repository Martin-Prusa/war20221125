import * as React from 'react';

interface InputProps {
    placeholder: string
}

export const Input = ({placeholder}: InputProps) => {

    const [wordLength, setWordLength] = React.useState(0)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWordLength(e.target.value.length)
    }

    return (
    <div>
        <input onChange={handleOnChange} placeholder={placeholder}></input><br />
        <small>{wordLength}</small>
    </div>
    )
}