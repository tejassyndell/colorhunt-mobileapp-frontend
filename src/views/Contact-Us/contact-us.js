/* eslint-disable */

import React, { useEffect, useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
    CAlert,
    CSidebar
} from '@coreui/react'
import updateicon from '../../assets/images/higrow/Group 3245.svg'
import contectimg from '../../assets/images/avatars/Group 1000005660.png'
import Rssimbol from '../../assets/images/higrow/contentimg/Group 1000005667.svg'
// import EmailIcon from '../../../assets/images/Email-icon.png'
import { useNavigate, useParams } from 'react-router-dom'
// import { SendMail } from '../api/api';
import { useSelector, useDispatch } from 'react-redux'



function contactus(props) {
    const navigate = useNavigate()
    const [validated, setValidated] = useState(false)
    const [user, setuser] = useState()
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const [visible, setVisible] = useState(false)
    const [visibleFail, setVisibleFail] = useState(false)
    const [click, setClick] = useState(true)


    const unfoldable = useSelector((state) => state.sidebarUnfoldable)
    const sidebarShow = useSelector((state) => state.sidebarShow)

    const SendMailProfile = async () => {
        const MsgData = {
            username: userName,
            email: email,
            subject: subject,
            message: message,
        }
        // console.log(MsgData)
        // const result = await SendMail(MsgData)
            .then((res) => {
                if (res.status === 200) {
                    setVisible(true)
                }
                else {
                    console.log(res)
                    setVisibleFail(true)
                }
            })
    }

    const handleSubmit = async (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === true) {
            setValidated(true)
            event.preventDefault()
            SendMailProfile()
        }

        event.preventDefault()
        event.stopPropagation()
        setValidated(true)
    }

    const routeChange = () => {
        if (click === true) {
            setClick(false)
            navigate('/dashboard')
        }
    }
    useEffect(() => {
        dispatch({ type: 'set', sidebarShow: !sidebarShow })
    }, [])
    
    return (

        <div className='' style={{ width: '100%' }}>
            
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
            <div className='tagdiv'><i className="fa fa-angle-left" onClick={routeChange} style={{ position: 'absolute' }} aria-hidden="true"></i> <div className='tagnames'><h5>Contact Us</h5></div></div>
          <div className='contact-BOX'>
            <div className='contectimages'><img src={contectimg} className='ipad_img_height'/></div>
            <div className='contactform'>
                <CForm noValidate validated={validated} onSubmit={handleSubmit} className='login-form'>

                        <CInputGroup className="mb-4 contact_us">
                            <CFormInput
                                type='text'
                               
                                feedbackInvalid="Please enter your name."
                                placeholder="Name "
                                name='username'
                                onChange={(e) => { setUserName(e.target.value) }}
                                className='contect-form'
                                pattern="[A-Za-z]{1,15}"
                                required
                            />

                        </CInputGroup>
                        <CInputGroup className="mb-4 contact_us">
                            <CFormInput
                                type='email'
                                
                                feedbackInvalid="Please enter your email."
                                placeholder="Email"
                                name='email'
                                onChange={(e) => { setEmail(e.target.value) }}
                                className='contect-form'
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                            />

                        </CInputGroup>
                        <CInputGroup className="mb-4 contact_us">
                            <CFormInput
                                type='text'
                               
                                feedbackInvalid="Please enter subject here."
                                placeholder="Subject"
                                name='subject'
                                onChange={(e) => { setSubject(e.target.value) }}
                                className='contect-form'
                                pattern="[A-Za-z]{1,30}"
                                required
                            />

                        </CInputGroup>
                        <CInputGroup className="mb-4 contact_us">
                            <textarea
                                rows="4" cols="50"
                                type='text'
                           
                                feedbackInvalid="Please enter your massage here."
                                placeholder="Message"
                                name='message'
                                onChange={(e) => { setMessage(e.target.value) }}
                                className='contect-form'
                                pattern="[A-Za-z]{300}"
                                maxLength="5000"
                                required
                            ></textarea>

                        </CInputGroup>
                        <CAlert color="success" dismissible visible={visible} onClose={() => setVisible(false)}>
                            Thank you! we'll contact you soon
                        </CAlert>
                        <CAlert color="danger" dismissible visible={visibleFail} onClose={() => setVisibleFail(false)}>
                            There is an error, Please try again
                        </CAlert>

                        <div className='col-12 mb-3' style={{ display: 'grid', justifyItems: 'center' }}>

                            <button type="submit" className="contecyussubmit" >
                                Submit
                            </button>
                        </div>







                    </CForm>
                </div>
           
            </div>
        
        </div>
   
    );
}

export default contactus;