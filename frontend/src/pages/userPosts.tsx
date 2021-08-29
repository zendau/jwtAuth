import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";
import PostList from "../components/posts/postList";
import {IPost} from "../interfaces/post";

interface IParams {
    userId: string
}

const UserPosts : React.FC = () => {

    const {getAllUserPosts, clearPostStore} = useAction()

    const {userId} = useParams<IParams>()

    useEffect(() => {
        getAllUserPosts(userId)

        return () => {
            clearPostStore()
        }
    }, [])

    const {posts} = useTypedSelector(state => state.post)


    const [postList, setPostList] = useState<IPost[]>([])

    useEffect(() => {
        setPostList([...posts])

    }, [posts])


    return (
        <>
            <h1>Posts of user with id - {userId}</h1>
            <PostList posts={posts} />
        </>
    );
};

export default UserPosts;