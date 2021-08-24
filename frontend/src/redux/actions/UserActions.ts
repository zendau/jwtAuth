import {Dispatch} from "redux";

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

export const checkAuth = (setAuthStatus: (status: boolean) => void) => {
    return async (dispatch: Dispatch<UserActionType>) => {
        try {
            dispatch({type: userTypes.USER_LOGIN})

            const fetchData = await $api.get(`/user/refresh`)

            setAuthStatus(true)

            localStorage.setItem("token", fetchData.data.accessToken)

            dispatch({type: userTypes.USER_FETCH_SUCCESS, payload: {
                    email: fetchData.data.user.email,
                    id: fetchData.data.user.id,
                    isActivate: fetchData.data.user.isActivated
                }})


        }catch (e) {
            dispatch({
                type: userTypes.USER_FETCH_ERROR,
                payload: e.response.data.message
            })
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<UserActionType>) => {
        try {

            await $api.get(`/user/logout`)

            localStorage.removeItem("token")

            dispatch({
                type: userTypes.USER_LOGOUT,
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export const getAllUsers = () => {
    return async (dispatch: Dispatch<UserActionType>) => {
        try {
            const fetchData = await $api.get(`/user/all`)
            dispatch({
                type: userTypes.GET_ALL_USERS,
                payload: fetchData.data
            })
        } catch (e) {
            console.error(e)
        }
    }
}