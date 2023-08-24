/* eslint-disable */

import React from 'react';
import updateicon from '../../assets/images/higrow/Group 3245.svg'
import contentimages from '../../assets/images/higrow/contentimg/fabric_28 1.png'
import Rssimbol from '../../assets/images/higrow/contentimg/Group 1000005667.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CSidebar } from '@coreui/react';
import { useState } from 'react';

function Privacypolicy(props) {
    const navigate = useNavigate()

      //to fold
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
const sidebarShow = useSelector((state) => state.sidebarShow)

const [click, setClick] = useState(true)    
const routeChange = () => {
      if(click===true){
        setClick(false)
        navigate('/dashboard')
      }
    }
    return (
        <div className='dashboardDiv privacy-policycontent' style={{ width:'100%' }}>
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
            <div className='tagdiv'><i className="fa fa-angle-left" onClick={routeChange} style={{ position: 'absolute' }} aria-hidden="true"></i> <div className='tagnames'><h5>Privacy Policy</h5></div></div>
          <div className='contact-BOX'>
            <p className='contentpolicy mb-0'>We value the trust you place in us and recognize the importance of secure transactions and information privacy. This Privacy Policy describes how Mahadev and its affiliates (collectively "Mahadev, we, our, us") collect, use, share, protect or otherwise process your personal information through Mahadev website <a style={{ textDecoration:'none' ,color:'#000000',fontWeight:600 }} href='https://www.shreemahadevtex.in/en_IN'>https://www.shreeramvastra.com</a> While you may be able to browse certain sections of the Platform without registering with us, however, please note we do not offer any product/service under this Platform outside India. Your personal information will primarily be stored and processed in India and may have data protection laws that are different from those that apply in the country in which you are located. By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy. If you do not agree please do not use or access our Platform.</p>
            <div className='pointspoli'>
                <ol style={{ paddingLeft:28 }}>
                    <li>SERVICES</li>
                    <li>APPLICABILITY</li>
                    <li>COLLECTION OF PERSONALLY IDENTIFIABLE INFORMATION AND
                    OTHER INFORMATION</li>
                    <li>USE OF DEMOGRAPHIC DATA, PROFILE DATA AND
                    OUR INFORMATION</li>
                    <li>SHARING OF PERSONAL INFORMATION</li>
                    <li>LINKS TO OTHER SITES</li>
                    <li>SECURITY PRECAUTIONS</li>
                    <li>OPT-OUT CHOICE</li>
                    <li>ADVERTISEMENTS ON OUR WEBSITE</li>
                    <li>DATA RETENTION</li>
                    <li>ACCESSING AND UPDATING USER INFORMATION</li>
                    <li>RESTRICTIONS</li>
                    <li>YOUR CONSENT</li>
                    <li>AMENDMENTS</li>
                    <li>INQUIRIES, CONCERNS AND GRIEVANCES</li>

                </ol>
                    
            </div>

            </div>
        </div>
    );
}

export default Privacypolicy;