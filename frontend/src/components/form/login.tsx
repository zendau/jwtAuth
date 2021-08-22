import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";




const Login : React.FC = () => {

    const state = useTypedSelector(state => state.user)

    const {userAuth} = useAction()

    console.log("state", state)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        console.log("rendered")
        //const res = userAuth("alex@gmail.com", "1234")
        //console.log(res)
    }, [])

    const sendLoginData = (e: React.MouseEvent<HTMLButtonElement>) => {
        userAuth(email, password)
        console.log("state2", state)
    }

    return (
        <div>
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
            <button onClick={sendLoginData}>
                Логин
            </button>
            {/*<button onClick={() => store.registration(email, password)}>*/}
            {/*    Регистрация*/}
            {/*</button>*/}
        </div>
    )
}

export default  Login