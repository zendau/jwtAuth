import React, {useContext} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Routes";


import {privatePaths, publicPaths} from "./NavPaths"
import RouterSwitch from "./RouterSwitch";
import {AuthContext} from "../context/AuthContext";
import Loader from "../components/UI/loader";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter : React.FC = () => {

    const {authStatus} = useContext(AuthContext)

    const state = useTypedSelector(state => state.user)

    return (
        <Loader status={state.isLoaded}>
            <Router>

                {authStatus
                    ?
                    <RouterSwitch typeRoutes={privateRoutes} redirect='/posts' paths={privatePaths}/>
                    :
                    <RouterSwitch typeRoutes={publicRoutes} redirect='/login' paths={publicPaths}/>
                }

            </Router>
        </Loader>
    )
}

export default AppRouter;