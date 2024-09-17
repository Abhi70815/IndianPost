import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

import Routerlist from './Routerlist'

const App = () => {
  return (
    <BrowserRouter>
    
    {/* <Home/> */}
    <Routerlist/>
    {/* <PostList/> */}
    </BrowserRouter>
  )
}

export default App