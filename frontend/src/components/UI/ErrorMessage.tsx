import React, {useEffect, useState} from 'react';
import {useAction} from "../../hooks/useAction";

interface IErrorMessageProps {
    message: string | null | undefined
    timeout: number
}

const ErrorMessage : React.FC<IErrorMessageProps> = ({message, timeout}) => {

    const {cleanErrorMessage} = useAction()

    const [timeoutId, setTimeoutId] = useState(0)

    useEffect(() => {

        if (message) {
            clearTimeout(timeoutId)
            setTimeoutId(setTimeout(() => cleanErrorMessage(), timeout))
        }

    }, [message])

    return (
        <h1 style={ message ? {display: "block"} : {display: "none"}}>{message}</h1>
    );
};

export default ErrorMessage;