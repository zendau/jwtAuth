import React from 'react';
import {NavLink} from "react-router-dom";

interface INavPaths {
    to: string
    name: string
}

interface INavbarProps {
    paths: INavPaths[]
}


function createNavElement(path: INavPaths) {
        return (
            <li key={path.to}>
                <NavLink to={path.to} >{path.name}</NavLink>
            </li>
        )

}

const Navbar : React.FC<INavbarProps> = ({paths}) => {



    return (
        <nav>
            <ul>
                {paths.map(path => createNavElement(path))}
            </ul>
        </nav>
    );
};

export default Navbar;