/* eslint-disable */
import React, { useState,useEffect } from 'react'
import homeicon from 'src/assets/Colorhuntimg/loginimg/sliderscreen/Vector (32).svg'
import ordericon from 'src/assets/Colorhuntimg/Sidebaricon/Order History.svg'
import carticon from 'src/assets/Colorhuntimg/Sidebaricon/cart.svg'
import alurticon from 'src/assets/Colorhuntimg/Sidebaricon/notification.svg'
import profileicon from 'src/assets/Colorhuntimg/Sidebaricon/Group 1000005774.svg'
import { useNavigate } from 'react-router-dom'


const AppFooter = () => {
  const [activeIcon, setActiveIcon] = useState('home');// Set the initial active icon
  const Navigate = useNavigate();

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
    console.log(iconName);
  };

useEffect(() => {
    console.log(activeIcon);
  }, [activeIcon]);
 

  const iconStyle = {
    filter: activeIcon === 'order' ? 'invert(100%)' : 'none',
    backgroundColor: activeIcon ? 'white' : 'transparent',
    borderRadius: '13px',
    padding: '14px',
    width: '50px',
    height: '50px',
  };
  

  return (
    <>
      <div className='icon-section'>
        <img
          src={homeicon}
          style={activeIcon === 'home' ? iconStyle : {}}
          onClick={() => { handleIconClick('home'); Navigate('/dashboard') }}
        />
        <img
          src={ordericon}
          style={activeIcon === 'order' ? iconStyle : {}}
          onClick={() => { handleIconClick('order'); Navigate('/orders') }}
        />
        <img
          src={carticon}
          style={activeIcon === 'cart' ? iconStyle : {}}
          onClick={() => { handleIconClick('cart'); Navigate('/orderplaced') }}
        />
        <img
          src={alurticon}
          style={activeIcon === 'alert' ? iconStyle : {}}
          onClick={() => { handleIconClick('alert'); Navigate('/notifications') }}
        />
        <img
          src={profileicon}
          style={activeIcon === 'profile' ? iconStyle : {}}
          onClick={() => { handleIconClick('profile'); Navigate('/profile') }}
        />
      </div>
    </>
  )
}

export default AppFooter



