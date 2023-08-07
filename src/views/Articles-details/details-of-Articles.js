/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArticleDetails } from 'src/views/api/api'
import './details-of-product.css'
import Menubar from 'src/assets/Colorhuntimg/menu bar (1).svg'
import axios from 'axios'

export default function Detailsofproduct() {
  const navigate = useNavigate()

  const handleSizeClick = (size) => {}
  const { id } = useParams()

  useEffect(() => {
    ArticleDetailsData()
  }, [])
  const [availableStock, setAvailableStock] = useState([])
  const [quantities, setQuantities] = useState({})
  const [articlePhotos, setArticlePhotos] = useState([])
  const [articleCategory, setArticleCategory] = useState()
  const [articleRatio, setArticleRatio] = useState()
  const [articleRate, setArticleRate] = useState()
  const [articleSizeData, setArticleSizeData] = useState()
  const [articleColorver, setArticleColorver] = useState([])
  const [articleNumber, setArticlenumber] = useState()
  const [salesnopacks, setSalesnopacks] = useState('')

  const ArticleDetailsData = async () => {
    const defaultQuantities = {}
    combinedArray.forEach((item) => {
      defaultQuantities[item.index] = 0
    })
    setQuantities(defaultQuantities)
    console.log(combinedArray)
    console.log(quantities)

    let data = {
      ArticleId: id,
      PartyId: 197,
    }
    try {
      const res = await ArticleDetails(data)
      console.log('dd', res.data)
      setArticlePhotos(res.data.photos)
      setArticleCategory(res.data.calculatedData[0].Category)
      setArticleRatio(res.data.calculatedData[0].ArticleRatio)
      setArticleRate(res.data.calculatedData[0].ArticleRate)
      setArticleSizeData(JSON.parse(res.data.calculatedData[0].ArticleSize))
      setArticleColorver(JSON.parse(res.data.calculatedData[0].ArticleColor))
      setArticlenumber(res.data.calculatedData[0].ArticleNumber)
      setSalesnopacks(res.data.calculatedData[0].SalesNoPacks)

      // const salesnopackstoArray = res.data.calculatedData[0].SalesNoPacks.split(",");
      const salesnopackstoArray = [1, 2, 3, 4]

      setAvailableStock(salesnopackstoArray.map((stock) => parseInt(stock)))
      console.log(availableStock)
    } catch (error) {
      console.log(error)
    }
  }
  const colorwithindex = articleColorver.map((element, index) => ({
    ...element,
    index: index,
  }))
  const stockswithindex = availableStock.map((element, index) => ({
    value: element,
    index: index,
  }))
  const combinedArray = colorwithindex.map((coloritem) => {
    const stockitem = stockswithindex.find((stockitem) => stockitem.index === coloritem.index)
    return {
      ...coloritem,
      available: stockitem ? stockitem.value : 0,
      Rate:articleRate
    }
  })

  const addtocart =  async(PartyId, ArticleId) => {
    if(!combinedArray){
      console.log("undefined")
      return;
    }
    console.log(combinedArray)
    const colorwiseQuantities = combinedArray.map((coloritem)=>
      quantities[coloritem.index],
    )
    console.log("colorwise quantity :",colorwiseQuantities)
    const data = {
      party_id : PartyId,
      article_id : ArticleId,
      Quantity: colorwiseQuantities,
    }
    
    try {
      const response = await axios.post('http://localhost:4000/addtocart',data);
      console.log('APi Response:',response.data) 
    } catch (error) {
        console.log("Error Adding to Cart:",error)
    }
    navigate('/cart_list',{ state: { totalPrice } })
  }


  const totalPrice = Object.keys(quantities).reduce(
    (total, colorIndex) => total + quantities[colorIndex] * combinedArray[colorIndex].Rate,
    0
  );
  const formatPrice = (value) => {
    return `₹${value.toFixed(2)}`
  }
  // uploard url image
  const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/'
  const imageElements = articlePhotos.map((fileName, index) => (
    <img src={baseImageUrl + fileName} alt={''} key={index} />
  ))
  const handleIncrease = (colorIndex) => {
    if (!combinedArray || !combinedArray[colorIndex]) {
      return
    }

    if (quantities[colorIndex] < combinedArray[colorIndex].available) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [colorIndex]: prevQuantities[colorIndex] + 1,
      }))
    }
  }

  const handleDecrease = (colorIndex) => {
    if (!combinedArray || !combinedArray[colorIndex]) {
      return
    }
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [colorIndex]: Math.max(prevQuantities[colorIndex] - 1, 0),
    }))
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
              {combinedArray.map((item) => (
                <div key={item.Id}>
                  <div className="row">
                    <div className="color-box">{item.Name}</div>
                    <div className="available-box">{item.available}</div>
                    <div className="qty-box">
                      <div className="top-row">
                        <div className="box">
                          <div className="inner-box">
                            <button
                              onClick={() => handleDecrease(item.index)}
                              disabled={quantities[item.index] <= 0}
                            >
                              -
                            </button>
                          </div>
                        </div>
                        <div className="box">
                          <div className="inner-box">
                            {/* {console.log(quantities[item.index])} */}
                            <span>{quantities[item.index] }</span>
                          </div>
                        </div>
                        <div className="box">
                          <div className="inner-box">
                            {/* <button onClick={() => handleIncrease(item.index)}>+</button> */}
                            <button
                              onClick={() => handleIncrease(item.index)}
                              disabled={quantities[item.index] >= item.available}
                            >
                              +
                            </button>
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
              <span>Artical Ratio</span>
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
            <span className="total-price-text">{formatPrice(totalPrice)}</span>
          </div>
          <div className="add-to-card-container">
            <button className="add-to-cart-button" onClick={()=> addtocart(197,id)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
