import {Dispatch} from "redux";
import axios from "axios";

import $api from "../../axios"

import {UserActionType, userTypes} from "../types/UserTypes"
import {IFetchUser} from "../../interfaces/user"

export const userAuth = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserActionType>) => {
        try {
            console.log(email, password)
            dispatch({type: userTypes.USER_LOGIN})

            const userData = await $api.post<IFetchUser>("/user/registration", {
                email, password
            })

            localStorage.setItem("token", userData.data.accessToken)

            dispatch({type: userTypes.USER_FETCH_SUCCESS, payload: {
                    email: userData.data.userDto.email,
                    id: userData.data.userDto.id,
                    isActivate: userData.data.userDto.isActivated
                }})

        } catch (e) {
            dispatch({
                type: userTypes.USER_FETCH_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}