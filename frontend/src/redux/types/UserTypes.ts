export enum userTypes {
    USER_LOGIN= "USER_LOGIN",
    USER_REGISTER="USER_REGISTER",
    USER_FETCH_SUCCESS="USER_FETCH_SUCCESS",
    USER_FETCH_ERROR="USER_FETCH_ERROR",
    USER_LOGOUT="USER_LOGOUT",
    CLEAR_ERROR_MESSAGE="CLEAR_ERROR_MESSAGE"
}

export interface UserState {
    email: string
    isActivate: boolean
    id: string,
    isLoaded?: boolean
    error?: string | null
}

interface UserLoginAction {
    type: userTypes.USER_LOGIN,
}

interface UserRegisterAction {
    type: userTypes.USER_REGISTER,
}

interface UserFetchSuccessAction {
    type: userTypes.USER_FETCH_SUCCESS,
    payload: UserState
}

interface  UserFetchErrorAction {
    type: userTypes.USER_FETCH_ERROR,
    payload: string
}


interface  UserLogoutAction {
    type: userTypes.USER_LOGOUT
}

interface ClearErrorMessageAction {
    type: userTypes.CLEAR_ERROR_MESSAGE
}

export type UserActionType =
    UserLoginAction |
    UserRegisterAction |
    UserFetchSuccessAction |
    UserFetchErrorAction |
    UserLogoutAction |
    ClearErrorMessageAction