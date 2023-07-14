/* eslint-disable */

import React, { useEffect, useState } from 'react'
import updateicon from '../../assets/images/higrow/Group 3245.svg'
import contentimages from '../../assets/images/higrow/contentimg/fabric_28 1.png'
import Rssimbol from '../../assets/images/higrow/contentimg/Group 1000005667.svg'
import linecontent from '../../assets/images/higrow/Group 1000005738.png'
import nameicon from '../../assets/images/higrow/contentimg/name-card 1.svg'
import emailicon from '../../assets/images/higrow/contentimg/email 1.svg'
import phoneicon from '../../assets/images/higrow/contentimg/Vector (7).svg'
import gsticon from '../../assets/images/higrow/contentimg/Group 1000005694.svg'
import panicon from '../../assets/images/higrow/contentimg/Vector (8).svg'
import webicon from '../../assets/images/higrow/contentimg/Vector (9).svg'
import addressicon from '../../assets/images/higrow/contentimg/Vector (10).svg'
import collctimg from '../../assets/images/higrow/image 73.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { UserDetails } from '../api/api'
import { CSidebar } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'
import noImages from "../../assets/image/noimage.png"
function profile(props) {
  const { UserData } = props
  const navigate = useNavigate()

  //to fold
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const routeChange = () => {
    navigate('/dashboard')
  }
  const profileeditform = () => {
    navigate('/profileedit')
  }

  return (
    <div className="dashboardDiv profile_contan_space" style={{ width: '100%' }}>
      <CSidebar
  position="fixed"
  unfoldable={unfoldable}
  visible={false} // Set visible to false to hide the sidebar
  onVisibleChange={(visible) => {
    dispatch({ type: 'set', sidebarShow: visible })
  }}
  className='sidebar'
>
  {/* Sidebar content */}
</CSidebar>
      <div class="loader"></div>
      <div className="tagdiv profile_tagdiv">
        <i
          className="fa fa-angle-left"
          onClick={routeChange}
          style={{ position: 'absolute' }}
          aria-hidden="true"
        ></i>{' '}
        <div className="tagnames">
          <h5>Profile</h5>
        </div>
      </div>
      {UserData.length > 0 ? (
        <>
          <div className="profilecontenar">
            <div className="profileApp mb-3">
              {/* <input type="file" onChange={handleChange} /> */}
              <img src={`data:image/jpeg;base64,${UserData[0].avatar_1024}`} className='profile_user_image' onError={(e) => {
                      e.target.src = noImages; 
                    }}/>
              {/* <span className="camraicon">
                <i class="fa fa-camera"></i>
              </span> */}
              <h6>{UserData[0].name}</h6>
              <p>{UserData[0].email}</p>

              {/* <button onClick={profileeditform}><i class="fa fa-pencil" aria-hidden="true"></i> &nbsp;Edit Profile</button> */}
            </div>
            {/* <img src={linecontent} style={{ width:'100%',marginTop:10 }}/> */}
            <div className="formprofile">
              <div className="profiletagname">
                <img src={nameicon} />
                &nbsp; Name
              </div>
              <div className="profile-con-row">
                <p>{UserData[0].name}</p>
              </div>
            </div>
            <div className="formprofile">
              <div className="profiletagname">
                <img src={emailicon} />
                &nbsp; Email
              </div>
              <div className="profile-con-row">
                <p>{UserData[0].email}</p>
              </div>
            </div>
            <div className="formprofile">
              <div className="profiletagname">
                <img src={phoneicon} />
                &nbsp; Phone Number
              </div>
              <div className="profile-con-row">
                <p>{UserData[0].mobile}</p>
              </div>
            </div>
            <div className="formprofile">
              <div className="profiletagname">
                <img src={gsticon} />
                &nbsp; GSTIN
              </div>
              <div className="profile-con-row">
                {UserData[0].vat.length > 0 ? <p>{UserData[0].vat}</p> : <p>---</p>}
              </div>
            </div>
            <div className="formprofile">
              <div className="profiletagname">
                <img src={panicon} />
                &nbsp; PAN
              </div>
              <div className="profile-con-row">
                {UserData[0].l10n_in_pan ? <p>{UserData[0].l10n_in_pan}</p> : <p>---</p>}
              </div>
            </div>
            <div className="formprofile">
              <div className="profiletagname">
                <img src={webicon} />
                &nbsp; Website
              </div>
              <div className="profile-con-row">
                {UserData[0].website ? <p>{UserData[0].website}</p> : <p>---</p>}
              </div>
            </div>
            <div className="formprofile mb-5    ">
              <div className="profiletagname">
                <img src={addressicon} />
                &nbsp; Address
              </div>
              <div className="profile-con-row">
                <p>{UserData[0].contact_address}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="loader-container_profile">
            <div className="loader_profile"></div>
          </div>
        </>
      )}

      <div>
        {/* <div class="ball-box">

<ul class="white-ball">
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
    <li style={{ background:'rgba(174, 6, 23, 1)' }}></li>
</ul>
<ul class="red-ball">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>

</div> */}
      </div>
    </div>
  )
}

export default profile
