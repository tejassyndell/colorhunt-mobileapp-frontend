/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import TimerImg from '../../assets/Colorhuntimg/order-history-img/timer.png'
import MenuImg from '../../assets/Colorhuntimg/order-history-img/menu bar.png';
import calc from '../../assets/Colorhuntimg/order-history-img/calender.png'
import 'src/views/Orders/orderhistory.css';
import { Card } from 'react-bootstrap';
import HomeImg from '../../assets/Colorhuntimg/order-history-img/home.png';
import HistoryImg from '../../assets/Colorhuntimg/order-history-img/history.png'
import CartImg from '../../assets/Colorhuntimg/order-history-img/cart.png'
import NotificationImg from '../../assets/Colorhuntimg/order-history-img/notification.png'
import UserImg from '../../assets/Colorhuntimg/order-history-img/user.png'
import CompleteImg from '../../assets/Colorhuntimg/order-history-img/completed.png'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



function Orderhistory() {
  const [showPending, setShowPending] = useState(true);
  const [activeButton, setActiveButton] = useState('pending'); // Track the active button
 
  const [selectedDate, setSelectedDate] = useState(new Date());

 //Date Picker
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker((prevShowDatePicker) => !prevShowDatePicker);
  };

  const onDateSelected = (date) => {
    setSelectedDate(date); // Update the selected date, but don't update startDate
    setShowDatePicker(false); // Hide the date picker
  };

  // ...

  const toggleCards = (isPending) => {
    setShowPending(isPending);
    setActiveButton(isPending ? 'pending' : 'completed'); // Set the active button when the card changes
  };
  const buttonStyle = {
    background: activeButton === 'pending' ? '#FFFFFF' : 'transparent',
    borderRadius: '5px',
    color: activeButton === 'pending' ? '#000' : '#FFFFFF',
    padding: '14px',
    width: '150px', // Adjust the width as needed
  };
  const completedButtonStyle = {
    ...buttonStyle,
    background: activeButton === 'completed' ? '#FFFFFF' : 'transparent',
    color: activeButton === 'completed' ? '#000' : '#FFFFFF',
  };


  const soNumber = 'NRS(JHCPL)33/23-24';
  // const pendingDate = '20/06/2023';
  const pendingPieces = 1;
  const orderTotal = 195;

  const outward = '140/23-24'
  // const cmpltDate = '11/06/2023';
  const cmpltPieces = 1;
  // const orderTotal = 195;

  // Go back to the previous page
  const navigate = useNavigate();
  const handleMenuBarClick = () => {    
    navigate('/dashboard')
  };
  
  
  return (
    <div>
      <div className="tagdiv mb-3 mt-3">
       <img src={MenuImg} onClick={handleMenuBarClick} ></img>
        <div className="tagnames">
          <h5>Order History</h5>
        </div>
      </div>
      <div className="button-container">
        <div
          className='pending-text-box'
          onClick={() => toggleCards(true)}
          style={activeButton === 'pending' ? buttonStyle : {}}
        >
          <span className="pending-txt">Pending</span>
        </div>
        <div
          className='complete-text-box'
          onClick={() => toggleCards(false)}
          style={activeButton === 'completed' ? completedButtonStyle : {}}
        >
          <span className="cmplt-button">Completed</span>
        </div>
      </div>
      <div className='calc'>
        <img src={calc} alt="Calendar" onClick={toggleDatePicker} />
      </div>
      {showDatePicker && (
        <div className='datepicker'>
          <DatePicker
            onChange={onDateSelected}
            dateFormat='dd-MM-yyyy'
            onClose={toggleDatePicker}
            todayButton={null} 
          />
        </div>
      )}
      {showPending ? (
        <Card className='pending-card'>
          <div className='bg'>
            <div className='order-details'>
              <div className='so-no'>
                <span>SO No:</span> {soNumber}
              </div>
              <div className='pieces'>
                <span>Pieces:</span> {pendingPieces}
              </div>
              <div className='total-order'>
                <span>Order Total:</span> {orderTotal}
              </div>
            </div>
            <div className='order-details-part2'>
              <div className='date'>
              <span>Date:</span> {selectedDate.toLocaleDateString()} {/* Display the selected date */}
              </div>
              <div className='pending-box'>
                <div className='box1'>
                  <div className='context-box'>
                    <img src={TimerImg}></img>
                    <span>Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Card className='complete-card'>
          <div className='bg'>
            <div className='order-details'>
              <div className='so-no'>
                <span>Outward No:</span> {outward}
              </div>
              <div className='pieces'>
                <span>Pieces:</span> {cmpltPieces}
              </div>
              <div className='total-order'>
                <span>Order Total:</span> {orderTotal}
              </div>
            </div>
            <div className='order-details-part2'>
              <div className='date'>
              <span>Date:</span> {selectedDate.toLocaleDateString()} 
              </div>
              <div className='complete-box'>
                <div className='box2'>
                  <div className='context-box2'>
                    <img src={CompleteImg}></img>
                    <span>Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
      <div className="footer-section">
        <div className='sub-footer-section'>
          <img src={HomeImg} className='home-icon'  onClick={handleMenuBarClick} />
          <img src={HistoryImg} className='history-icon'/>
          <img src={CartImg} className='cart-icon'/>
          <img src={NotificationImg} className='notification-icon'/>
          <img src={UserImg} className='user-icon'/>
        </div>
      </div>
    </div>
  );
}

export default Orderhistory;
