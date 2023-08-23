/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react'
import menubar from '../../assets/Colorhuntimg/menu bar (1).svg'
import bagicon from '../../assets/Colorhuntimg/bagicon.svg'
import editicon from '../../assets/Colorhuntimg/edit.svg'
import deleteicon from '../../assets/Colorhuntimg/delete.svg'
import proceedicon from '../../assets/Colorhuntimg/proceed.svg'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/'

function OrderPlaced() {
  const navigate = useNavigate()
  const [promoCode, setPromoCode] = useState('')
  const [orderItems, setOrderItems] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    axios
      .post('http://localhost:4000/cartdetails', { party_id: 197 }) // Sending the party_id as data
      .then((response) => {
        console.log('Api response :', response.data)
        const parsedOrderItems = response.data.map((item) => ({
          ...item,
          Quantity: JSON.parse(item.Quantity), // Parse the Quantity string into an array
        }))
        setOrderItems(parsedOrderItems)
        setDataLoaded(true)
      })
      .catch((error) => {
        console.log('Error fetching data:', error)
      })
  }, [])

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value)
  }

  const handleApplyPromoCode = () => {
    // Implement logic to apply the promo code here
  }

  const handleAddMoreItems = () => {
    navigate('/dashboard')
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleGoToOrderList = () => {
    navigate('/orderplaced')
  }

  const handleProceedToCheckout = () => {
    navigate('/orderpurchase') // Update the route path as per your routing setup
  }

  const handleDeleteOrder = async (article_id) => {
    const data = {
      party_id: 197,
      article_id: article_id,
    }
    try {
      await axios.post('http://localhost:4000/deletecartitem', data)
      const updatedcartitems = orderItems.filter((item) => item.article_id !== article_id)
      setOrderItems(updatedcartitems)
    } catch (error) {
      console.log('Erro deleting article:', error)
    }
  }
  const handleEditOrder = (article_id) => {
    const ArticalId = article_id
    // const PartyId = 197
    navigate(`/editarticledetails/${ArticalId}`)

    // navigate('/editarticledetails')
  }
  const totalItems = orderItems.length
  const totalPrice = orderItems.reduce((total, item) => total + item.rate, 0)
  const cartIsEmpty = orderItems.length === 0

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
            <img
              src={bagicon}
              style={{ backgroundColor: 'black' }}
              alt="Order List"
              onClick={handleGoToOrderList}
            />
          </div>
        </div>
      </header>
      <div className="below-header-container">
        {dataLoaded ? (
          cartIsEmpty ? (
            <>
              <div className="empty-cart-message">
                <p>Your Cart is Empty</p>
              </div>
              <div className="proceed-to-createOrder">
                <button onClick={handleAddMoreItems}>Create Order</button>
              </div>
            </>
          ) : (
            <>
              <div className="order-container">
                {orderItems.map((item) => (
                  <div className="order" key={item.id}>
                    <div className="left-side">
                      <img src={baseImageUrl + item.Photos.split(',')[0]} alt="Order" />
                      <div className="order-details">
                        <h4>
                          <span className="left-order-span">{item.ArticleNumber}</span> <br />{' '}
                          {item.StyleDescription}
                        </h4>
                        <h4>
                          Rate: <br />
                          <span className="left-order-span">₹{item.rate}</span>
                        </h4>
                      </div>
                    </div>
                    <div className="right-side">
                      <img
                        src={editicon}
                        alt="Edit"
                        onClick={() => handleEditOrder(item.article_id)}
                      />
                      <img
                        src={deleteicon}
                        alt="Delete"
                        onClick={() => handleDeleteOrder(item.article_id)}
                      />
                    </div>
                  </div>
                ))}
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
                  Total price <br /> <span className="total-item"> ₹ {totalPrice} </span>
                </div>
              </div>
            </>
          )
        ) : (
          <div className="empty-cart-message"></div>
        )}
      </div>
      <div className="proceed-to-checkout-container">
        {cartIsEmpty ? (
          <div></div>
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
  )
}

export default OrderPlaced
