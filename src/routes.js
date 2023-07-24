/*eslint-disable*/
import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Profile = React.lazy(() => import('./views/profile/About-us'))
const Wishlist = React.lazy(() => import('./views/Wishlist/wishlist.js'))
const Orders = React.lazy(() => import('./views/Orders/orders.js'))
const PrivacyPolicy = React.lazy(() => import('./views/PrivacyPolicy/Privacypolicy.js'))
const ContactUs = React.lazy(() => import('./views/Contact-Us/contact-us.js'))
const Profiledetils = React.lazy(() => import('./views/profile/profile.js'))
const profileeditform = React.lazy(() => import('./views/profile/profileedit.js'))
const OrderHistory = React.lazy(() => import('./views/Orders/orderhistory'))
const Cart = React.lazy(() => import('./views/cart/notification'))
const HomePage = React.lazy(() => import('./views/pages/homepage/Homepage'))
const cart_list = React.lazy(() => import('./views/cart/cart_list'))
const Sliderimg = React.lazy(() => import('./views/sliderscreen/sliderscreen'))
const AllArticles = React.lazy(() => import('./views/dashboard/allarticles'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/allarticles', name: 'allarticles', element: AllArticles },
  { path: '/About-us', name: 'Profile', element: Profile },
  { path: '/notification', name: 'Cart', element: Cart },
  { path: '/wishlist', name: 'Users / Edit User', element: Wishlist },
  { path: '/orders', name: 'Users / Edit User', element: Orders },
  { path: '/privacy-policy', name: 'Users / Edit User', element: PrivacyPolicy },
  { path: '/contact-us', name: 'Users / Edit User', element: ContactUs },
  { path: '/profile', name: 'Users / Edit User', element: Profiledetils },
  { path: '/profileedit', name: 'Users / Edit User', element: profileeditform },
  { path: '/orderhistory', name: 'Users / Edit User', element: OrderHistory },
  { path: '/home-page', name: 'home Page ', element: HomePage },
  { path: '/cart', name: 'Cart', element: Cart },
  { path: '/cart_list', name: 'Cart list', element: cart_list },
  { path: '/sliderscreen', name: 'Cart list', element: Sliderimg }

]

export default routes
