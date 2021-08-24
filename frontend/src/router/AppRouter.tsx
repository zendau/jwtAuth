import React, {useContext, useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Routes";


import {privatePaths, publicPaths} from "./NavPaths"
import RouterSwitch from "./RouterSwitch";
import {AuthContext, useAuthContext} from "../context/AuthContext";
import {useAction} from "../hooks/useAction";

const AppRouter : React.FC = () => {

    const {checkAuth} = useAction()

    const {setAuthStatus} =  useAuthContext()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth(setAuthStatus)
        }
    }, [])

    const {authStatus} = useContext(AuthContext)
    return (
        <Router>

            {authStatus
                ?
                <RouterSwitch typeRoutes={privateRoutes} redirect='/posts' paths={privatePaths}/>
                :
                <RouterSwitch typeRoutes={publicRoutes} redirect='/login' paths={publicPaths}/>
            }

        </Router>
    )
}

export default AppRouter;