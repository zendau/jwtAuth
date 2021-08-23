import {Dispatch} from "redux";
import axios from "axios";

import $api from "../../axios"

import {UserActionType, userTypes} from "../types/UserTypes"
import {IFetchUser} from "../../interfaces/user"

export const userAuth = (email: string, password: string,  setAuthStatus: (status: boolean) => void, type: string) => {

    return async (dispatch: Dispatch<UserActionType>) => {
        try {
            dispatch({type: userTypes.USER_LOGIN})

            const userData = await $api.post<IFetchUser>(`/user/${type}`, {
                email, password
            })

            localStorage.setItem("token", userData.data.accessToken)

            setAuthStatus(true)

            dispatch({type: userTypes.USER_FETCH_SUCCESS, payload: {
                    email: userData.data.userDto.email,
                    id: userData.data.userDto.id,
                    isActivate: userData.data.userDto.isActivated
                }})

        } catch (e) {
            dispatch({
                type: userTypes.USER_FETCH_ERROR,
                payload: e.response.data.message
            })
        }
    }
}

export const cleanErrorMessage = () => {
    return {type: userTypes.CLEAR_ERROR_MESSAGE}
}