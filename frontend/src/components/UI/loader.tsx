import React from 'react';

interface  ILoaderProps {
    status: boolean | undefined
}

const Loader : React.FC<ILoaderProps> = ({status,children}) => {
    return (
        <>
            <h1 style={ status ? {display: "block"} : {display: "none"}}>Происходит загрузка</h1>
            {children}
        </>
    );
};

export default Loader