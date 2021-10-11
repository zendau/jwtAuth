import AuthLayout from "../../../layouts/auth.layout";

import Router, {useRouter} from "next/router";
import FetchLoader from "../../../components/UI/fetchLoader";
import {useAction} from "../../../hooks/useAction";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {FormEvent, useEffect, useState} from "react";
import {GetServerSideProps} from "next";

import { AppProps } from 'next/app'

interface IProps {
    userId: string
}

const EditPost = ({userId} : IProps) => {

    const {query} = useRouter()

    console.log("1", userId)

    //const id = typeof query.id === "string" ? query.id : query.id[0]

    const {editPost} = useAction()

    const {posts} = useTypedSelector(state => state.post)
    const {id} = useTypedSelector(state => state.user)


    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const [isLoaded, setIsLoaded] = useState(true)
    const [checkStatus, setCheckStatus] = useState(true)

    useEffect(() => {

        const data = posts.filter((post) =>  post.id === id)[0]


        if (data !== undefined) {
            setTitle(data.title)
            setBody(data.body)
        }

        setCheckStatus(userId === data?.author.id)
        setIsLoaded(false)


    }, [posts])


    const sendPostData = (e: FormEvent) => {
        e.preventDefault()
        editPost(id, userId, title, body, posts)

    }

    return (
        <AuthLayout>
            (
            <>{
                isLoaded ?
                    <FetchLoader/> :
                    <>{
                        checkStatus ?
                            <>
                                <section className="create-post-container">
                                    <form className="create-post__wrapper">
                                        <input className="create-post__title"
                                               placeholder="Title"
                                               type="text"
                                               value={title}
                                               onChange={e => setTitle(e.target.value)} />
                                        <textarea
                                            className="create-post__body"
                                            placeholder="Text"
                                            value={body}
                                            onChange={e => setBody(e.target.value)}>
                                        Post text
                                    </textarea>
                                        <button className="btn create-post__create" onClick={sendPostData}>Edit post</button>
                                    </form>
                                </section>
                            </>
                            :
                            (Router.push("/post/all"))
                    }</>
            }
            </>
            )
        </AuthLayout>
    );
};

export default EditPost;

export async function getServerSideProps<GetServerSideProps>({params})  {
    const userId : string = params.id

    const clientProps : IProps = {
        userId
    }

    return {
        props: clientProps, // will be passed to the page component as props
    }
}