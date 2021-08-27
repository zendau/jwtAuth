import React, {useEffect} from 'react';
import {useAction} from "../hooks/useAction";
import {useAuthContext} from "../context/AuthContext";
import { createBrowserHistory } from "history";
import {useHistory} from "react-router-dom";



const CheckAuth : React.FC = ({children}) => {

    const {checkAuth} = useAction()

    const {setAuthStatus} =  useAuthContext()

    const history = createBrowserHistory()


    function beforePath() {
        history.push(history.location.pathname)
    }

    useEffect(() => {
        console.log(history)
        if (localStorage.getItem('token')) {
            checkAuth(setAuthStatus, beforePath)
        }

    }, [])


    return (
        <>
            {children}
        </>
    );
};

export default CheckAuth;