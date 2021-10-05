import React, { ReactNode, Suspense} from 'react'

import {store} from "../redux";
import {AuthContext} from "../context/AuthContext";
import {Provider} from "react-redux";

import CheckAuth from  '../components/CheckAuth';




type Props = {
    children?: ReactNode
}



const ContextLayout = ({children} : Props) => {

    const [authStatus, setAuthStatus] = React.useState(false)

    return (
        <Provider store={store}>
            <AuthContext.Provider value={{authStatus, setAuthStatus}}>
                    <CheckAuth>
                        {children}
                    </CheckAuth>
            </AuthContext.Provider>
        </Provider>
    );
};

export default  ContextLayout;