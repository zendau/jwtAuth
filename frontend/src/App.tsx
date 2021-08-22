import React from 'react'
import {store} from "./redux/index"
import AppRouter from "./router/AppRouter"

import {AuthContext} from "./context/AuthContext"
import {Provider} from "react-redux";




const App : React.FC = () => {

  return (
      <Provider store={store}>
          <AuthContext.Provider value={false}>

          </AuthContext.Provider>
        <AppRouter/>
      </Provider>


  )
}

export default App
