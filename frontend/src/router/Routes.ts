import Posts from "../components/posts/posts"
import Login from "../components/form/login"

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