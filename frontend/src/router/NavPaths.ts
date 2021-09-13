interface IPath {
    to: string
    name: string
}

export const publicPaths : IPath[] = [
    {
        to: "/login", name: "Login",
    },
    {
        to: "/register", name: "Register"
    }

]

export const privatePaths : IPath[] = [
    {
        to: "/account", name: "Account"
    },
    {
        to: "/logout", name: "Exit"
    },
    {
        to: "/post/create", name: "Create post"
    },
    {
        to: "/post/all", name: "All posts"
    }
]