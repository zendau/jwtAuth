import React, {useEffect, useMemo, useState, Suspense, useRef, useCallback} from 'react';
import {IPost} from "../../interfaces/post";
import {Link} from "react-router-dom";

import "./postList.scss"

interface  IPostListProps {
    posts: IPost[]
}

const PostList : React.FC<IPostListProps> = ({posts}) => {


    const [filterType, setFilterType] = useState<string>("titleName")
    const [filterName, setFilterName] = useState<string>("")

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


    const observer = useRef<IntersectionObserver>()
    const lastBookElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                console.log("ENTER")
                //setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
            console.log(entries)
        })
        console.log(node)
        if (node) observer.current.observe(node)
    }, [])


    const filterPostsByName = useMemo(() =>  postList.filter(post => post.title.includes(filterName)), [filterName, postList])

    function generateCard(postData: IPost, isLast: boolean) {

        if (isLast) {
            return (
                <div ref={lastBookElementRef} key={postData.id} className={"post-list"}>
                    <h1>{postData.title}</h1>
                    <Link to={`/post/${postData.id}`}>Read post</Link>
                </div>)
        } else {
            return (<div  key={postData.id} className={"post-list"}>
                <h1>{postData.title}</h1>
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