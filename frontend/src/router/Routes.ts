import Account from "../pages/account"
import Login from "../pages/login"
import CreatePost from "../pages/post/createPost";
import AllPosts from "../pages/post/allPosts";
import ReadPost from "../pages/post/readPost";
import Post from "../pages/post/post";
import {ITypeRoutes} from "../interfaces/router";
import Logout from "../pages/logout";
import UserPosts from "../pages/userPosts";
import EditPost from "../pages/post/editPost";
import DeletePost from "../pages/post/deletePost";


export const postRoutes : ITypeRoutes[] = [
    {
        path: "/post/create", component: CreatePost, exact: true
}   ,
    {
        path: "/post/all", component: AllPosts, exact: true
    },
    {
        path: "/post/:id", component: ReadPost, exact: true
    },
    {
        path: "/post/edit/:id", component: EditPost, exact: true
    },
    {
        path: "/post/delete/:id", component: DeletePost, exact: true
    }
    ]


export const privateRoutes : ITypeRoutes[] = [
    {
        path: "/account", component: Account, exact: true,
    },
    {
        path: "/logout", component: Logout, exact: true
    },
    {
        path: "/post", component: Post, exact: false
    },
    {
        path: "/user/:userId", component: UserPosts, exact: true
    }

]

export const publicRoutes : ITypeRoutes[] = [
    {
        path: "/login", component: Login, exact: true
    }
]