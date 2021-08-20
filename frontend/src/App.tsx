import React, {FC, FunctionComponent} from 'react'

import Main from "./components/main/main"

import {store} from "./redux/index"

interface Props {
  reduxStore: typeof store
}

const App : FC<Props> = (props: Props) => {

  console.log("props", props)
  return (
      <Main/>
  )
}

export default App
