/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
import noImages from '../assets/image/noimage.png'
import { AppSidebarNav } from './AppSidebarNav'
import userimages from 'src/assets/Colorhuntimg/sliderimages/download.svg'
import closemanuicon from 'src/assets/Colorhuntimg/Sidebaricon/Frame 1171274903.svg'
import smallLogo from 'src/assets/brand/small-logo.svg'
import logouticon from 'src/assets/images/higrow/logout 1.svg'
import sidebottummenu from 'src/assets/Colorhuntimg/loginimg/sliderscreen/image 99.svg'
import sidebarlogo from 'src/assets/images/avatars/image_102-removebg-preview (1) 1.png'
import SimpleBar from 'simplebar-react'

import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import navigationUser from '../_navuser'

const AppSidebar = (props) => {
  const { UserData } = props
  // console.log(UserData, "userdata")
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const location = useLocation()
  // const isLoggedin = location.state?.isLoggedin
  const [isLoggedin, setIsLoggedin] = useState(false); 
  const [loggedInName, setLoggedInName] = useState('');
  useEffect(() => {
    // Check if 'id' is present in localStorage to determine login status
    const userId = localStorage.getItem('Login ID');
    if(userId){
      const userdata =JSON.parse(userId)
      setLoggedInName(userdata[1])
      setIsLoggedin(true)
    } else{
      setIsLoggedin(false); // Update isLoggedin state based on userId
      setLoggedInName('')
    }
    
  }, []);

  const Navigate = useNavigate()

  const testFunc = () => {
    localStorage.removeItem('userId')
    Navigate('/')
  }
  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      className="sidebar"
    >
      <CSidebarBrand className="d-none d-md-flex" style={{ padding: '14px 8px' }} to="/">
        <div className="sidebar-idcontent">
          <img className='filter'
            src={userimages}
            style={{ width: 25}}
            onClick={() => {
              sidebarShow === true ? dispatch({ type: 'set', sidebarShow: !sidebarShow }) : ''
            }}
          />{console.log(isLoggedin)}
          {isLoggedin === false ? null : <span style={{ marginLeft: '-49px' }}>{loggedInName}</span>}
          {isLoggedin === false ? null : <img src={closemanuicon} style={{ width: 45 }} />}
        </div>
      </CSidebarBrand>

      <CSidebarNav>
        {/* <SimpleBar>
          {isLoggedin === false ? (
            <li className="nav-item">
              <a
                className="nav-link mt-4"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  testFunc()
                }}
              >
                <img src={logouticon} height={23} style={{ width: 45, marginLeft: 3 }} />
                Sign up
              </a>
            </li>
          ) : null}
          {isLoggedin === false ? (
            <AppSidebarNav items={navigation} UserData={UserData} />
          ) : (
            <AppSidebarNav items={navigationUser} UserData={UserData} />
          )}
          {isLoggedin === false ? null : (
            <li className="nav-item">
              <a
                className="nav-link mt-4"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  testFunc()
                }}
              >
                <img src={logouticon} height={23} style={{ width: 45, marginLeft: 3 }} />
                Log out
              </a>
            </li>
          )}
        </SimpleBar> */}
        <AppSidebarNav items={navigationUser} UserData={UserData} />
        <CSidebarNav className="slidenavbar">
          <div className="sidebarlogoconte"></div>
          <img
            src={sidebottummenu}
            className="imagescontentback"
            style={{ width: '50%', height: 200, right: 60, bottom: 8 }}
          />
        <p><a href='https://syndelltech.com/' style={{textDecoration:"none",color:"white"}}>Designed by SYNDELL Inc.</a></p> 
        </CSidebarNav>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
