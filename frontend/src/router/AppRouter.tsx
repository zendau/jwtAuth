import React, {useContext} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Routes";


import {privatePaths, publicPaths} from "./NavPaths"
import RouterSwitch from "./RouterSwitch";
import {AuthContext} from "../context/AuthContext";

const AppRouter : React.FC = () => {

    const isAuth = useContext(AuthContext)

    return (
        <Router>

            {isAuth
                ?
                <RouterSwitch typeRoutes={privateRoutes} redirect='/posts' paths={privatePaths}/>
                :
                <RouterSwitch typeRoutes={publicRoutes} redirect='/login' paths={publicPaths}/>
            }

        </Router>
    )
}

export default AppRouter;