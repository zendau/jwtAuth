import React, {useContext, useEffect} from 'react';
import PostList from "../../components/posts/postList";
import {useFetchPosts} from "../../hooks/useFetchPosts";
import {PageContext} from "../../context/PageContext";
import {useAction} from "../../hooks/useAction";


const AllPosts : React.FC = () => {

    const {pageNumber, limit} = useContext(PageContext)

    useFetchPosts(pageNumber, limit)


    return (
        <PostList />
    );
};

export default AllPosts;