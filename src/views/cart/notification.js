/* eslint-disable */
import React, { useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'
import tshartimag from '../../assets/images/avatars/Instagram post - 1.png'
import tshartimag1 from '../../assets/images/avatars/Group 12357.png'
import tshartimag2 from '../../assets/images/avatars/Group 12359.png'
import WidgetsDropdown from '../widgets/WidgetsDropdown'


const cart = () => {
  const Navigate = useNavigate()

  const routeChange = () => {
    Navigate('/dashboard')
  }
  return (
    <div className='dashboardDiv'>
        <div className="tagdiv mb-3">
        <i
          className="fa fa-angle-left"
          onClick={routeChange}
          style={{ position: 'absolute' }}
          aria-hidden="true"
        ></i>{' '}
        <div className="tagnames">
          <h5>Notification</h5>
        </div>
      </div>
      <div className='notoficationsidecintent'>Mark as Read</div>
      <div className='d-flex notoficationsoppingbox' >
        <img src={tshartimag}/>
        <p className='notificationcontent'>Lorem ipsum dolor sit amet consectetur. Lacus pulvinar interdum elementum amet ornare id. Feugiat tempus.</p>
        <p className='notificationstatus'>1m ago.</p>      
      </div>
      <div className='d-flex notoficationsoppingbox' >
        <img src={tshartimag1}/>
        <p className='notificationcontent'>Lorem ipsum dolor sit amet consectetur. Lacus pulvinar interdum elementum amet ornare id. Feugiat tempus.</p>
        <p className='notificationstatus'>5m ago.</p>      
      </div>
      <div className='d-flex notoficationsoppingbox' >
        <img src={tshartimag2}/>
        <p className='notificationcontent'>Lorem ipsum dolor sit amet consectetur. A scelerisque faucibus nulla egestas vitae mattis adipiscing.</p>
        <p className='notificationstatus'>9m ago.</p>      
      </div>
    </div>
  )
}

export default cart
