/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import backicon from '../../assets/images/NavbarIcon/arrow.png';
import carticon from '../../assets/images/NavbarIcon/cart.png';
import editOder from '../../assets/images/icons/edit (5) 1.png';
import deletedOrder from '../../assets/images/icons/Vector.png';
import PlacedOrderImg from '../../assets/images/higrow/image 133.png';
import PlacedOrderIcon from '../../assets/images/icons/arrow (1).png';
import './OrderPlaced.css';
import { useNavigate } from 'react-router-dom';

function OrderPlaced() {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [orderItems, setOrderItems] = useState([
    {
      id: 83748731,
      productName: 'Product 1',
      rate: 20,
    },
    // Add more items here
  ]);

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleApplyPromoCode = () => {
    // Implement logic to apply the promo code here
  };

  const handleAddMoreItems = () => {
    navigate('/dashboard');
  };

  const handleProceedToCheckout = () => {
    // Implement logic to proceed to checkout
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToOrderList = () => {
    // Implement logic to navigate to the order list page
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
                  <img
                    src={deletedOrder}
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
        <div className="total-items">Total ({totalItems} item)</div>
        <div className="total-price"> Total price {""} <br/> ₹ <span className='total-items'> {totalPrice} </span></div>

      </div>
          </>
        )}
      </div>
      {/* ...Add more and total containers... */}
      <div className="proceed-to-checkout-container">
        {cartIsEmpty ? (
          <div className="proceed-to-createOrder">
            <button onClick={handleAddMoreItems}>Create Order</button>
          </div>
        ) : (
          <div className="proceed-to-check">
            <button onClick={handleProceedToCheckout}>
              Proceed to Checkout
              <span className="placeOrder-icon">
                <img src={PlacedOrderIcon} alt="icon" />
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default OrderPlaced;
