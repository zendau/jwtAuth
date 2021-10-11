import React, {useEffect, useMemo, useState, useContext} from 'react';
import {IPost} from "../../interfaces/post";
import Link from "next/link";

import styles from  "../../styles/postList.module.scss"
import {PageContext} from "../../context/PageContext";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {usePostObserver} from "../../hooks/usePostObserver";
import Filter from "./filter";

interface IPostList {
    author?: string
}

const PostList : React.FC<IPostList> = ({author}) => {

    const {posts, hasMore} = useTypedSelector(state => state.post)

    const [filterType, setFilterType] = useState<string>("titleName")
    const [filterName, setFilterName] = useState<string>("")

    const [postList, setPostList] = useState<IPost[]>([])

    const {setPageNumber} = useContext(PageContext)


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





    const observerCallback = usePostObserver(setPageNumber, hasMore)


    const filterPostsByName = useMemo(
        () => postList.filter(post => post.title.includes(filterName)),
        [filterName, postList])

    function generateCard(postData: IPost, isLast: boolean) {


        if (isLast) {
            return (
                <div ref={observerCallback} key={postData.id} className={styles["post"]}>
                    <div className={styles["post__header"]}>
                        <h2 className={styles["post__title"]}>{postData.title}</h2>
                        <small>{postData.date}</small>
                        <p className={styles["post__body"]}>{postData.author.email}</p>
                    </div>
                    <div className={styles["post__footer"]}>
                        <Link href={`/post/${postData.id}`}><a className={`btn ${styles['post__btn']}`}>Read post</a></Link>
                        <p className={styles["post__author"]}>{postData.author.email}</p>
                    </div>
                </div>)
        } else {
            return (
                <div key={postData.id} className={styles["post"]}>
                    <div className={styles["post__header"]}>
                        <h2 className={styles["post__title"]}>{postData.title}</h2>
                        <small>{postData.date}</small>
                        <p className={styles["post__body"]}>{postData.author.email}</p>
                    </div>
                    <div className={styles["post__footer"]}>
                        <Link href={`/post/${postData.id}`}><a className={`btn ${styles['post__btn']}`}>Read post</a></Link>
                        <p className={styles["post__author"]}>{postData.author.email}</p>
                    </div>
                </div>)
        }

    }
    return (
        <>
            <Filter
                filterType={filterType}
                setFilterType={setFilterType}
                filterName={filterName}
                setFilterName={setFilterName}
            />
            {filterPostsByName.length !== 0 ?
                <>
                    <section className="posts-container">
                        {author ? <h1 className={styles["posts__title"]}>{author}'s posts</h1> : ""}
                        {filterPostsByName.map((post,index) =>
                            filterPostsByName.length === index + 1 ? generateCard(post, true)
                            : generateCard(post, false)
                        )}
                    </section>
                </>
                :
                <h1 className="message-info">No have posts</h1>
            }

        </>
    )
}

export default PostList