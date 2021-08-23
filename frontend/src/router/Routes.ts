import Posts from "../pages/posts"
import Login from "../pages/login"

export const privateRoutes = [
    {
        path: "/posts", component: Posts, exact: true
    }
]

export const publicRoutes = [
    {
        path: "/login", component: Login, exact: true
    }
]