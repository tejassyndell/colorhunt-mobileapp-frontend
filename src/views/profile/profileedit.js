/* eslint-disable */

import React,{ useEffect,useState} from 'react';
import updateicon from '../../assets/images/higrow/Group 3245.svg'
import contentimages from '../../assets/images/higrow/contentimg/fabric_28 1.png'
import Rssimbol from '../../assets/images/higrow/contentimg/Group 1000005667.svg'
import linecontent from '../../assets/images/higrow/Group 1000005738.png'
import collctimg from '../../assets/images/higrow/image 73.svg'
import { useNavigate, useParams } from 'react-router-dom'
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
} from '@coreui/react'

function profileedit(props) {
    const navigate = useNavigate()
    const [validated, setValidated] = useState(false)
    const [user, setuser] = useState()


      
    const onValueChange = (e) => {
        
        setuser({...user,[e.target.name]:e.target.value})
        // setInputValue(e.target.value);
        // console.log(user.password);
    }
    // console.log('inputvalue',user);
    const handleSubmit = async (event) => {
        // const form = event.currentTarget
        //   if (form.checkValidity() === true) {
        //     setValidated(true)
        //     // Set isValid to true if the input value is not empty
        //     setIsValid(event.target.value !== '');
        //     event.preventDefault()
        //     Navigate('/dashboard')

        //   }
        //   event.preventDefault()
        //   event.stopPropagation()
        //   setValidated(true)
    }


    const routeChange = () => {
        navigate('/profile')
    }
    return (
        <div className='dashboardDiv profile_contan_space' style={{ width:'100%' }}>
            <div className='tagdiv'><i className="fa fa-angle-left" onClick={routeChange} style={{ position: 'absolute' }} aria-hidden="true"></i> <div className='tagnames'><h5>Profile</h5></div></div>
            <div className='profilecontenar'>
            <div className="profileApp">
            {/* <input type="file" onChange={handleChange} /> */}
            <img src={collctimg} /><span className='camraicon'><i className="fa fa-camera"></i></span>
            <h6>Sourabh Srivastav</h6>
            <p>sourabhsrivastav@gmail.com</p>
  
        </div>
        <img src={linecontent} style={{ width:'100%',marginTop:10 }}/>
        <div className='contactform mt-3' style={{ width:'98%',margin:'auto' }}>
                <CForm noValidate validated={validated} onSubmit={handleSubmit} className='login-form' >

                    <CInputGroup className="mb-4">
                        {/* <img src={EmailIcon} className='login-input-icon email-icon'/> */}
                        <CFormInput
                            type='text'
                            //   feedbackInvalid={
                            //     isEMailEmpty
                            //     ? 'Please Enter Email.'
                            //     : isEmailValid
                            //     ? null
                            //     : 'Please Enter Valid Email'
                            //   }
                            // feedbackInvalid="Please Enter Your Email."
                            placeholder="First Name"
                            // autoComplete="email" 
                            name='fastname'
                            onChange={(e) => { onValueChange(e) }}
                            className='contect-form'
                            //   pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}"
                            required
                        />

                    </CInputGroup>
                    
                    <CInputGroup className="mb-4">
                        {/* <img src={EmailIcon} className='login-input-icon email-icon'/> */}
                        <CFormInput
                            type='text'
                            //   feedbackInvalid={
                            //     isEMailEmpty
                            //     ? 'Please Enter Email.'
                            //     : isEmailValid
                            //     ? null
                            //     : 'Please Enter Valid Email'
                            //   }
                            // feedbackInvalid="Please Enter Your Email."
                            placeholder="Last Name"
                            // autoComplete="email" 
                            name='lastname'
                            onChange={(e) => { onValueChange(e) }}
                            className='contect-form'
                            //   pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}"
                            required
                        />

                    </CInputGroup>
                    <CInputGroup className="mb-4">
                        {/* <img src={EmailIcon} className='login-input-icon email-icon'/> */}
                        <CFormInput
                            type='email'
                            //   feedbackInvalid={
                            //     isEMailEmpty
                            //     ? 'Please Enter Email.'
                            //     : isEmailValid
                            //     ? null
                            //     : 'Please Enter Valid Email'
                            //   }
                            // feedbackInvalid="Please Enter Your Email."
                            placeholder="Email"
                            // autoComplete="email" 
                            name='email'
                            onChange={(e) => { onValueChange(e) }}
                            className='contect-form'
                            //   pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}"
                            required
                        />

                    </CInputGroup>
                    
                    <CInputGroup className="mb-4">
                        {/* <img src={EmailIcon} className='login-input-icon email-icon'/> */}
                        <CFormInput
                            type='number'
                            //   feedbackInvalid={
                            //     isEMailEmpty
                            //     ? 'Please Enter Email.'
                            //     : isEmailValid
                            //     ? null
                            //     : 'Please Enter Valid Email'
                            //   }
                            // feedbackInvalid="Please Enter Your Email."
                            placeholder="+00 00000 00000"
                            // autoComplete="email" 
                            name='phonenumber'
                            onChange={(e) => { onValueChange(e) }}
                            className='contect-form'
                            //   pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}"
                            required
                        />

                    </CInputGroup>
                    
                    <CInputGroup className="mb-4">
                        {/* <img src={EmailIcon} className='login-input-icon email-icon'/> */}
                        <CFormInput
                            type='text'
                            //   feedbackInvalid={
                            //     isEMailEmpty
                            //     ? 'Please Enter Email.'
                            //     : isEmailValid
                            //     ? null
                            //     : 'Please Enter Valid Email'
                            //   }
                            // feedbackInvalid="Please Enter Your Email."
                            placeholder="GSTIN"
                            // autoComplete="email" 
                            name='gstnumber'
                            onChange={(e) => { onValueChange(e) }}
                            className='contect-form'
                            //   pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}"
                            required
                        />

                    </CInputGroup>
                    
                    <CInputGroup className="mb-4">
                        {/* <img src={EmailIcon} className='login-input-icon email-icon'/> */}
                        <CFormInput
                            type='text'
                            //   feedbackInvalid={
                            //     isEMailEmpty
                            //     ? 'Please Enter Email.'
                            //     : isEmailValid
                            //     ? null
                            //     : 'Please Enter Valid Email'
                            //   }
                            // feedbackInvalid="Please Enter Your Email."
                            placeholder="PAN"
                            // autoComplete="email" 
                            name='pancard'
                            onChange={(e) => { onValueChange(e) }}
                            className='contect-form'
                            //   pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}"
                            required
                        />

                    </CInputGroup>
                    <CInputGroup className="mb-4">
                        {/* <img src={EmailIcon} className='login-input-icon email-icon'/> */}
                        <CFormInput
                            type='text'
                            //   feedbackInvalid={
                            //     isEMailEmpty
                            //     ? 'Please Enter Email.'
                            //     : isEmailValid
                            //     ? null
                            //     : 'Please Enter Valid Email'
                            //   }
                            // feedbackInvalid="Please Enter Your Email."
                            placeholder="Website"
                            // autoComplete="email" 
                            name='website'
                            onChange={(e) => { onValueChange(e) }}
                            className='contect-form'
                            //   pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}"
                            required
                        />

                    </CInputGroup>
                    <CInputGroup className="mb-4">
                        {/* <img src={EmailIcon} className='login-input-icon email-icon'/> */}
                        <textarea
                           rows="4" cols="50"
                            type='text'
                            //   feedbackInvalid={
                            //     isEMailEmpty
                            //     ? 'Please Enter Email.'
                            //     : isEmailValid
                            //     ? null
                            //     : 'Please Enter Valid Email'
                            //   }
                            // feedbackInvalid="Please Enter Your Email."
                            placeholder="Address"
                            // autoComplete="email" 
                            name='address'
                            onChange={(e) => { onValueChange(e) }}
                            className='contect-form'
                            //   pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}"
                            required
                        ></textarea>

                    </CInputGroup>
                            <div className='col-12' style={{ display:'grid',justifyItems:'center' }}>

                            <button type="submit" className="contecyussubmit mb-3" >
                            Save
                            </button>
                            </div>
                      
                    

                    {/* otppopup */}




                </CForm>
            </div>
        </div>
        </div>
    );
}

export default profileedit;