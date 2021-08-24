import {UserActionType, UserState, userTypes} from "../types/UserTypes"

const initState : UserState = {
    id: "",
    email: "",
    isActivate: false,
    isLoaded : false,
    error: ""

}

export default function reducer (state = initState, action : UserActionType) : UserState  {
    switch (action.type) {
        case userTypes.USER_LOGIN:
            return  {
                isLoaded: true, error: null, email: "", isActivate: false, id: ""
            }


        case userTypes.USER_REGISTER:
            return  {
                isLoaded: true, error: null, email: "", isActivate: false, id: ""
            }

        case userTypes.USER_FETCH_SUCCESS:
            return  {
                ...action.payload, isLoaded: false
            }

        case userTypes.USER_FETCH_ERROR:
            return {
                email: "", isActivate: false, id: "", isLoaded: false, error: action.payload
            }

        case userTypes.USER_LOGOUT:
            return {
                email: "", isActivate: false, id: "", isLoaded: false
            }

        case userTypes.CLEAR_ERROR_MESSAGE:
            return {
                ...state, error: ""
            }

        case userTypes.GET_ALL_USERS:
            return {
                ...state, users: action.payload
            }

        default:
            return state
    }

}