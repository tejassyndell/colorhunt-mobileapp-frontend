/* eslint-disable */

import React, { useEffect, useState } from 'react';
import {
    CForm,
    CFormInput,
    CInputGroup,
    CAlert,
    CSidebar
} from '@coreui/react'

import contectimg from '../../assets/Colorhuntimg/contact_us.png'
import AppFooter from 'src/components/AppFooter'

// import EmailIcon from '../../../assets/images/Email-icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import { SendMail } from '../api/api';
import { useSelector, useDispatch } from 'react-redux'
import Menubar from 'src/assets/Colorhuntimg/menu bar (1).svg'

import { ToastContainer, toast } from 'react-toastify';
import { async } from 'regenerator-runtime';


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
    const [userNameValid, setUserNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [subjectValid, setSubjectValid] = useState(true);
    const [emailFormate, setemailFormate] = useState(true)

    const SendMailProfile = async () => {
        const MsgData = {
            username: userName,
            email: email,
            subject: subject,
            message: message,
        }
        console.log(MsgData);
        const result = await SendMail(MsgData)
            .then((res) => {
                if (res.status === 200) {
                    setVisible(true)
                    setUserName("")
                    setEmail("")
                    setSubject("")
                    setMessage("")
                }
                else {
                    console.log(res)
                    setVisibleFail(true)
                }
            })
    }

    const handleSubmit = async (event) => {
        // const form = event.currentTarget
        console.log("done");
        console.log(userName);

        // form.checkValidity() === true &&
        if (userName !== "" && email !== "" && subject !== "") {
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            let status = email.match(emailPattern);
            if (status !== null) {
                SendMailProfile();
            } else {
                setemailFormate(false);
            }
            // event.preventDefault()
        }
        else {
            if (userName === "") {
                setUserNameValid(false);
            }
            if (email === "") {
                setEmailValid(false);
            }
            if (subject === "") {
                setSubjectValid(false);
            }
        }
        event.preventDefault()
        event.stopPropagation()
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
                visible={false}
                onVisibleChange={(visible) => {
                    dispatch({ type: 'set', sidebarShow: visible })
                }}
                className='sidebar'
            >
            </CSidebar>
            <div className='tagdiv'>
                <div className="menu-bar">
                    <img src={Menubar} alt="" onClick={() => navigate('/dashboard')} />
                </div>
                <div className='tagnames'>
                    <h5>Contact Us</h5>
                </div>
            </div>
            <div className='contectimages'>
                <img src={contectimg} className='ipad_img_height' />
            </div>
            <div className='contact-BOX'>

                <div className='contactform'>
                    <CForm onSubmit={handleSubmit} className='login-form'>
                        <CInputGroup className="mb-4 contact_us">
                            <CFormInput
                                type='text'
                                placeholder="Name "
                                name='username'
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                    console.log(e.target.value);
                                    e.target.value ?
                                        setUserNameValid(true) : setUserNameValid(false)
                                }}
                                className='contect-form'
                                pattern="[A-Za-z]{1,15}"
                                autoComplete="off"
                                style={{ width: "100%", marginBottom: "6px" }}
                            />
                            {userNameValid === false ? <p className='filed_empty'>Please enter your name.</p> : ""}
                        </CInputGroup>
                        <CInputGroup className="mb-4 contact_us">
                            <CFormInput
                                type='email'
                                placeholder="Email"
                                name='email'
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    e.target.value !== "" ?
                                        setEmailValid(true) : setEmailValid(false)
                                }}
                                className='contect-form'
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                autoComplete='off'
                                style={{ width: "100%", marginBottom: "6px" }}
                            />
                            {emailValid === false ? <p className='filed_empty'>Please enter your email.</p> : ""}
                            {emailFormate === false ? <p className='filed_empty'>Please enter valid email.</p> : ""}
                        </CInputGroup>
                        <CInputGroup className="mb-4 contact_us">
                            <CFormInput
                                type='text'
                                placeholder="Subject"
                                name='subject'
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                    e.target.value !== "" ?
                                        setSubjectValid(true) : setSubjectValid(false)
                                }}
                                className='contect-form'
                                pattern="[A-Za-z]{1,30}"
                                autoComplete='off'
                                style={{ width: "100%", marginBottom: "6px" }}
                            />
                            {subjectValid === false ? <p className='filed_empty'>Please enter subject here.</p> : ""}

                        </CInputGroup>
                        <CInputGroup className="mb-4 contact_us">
                            <textarea
                                autoComplete='off'
                                rows="4" cols="50"
                                type='text'
                                feedbackInvalid="Please enter your massage here."
                                placeholder="Message"
                                name='message'
                                onChange={(e) => { setMessage(e.target.value) }}
                                className='contect-form'
                                pattern="[A-Za-z]{300}"
                                maxLength="5000"
                            // required
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
            <div className="footer-section w-100">
                <AppFooter />
            </div>
        </div>
    );
}

export default contactus;