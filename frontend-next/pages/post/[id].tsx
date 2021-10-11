import AuthLayout from "../../layouts/auth.layout";
import {useRouter} from "next/router";
import {IPost} from "../../interfaces/post";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect, useMemo, useState} from "react";
import FetchLoader from "../../components/UI/fetchLoader";
import Link from "next/link"

function convertDate(date: string) : string {
    const convertedDate = new Date(date)
    return new Intl.DateTimeFormat("en-US").format(convertedDate)
}

import styles from "../../styles/post.module.scss"

const Post = () => {

    const {query} = useRouter()


    const [post, setPost] = useState<IPost>()

    const {posts} = useTypedSelector(state => state.post)
    const {id: userID} = useTypedSelector(state => state.user)

    useEffect(() => {
        const data = posts.filter((post) =>  post.id === query.id)[0]
        console.log(2, data)
        setPost(data)

    }, [posts])

    const checkStatus = useMemo(() => userID === post?.author.id, [post, userID])


    return (
        <AuthLayout>
            <>
                {post === undefined
                    ?
                    <FetchLoader/>
                    :
                    <section className={styles["read-post-container"]}>
                        <div className={styles["read-post__wrapper"]}>
                            <div className={styles["read-post__toolbar"]}>
                                <div className={styles["read-post__post-data"]}>
                                    <p className={styles["read-post__post-author"]}>{post.author.email}</p>
                                    <small className={styles["read-post__post-date"]}>{convertDate(post.date)}</small>
                                </div>
                                {
                                    checkStatus ?
                                        <div className={styles["read-post__btn-container"]}>
                                            <Link href={"/post/edit/"+post?.id}><a className={`btn ${styles['read-post__edit']}`}>Edit post</a></Link>
                                            <Link href={"/post/delete/"+post?.id}><a className={`btn ${styles['read-post__delete']}`}>Delete post</a></Link>
                                        </div> :
                                        ""
                                }
                            </div>
                            <h1 className={styles["read-post__title"]}>{post?.title}</h1>
                            <p className={styles["read-post__body"]}> {post?.body} </p>
                        </div>
                    </section>
                }
            </>
        </AuthLayout>
    );
};

export default Post;