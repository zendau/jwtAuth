import React from 'react';
import {NavLink} from "react-router-dom";

import "./Navbar.scss"


interface INavPaths {
    to: string
    name: string
}

interface INavbarProps {
    paths: INavPaths[]
    privateType: boolean
}


function createNavElement(path: INavPaths) {

        return (
                <NavLink key={path.to} className="navbar__item" activeClassName="navbar__item--active" to={path.to} >{path.name}</NavLink>
        )

}

const Navbar : React.FC<INavbarProps> = ({paths, privateType}) => {

    return (
        <header>
            <nav className="navbar">
                <div className="navbar__container">
                    {paths.map(path => createNavElement(path))}
                </div>
                {privateType ? <NavLink className="navbar__item" activeClassName="navbar__item--active" to="/logout" >Exit</NavLink> : ""}

            </nav>
        </header>
    );
};

export default Navbar;