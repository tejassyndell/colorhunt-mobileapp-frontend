/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
} from '@coreui/react'
import 'react-toastify/dist/ReactToastify.css';
import { loginAuth, sendOtp, } from 'src/views/api/api'
import { event } from 'jquery';
import flacescreen from 'src/assets/Colorhuntimg/loginimg/image 98.svg'
import { motion } from "framer-motion"
import loginbackgrounimg from 'src/assets/Colorhuntimg/loginimg/Group 1000005882.png'


const defaultvalue = {
  phone: '',
  formatePhone: ''
}


const Login = () => {
  //require variable
  const Navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedNumber, setFormattedNumber] = useState('');
  const [isUser, setisUser] = useState(false)
  const [user, setuser] = useState(defaultvalue);
  const [isValid, setIsValid] = useState(false);
  const [otp, setOtp] = useState(false)
  const [verifayOtp, setVerifayOtp] = useState(false)
  const [WrongOtp, setWrongOtp] = useState(false)
  const [loginScreenss, setLoginScreen] = useState(true)
  const [nextbutton, setnextbutton] = useState(false)
  const [UserIds, setUserIds] = useState()

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(true);
  const [click3, setClick3] = useState(true);




  // console.log(VerifyOtp,'otpconform');
  const handleChangePhone = (event) => {
    const inputNumber = event.target.value;
    if(inputNumber !== ''){
      setnextbutton(true)
    }else{
      setnextbutton(false)
    }
    setPhoneNumber(inputNumber);
    setFormattedNumber(formatPhoneNumber(inputNumber));
    setisUser(false)
  };

  const formatPhoneNumber = (phoneNumber) => {
    const countryCode = '+91';
    const firstPart = phoneNumber.slice(0, 5);
    const secondPart = phoneNumber.slice(5);
    return `${countryCode} ${firstPart} ${secondPart}`;
  };

  //for validations and handle api
  const [validated, setValidated] = useState(false)
  const isEmailValid = user.phone.pattern == ' ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}';
  const isEMailEmpty = user.phone.length === 0;

 // skip event
 const skipContent = () =>{
 
  Navigate('/dashboard', { state: { isLoggedin: false } });
 }

  


  // timer count code
  const Ref = useRef(null);
  const [timer, setTimer] = useState('00');
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total, hours, minutes, seconds
    };
  }

  const startTimer = (e) => {
    let { total, hours, minutes, seconds }
      = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }
  const clearTimer = (e) => {
    setTimer('59');
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 59);
    return deadline;
  }

  const LoadLoginSession = () => {
    const getSession = localStorage.getItem('userId');
    // console.log(getSession)
    if (getSession) {
      Navigate('/dashboard')
    }
  }

  useEffect(() => {
    clearTimer(getDeadTime());
    LoadLoginSession()
  }, []);

  const onClickReset = async () => {


    setWrongOtp(false)
    clearTimer(getDeadTime());

  }




  const verifayotpsend = async () => {
    Navigate('/sliderscreen')
  
    
  }
  const handleSubmit = async (event) => {

    const form = event.currentTarget
    if (form.checkValidity() === true ) {
      setValidated(true)
      setOtp(true)
   
    }
    event.preventDefault()
    event.stopPropagation()
    setValidated(true)


  }
  const inputRefs = Array.from({ length: 4 }, () => useRef(null));

  const handleKeyUp = (index, e) => {
    const inputLength = e.target.value.length;
    if (inputLength === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
    if (inputLength === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };




  const loginscreen = () => {
    setLoginScreen(false)
  
  }

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center login-background">
      <div className='flacescreenimg' style={loginScreenss === false ? {display:'none'}:{}}>

      <img src={flacescreen}  onClick={() => loginscreen()}/>
      </div>
      {loginScreenss === false  ? 
      <motion.div style={{ width:'100%' }} initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
        <div>
          {otp === false ? <img src={loginbackgrounimg} className='backgroundimglogin'/> :null}
          
              <CContainer className='login_main_div '>
            {otp === false ? <>
              <CRow className="justify-content-center">
                <CCol md={5}>
                  <CCardGroup>
                    <CCard className="p-5 form-div" style={{ marginBottom: 27}}>
                      <CCardBody>
                        <CForm noValidate validated={validated} onSubmit={handleSubmit} className='login-form'>
    
                          {(isUser === true) ? <>
                            <label className='login_user_notFound'>User not found</label>
                          </> : <></>}
                          <div className='loginhaddingcontent'>
                            <h3>Welcome!</h3>
                            <p>Please Login To Continue</p>
                          </div>
                          <CInputGroup style={{ marginBottom: '4vh' }}>
                            {/* <img src={EmailIcon} className='login-input-icon email-icon'/> */}
                            <CFormInput
                              type='tel'
                              feedbackInvalid={
                                isEMailEmpty
                                  ? 'Please enter a 10-digit phone number.'
                                  : isEmailValid
                                    ? null
                                    : 'Please enter valid phone no'
    
                              }
    
                              placeholder="Phone Number "
    
                              name='phone'
                              // onChange={(e)=>{onValueChange(e)}}
                              onChange={handleChangePhone}
                              className='login_form_input email-input '
                              maxLength={10}
                              pattern="^[0-9]{10,14}"
                              required
                            />
                          </CInputGroup>
    
                          <CRow>
                            {nextbutton === true ?  <CCol xs={12} style={{ display:'grid',justifyContent:'end' }}>
                              <button type="submit" className="login_page_btn" >
                                Next
                              </button>
                            </CCol> : 
                            <CCol xs={12} style={{ display:'grid',justifyContent:'end' }}>
                              <button  className="login_page_btn" onClick={skipContent} >
                              Skip
                              </button>
                            </CCol>}
                            
                          </CRow>

    
    
    
                        </CForm>
                      </CCardBody>
                    </CCard>
                  </CCardGroup>
                </CCol>
              </CRow>
            </>
              : <>
                 <motion.div style={{ width:'100%' }} initial={{ translateX : '100%' }}
      animate={{opacity:1, translateX : 0}}
      transition={{ duration: 0.5 }}>
          <div style={{width:'105% '}}>
              <img src={loginbackgrounimg} className='backgroundimgloginotp'/>
              <div className='otpsection'>
              <div className='loginhaddingcontent'>
                            <h3 className='mb-1'>Welcome!</h3>
                            <p className='mb-4'>Please Login To Continue</p>
                          </div>
                <div className='d-flex' style={{ justifyContent: 'center' }}>
               
                  <CForm
                    className="login_text row g-3 needs-validation"
                    style={{ height:57 }}
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  // style={{margin:'0px 50px 0px 44px'}}
                  >
                    <CInputGroup className="mb-4" style={{ width: 65, margin: '0px -4px 0px 6px' }}>
                      <CFormInput
                        type="tel"
                        onChange={(e) => { setInput1(e.target.value); handleKeyUp(0, e) }}
                        className='login_form_input email-input otp-inputs'
                        maxLength='1'
                        autoComplete='off'
                        pattern="^[a-z0-9]*\d[a-z0-9]*"
                        ref={inputRefs[0]}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4" style={{ width: 65, margin: '0px -4px 0px 0px' }}>
                      <CFormInput
                        type="tel"
                        onChange={(e) => { setInput2(e.target.value); handleKeyUp(1, e) }}
                        className='login_form_input email-input otp-inputs'
                        maxLength={1}
                        autoComplete='off'
                        ref={inputRefs[1]}
                        pattern="^[a-z0-9]*\d[a-z0-9]*"
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4" style={{ width: 65, margin: '0px -4px 0px 0px' }}>
                      <CFormInput
                        type="tel"
                        onChange={(e) => { setInput3(e.target.value); handleKeyUp(2, e) }}
                        className='login_form_input email-input otp-inputs'
                        maxLength={1}
                        autoComplete='off'
                        ref={inputRefs[2]}
                        pattern="^[a-z0-9]*\d[a-z0-9]*"
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4" style={{ width: 65, margin: '0px -4px 0px 0px' }}>
                      <CFormInput
                        type="tel"
                        onChange={(e) => { setInput4(e.target.value); handleKeyUp(3, e); setWrongOtp(false) }}
                        className='login_form_input email-input otp-inputs'
                        maxLength={1}
                        autoComplete='off'
                        ref={inputRefs[3]}
                        pattern="^[a-z0-9]*\d[a-z0-9]*"
                        required
                      />
                    </CInputGroup>
                  </CForm>
                </div>
                {WrongOtp === true ?
                  <span className='login_invalid_otp_text'>Invalid OTP Provided</span> : <></>}
                {verifayOtp && (
                  <small className="d-block mb-2 red">
    
                  </small>
                )}
                <p className='login_otp_countdown'>You should recieve the OTP in &nbsp;&nbsp;&nbsp;<span style={{ color: 'rgba(169, 10, 18, 1)' }}>{timer} Second</span></p>
             
                <CRow className='otpbuttons'>
                <button
                  disabled={timer > 0}
                  style={{
                    display: timer > 0 ? "none" : "block",
                  }}
                  onClick={onClickReset}
                  className="login_page_btn"
                >
                  Resend OTP
                </button>
                  <CCol xs={12}>
                    <button
                      style={{
    
                        display: timer > 0 ? "block" : "none",
    
                      }} onClick={verifayotpsend} type="submit" className="login_page_btn"  >
    
                      Verify
                    </button>
                  </CCol>
                </CRow>   
              </div>
                 
                         
              </div>
      </motion.div>
            
             
              </>}
          </CContainer>
        </div>
          
        </motion.div>
        
      :null
      }
  


    </div>
  )
}

export default Login