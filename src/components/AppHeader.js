/* eslint-disable */
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CDropdown,
  CDropdownToggle 
} from '@coreui/react'
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
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
        {sidebarShow === true ? null :<img src={cilMenu} width={25} alt="Logo" />}  

        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">

         
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
        </CHeaderNav>
        <CHeaderNav >
          <CNavItem>
            <CNavLink >
              
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
      
    </CHeader>
  )
}

export default AppHeader
