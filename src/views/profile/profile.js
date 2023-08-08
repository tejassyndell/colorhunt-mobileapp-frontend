/* eslint-disable */

import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './profile.css'
import axios from 'axios'



function profile(props) {
  const navigate = useNavigate()
  const routeChange = () => {
    navigate('/dashboard')
    console.log('CLicked')
  }
  const profileeditform = () => {
    navigate('/profileedit')
  }

  const [profiledata, setProfiledata] = useState([])
  const [file,setFile] = useState("")

  const handleImageChange = (event) => {
    setFile(event.target.files[0])
    // console.log(event.target.files[0])
    console.log(file)
  }
  const handlesave =() =>{
    const format = new FormData();
    format.append('image',file)
    const config = {
      headers : {
        "content-type" : "multipart/form-data"
      }
    }
    const  res = axios.post('http://localhost:4000/uploadimage',format,config);
    console.log(res.data)
  }

  useEffect(() => {
    axios.get('http://localhost:4000/getParty').then((response) => {
      setProfiledata(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <>
      <link rel="stylesheet" href="./global.css" />
      <link rel="stylesheet" href="./index.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Glory:wght@600;700&display=swap"
      />
      <div className="profile">
        <div className="profile-child"></div>
        <img className="menu-bar-icon" alt="" src="/menu bar.png" onClick={routeChange} />

        <div className="frame-parent">
          <div className="rectangle-wrapper">
              {profiledata.map((item)=>(
                file  ? (
                  <div key={item.Id}>
                  <img className="frame-child" alt='' src={`/uploads/${item.profile_img}`} />
                  </div>
                ):(
                  <img className="frame-child" alt="" src="/profile.png" />  
                )
                
              ))}
          </div>
          <div className="rectangle-parent">
            <div className="group-child">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <rect width="30" height="30" rx="5" fill="white" />
                <path
                  d="M16.1871 11.9728L10.8192 17.3388L10.4682 18.5358L11.6412 18.1968L17.0269 12.8129L16.1871 11.9728ZM17.1029 11.0572L17.9427 11.8968L18.7255 11.1142C18.7811 11.0586 18.8124 10.9831 18.8124 10.9044C18.8124 10.8256 18.7811 10.7501 18.7255 10.6945L18.305 10.2747C18.2493 10.2191 18.1738 10.1878 18.095 10.1878C18.0163 10.1878 17.9408 10.2191 17.8851 10.2747L17.1035 11.0572H17.1029ZM19.1454 9.43518L19.5653 9.85494C19.8436 10.1333 20 10.5108 20 10.9044C20 11.2979 19.8436 11.6754 19.5653 11.9538L12.2648 19.2524L9.75846 19.9768C9.6563 20.0062 9.5481 20.0077 9.44517 19.9811C9.34224 19.9545 9.24834 19.9007 9.17328 19.8254C9.09822 19.7501 9.04475 19.6561 9.01845 19.5531C8.99216 19.4501 8.994 19.342 9.02378 19.2399L9.76499 16.7137L17.0465 9.43459C17.3249 9.15632 17.7025 9 18.0962 9C18.4899 9 18.8675 9.15632 19.146 9.43459L19.1454 9.43518Z"
                  fill="black"
                />
              </svg>
              <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} name='image'/>
            </div>
          </div>
        </div>
        <b className="upload-image" onClick={() => document.querySelector('input[type="file"]').click()}>Upload Image</b>
        <div className="rectangle-group" id="groupContainer3">
          <div className="group-item"></div>
          <div className="download-1-1-parent">
            <svg
              className="download-1-1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_159_534)">
                <path
                  d="M19.4434 10.409C19.4423 10.4112 19.4414 10.413 19.4406 10.4145L19.3753 10.4798V10.5141C19.3647 10.532 19.355 10.5526 19.3476 10.5758C19.3387 10.589 19.3264 10.6052 19.3105 10.6238C19.2867 10.6515 19.2623 10.6762 19.2416 10.6968L15.4098 14.4037L15.4044 14.4089L15.3994 14.4144C15.0442 14.8018 14.4173 14.8134 14.0104 14.4066C13.8074 14.2035 13.7087 13.9338 13.7087 13.7083C13.7087 13.4828 13.8074 13.2131 14.0104 13.0101L15.6771 11.3434L16.1039 10.9167H15.5003H5.54199C4.97173 10.9167 4.54199 10.4869 4.54199 9.91667C4.54199 9.3464 4.97173 8.91667 5.54199 8.91667H15.542H16.1455L15.7188 8.48989L14.0521 6.82322L14.0523 6.82306L14.0443 6.81571C13.6568 6.46056 13.6453 5.83361 14.0521 5.42678L14.0523 5.42694L14.0596 5.41893C14.4148 5.03149 15.0417 5.01994 15.4485 5.42678L19.2402 9.21844C19.3063 9.28453 19.3292 9.30877 19.3462 9.33651C19.3537 9.36152 19.364 9.38354 19.3753 9.40258V9.43689L19.4485 9.51011C19.4557 9.51731 19.4615 9.52303 19.4664 9.52809C19.4707 9.54787 19.4763 9.56455 19.4811 9.57737C19.489 9.59834 19.4983 9.61751 19.5035 9.62783C19.5079 9.65888 19.516 9.6844 19.5228 9.70236C19.5309 9.72412 19.5407 9.74393 19.5457 9.75395L19.5495 9.76897C19.5812 9.89582 19.5812 10.0208 19.5495 10.1477L19.5457 10.1627C19.5407 10.1727 19.5309 10.1925 19.5228 10.2143C19.516 10.2323 19.5079 10.2578 19.5035 10.2888C19.4983 10.2992 19.489 10.3183 19.4811 10.3393C19.4801 10.3419 19.4791 10.3446 19.4781 10.3475C19.4617 10.3723 19.4511 10.3934 19.4449 10.4059C19.4444 10.407 19.4439 10.4081 19.4434 10.409Z"
                  fill="white"
                  stroke="#212121"
                  strokeWidth="0.5"
                />
                <path
                  d="M10.583 12.7497V17.583C10.583 18.6533 9.69494 19.5413 8.62467 19.5413H2.41634C1.34608 19.5413 0.458008 18.6533 0.458008 17.583V2.41634C0.458008 1.34608 1.34608 0.458008 2.41634 0.458008H8.62467C9.69494 0.458008 10.583 1.34608 10.583 2.41634V7.24967H5.54134C4.02827 7.24967 2.79134 8.4866 2.79134 9.99967C2.79134 11.5127 4.02827 12.7497 5.54134 12.7497H10.583Z"
                  fill="white"
                  stroke="#212121"
                  strokeWidth="0.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_159_534">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <b className="log-out">Log Out</b>
          </div>
        </div>

        {profiledata.map((item) => (
          <div key={item.Id}>
            <div className="nirav-sir-parent mx-3">
              <div className="nirav-sir">{item.Name}</div>
              <div className="group-inner"></div>
            </div>
            <div className="parent mx-3">
              <div className="nirav-sir">{item.PhoneNumber}</div>
              <div className="group-inner"></div>
            </div>
            <div className="ahmedabad-parent mx-3">
              <div className="ahmedabad">{item.City}</div>
              <div className="group-child2"></div>
            </div>
            <div className="gujarat-parent mx-3">
              <div className="ahmedabad">{item.State}</div>
              <div className="group-child1"></div>
            </div>
            <div className="india-parent mx-3">
              <div className="ahmedabad">{item.Country}</div>
              <div className="group-child2"></div>
            </div>
            <div className="group mx-3">
              <div className="ahmedabad">{item.PinCode}</div>
              <div className="group-child1"></div>
            </div>
            <div className="lorem-ipsum-dolor-sit-amet-co-parent mx-3">
              <div className="lorem-ipsum-dolor">{item.Address}</div>
              <div className="group-inner2"></div>
            </div>
          </div>
        ))}

        <div className="save" onClick={handlesave}>
          SAVE
        </div>
      </div>
    </>
  )
}

export default profile
