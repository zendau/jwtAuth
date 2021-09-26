import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router";

import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";
import PostList from "../components/posts/postList";


import {PageContext} from "../context/PageContext"

interface IParams {
    userId: string
}

const UserPosts : React.FC = () => {

    const {getAllUserPosts, clearPostStore} = useAction()

    const {setPageNumber} = useContext(PageContext)

    const {userId} = useParams<IParams>()

    const {users} = useTypedSelector(state => state.user)

    const [userName, setUserName] = useState("")

    useEffect(() => {
        clearPostStore()
        getAllUserPosts(userId)

        console.log(users)

        const userData = users?.filter(user => user.id === userId)

        if (userData !== undefined) {
            setUserName(userData[0].email)
        }

        return () => {
            setPageNumber(1)
        }
    }, [])


    return (
        <>
            <PostList author={userName} />
        </>
    );
};

export default UserPosts;