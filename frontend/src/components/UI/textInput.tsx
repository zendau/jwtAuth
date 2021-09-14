import React, {useEffect} from 'react';



interface ITextInput {
    title: string
    id: string
    letters: number
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    type: string
}

const typeValues = ["text", "password"]


const TextInput : React.FC<ITextInput> = ({title, letters, id, value, setValue, type}) => {

    useEffect(() => {
        const val = typeValues.filter(item => item === type)

        if (val.length === 0) {
            console.error("Input wrong type")
        }

    }, [type])

    return (
        <div className="textInput">
            <label htmlFor={id}>{title}</label>
            <input type={type} id={id} placeholder={title} value={value} onChange={e => setValue(e.target.value)} />
            <p className="letters"><span>{letters}</span> Characters remaining</p>
        </div>
    );
};

export default TextInput;