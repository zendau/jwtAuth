import {FormEvent, useState} from "react";

import React from 'react';
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const CreatePost : React.FC = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const {createPost} = useAction()

    const {id} = useTypedSelector(state => state.user)

    const sendPostData = (e: FormEvent) => {
        e.preventDefault()
        createPost(title, body, id)

    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                <textarea
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <button onClick={sendPostData}>Create post</button>
            </form>
        </div>
    );
};

export default CreatePost;


