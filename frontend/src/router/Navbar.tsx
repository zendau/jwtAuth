import React from 'react';
import {NavLink} from "react-router-dom";

import "./Navbar.scss"


interface INavPaths {
    to: string
    name: string
}

interface INavbarProps {
    paths: INavPaths[]
}


function createNavElement(path: INavPaths) {

        return (
            <div key={path.to}>
                <NavLink className="navbar__item" activeClassName="navbar__item--active" to={path.to} >{path.name}</NavLink>
            </div>
        )

}

const Navbar : React.FC<INavbarProps> = ({paths}) => {

    return (
        <header>
            <nav className="navbar">
                <div className="navbar__container">
                    {paths.map(path => createNavElement(path))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;