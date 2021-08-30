import React from 'react';
import PostList from "../../components/posts/postList";


const AllPosts : React.FC = () => {

    return (
        <>
            <h1>All posts</h1>
            <PostList />
        </>
    );
};

export default AllPosts;