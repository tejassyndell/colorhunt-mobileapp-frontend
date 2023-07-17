/* eslint-disable */
import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import order from './assets/Colorhuntimg/Sidebaricon/Order History.svg'
import Cart from './assets/Colorhuntimg/Sidebaricon/cart.svg'
import Wishlist from './assets/Colorhuntimg/Sidebaricon/Wishlist.svg'
import Notifications from './assets/Colorhuntimg/Sidebaricon/notification.svg'
import Aboutus from './assets/Colorhuntimg/Sidebaricon/Group 1000005827.svg'
import ContactUs from './assets/Colorhuntimg/Sidebaricon/Group 1000005828.svg'
import Logout from './assets/Colorhuntimg/Sidebaricon/download (1) 1.svg'


const _navuser = [

  {
    component: CNavItem,
    name: 'Orders History',
    to: '/orders',
    icon: <img src={order} height={15} style={{ width: 45 }} />,
},
{
  component: CNavItem,
  name: 'Cart',
  to: '/cart_list',
  icon: <img src={Cart} height={15} style={{ width: 45 }} />,
},
{
  component: CNavItem,
  name: 'Wishlist',
  to: '/wishlist',
  icon: <img src={Wishlist} height={15} style={{ width: 45 }} />,
},
{
  component: CNavItem,
  name: 'Notifications',
  to: '/notification',
  icon: <img src={Notifications} height={15} style={{ width: 45 }} />,
},
{
  component: CNavItem,
  name: 'About us',
  to: '/About-us',
  icon: <img src={Aboutus} height={15} style={{ width: 45 }} />,
},
{
  component: CNavItem,
  name: 'Contact Us',
  to: '/contact-us',
  icon: <img src={ContactUs} height={15} style={{ width: 45 }} />,
},

 
  ]

export default _navuser