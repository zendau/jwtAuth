import React, {useEffect} from 'react';
import {useAction} from "../hooks/useAction";
import {useAuthContext} from "../context/AuthContext";
import { createBrowserHistory } from "history";
import {useHistory} from "react-router-dom";



const CheckAuth : React.FC = ({children}) => {

    const {checkAuth} = useAction()

    const {setAuthStatus} =  useAuthContext()


    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth(setAuthStatus)
        }

    }, [])


    return (
        <>
            {children}
        </>
    );
};

export default CheckAuth;