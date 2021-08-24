import React, {useEffect, useState} from 'react'
import {useTypedSelector} from "../hooks/useTypedSelector"
import {useAction} from "../hooks/useAction"


const Posts: React.FC = () => {

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


    return (
        <div>
            <h1>Hello {state.email}</h1>
            <h3>Your account is {state.isActivate ? "activated": "not activated"}</h3>
            <button onClick={getUsers}>Get all users</button>
            {state.users ? state.users.map((user, index) =>
                <div key={user.email}>{index+1} - {user.email}</div>
            ) : loadMessage}
        </div>
    )
}

export default Posts;