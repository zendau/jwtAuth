import React, {useEffect, useState} from 'react';
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IPost} from "../../interfaces/post";

import { useHistory, Link} from "react-router-dom";

const AllPosts : React.FC = () => {


    const {posts} = useTypedSelector(state => state.post)

    const [filterType, setFilterType] = useState<string>("titleName")

    const [postList, setPostList] = useState(posts)

    useEffect(() => {
        setPostList([...posts])
    }, [posts])

    useEffect(() => {

        if (filterType === "date") {
            setPostList([...posts.sort((a: IPost, b : IPost) => a.date.localeCompare(b.date))])
        } else if (filterType === "titleName") {
            setPostList([...posts.sort((a: IPost, b : IPost) => a.title.localeCompare(b.title))])
        } else if (filterType === "authorName") {
            setPostList([...posts.sort((a: IPost, b : IPost) => a.author.email.localeCompare(b.author.email))])
        }

    }, [filterType])

    function generateCard(postData: IPost) {
        return (
            <div key={postData.id}>
                <h1>{postData.title}</h1>
                <Link to={`/post/${postData.id}`}>Read post</Link>
            </div>
        )
    }

    return (
        <>
            <div>
                <select name="" id="" onChange={(e) => setFilterType(e.target.value)}>
                    <option value="date">By date</option>
                    <option value="titleName">By title name</option>
                    <option value="authorName">By author name</option>
                </select>
            </div>
            <div>
                {postList.map(post => generateCard(post))}
            </div>
        </>
    );
};

export default AllPosts;