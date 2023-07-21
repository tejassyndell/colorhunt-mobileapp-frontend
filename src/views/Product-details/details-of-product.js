import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css';
import '../Product-details/details-of-product.css';
import SliderImg1 from 'src/assets/Colorhuntimg/product-img/product1.png';
import SliderImg2 from 'src/assets/Colorhuntimg/product-img/product2.png';
import Menubar from 'src/assets/Colorhuntimg/product-img/menubar.png';

export default function Detailsofproduct() {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    // Add any logic you need when a size is selected (e.g., update cart, trigger an action, etc.).
    // For this example, we are only updating the selected size state.
  };

  return (
    <div className="app-container">
      <div className="reactangle"></div>
      <div className="menu-bar">
        <img src={Menubar} alt="" />
      </div>
      <div className='swiper-container'>
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
      </div>
      {/* Add more slides as needed */}
      <div className="product-detail">
        <div className="product-detail-sec">
          <h6 className="size-label">Size</h6>
          <div className="size-container1">
            <div className="size-options">
              <div className="size">
                <a href="#" onClick={() => handleSizeClick('M')}>
                  M
                </a>
                <div className="size">
                  <a href="#" onClick={() => handleSizeClick('L')}>
                    L
                  </a>
                </div>
                <div className="size"></div>
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
    </div>
  );
}
