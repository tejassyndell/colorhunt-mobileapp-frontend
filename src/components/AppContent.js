/* eslint-disable */
import React, { Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { useNavigate } from 'react-router-dom'

// routes config
import routes from '../routes'

const AppContent = (props) => {
  const { ProductData, UserData ,allData } = props

  

  // useEffect(() => {
  //   if(auth==null)
  //   {
  //     // console.log("Redirect to login page")
  //     // Navigate('/login')
  //   }
  //   else{
  //     // console.log("Loggin In")
  //   }
  // }, [auth])
  
  return (

      <Suspense /* fallback={<CSpinner color="secondary" />} */>

        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element ProductData={ProductData} UserData={UserData} allData={allData}/>}
                />
              )
            )
          })}
          <Route path="/login" element={<Navigate to="Login" replace />} />
        </Routes>
      </Suspense>
  )
}

export default React.memo(AppContent)
