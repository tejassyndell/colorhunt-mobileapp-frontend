/* eslint-disable */
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CDropdown,
  CDropdownToggle 
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import cilMenu from 'src/assets/Colorhuntimg/Sidebaricon/menu.svg'
import noImages from '../assets/image/noimage.png'
import { useState } from 'react'
import "../css/ipad.css";
// // import ProfileIcon from 'src/assets/images/cart.png'
// import CartIcon from 'src/assets/images/higrow/notification (1) 1.svg'
// import MobileLogo from 'src/assets/images/LogoImg.png'

const AppHeader = (props) => {
  const { UserData } = props
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [click1, setClick1] = useState(true)

const routerchangeProfile = () => {
  navigate('/profile')
}

const routerChangeProfile = () => {
  if(click1===true){
    setClick1(false);
  navigate('/profile');
  }
}

  return (
    <CHeader position="sticky" className="mb-4 header_padding">
      <CContainer fluid>
        <CHeaderToggler
          // className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          {/* <CIcon icon={cilMenu} size="lg" /> */}
        {sidebarShow === true ? null :<img src={cilMenu} width={25} alt="Logo" />}  

        </CHeaderToggler>
        {/* <AppBreadcrumb /> */}
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          {/* <CIcon icon={cilMenu} height={48} alt="Logo" /> */}

         
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
        </CHeaderNav>
        <CHeaderNav >
          <CNavItem>
            <CNavLink /* href="/notification" */>
              
              {/* <img src={CartIcon} height={30} /> */}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
        <CDropdown variant="nav-item" >
     
     <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
      
   
       { UserData.length > 0 ? <>
                { UserData[0].avatar_1024 !== false ?
              <img src={`data:image/jpeg;base64,${UserData[0].avatar_1024}`} onError={(e) => {
                e.target.src = noImages; // Display "noimage" image if src is broken
              }} style={{ borderRadius:50, border:'1px solid black'}} height={30} onClick={()=>{routerChangeProfile()}} />:<>
              <img src={noImages} style={{ borderRadius:50 }} height={30}  onClick={()=>{routerChangeProfile()}}/></>}
              </>:<></>
            }
     </CDropdownToggle>
    
   </CDropdown>
        </CHeaderNav>
      </CContainer>
      {/* <CHeaderDivider /> */}
      {/* <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
