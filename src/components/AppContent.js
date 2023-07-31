/* eslint-disable */
import React, { Suspense,   } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// routes config
import routes from '../routes'

const AppContent = (props) => {
  const { ProductData, UserData ,allData } = props

  


  
  return (

      <Suspense>

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
