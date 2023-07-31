/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CSidebar
} from '@coreui/react'
import visionimg from '../../assets/images/higrow/contentimg/eye 1.svg';
import visionimg1 from '../../assets/images/higrow/contentimg/Vector (3).svg';
import visionimg2 from '../../assets/images/higrow/contentimg/Vector (4).svg';
import visionimg3 from '../../assets/images/higrow/contentimg/Vector (5).svg';
import loactionicon from '../../assets/images/higrow/Layer 2.svg';
import { useSelector, useDispatch } from 'react-redux'
import "../../css/ipad.css"
const Profile = () => {

  //Get RoleId from LocalStorage
  const userId = localStorage.getItem('userId')

  //Form data
  const [validated, setValidated] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [click, setClick] = useState(true)

    //to fold
    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const intialValues = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    contact_no: '',
    password: '',
    address: '',
  }

  const [state, SetState] = useState(intialValues)
  console.log('state', state)

  const navigate = useNavigate()
  const onValueChange = (e) => {
    SetState({ ...state, [e.target.name]: e.target.value })
    console.log(state.email)
  }


  // const [profiledata, setprofiledata] = useState([])
  // console.log('profiledata',profiledata)
  // const loadprofileData = async () => {
  //   const result = await UserProfile(userId)
  //   // setprofiledata(result.data[0])
  //   SetState({ ...result.data[0] })
  // }
  useEffect(() => {
    // UserProfile(userId)
    // loadprofileData(userId)
  }, [userId])
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const HandlePhoneCall = () => {
    // let phoneNumber = '';
 
    // if (Platform.OS === 'android') {
    //   phoneNumber = 'tel:${9925249006}';
    // }
    // else {
    //   phoneNumber = 'telprompt:${9925249006}';
    // }
 
    // Linking.openURL(phoneNumber);
  }

  const HandleMain = () => {
    // const email = 'info@shreemahadevtex.com';
    // const subject = 'Send new inquiry';
    // const body = 'Enter the details here';
 
    // const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;
  
    // Linking.openURL(mailtoUrl);
  }


  const onClickUpdate = async (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === true) {
      setValidated(true)
      event.preventDefault()
      const result = await UpdateProfile(state)
      // console.log("resultresultresult", result)
      setShowModal(true);
    }


    event.preventDefault()
    event.stopPropagation()
    // const response = await UpdateProfile(state)
    // console.log('response',response.data)
    setValidated(true);
    // setShowModal(true);
  }
  const openModal = () => {
    setShowModal(true);
  };
  const routeChange = () => {
    if(click===true){
      setClick(false)
    navigate('/dashboard')
    }
  }
  //****************popup start*********************//
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      // setShowModal(false);
      navigate('/all-users')
    }
  };


  // const isPasswordValid = state.password.pattern ==' (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}';
  // const isPasswordEmpty = state.password.length === 0;
  // const isEmailValid = state.email.pattern ='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}';
  // const isEMailEmpty = state.email.length === 0;

  const isEmailValid = state.email.pattern == '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}';
  const isEMailEmpty = state.email.length == 0;

  const isFirstName = state.first_name.length === 0;
  const isFirstNameValid = state.first_name.pattern === "^[A-Za-z]{3,16}";

  const isLastName = state.last_name.length === 0;
  const isLastNameValid = state.last_name.pattern === "^[A-Za-z]{3,16}";

  const isContactNo = state.contact_no.length === 0;
  const isContactNoValid = state.contact_no.pattern === "^[0-9]{10,12}";

  // console.log(isEmailValid, "valid");
  // console.log(state.email[0].length, "empty");


  return (
    <>
    {/* {loading ? (
       <div className="loader-container">
         <div className="spinner"> </div>
         <img src={logoimages}  />
       </div>
        ) : ( */}
    <div className='editform-div'>
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
      <div className='tagdiv'><i className="fa fa-angle-left" onClick={routeChange} style={{ position:'absolute' }} aria-hidden="true"></i> <div className='tagnames'><h5>About us</h5></div></div>

    
        <div className='aboutscontenet ipad_mt_aboutus'>

        
     {/* <h2 className='' style={{ textAlign: 'center' }}>Shree Mahadev TexFab</h2>
      <p className='INNOVATION' style={{ textAlign: 'center' }}>INITIATION | INNOVATION | EXCELLENCE | INTEGRITY | PEOPLE</p>
      <p className='fulldetails' style={{ textAlign: 'center' }}>Shree Mahadev TexFab Pvt. Ltd. is a textile manufacturing company founded in 2008. It produces cotton and other fabrics that are supplied to some of the top apparel brands in India. Despite being a young company. It became a top player in the market within five years of starting operations, thanks to its innovative approach to designs, diligence towards quality and thoughtfulness regarding customer satisfaction. </p>
      <div className='aboutrow'>
        <div className='aboutbox'>
          
          <img src={visionimg} />
          <h3>Vision</h3>
          <p>To be a globally admired brand with unmatched quality and leadership offering complete solution for our <span>customer needs</span> under one roof.</p>
        </div>
        <div className='aboutbox'>
          <img src={visionimg1} />
          <h3>Values</h3>
          <p>Quality, Leadership, Teamwork, Positivity, Loyalty</p>
        </div>
        <div className='aboutbox'>
          <img src={visionimg2} />
          <h3>Mission</h3>
          <p>Customer Satisfaction and Customer centered business.</p>
        </div>
        <div className='aboutbox'>
          <img src={visionimg3} />
          <h3>Brand Promise</h3>
          <p>We Believe in constant <span>Innovation.</span> We Strive to Excel for <span>Quality.</span> We believe in <span>Inspiring</span> all connected with.</p>
        </div>
      </div>
      <div className='aboutaddress'>
        <div className='last_details'>
          <h3>Contact Us</h3>
          <div className='d-flex contact_div_details'>
          <img src={loactionicon} className='locationimg'/><p><span>Head office</span><br></br>
            Block-E, Shop No.2 & 8 Sumel <br></br>
            Business Park-1, B/H.New <br></br>
            Cloth Market Ahmedabad - <br></br>
            380 002.</p>
          </div>
          <div className='d-flex contact_div_details'>
          <img src={loactionicon} style={{ top:'-36px' }} className='locationimg'/><p><span>Branch office</span><br></br>
            Block 25 / 67 - 68, Ground <br></br>
            Floor, West, Patelnagar ,New <br></br>
            Delhi - 110008. <br></br>
            </p>
          </div>
          <h3 style={{ width:'17%' }}>Call Us</h3>
          <div className='d-flex contact_div_details' style={{ alignItems: 'center',lineHeight:2 }}>
          <i className="fa fa-phone" style={{ fontSize:17 }} aria-hidden="true"></i><span>&nbsp;+91 79 2219 1006 / 2217 0417</span>
          </div>
          <div className='d-flex  contact_div_details' style={{ alignItems: 'center',lineHeight:2 }} onClick={()=>{HandlePhoneCall()}}>
          <i className="fa fa-mobile" style={{ fontSize:30 }} aria-hidden="true"></i><span>&nbsp;+91 99252 49006</span>
          </div>
           <div className='d-flex  contact_div_details' style={{ alignItems: 'center',lineHeight:2 }} onClick={()=>{HandleMain()}}>
          <i className="fa fa-envelope-o" style={{ fontSize:20 }} aria-hidden="true"></i><span>&nbsp;info@shreemahadevtex.com</span>
          </div>
        
        </div>
      </div> */}
      </div>
      
    </div>
        {/* )} */}
</>
  )
}

export default Profile