import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IPost} from "../../interfaces/post";
import {Link} from "react-router-dom"

interface IParams {
    id: string
}

function convertDate(date: string) : string {
    const convertedDate = new Date(date)
    return new Intl.DateTimeFormat("en-US").format(convertedDate)
}


const ReadPost : React.FC = () => {

    const {id} = useParams<IParams>()

    const [post, setPost] = useState<IPost>()

    const {posts} = useTypedSelector(state => state.post)
    const {id: userID} = useTypedSelector(state => state.user)

    useEffect(() => {
        const data = posts.filter((post) =>  post.id === id)[0]
        setPost(data)

    }, [posts])

    const checkStatus = useMemo(() => userID === post?.author.id, [post, userID])

    return (
        <>
            {post === undefined
                ?
                <h1>Loader</h1>
                :
                <div>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
                    <p>Created - {convertDate(post.date)}</p>
                    <p>Author - {post.author.email}</p>
                </div>
            }
            {
                checkStatus ?
                    <>
                        <Link to={"/post/edit/"+post?.id}>Edit</Link>
                        <Link to={"/post/delete/"+post?.id}>Delete</Link>
                    </> :
                    ""
            }
        </>
    );
}

export default ReadPost;