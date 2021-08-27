import Account from "../pages/account"
import Login from "../pages/login"
import CreatePost from "../pages/post/createPost";
import AllPosts from "../pages/post/allPosts";
import ReadPost from "../pages/post/readPost";
import Post from "../pages/post/post";
import {ITypeRoutes} from "../interfaces/router";
import Logout from "../pages/logout";


export const postRoutes : ITypeRoutes[] = [
    {
        path: "/post/create", component: CreatePost, exact: true
}   ,
    {
        path: "/post/all", component: AllPosts, exact: true
    },
    {
        path: "/post/:id", component: ReadPost, exact: true
    }]


export const privateRoutes : ITypeRoutes[] = [
    {
        path: "/account", component: Account, exact: true,
    },
    {
        path: "/logout", component: Logout, exact: true
    },
    {
        path: "/post", component: Post, exact: false
    }

]

export const publicRoutes : ITypeRoutes[] = [
    {
        path: "/login", component: Login, exact: true
    }
]