import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Home2 } from '../pages/Home2'
export const Movie = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/H2' element={<Home2/>}/>
    </Routes>
    </BrowserRouter>
  )
}
