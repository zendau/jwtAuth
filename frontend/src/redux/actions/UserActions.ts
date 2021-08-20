import {Dispatch} from "redux";
import axios from "axios";

import {UserActionType, userTypes} from "../types/UserTypes"

export const userAuth = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserActionType>) => {
        try {
            console.log(email, password)
            dispatch({type: userTypes.USER_LOGIN})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log("response", response)
            dispatch({type: userTypes.USER_FETCH_SUCCESS, payload: {
                    email: "1@gmail.com", id: "1", isActivate: false
                }})

        } catch (e) {
            dispatch({
                type: userTypes.USER_FETCH_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}