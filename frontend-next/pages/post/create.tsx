import AuthLayout from "../../layouts/auth.layout";
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useState, FormEvent} from "react";

import router from "next/router"

import styles from "../../styles/create.module.scss"

const Create = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const {createPost} = useAction()

    const {id, isActivate} = useTypedSelector(state => state.user)

    const sendPostData = (e: FormEvent) => {
        e.preventDefault()
        createPost(title, body, id, router)

    }

    return (
        <AuthLayout>
            {isActivate ?

                <section className={styles["create-post-container"]}>
                    <form className={styles["create-post__wrapper"]}>
                        <input
                            className={styles["create-post__title"]}
                            placeholder="Title"
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <textarea
                            className={styles["create-post__body"]}
                            placeholder="Text"
                            name="" id=""
                            value={body}
                            onChange={e => setBody(e.target.value)}
                            />
                        <button onClick={sendPostData} className={`btn ${styles['create-post__create']}`}>Create post</button>
                    </form>
                </section>

                : <h1 className={styles["create-post__not-active"]}>Account is not activated</h1>}
        </AuthLayout>
    );
};

export default Create;