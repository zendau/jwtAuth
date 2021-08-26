import React, {useEffect} from 'react';
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IPost} from "../../interfaces/post";

import { useHistory, Link} from "react-router-dom";

const AllPosts : React.FC = () => {

    const {getAllPosts} = useAction()

    const posts = useTypedSelector(state => state.post)

    const history = useHistory()

    useEffect(() => {

        if (posts.posts.length === 0) {
            getAllPosts()
        }


        console.log(posts)
    }, [])

    function generateCard(postData: IPost) {
        return (
            <div key={postData.id}>
                <h1>{postData.title}</h1>
                <p>{postData.body}</p>
                <p>{postData.date}</p>
                <p>{postData.id}</p>
                <Link to={`/post/${postData.id}`}>Read post</Link>
            </div>
        )
    }

    return (
        <div>
            {posts.posts.map(post => generateCard(post))}
        </div>
    );
};

export default AllPosts;