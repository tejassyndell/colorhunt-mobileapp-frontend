/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArticleDetails } from 'src/views/api/api'
import './details-of-product.css'
import Menubar from 'src/assets/Colorhuntimg/menu bar (1).svg'
import PropTypes from 'prop-types'

const ArticlesCount = ({ item, quantities, setQuantities }) => {
  const [quantity, setQuantity] = useState(0)

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0))
  }

  return (
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
  )
}

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
    }),
  ).isRequired,
  setQuantities: PropTypes.func.isRequired,
}

export default function Detailsofproduct() {
  const updateQuantities = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => {
      return prevQuantities.map((q) => (q.id === itemId ? { ...q, quantity: newQuantity } : q))
    })
  }
  const navigate = useNavigate()

  const handleSizeClick = (size) => {}
  const [quantities, setQuantities] = useState([])
  const { id } = useParams()

  useEffect(() => {
    ArticleDetailsData()
  }, [])

  const [articlePhotos, setArticlePhotos] = useState([])
  const [articleCategory, setArticleCategory] = useState()
  const [articleRatio, setArticleRatio] = useState()
  const [articleRate, setArticleRate] = useState()
  const [articleSizeData, setArticleSizeData] = useState()
  const [articleColorver, setArticleColorver] = useState([])
  const [articleNumber, setArticlenumber] = useState()
  const [salesnopacks, setSalesnopacks] = useState()

  const ArticleDetailsData = async () => {
    let data = {
      ArticleId: id,
      PartyId: 197,
    }
    try {
      const res = await ArticleDetails(data)
      console.log('dd', res.data)
      console.log('ressss:::', JSON.parse(res.data.calculatedData[0].ArticleColor))
      setArticlePhotos(res.data.photos)
      setArticleCategory(res.data.calculatedData[0].Category)
      setArticleRatio(res.data.calculatedData[0].ArticleRatio)
      setArticleRate(res.data.calculatedData[0].ArticleRate)
      setArticleSizeData(JSON.parse(res.data.calculatedData[0].ArticleSize))
      setArticleColorver(JSON.parse(res.data.calculatedData[0].ArticleColor))
      setArticlenumber(res.data.calculatedData[0].ArticleNumber)
      setSalesnopacks(res.data.calculatedData[0].SalesNoPacks)
    } catch (error) {
      console.log(error)
    }
  }

  console.log('salesnopacks', salesnopacks)
  console.log('articlecolorver', articleColorver)
  const price = 0
  const formatPrice = (value) => {
    return `₹${value.toFixed(2)}`
  }

  // uploard url image
  const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/'
  const imageElements = articlePhotos.map((fileName, index) => (
    <img src={baseImageUrl + fileName} alt={''} key={index} />
  ))

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0))
  }
  return (
    <div className="app-container">
      <div className="reactangle"></div>
      <div className="menu-bar">
        <img src={Menubar} alt="" onClick={() => navigate('/dashboard')} />
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        className=""
      >
        {imageElements.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="image-container">{image}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="artical-name">{articleNumber}</div>

      <div className="main-product-detail">
        <div className="product-detail">
          <div className="product-detail-sec">
            <h6 className="size-label">Size</h6>
            <div className="size-container1">
              {articleSizeData &&
                articleSizeData.map((item, index) => (
                  <div className="size-options" key={index}>
                    <div className="size">
                      <a href="/" onClick={() => handleSizeClick(item.Name)}>
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
              {console.log('Articlecolorverggg:', articleColorver)}
              {articleColorver.map((item) => (
                <div key={item.Id}>
                  <div className="row">
                    <div className="color-box">{item.Name}</div>
                    <div className="available-box">{salesnopacks}</div>
                    <div className="qty-box">
                      <div className="top-row">
                        <div className="box">
                          <div className="inner-box">
                            <button onClick={handleDecrease}>-</button>
                          </div>
                        </div>
                        <div className="box">
                          <div className="inner-box">
                            <span>{0}</span>
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
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="article-ratio-Section">
          <div className="article-ratio-container">
            <div className="artical-ration-title">
              <span>Artical Ration</span>
              <div className="article-rate-content">{articleRatio}</div>
            </div>
          </div>
          <div className="article-rate-container">
            <div className="artical-rate-title">
              <span>Artical Rate</span>
              <div className="article-rate-content">{articleRate}</div>
            </div>
          </div>
        </div>
        <div className="total-price-container">
          <div>
            <span className="total-price-title">Total Price</span>
          </div>
          <div>
            <span className="total-price-text">{formatPrice(price)}</span>
          </div>
          <div className="add-to-card-container">
            <button className="add-to-cart-button">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
