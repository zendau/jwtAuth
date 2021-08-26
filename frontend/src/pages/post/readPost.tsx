import React from 'react';
import {useParams} from "react-router";

interface IParams {
    id: string
}


const ReadPost : React.FC = () => {

    const {id} = useParams<IParams>()

    return (
        <div>
            <h1>Post with id - {id}</h1>
        </div>
    );
};

export default ReadPost;