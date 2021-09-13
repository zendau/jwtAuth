import React from 'react';

interface ITextInput {
    title: string
    id: string
    letters: number
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const TextInput : React.FC<ITextInput> = ({title, letters, id, value, setValue}) => {
    return (
        <div className="textInput">
            <label htmlFor={id}>{title}</label>
            <input type="text" id={id} placeholder={title} value={value} onChange={e => setValue(e.target.value)} />
            <p className="letters"><span>{letters}</span> Characters remaining</p>
        </div>
    );
};

export default TextInput;