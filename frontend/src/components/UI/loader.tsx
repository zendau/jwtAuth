import React from 'react';
import "./loader.scss"

interface  ILoaderProps {
    status: boolean | undefined
}

const Loader : React.FC<ILoaderProps> = ({status,children}) => {
    return (
        <>
            <div className="overflow" style={ status ? {display: "block"} : {display: "none"}}>
                <h1 className="loader">Происходит загрузка</h1>
            </div>
            {children}
        </>
    )
}

export default Loader