/* eslint-disable */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CDropdown,
  CDropdownToggle,
} from '@coreui/react'
import ProfileIcon from 'src/assets/images/higrow/image 73.svg'


const AppHeaderDropdown = () => {
  const navigate = useNavigate();
  const logout = () =>{
    // localStorage.clear(roleAuth)
    localStorage. removeItem('roleAuth')
    navigate('/profile')
  }
  return (
    <CDropdown variant="nav-item">
     
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
       
        <img src={ProfileIcon} style={{ borderRadius:50 }} height={30} onClick={() => {logout()}}/>
      </CDropdownToggle>
     
    </CDropdown>
  )
}

export default AppHeaderDropdown