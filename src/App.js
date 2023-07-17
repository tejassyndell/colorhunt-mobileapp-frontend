/* eslint-disable */
import React, { Component, Suspense, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import './css/main.css'
import './css/Rohit.css'
import './css/ipad.css'
import { getProductData, getDataOfProduct } from './views/api/api'


const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Login = React.lazy(() => import('./views/pages/login/Login'))


function App() {
  const [ProductData, setProductData] = useState([])
  const [AllProductData, setAllProductData] = useState([])
  const [LoginSession, setLoginSession] = useState(false)
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  const getAllData = async () => {
    try {
      const result = await getDataOfProduct().then((res) => {
        if (res.status === 200) {
          setAllData(res.data);
        }
      })

    } catch (err) {
      console.log(err, "error in getProductData");
    }
  };
  useEffect(() => {
    getAllData()
  }, [])
  const loadProductData = async () => {
    try {
      const result = await getProductData(page).then((res) => {
        if (res.status === 200) {
          setProductData((prev) => [...prev, ...res.data]);
        }
      })

      // setLoading(false);
      // setProductData(res.data)
      // console.log(res.data, "result.data");
    } catch (err) {
      console.log(err, "error in getProductData");
    }
  };

  const LoadLoginSession = () => {
    const getSession = localStorage.getItem('userId');
    // console.log(getSession)
    if (getSession) {
      setLoginSession(true)
    }
  }

  const LoadAllProductData = async () => {
    const result = await getDataOfProduct().then((res) => {
      if (res ?.status === 200) {
        setAllProductData(res.data)
      }
    })

  }
  //-----------------------new chnage------------------
  useEffect(() => {
    loadProductData()
    LoadAllProductData()
    //LoadLoginSession()
  }, [page])


  //  const handleScroll = () => {
  //   console.log(window.innerHeight)
  //   console.log(document.documentElement.scrollTop);
  //   console.log(document.documentElement.scrollHeight);
  //   try {
  //     if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
  //       alert(page);
  //       setPage((prev) => prev + 1);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.innerHeight)
      // console.log(document.documentElement.scrollTop);
      // console.log(document.documentElement.scrollHeight);
      try {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
          // alert(page);
          // setLoading(true);
          setPage((prev) => prev + 1);
        }
      } catch (err) {
        console.log(err);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [page])

  //-------------------------new change---------------
  return (

    <BrowserRouter>
      <Suspense>
        <Routes>
          {/* <Route exact path="/*" name="Login Page" element={<Login />} /> */}


          <Route exact path="/" name="Login Page" element={<Login />} />

          {/* <Route exact path="/" name="Login Page" element={<Login />} />      */}
          <Route path="/*" name="Home" element={<DefaultLayout ProductData={ProductData} allData={allData} />} />
        </Routes>
      </Suspense>
      {/* {
        loading === true ? <div className="loader-container_profile">
          <div className="loader_profile"></div>
        </div> : ""
      } */}
    </BrowserRouter>

  )
}


export default App
