import Account from "../pages/account"
import Login from "../pages/login"
import CreatePost from "../pages/post/createPost";
import AllPosts from "../pages/post/allPosts";
import ReadPost from "../pages/post/readPost";

export const privateRoutes = [
    {
        path: "/account", component: Account, exact: true,
    },
    {
        path: "/post/create", component: CreatePost, exact: false
    },
    {
        path: "/post/all", component: AllPosts, exact: false
    },
    {
        path: "/post/:id", component: ReadPost, exact: false
    }
]

export const publicRoutes = [
    {
        path: "/login", component: Login, exact: true
    }
]