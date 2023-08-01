/* eslint-disable prettier/prettier */
import React from 'react'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleDetails } from 'src/views/api/api';
import './details-of-product.css'
import Menubar from 'src/assets/Colorhuntimg/menu bar (1).svg'
// import CartIcon from 'src/assets/Colorhuntimg/product-img/icon.png'
import PropTypes from 'prop-types';


const ArticlesCount = ({ item, quantities, setQuantities }) => {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    // Set the quantity from the quantities array if it's available
    const matchingQuantity = quantities.find((q) => q.id === item.id);
    if (matchingQuantity) {
      setQuantity(matchingQuantity.quantity);
      console.log(matchingQuantity.quantity);
    }
  }, [quantities, item.id]);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    updateQuantities(item.id, quantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    updateQuantities(item.id, Math.max(quantity - 1, 0));
  };

  const updateQuantities = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => {
      return prevQuantities.map((q) => (q.id === itemId ? { ...q, quantity: newQuantity } : q));
    });
  };

  return (
    <>
      <div className="row">
        <div className="color-box">{item.color}</div>
        <div className="available-box">{item.available}</div>

        <div className="qty-box">
          <div className="top-row">
            <div className="box">
              <div className="inner-box">
                <button onClick={handleDecrease}>-</button>
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
    </>
  );
};

ArticlesCount.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    available: PropTypes.number.isRequired,
  }).isRequired,
  quantities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setQuantities: PropTypes.func.isRequired,
};


export default function Detailsofproduct() {
  const [selectedSize, setSelectedSize] = useState('')
  const navigate = useNavigate()


  const handleSizeClick = (size) => {
    setSelectedSize(size)
    // Add any logic you need when a size is selected (e.g., update cart, trigger an action, etc.).
    // For this example, we are only updating the selected size state.
  }
  const data = [
    { id: 1, color: '01-30 TO 36', available: 10 },
    { id: 2, color: '02-30 TO 36', available: 15 },
    { id: 3, color: '03-30 TO 36', available: 8 },
    // Add more data for other rows
  ];

  const { id } = useParams();

  useEffect(() => {
    ArticleDetailsData();
  }, [])

  const [articlePhotos, setArticlePhotos] = useState([])
  const [articleCategory, setArticleCategory] = useState()
  const [articleRatio, setArticleRatio] = useState()
  const [articleRate, setArticleRate] = useState()
  const [articleSize, setArticleSize] = useState()
  const [articleColor, setArticleColor] = useState()
  const [articleSizeData, setArticleSizeData] = useState()
  const [articleColorver, setArticleColorver] = useState()


  const ArticleDetailsData = async () => {

    let data = {
      ArticleId: id,
      PartyId: 197,
    }
    try {
      await ArticleDetails(data).then((res) => {
        console.log(res.data);
        setArticlePhotos(res.data.photos)
        setArticleCategory(res.data.calculatedData[0].Category)
        setArticleRatio(res.data.calculatedData[0].ArticleRatio)
        setArticleRate(res.data.calculatedData[0].ArticleRate)
        setArticleSize(res.data.calculatedData[0].ArticleSize)
        setArticleColor(res.data.calculatedData[0].ArticleColor)
        console.log(res.data.calculatedData[0].ArticleSize);
        // setArticleColor(res.data.calculatedData.ArticleColor)

      })

    } catch (error) {
      console.log(error);
    }

  }
  console.log(articleSize);
  console.log(articleSizeData);

  useEffect(() => {
    console.log('articleSize in useEffect:', articleSize);
    try {
      const parsedArticleSize = JSON.parse(articleSize);
      const ArticleColorData = JSON.parse(articleColor)
      setArticleSizeData(parsedArticleSize);
      setArticleColorver(ArticleColorData);
    } catch (error) {
    }
  }, [articleSize,articleColor]);

  console.log(articleColorver);

  const [quantities, setQuantities] = useState(data.map((item) => ({ id: item.id, quantity: 0 })));


  const [price, setPrice] = useState(0);
  // Function to format the price to have two decimal places
  const formatPrice = (value) => {
    return `₹${value.toFixed(2)}`;
  };

  // uploard url image
  const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/';

  const imageElements = articlePhotos.map((fileName, index) => (
    <img src={baseImageUrl + fileName} alt={''} key={index} />
  ));



  return (
    <div className="app-container">
      <div className="reactangle"></div>
      <div className="menu-bar">
        <img src={Menubar} alt="" onClick={() => navigate('/dashboard')} />
      </div>

      <Swiper
        spaceBetween={10} // Set the space between slides 
        slidesPerView={1} // Number of slides visible at once
        loop={true} // Infinite loop
        pagination={{ clickable: true }} // Show pagination dots
        onSwiper={(swiper) => console.log(swiper)}
        className="" // Add this class for styling
      >
      {imageElements.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="image-container">{image}</div>
        </SwiperSlide>
      ))}
      </Swiper>

      <span className='artical-name'>Artical</span>
      <span className='artical-no'>33216</span>
      {/* Add more slides as needed */}
      <div className="main-product-detail">
        <div className="product-detail">
          <div className="product-detail-sec">
            <h6 className="size-label">Size</h6>
            <div className="size-container1">
              {articleSizeData &&
                articleSizeData.map((item, index) => (
                  <div className="size-options" key={index}>
                    {console.log(item.Name)}
                    <div className="size">
                      <a href="#" onClick={() => handleSizeClick(item.Name)}>
                        {item.Name}
                      </a>
                    </div>
                  </div>
                ))}

            </div>
          </div>
          <div className="product-detail-sec2">
            <div className="size-label">Category</div>
            <div className="size-container2">
              <div className="size-options">
                <p>{articleCategory}</p>
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
              {data.map((item, index) => {
                return (
                  <ArticlesCount
                    key={index}
                    item={item}
                    quantities={quantities}
                    setQuantities={setQuantities}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className='article-ratio-Section'>
          <div className="article-ratio-container">
            <div className='artical-ration-title'>
              <span>Artical Ration</span>
              <div className="article-rate-content">
                {articleRatio}
              </div>
            </div>

          </div>
          <div className="article-rate-container">
            <div className='artical-rate-title'>
              <span>Artical Rate</span>
              <div className="article-rate-content">{articleRate}
              </div>
            </div>
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
              {/* <img src={CartIcon} className="cart-icon" alt="" /> */}
              Add To Cart
            </button>
          </div>
        </div>

      </div>




    </div>
  )
}
