import React, {useEffect, useState} from 'react';
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IPost} from "../../interfaces/post";

import { useHistory, Link} from "react-router-dom";
import PostList from "../../components/posts/postList";

const AllPosts : React.FC = () => {


    const {posts} = useTypedSelector(state => state.post)



    return (
        <>
            <h1>All posts</h1>
            <PostList posts={posts} />
        </>
    );
};

export default AllPosts;