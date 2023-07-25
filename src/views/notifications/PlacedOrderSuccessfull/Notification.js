/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import './Notification.css'
import backicon from '../../../assets/images/NavbarIcon/arrow.png'
import itemImg from '../../../assets/images/higrow/Frame 1171274908 (1).png'
import itemImg1 from '../../../assets/images/higrow/Frame 1171274908 (2).png'
import itemImg2 from '../../../assets/images/higrow/Frame 1171274908.png'
import AppFooter from 'src/components/AppFooter'
import { useNavigate } from 'react-router-dom'

export default function Notification() {
  const [notifications, setNotifications] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    const fetchNotifications = async () => {
      // Mock data for notifications (replace this with actual data)
      const mockNotifications = [
        {
          id: 1,
          imageSrc: `${itemImg}`,
          description:
            'Lorem ipsum dolor sit amet consectetur. Lacus pulvinar interdum elementum amet ornare id. Feugiat tempus.',
          timeAgo: '5m ago',
        },
        {
          id: 2,
          imageSrc: `${itemImg1}`,
          description:
            'Lorem ipsum dolor sit amet consectetur. Lacus pulvinar interdum elementum amet ornare id. Feugiat tempus.',
          timeAgo: '58m ago',
        },
        {
          id: 3,
          imageSrc: `${itemImg2}`,
          description:
            'Lorem ipsum dolor sit amet consectetur. Lacus pulvinar interdum elementum amet ornare id. Feugiat tempus.',
          timeAgo: '1h ago',
        },
        // Add more notifications as needed
      ]

      setNotifications(mockNotifications)
    }

    fetchNotifications()
  }, [])

  const handleGoBack = () => {
    navigate(-1)
  }
  const sortedNotifications = [...notifications].sort((a, b) => (a.seen === b.seen ? 0 : a.seen ? 1 : -1));

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
        {sortedNotifications.map((notification) => (
          <div
            className={`notification-item ${notification.seen ? 'seen' : 'unseen'}`}
            key={notification.id}
          >
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
      <div className="footer-section w-100">
        <AppFooter />
      </div>
    
    </>
  )
}
