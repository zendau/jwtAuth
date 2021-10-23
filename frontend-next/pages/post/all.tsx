import AuthLayout from "../../layouts/auth.layout";
import PostList from "../../components/posts/postList";
import {PageContext} from "../../context/PageContext";
import {useFetchPosts} from "../../hooks/useFetchPosts";
import {useContext} from "react";

const AllPosts = () => {

    const {pageNumber, limit} = useContext(PageContext)

    useFetchPosts(pageNumber, 5)

    return (
        <AuthLayout>
            <PostList />
        </AuthLayout>
    );
};

export default AllPosts;