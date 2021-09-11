import React from 'react'
import {Redirect, Switch, Route} from "react-router-dom"
import Navbar from "./Navbar";
import {INavPaths, ITypeRoutes} from "../interfaces/router";
import {renderRoute} from "../utils/renderRoute"
import NotFound from "../components/404";


interface IRouterSwitchProps {
    typeRoutes: ITypeRoutes[]
    redirect: string
    paths: INavPaths[]
}

const RouterSwitch : React.FC<IRouterSwitchProps> = ({redirect, typeRoutes, paths}) => {

    console.log()

    return (
        <>
            <Navbar paths={paths} />
            <Switch>
                {
                    typeRoutes.map(route => renderRoute(route))
                }
                <Redirect exact from="/" to={redirect} />
                <Route path="*" component={NotFound} />
            </Switch>
        </>

    )
}

export default RouterSwitch;