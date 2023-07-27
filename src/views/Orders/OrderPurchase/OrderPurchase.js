/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import backicon from '../../../assets/images/NavbarIcon/arrow.png'
import './OrderPurchase.css'
import orderimg from '../../../assets/images/higrow/image 133.png'
import { useNavigate } from 'react-router-dom'
function OrderPurchase() {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  // data of items and rate
  const [orderItems, setOrderItems] = useState([
    {
      id: 33216,
      productName: 'Collar tees',
      rate: 275.0,
    },
    // Add more items here
  ])

  // Function to get the current date in the format: DD/MM/YYYY
  const getCurrentDate = () => {
    const currentDate = new Date()
    const day = String(currentDate.getDate()).padStart(2, '0')
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const year = currentDate.getFullYear()
    return `${day}/${month}/${year}`
  }

  return (
    <>
      <header className="purchase">
        <div className="purchase-conatiner">
          <div className="purchase-left-side">
            <img src={backicon} alt="Back" onClick={handleGoBack} />
          </div>
          <div className="purchase-center">
            <h1>Purchase Order</h1>
          </div>
        </div>
      </header>

      <div className="purchase-body">
        <div className="purchase-body-container">
          {/* Date input */}
          <label htmlFor="Date">Date</label> <br />
          <input type="text" value={getCurrentDate()} readOnly />
        </div>

        <div className="purchase-body-container">
          {/* Destination input */}
          <label htmlFor="Destination">Destination</label> <br />
          <input type="text" id="Destination" />
        </div>

        <div className="purchase-body-container">
          {/* Transportation dropdown */}
          <label htmlFor="Transportation">Transportation</label> <br />
          <select id="Transportation">
            <option value="option1">COURIER</option>
            <option value="option2">COURIER</option>
            <option value="option3">COURIER</option>
          </select>
        </div>
      </div>
      <div className="order-container">
        <div className="order">
          {orderItems.map((item) => (
            <div className="left-side" key={item.id}>
              <img src={orderimg} alt="Order" />
              <div className="order-details">
                <h4>
                  <span className="left-order-span">{item.id}</span> <br /> {item.productName}
                </h4>
                <h4>
                  Rate: <br />
                  <span className="left-order-span">₹{item.rate}</span>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
     <div className="calculation">
        <div className="calculation-container">
      <button className='order-btn'>Proceed to Order</button>
          <div className="below-coontainer">
            <p className="rate">Rate <span> ₹275.00</span></p>
            <div className='gst-container'> 
              <p className="gst">SGST 1% <span>₹ 2.7</span></p>
              <p className="gst">CGST 1% <span>₹ 2.7</span></p>
            </div>

            <div className="total">
            <hr />
              <h6>₹280.40</h6>
            </div>
            <div className='discount'>
              <p className="discount-total">
                Discount <span>₹ 28.04</span>
                <hr/>
              </p>
            </div>
            <div className='total-amount'>
          
              <h4>Total Price <span>₹ 252.36</span></h4>
              </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default OrderPurchase
