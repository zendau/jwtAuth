import React, {useContext, useEffect} from 'react';
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

    useEffect(() => {
        clearPostStore()
        getAllUserPosts(userId)
        return () => {
            setPageNumber(1)
            clearPostStore()
        }
    }, [])

    const {posts} = useTypedSelector(state => state.post)




    return (
        <>
            <h1>Posts of user with id - {userId}</h1>
            <PostList />
        </>
    );
};

export default UserPosts;