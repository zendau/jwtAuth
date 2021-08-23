import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom"
import Navbar from "./Navbar";

interface INavPaths {
    to: string
    name: string
}


interface ITypeRoutes {
    path: string
    component: React.FC
    exact: boolean
}

interface IRouterSwitchProps {
    typeRoutes: ITypeRoutes[]
    redirect: string
    paths: INavPaths[]
}



const RouterSwitch : React.FC<IRouterSwitchProps> = ({redirect, typeRoutes, paths}) => {

    return (
        <>
            <Navbar paths={paths} />
            <Switch>
                {typeRoutes.map(route => <Route
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                    key={route.path}/>)}
                <Redirect to={redirect}/>
            </Switch>
        </>

    )
}

export default RouterSwitch;