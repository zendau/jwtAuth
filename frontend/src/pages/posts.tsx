import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const Posts: React.FC = () => {

    const state = useTypedSelector(state => state.user)

    return (
        <div>
            <h1>Hello {state.email}</h1>
            <h3>Your account is {state.isActivate ? "activated": "not activated"}</h3>
        </div>
    );
};

export default Posts;