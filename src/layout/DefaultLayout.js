/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
// import { UserDetails } from 'src/views/api/api'
import  AppHeaderPadding  from '../components/header/AppHeaderPadding'



const DefaultLayout = (props) => {
  const { ProductData , allData } = props
  const [ UserData, setUserData ] = useState([])

  const LoadUserData = async(id) => {
    // console.log(id,"data clled")
    // const result = await UserDetails(id)
    // console.log(result.data,"result.data")
    // setUserData(result.data)

  }
  
  useEffect(()=>{
    const storedData = localStorage.getItem('userId');
    LoadUserData(storedData)
  },[])

  return (
    <div>
      {/* <AppHeaderPadding/> */}
      <AppSidebar UserData={UserData}/>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        {/* <AppHeader /> */}
        <div className="body flex-grow-1 " style={{padding:'0px !important'}}>
          <AppContent ProductData={ProductData} UserData={UserData} allData={allData}/>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout;
