import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IPost} from "../../interfaces/post";

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

    useEffect(() => {
        const data = posts.filter((post) =>  post.id === id)[0]
        setPost(data)

    }, [posts])

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
        </>
    );
}

export default ReadPost;