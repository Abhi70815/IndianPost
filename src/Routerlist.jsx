import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostList from './PostList'
import Home from './home'

const Routerlist = () => {
  return (
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/postlist' element={<PostList/>}/>
    </Routes>
  )
}

export default Routerlist