import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";
import {useAuthContext} from "../context/AuthContext";
import ErrorMessage from "../components/UI/ErrorMessage";




const Login : React.FC = () => {

    const state = useTypedSelector(state => state.user)


    const {userAuth} = useAction()


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {setAuthStatus} =  useAuthContext()

    useEffect(() => {
        console.log("rendered")
    }, [])

    const sendLoginData = (type: string) => {

        userAuth(email, password, setAuthStatus, type)



    }

    return (
        <div>
            <ErrorMessage message={state.error} timeout={5000} />
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder='Email'
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder='Пароль'
                />
                <button onClick={() => sendLoginData("login")}>
                    Логин
                </button>
                <button onClick={() => sendLoginData("registration")}>
                    Регистрация
                </button>
        </div>
    )
}

export default  Login