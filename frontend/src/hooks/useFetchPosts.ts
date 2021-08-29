import {useState} from "react";
import {useAction} from "./useAction";

export default function useFetchPosts() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)

    const {g} = useAction()

}