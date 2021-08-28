import React, {useEffect, useState} from 'react'
import {useTypedSelector} from "../hooks/useTypedSelector"
import {useAction} from "../hooks/useAction"
import {Link} from "react-router-dom"


const Account: React.FC = () => {

    const state = useTypedSelector(state => state.user)

    const [loadMessage, setLoadMessage] = useState("")


    const {getAllUsers} = useAction()

    useEffect(() => {
        setLoadMessage("")
    }, [state.users])

    function getUsers() {
        getAllUsers()
        setLoadMessage("Wait, users are download")
    }


    console.log(state.users)
    return (
        <div>
            <h1>Hello {state.email}</h1>
            <h3>Your account is {state.isActivate ? "activated": "not activated"}</h3>
            <Link to={`/user/${state.id}`}>Get only your posts</Link>
            <button onClick={getUsers}>Get all users</button>
            {state.users ? state.users.map((user, index) =>
                <Link
                    key={user.email}
                    to={`/user/${user.id}`}
                    >{index+1} - {user.email}
                </Link>
            ) : loadMessage}
        </div>
    )
}

export default Account;