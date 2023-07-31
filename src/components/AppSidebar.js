/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
import noImages from '../assets/image/noimage.png'
import { AppSidebarNav } from './AppSidebarNav'
import userimages from 'src/assets/Colorhuntimg/Sidebaricon/menu (1).svg'
import closemanuicon from 'src/assets/Colorhuntimg/Sidebaricon/Frame 1171274903.svg'
import smallLogo from 'src/assets/brand/small-logo.svg'
import logouticon from 'src/assets/images/higrow/logout 1.svg'
import sidebottummenu from 'src/assets/Colorhuntimg/loginimg/sliderscreen/image 99.svg'
import sidebarlogo from 'src/assets/images/avatars/image_102-removebg-preview (1) 1.png'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import navigationUser from '../_navuser'

const AppSidebar = (props) => {
  const { UserData } = props
  // console.log(UserData, "userdata")
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  //Get RoleId
  const [roleid, setroleid] = useState('')
  // console.log('roleid',roleid)
  useEffect(() => {
    const storedData = localStorage.getItem('roleId')
    if (storedData) {
      setroleid(storedData)
    }
  }, [])
  //LogOut Functionality
  const Navigate = useNavigate()
  // const logout = () => {
  //   // // localStorage.clear(roleAuth)
  //   localStorage. removeItem('roleAuth')
  //   Navigate('/login')
  //   console.log("Asdassfddddddddddddddddddddd");
  // }

  const testFunc = () => {
    console.log('clicked')
    localStorage.removeItem('userId')
    Navigate('/')
  }
  console.log(sidebarShow)
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
          <img
            src={userimages}
            style={{ width: 25 }}
            onClick={() => {
              sidebarShow === true ? dispatch({ type: 'set', sidebarShow: !sidebarShow }) : ''
            }}
          />
          <span style={{ marginLeft: '-49px' }}>NIRAV SIR</span>

          <img src={closemanuicon} style={{ width: 45 }} />
        </div>
        {/* {UserData.length > 0 ? (
          <>
            {UserData[0].avatar_1024 !== false ? (
              <>
                <a className="logo">
                  <img
                    src={`data:image/jpeg;base64,${UserData[0].avatar_1024}`}
                    className="sidebar-logo sidebar-brand-full"
                    onError={(e) => {
                      e.target.src = noImages; 
                    }}
                  />
                </a>
                <img
                  src={smallLogo}
                  height={40}
                  width={40}
                  className="sidebar-logo sidebar-brand-narrow"
                />
                <div className="sidebarimages">
                  <h4>
                    {UserData[0].name}
                  </h4>
                  <p>{UserData[0].email}</p>
                </div>
              </>
            ) : (
              <img src={noImages} className="sidebar-logo sidebar-brand-full" />
            )}
          </>
        ) : (
          <></>
        )} */}
      </CSidebarBrand>

      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigationUser} UserData={UserData} />
          <li className="nav-item">
            <a className="nav-link mt-4" style={{ cursor: "pointer" }} onClick={() => { testFunc() }}>
              <img src={logouticon} height={23} style={{ width: 45, marginLeft: 3 }} />
              {/* <CIcon icon={cilAccountLogout} customClassName="nav-icon" /> */}
              Log out
            </a>
          </li>
        </SimpleBar>
        <CSidebarNav className="slidenavbar">
          <div className="sidebarlogoconte">
            {/* <img src={sidebarlogo} style={{ height: 91, width: 201, padding: '4px 9px' }} /> */}
          </div>
          <img
            src={sidebottummenu}
            className="imagescontentback"
            style={{ width: '50%', height: 200, right: 60, bottom: 8 }}
          />
          <p>Design By SYNDELL Inc.</p>
        </CSidebarNav>
      </CSidebarNav>
      {/* <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      /> */}
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
