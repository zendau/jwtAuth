interface IPath {
    to: string
    name: string
}

export const publicPaths : IPath[] = [
    {
        to: "/login", name: "Login"
    }
]

export const privatePaths : IPath[] = [
    {
        to: "/posts", name: "Posts"
    },
    {
        to: "/logout", name: "Exit"
    }
]