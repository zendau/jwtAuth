import React from 'react'
import {store} from "./redux/index"
import AppRouter from "./router/AppRouter"

import {AuthContext} from "./context/AuthContext"
import {Provider} from "react-redux";




const App : React.FC = () => {

    const [authStatus, setAuthStatus] = React.useState(false);

      return (
          <Provider store={store}>
              <AuthContext.Provider value={{authStatus, setAuthStatus}}>
                  <AppRouter/>
              </AuthContext.Provider>
          </Provider>


      )
}

export default App
