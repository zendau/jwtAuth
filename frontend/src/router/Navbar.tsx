import React from 'react';
import {useAuthContext} from "../context/AuthContext";
import {NavLink} from "react-router-dom";

interface INavPaths {
    to: string
    name: string
}

interface INavbarProps {
    paths: INavPaths[]
}


function createNavElement(path: INavPaths, logout: () => void) {
    if (path.to === "/logout") {
        return (
            <li key={path.to}>
                <NavLink to={path.to} onClick={logout}>{path.name}</NavLink>
            </li>
        )
    } else {
        return (
            <li key={path.to}>
                <NavLink to={path.to} >{path.name}</NavLink>
            </li>
        )
    }
}

const Navbar : React.FC<INavbarProps> = ({paths}) => {

    const {authStatus, setAuthStatus} = useAuthContext()

    const logout = () => {
        setAuthStatus(false)
    }

    return (
        <nav>
            <ul>
                {paths.map(path => createNavElement(path, logout))}
            </ul>
        </nav>
    );
};

export default Navbar;