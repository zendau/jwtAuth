import AuthLayout from "../../layouts/auth.layout";
import {useAction} from "../../hooks/useAction";
import {PageContext} from "../../context/PageContext";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import PostList from "../../components/posts/postList";

const User = () => {

    const {getAllUserPosts, clearPostStore} = useAction()

    const {setPageNumber} = useContext(PageContext)

    const {query} = useRouter()

    const userId = typeof query.id === "string" ? query.id : query.id[0]

    const {users} = useTypedSelector(state => state.user)

    const [userName, setUserName] = useState("")

    useEffect(() => {
        clearPostStore()
        getAllUserPosts(userId)

        console.log(users)

        const userData = users?.filter(user => user.id === userId)

        if (userData !== undefined) {
            setUserName(userData[0].email)
        }

        return () => {
            clearPostStore()
            setPageNumber(1)
        }
    }, [])

    return (
        <AuthLayout>
            <PostList author={userName} />
        </AuthLayout>
    );
};

export default User;