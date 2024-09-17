import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './home'
import './App.css'
import PostList from './PostList'
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