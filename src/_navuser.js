/* eslint-disable */
import React from 'react'
import { CNavItem } from '@coreui/react'
import order from './assets/Colorhuntimg/Sidebaricon/Order History.svg'
import Cart from './assets/Colorhuntimg/Sidebaricon/cart.svg'
import Wishlist from './assets/Colorhuntimg/Sidebaricon/Wishlist.svg'
import Notifications from './assets/Colorhuntimg/Sidebaricon/notification.svg'
import Aboutus from './assets/Colorhuntimg/Sidebaricon/Group 1000005827.svg'
import ContactUs from './assets/Colorhuntimg/Sidebaricon/Group 1000005828.svg'

const _navuser = [
  {
    component: CNavItem,
    name: 'Wishlist',
    to: '/wishlist',
    icon: <img src={Wishlist} height={15} style={{ width: 45 }} />,
    onClick: () => {
      localStorage.setItem('isLoggedin', true)
    },
  },
  {
    component: CNavItem,
    name: 'Cart',
    to: '/cart_list',
    icon: <img src={Cart} height={15} style={{ width: 45 }} />,
  },
  {
    component: CNavItem,
    name: 'Orders',
    to: '/orders',
    icon: <img src={order} height={15} style={{ width: 45 }} />,
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
