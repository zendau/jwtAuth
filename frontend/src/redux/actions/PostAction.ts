import {PostActionType, postTypes} from "../types/PostTypes";
import {Dispatch} from "redux";

import $api from "../../axios"
import {IPost} from "../../interfaces/post"
import {userTypes} from "../types/UserTypes";

export const createPost = (title: string, body: string, author: string) => {
    return async  (dispatch: Dispatch<PostActionType>) => {
        try {
            dispatch({type: postTypes.POST_FETCH})

            const postData = await $api.post<IPost>("/post/create", {
                author, title, body
            })

            dispatch({type: postTypes.POST_FETCH_SUCCESS, payload: postData.data})
        }catch (e) {
            dispatch({type: postTypes.POST_FETCH_ERROR, payload: e.response.data.message})
        }


    }
}

export const editPost = () => {

}

export const deletePost = () => {

}

export const getPost = () => {

}

export const getAllUserPosts = () => {

}

export const getAllPosts = (path: string, history :  any) => {
    return async  (dispatch: Dispatch<PostActionType>) => {
        try {
            dispatch({type: postTypes.POST_FETCH})

            const postData = await $api.get<IPost[]>("/post/getAllPosts")

            dispatch({type: postTypes.POSTS_FETCH_SUCCESS, payload: postData.data})

            history.push(path)
        }catch (e) {
            dispatch({type: postTypes.POST_FETCH_ERROR, payload: e.response.data.message})
        }
    }
}

export const clearPostStore = () => {
    return {type: postTypes.CLEAR_POST_STORE}
}