/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import backicon from '../../assets/images/NavbarIcon/arrow.png';
import carticon from '../../assets/images/NavbarIcon/cart.png';
import editOder from '../../assets/images/icons/edit (5) 1.png';
import deletedOrder from '../../assets/images/icons/Vector.png';
import PlacedOrderImg from '../../assets/images/higrow/image 133.png';
import PlacedOrderIcon from '../../assets/images/icons/arrow (1).png'
import './OrderPlaced.css';

export default function Orderplaced() {
  const [promoCode, setPromoCode] = useState('');

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleApplyPromoCode = () => {
    // Implement logic to apply the promo code here
  };

  const handleAddMoreItems = () => {
    // Implement logic to add more items to the order
  };

  const handleProceedToCheckout = () => {
    // Implement logic to proceed to checkout
  };

  const handleGoBack = () => {
    // Implement logic to navigate back to the previous page
  };

  const handleGoToOrderList = () => {
    // Implement logic to navigate to the order list page
  };

  const orderItems = [
    {
      id: 83748731,
      productName: 'Product 1',
      rate: 20,
    },
    // Add more items here
  ];

  const totalItems = orderItems.length;
  const totalPrice = orderItems.reduce((total, item) => total + item.rate, 0);

  return (
    <>
      <header className="navbar">
        <div className="navbar-conatiner">
          <div className="left-side" onClick={handleGoBack}>
            <img src={backicon} alt="Back" />
          </div>
          <div className="center">
            <h1>Cart</h1>
          </div>
          <div className="right-side" onClick={handleGoToOrderList}>
            <img src={carticon} alt="Order List" />
          </div>
        </div>
      </header>
      <div className="below-header-container">
        <div className="order-container">
          <div className="order">
            {orderItems.map((item) => (
              <div className="left-side" key={item.id}>
                <img src={PlacedOrderImg} alt="Order" />
                <div className="order-details">
                  <h4>{item.id}</h4>
                  <p>{item.productName}</p>
                  <p>
                    Rate: <br />
                    <span>₹{item.rate}</span>
                  </p>
                </div>
              </div>
            ))}
            <div className="right-side">
              <img src={editOder} alt="Edit" />
              <img src={deletedOrder} alt="Delete" />
            </div>
          </div>
        </div>
        <div className="promo-code-container">
          <div className="promo-code-input">
            <input
              type="text"
              value={promoCode}
              onChange={handlePromoCodeChange}
              placeholder="Promo Code"
            />
          </div>
          <button onClick={handleApplyPromoCode}>Apply</button>
        </div>
      </div>
      <div className="add-more-container">
        <button onClick={handleAddMoreItems}>Add More</button>
      </div>
      <div className="total-container">
        <div className="total-items">Total ({totalItems} item)</div>
        <div className="total-price"> Total price {""} <br/> ₹ <span className='total-items'> {totalPrice} </span></div>

      </div>
        <div className="proceed-to-checkout-container">
        <div className="proceed-to-check">
          <button onClick={handleProceedToCheckout}>Proceed to Checkout<span className='placeOrder-icon'><img src={PlacedOrderIcon} alt="icon"/></span></button>
          </div>
        </div>
    </>
  );
}
