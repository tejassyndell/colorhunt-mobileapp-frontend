/* eslint-disable */
import React, {  Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import './css/main.css'
import './css/Rohit.css'
import './css/ipad.css'


const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Login = React.lazy(() => import('./views/pages/login/Login'))


function App() {
  
  
  return (

    <BrowserRouter>
      <Suspense>
        <Routes>


          <Route exact path="/" name="Login Page" element={<Login />} />

          <Route path="/*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
 
    </BrowserRouter>

  )
}


export default App
