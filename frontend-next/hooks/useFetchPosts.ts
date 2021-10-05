import {useEffect, useState} from "react";
import {useAction} from "./useAction";
import {useTypedSelector} from "./useTypedSelector";


export const useFetchPosts = (currentPage: number, limit: number) => {

    console.log("CURRENT PAGE", currentPage)
    const {getLimitPosts} = useAction()
    const {hasMore} = useTypedSelector(state => state.post)


    useEffect(() => {

        if (hasMore) {
            getLimitPosts(currentPage, limit)
        }


    }, [currentPage])



}