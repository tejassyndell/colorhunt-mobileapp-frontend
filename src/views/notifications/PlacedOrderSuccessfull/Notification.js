/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import './Notification.css';
import backicon from '../../../assets/images/NavbarIcon/arrow.png';
import itemImg from '../../../assets/images/higrow/Frame 1171274908 (1).png'
import itemImg1 from '../../../assets/images/higrow/Frame 1171274908 (2).png'
import itemImg2 from '../../../assets/images/higrow/Frame 1171274908.png'
import Navitem from '../../../assets/images/icons/Vector (3).png'
import Navitem1 from '../../../assets/images/icons/Order History (1).png'
import Navitem2 from '../../../assets/images/icons/Group 1000005772 (1).png'
import Navitem3 from '../../../assets/images/icons/Group 1000005785 (1).png'
import Navitem4 from '../../../assets/images/icons/Group 1000005783 (1).png'

export default function Notification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      // Mock data for notifications (replace this with actual data)
      const mockNotifications = [
        {
          id: 1,
          imageSrc: `${itemImg}`,
          description: 'Lorem ipsum dolor sit amet consectetur. Lacus pulvinar interdum elementum amet ornare id. Feugiat tempus.',
          timeAgo: '5m ago',
        },
        {
          id: 2,
          imageSrc: `${itemImg1}`,
          description: 'Lorem ipsum dolor sit amet consectetur. Lacus pulvinar interdum elementum amet ornare id. Feugiat tempus.',
          timeAgo: '58m ago',
        },
        {
          id: 3,
          imageSrc: `${itemImg2}`,
          description: 'Lorem ipsum dolor sit amet consectetur. Lacus pulvinar interdum elementum amet ornare id. Feugiat tempus.',
          timeAgo: '1h ago',
        },
        // Add more notifications as needed
      ];

      setNotifications(mockNotifications);
    };

    fetchNotifications();
  }, []);

  const handleGoBack = () => {
    // Implement logic to navigate back
  };
  const handleHome = () => {
    //implement to got ot navigation to home  page

  }
  const handleOrderHistory =() =>{
    //implement to got ot navigation to Order history page
  }
  const handleCart =() =>{
    //implement to got ot navigation to Cart 
  }
  const handleNotificationPage =() =>{
    //implement to got ot navigation to Notifications page
  }
  const handleUserID =() =>{
    //implement to got ot navigation to User pages
  }

  return (
    <>
      <header className="notification">
        <div className="notification-conatiner">
          <div className="notification-left-side" onClick={handleGoBack}>
            <img src={backicon} alt="Back" />
          </div>
          <div className="notification-center">
            <h1>Notification</h1>
          </div>
        </div>
      </header>
      <div className="notification-body">
        {notifications.map((notification) => (
          <div className="notification-item" key={notification.id}>
            <div className="notification-item-image">
              <img src={notification.imageSrc} alt="Notification" />
            </div>
            <div className="notification-item-description">
              <p>{notification.description}</p>
            </div>
            <div className="notification-item-time">
              <p>{notification.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='Navigation-bar' >
        <div className="Navigation-container">
           
                <img src={Navitem} alt='item' onClick={handleHome} />
                <img src={Navitem1} alt='item' onClick={handleOrderHistory}/>
                <img src={Navitem2} alt='item' onClick={handleCart} />
                <img src={Navitem3} alt='item' onClick={handleNotificationPage} />
                <img src={Navitem4} alt='item' onClick={handleUserID} />
        </div>
      </div>
    </>
  );
}
