import React, {FormEvent, useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {Link, Redirect} from "react-router-dom";

interface IParams {
    id: string
}

const EditPost : React.FC = () => {

    const {id} = useParams<IParams>()

    const {editPost} = useAction()

    const {posts} = useTypedSelector(state => state.post)
    const {id: userId} = useTypedSelector(state => state.user)


    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const [authorId, setAuthorId] = useState("")

    useEffect(() => {
        const data = posts.filter((post) =>  post.id === id)[0]

        if (data !== undefined) {
            setTitle(data.title)
            setBody(data.body)

            setAuthorId(data.author.id)
        }



    }, [posts])


    const sendPostData = (e: FormEvent) => {
        e.preventDefault()
        editPost(id, userId, title, body, posts)

    }


    const checkStatus = useMemo(() => userId === authorId, [authorId, userId])

    return (
        <>
            <form>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <button onClick={sendPostData}>Edit post</button>
            </form>
            {
                checkStatus ?
                    <>
                        <p>OK</p>
                    </> :
                    <Redirect to={"/post/all"} />
            }
        </>
    )
}

export default EditPost;