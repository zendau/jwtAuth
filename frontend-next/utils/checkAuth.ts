import {useAction} from "../hooks/useAction";
import {useAuthContext} from "../context/AuthContext";

export function checkAuth() {
    if (typeof window !== "undefined") {

        const {checkAuth} = useAction()

        const {setAuthStatus} =  useAuthContext()

        if (localStorage.getItem('token')) {
            checkAuth(setAuthStatus)
        }
    }
}
