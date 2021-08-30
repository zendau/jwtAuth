import React, {useEffect, useMemo, useState, Suspense, useRef, useCallback, useContext} from 'react';
import {IPost} from "../../interfaces/post";
import {Link} from "react-router-dom";

import "./postList.scss"
import {PageContext} from "../../context/PageContext";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useFetchPosts} from "../../hooks/useFetchPosts";
import {usePostObserver} from "../../hooks/usePostObserver";


const PostList : React.FC = () => {

    const {posts, hasMore} = useTypedSelector(state => state.post)

    const [filterType, setFilterType] = useState<string>("titleName")
    const [filterName, setFilterName] = useState<string>("")

    const [postList, setPostList] = useState<IPost[]>([])

    const {pageNumber, setPageNumber, limit} = useContext(PageContext)


    useEffect(() => {
        setPostList(posts)
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



    useFetchPosts(pageNumber, limit)

    const observerCallback = usePostObserver(setPageNumber, hasMore)


    const filterPostsByName = useMemo(
        () => postList.filter(post => post.title.includes(filterName)),
        [filterName, postList])

    function generateCard(postData: IPost, isLast: boolean) {

        if (isLast) {
            return (
                <div ref={observerCallback} key={postData.id} className={"post-list"}>
                    <h1>{postData.title}</h1>
                    <p>{postData.author.email}</p>
                    <Link to={`/post/${postData.id}`}>Read post</Link>
                </div>)
        } else {
            return (
                <div  key={postData.id} className={"post-list"}>
                    <h1>{postData.title}</h1>
                    <p>{postData.author.email}</p>
                    <Link to={`/post/${postData.id}`}>Read post</Link>
                </div>)
        }

    }
    return (
        <Suspense fallback={"WAIT"}>
            {filterPostsByName.length !== 0 ?
                <>

                    <select name="" id="" onChange={(e) => setFilterType(e.target.value)}>
                        <option value="date">By date</option>
                        <option value="titleName">By title name</option>
                        <option value="authorName">By author name</option>
                    </select>

                    <input type="text" value={filterName} onChange={(e) => setFilterName(e.target.value)} />
                    <div>
                        {filterPostsByName.map((post,index) =>
                            filterPostsByName.length === index + 1 ? generateCard(post, true)
                            : generateCard(post, false)
                        )}
                    </div>
                </>
                :
                <h1>Not have posts</h1>
            }

        </Suspense>
    )
}

export default PostList