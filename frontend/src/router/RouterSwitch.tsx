import React from 'react'
import {NavLink, Redirect, Route, Switch} from "react-router-dom"

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
            <nav>
                <ul>
                    {paths.map(path =>
                        <li key={path.to}>
                            <NavLink to={path.to} >{path.name}</NavLink>
                        </li>
                    )}
                </ul>
            </nav>
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