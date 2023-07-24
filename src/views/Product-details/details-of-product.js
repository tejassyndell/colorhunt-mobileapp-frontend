/* eslint-disable prettier/prettier */
import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../Product-details/details-of-product.css'
import SliderImg1 from 'src/assets/Colorhuntimg/product-img/product1.png'
import SliderImg2 from 'src/assets/Colorhuntimg/product-img/product2.png'
import Menubar from 'src/assets/Colorhuntimg/product-img/menubar.png'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import CartIcon from 'src/assets/Colorhuntimg/product-img/icon.png'

export default function Detailsofproduct() {
  const [selectedSize, setSelectedSize] = useState('')

  const handleSizeClick = (size) => {
    setSelectedSize(size)
    // Add any logic you need when a size is selected (e.g., update cart, trigger an action, etc.).
    // For this example, we are only updating the selected size state.
  }
  const data = [
    { color: '01-30 TO 36', available: 10 },
    { color: '02-30 TO 36', available: 15 },
    { color: '03-30 TO 36', available: 8 },
    // Add more data for other rows
  ]

  
    const [quantity, setQuantity] = useState(0);
  
    const handleIncrease = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const handleDecrease = () => {
      setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    };
  

  const [price, setPrice] = useState(0);

  // Function to format the price to have two decimal places
  const formatPrice = (value) => {
    return `₹${value.toFixed(2)}`;
  };

  

  return (
    <div className="app-container">
      <div className="reactangle"></div>
      <div className="menu-bar">
        <img src={Menubar} alt="" />
      </div>
      
        <Swiper
          spaceBetween={10} // Set the space between slides 
          slidesPerView={1} // Number of slides visible at once
          loop={true} // Infinite loop
          pagination={{ clickable: true }} // Show pagination dots
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="" // Add this class for styling
        >        
          <SwiperSlide>
            <img src={SliderImg1} className="slider-img1" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SliderImg2} className="slider-img2" alt="" />
          </SwiperSlide>
        </Swiper>
      
      {/* Add more slides as needed */}
      <div className="main-product-detail">
        <div className="product-detail">
          <div className="product-detail-sec">
            <h6 className="size-label">Size</h6>
            <div className="size-container1">
              <div className="size-options">
                <div className="size">
                  <a href="#" onClick={() => handleSizeClick('M')}>
                    M
                  </a> </div>
                  <div className="size">
                    <a href="#" onClick={() => handleSizeClick('L')}>
                      L
                    </a>
                  </div>
                  <div className="size">
                  <a href="#" onClick={() => handleSizeClick('XL')}>
                    XL
                  </a>
                  </div>               
              </div>
            </div>
          </div>
          <div className="product-detail-sec2">
            <div className="size-label">Category</div>
            <div className="size-container2">
              <div className="size-options">
                <p>Collor Tees</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-detail-sec3">
          
            <div className="container">
                <div className="header">
                  <div className="color-title">Color</div>
                  <div className="available-title">Available in Stock</div>
                  <div className="qty-title">Add Qty.</div>
                </div>
                <div className="body">
                  {data.map((item, index) => (
                    <div className="row" key={index}>
                      <div className="color-box">{item.color}</div>
                      <div className="available-box">{item.available}</div>
                      
                      <div className="qty-box">
                        <div className="top-row">
                          <div className="box">
                            <div className="inner-box">
                              <button onClick={handleDecrease} >-</button>
                            </div>
                          </div>
                          <div className="box">
                            <div className="inner-box">
                              <span>{quantity}</span>
                            </div>
                          </div>
        <div className="box">
          <div className="inner-box">
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
      </div>
    </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
          <div className="article-ratio-container">
          <div className='artical-ration-title'>
            <span>Artical Ration</span>
          </div>
        <div className="article-rate-content">
          <span className="article-rate-text">01:01:01</span>
        </div>
    </div>
    <div className="article-rate-container">
          <div className='artical-rate-title'>
            <span>Artical Rate</span>
          </div>
        <div className="article-rate-content">
          <span className="article-rate-text">275</span>
        </div>
    </div>
    <div className="total-price-container">
          <div>
            <span className='total-price-title'>Total Price</span>
          </div>
          <div>
            <span className="total-price-text">{formatPrice(price)}</span>
      </div>
      <div className='add-to-card-container'>
    <button className="add-to-cart-button" onClick=''>
    <img src={CartIcon} className="cart-icon" alt="" />
      Add To Cart
    </button>
    </div>
    </div>
    
        </div>
       
    
    </div>
  )
}
