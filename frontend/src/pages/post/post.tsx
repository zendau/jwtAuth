import React, {useEffect} from 'react';
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useLocation} from "react-router";
import {Redirect, Switch, useHistory} from "react-router-dom";
import {renderRoute} from "../../utils/renderRoute"
import {postRoutes} from "../../router/Routes"

const Post : React.FC = () => {

    const posts = useTypedSelector(state => state.post)
    const {getAllPosts} = useAction()

    const {pathname} = useLocation()

    const history = useHistory()


    useEffect(() => {

        console.log("Get POST", posts.posts)

        if (posts.posts.length === 0) {
            getAllPosts(pathname, history)
        } else {
            console.log(pathname)
            history.push(pathname)
        }


    }, [posts.posts])

    return (
        <>
            <Switch>
                {
                    postRoutes.map(route => renderRoute(route))
                }
                <Redirect to="/post/all"/>
            </Switch>
        </>
    );
}

export default Post