/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import menubar from '../../assets/Colorhuntimg/menu bar (1).svg'
import bagicon from '../../assets/Colorhuntimg/bagicon.svg'
import editicon from '../../assets/Colorhuntimg/edit.svg'
import deleteicon from '../../assets/Colorhuntimg/delete.svg'
import proceedicon from '../../assets/Colorhuntimg/proceed.svg'
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/'

function OrderPlaced() {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [orderItems, setOrderItems] = useState([])

  const location = useLocation()
  const { finalPrice } = location.state || {}

  useEffect(() => {
    axios
      .post('http://localhost:4000/cartdetails', { party_id: 197 }) // Sending the party_id as data
      .then((response) => {
        console.log(response.data);
        setOrderItems(response.data); // Assuming the response data is an array of order items
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);
  console.log("orderItems",orderItems)
  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleApplyPromoCode = () => {
    // Implement logic to apply the promo code here
  };

  const handleAddMoreItems = () => {
    navigate('/dashboard');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToOrderList = () => {
    navigate('/orderplaced');
  };

  const handleProceedToCheckout = () => {
    navigate('/orderpurchase'); // Update the route path as per your routing setup
  };

  const handleDeleteOrder = (orderId) => {
    // Implement logic to delete the order item with the given orderId
    const updatedOrderItems = orderItems.filter((item) => item.id !== orderId);
    setOrderItems(updatedOrderItems);
  };

  const totalItems = orderItems.length;
  const totalPrice = orderItems.reduce((total, item) => total + item.rate, 0);

  const cartIsEmpty = orderItems.length === 0;

  return (
    <>
      <header className="navbar">
        <div className="navbar-conatiner">
          <div className="left-side">
            <img src={menubar} alt="Back" onClick={handleGoBack} />
          </div>
          <div className="center">
            <h1>Cart</h1>
          </div>
          <div className="right-side">
            <img src={bagicon} style={{backgroundColor:"black"}} alt="Order List" onClick={handleGoToOrderList} />
          </div>
        </div>
      </header>
      <div className="below-header-container">
        {cartIsEmpty ? (
          <div className="empty-cart-message">
            <p>Your Cart is Empty</p>
          </div>
        ) : (
          <>
            <div className="order-container">
              <div className="order">
                {orderItems.map((item) => (
                  <div className="left-side" key={item.id}>
                    <img src={baseImageUrl + item.Photos.split(',')[0]} alt="Order" />
                    <div className="order-details">
                      <h4>
                        <span className="left-order-span">{item.ArticleNumber}</span> <br /> {item.StyleDescription}
                      </h4>
                      <h4>
                        Rate: <br />
                        <span className="left-order-span">₹{item.articleRate}</span>
                      </h4>
                    </div>
                  </div>
                ))}
                <div className="right-side">
                  <img src={editicon} alt="Edit" />
                  <img
                    src={deleteicon}
                    alt="Delete"
                    onClick={() => handleDeleteOrder(orderItems[0].id)} // For simplicity, deleting the first item when the delete icon is clicked
                  />
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
            <div className="add-more-container">
              <button onClick={handleAddMoreItems}>Add More</button>
            </div>
            <div className="total-container">
              <div className="total-items">Total ({totalItems} item) :</div>
              <div className="total-price">
                {' '}
                Total price {''} <br /> <span className="total-item"> ₹ {finalPrice} </span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="proceed-to-checkout-container">
        {cartIsEmpty ? (
          <div className="proceed-to-createOrder">
            <button onClick={handleAddMoreItems}>Create Order</button>
          </div>
        ) : (
          <>
            <div className="proceed-to-check">
              <button onClick={handleProceedToCheckout}>
                Proceed to Checkout
                <span className="placeOrder-icon">
                  <img src={proceedicon} alt="icon" />
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default OrderPlaced;
