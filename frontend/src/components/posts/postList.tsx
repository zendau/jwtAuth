import React, {useEffect, useMemo, useState, Suspense} from 'react';
import {IPost} from "../../interfaces/post";
import {Link} from "react-router-dom";

interface  IPostListProps {
    posts: IPost[]
}

const PostList : React.FC<IPostListProps> = ({posts}) => {


    const [filterType, setFilterType] = useState<string>("titleName")
    const [filterName, setFilterName] = useState<string>("")

    const [postList, setPostList] = useState(posts)

    useEffect(() => {
        setPostList([...posts])
    }, [posts])

    useEffect(() => {

        if (filterType === "date") {
            setPostList([...posts.sort((a: IPost, b : IPost) => a.date.localeCompare(b.date))])
        } else if (filterType === "titleName") {
            setPostList([...posts.sort((a: IPost, b : IPost) => a.title.localeCompare(b.title))])
        } else if (filterType === "authorName") {
            setPostList([...posts.sort((a: IPost, b : IPost) => a.author.email.localeCompare(b.author.email))])
        }

    }, [filterType])

    const filterPostsByName = useMemo(() =>  postList.filter(post => post.title.includes(filterName)), [filterName, postList])

    function generateCard(postData: IPost) {
        return (
            <div key={postData.id}>
                <h1>{postData.title}</h1>
                <Link to={`/post/${postData.id}`}>Read post</Link>
            </div>
        )
    }

    return (
        <Suspense fallback={"WAIT"}>
            {filterPostsByName.length !== 0 ?
                <>

                    <select name="" id="" onChange={(e) => setFilterType(e.target.value)}>
                        <option value="date">By date</option>
                        <option value="titleName">By title name</option>
                        <option value="authorName">By author name</option>
                    </select>

                    <input type="text" value={filterName} onChange={(e) => setFilterName(e.target.value)} />
                    <div>
                        {filterPostsByName.map(post => generateCard(post))}
                    </div>
                </>
                :
                <h1>Not have posts</h1>
            }

        </Suspense>
    )
}

export default PostList