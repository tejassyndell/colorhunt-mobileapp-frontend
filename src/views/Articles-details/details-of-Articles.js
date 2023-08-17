/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArticleDetails } from 'src/views/api/api'
import './details-of-product.css'
import Menubar from 'src/assets/Colorhuntimg/menu bar (1).svg'
import axios from 'axios'
import cart from '../../assets/images/icon.png'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
  const [nopacks, setNopacks] = useState(0)
  const [combinedArray, setCombinedArray] = useState([])

  const ArticleDetailsData = async () => {
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
      setNopacks(res.data.calculatedData[0].NoPacks)
      console.log(nopacks)
      // const salesnopackstoArray = res.data.calculatedData[0].SalesNoPacks.split(",");
      // const salesnopackstoArray = [1, 2, 3, 4]
      const salesnopackstoArray = [nopacks]
      setAvailableStock(salesnopackstoArray.map((stock) => parseInt(stock)))
      console.log(availableStock)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
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
        Rate: articleRate,
      }
    })
    setCombinedArray(combinedArray)
    const defaultQuantities = {}
    combinedArray.forEach((item) => {
      defaultQuantities[item.index] = 0
    })
    setQuantities(defaultQuantities)
    
  }, [articleColorver, availableStock, articleRate])

  const addtocart = async (PartyId, ArticleId) => {
    if (!combinedArray) {
      console.log('undefined')
      return
    }
    const colorwiseQuantities = combinedArray.map((coloritem) => quantities[coloritem.index])
    console.log('colorwise quantity :', colorwiseQuantities)
    const colorwiseQuantitiesTOstring = colorwiseQuantities.join(',')
    console.log('cqty to string ', colorwiseQuantitiesTOstring)
    console.log(totalPrice)
    const data = {
      party_id: PartyId,
      article_id: ArticleId,
      Quantity: colorwiseQuantitiesTOstring,
      rate: totalPrice,
    }
    try {
      const response = await axios.post('http://localhost:4000/addtocart', data)
      console.log('APi Response:', response.data)
    } catch (error) {
      console.log('Error Adding to Cart:', error)
    }
    navigate('/cart_list', { state: { totalPrice } })
  }

  const totalPrice = Object.keys(quantities).reduce(
    (total, colorIndex) => total + quantities[colorIndex] * (combinedArray[colorIndex].Rate/10),
    0,
  )
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
    console.log(quantities[colorIndex])
    console.log(combinedArray[colorIndex].available)
    if (quantities[colorIndex] < nopacks) {
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
  const totalQuantity = Object.values(quantities).reduce((total, quantity) => total + quantity, 0);
  console.log(totalQuantity)
  return (

    <div className="app-container">
        <div className="menu-bar">
        <img src={Menubar} alt="" onClick={() => navigate('/dashboard')} />
      </div>

      <div className="image-slider">
        <Carousel
          autoPlay={true}
          interval={3000} // Interval between slides in milliseconds
          infiniteLoop={true}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          stopOnHover={false}
          dynamicHeight={false}
        >
          {articlePhotos.map((fileName, index) => (
            <div key={index}>
              <img
                src={baseImageUrl + fileName}
                alt=""
                className="image-slide"
              />
            </div>
          ))}
        </Carousel>
      </div>
      
      <div className="artical-name">Artical No:{articleNumber}</div>
      <div className="main-product-detail">
        <div className="product-detail">
          <div className="product-detail-sec">
            <div className="size-label">Size</div> 
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
            <div className="size-label1">Category</div>
            <div className="size-container2">
              <div className="size-options">
                <p>{articleCategory}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-detail-sec3">
          <div className="container-gid">
            <div className="header-gid">
            <div className='color-div'>
              <div className="color-title">Color</div>
              </div>
              <div className='available-div'>
              <div className="available-title">Available in Stock</div></div>
              <div className='qty-div'>
              <div className="qty-title">Add Qty.</div>
              </div>
            </div>
            <div className="body-main-con">
              {combinedArray.map((item) => (
                <div key={item.Id}>
                  <div className="row">
                  <div className='color-box-div'>
                    <div className="color-box">{item.Name}</div>
                    </div>
                    <div className='available-box-div'>
                    <div className="available-box">{nopacks}</div>
                    </div>
                    {/* <div className="available-box">{item.available}</div> */}
                    <div className='qty-box-div'>
                    <div className="qty-box">
                      <div className="top-row">
                        <div className="box1">
                          
                            <button
                              onClick={() => handleDecrease(item.index)}
                              disabled={quantities[item.index] <= 0}
                            >
                              -
                            </button>
                          
                        </div>
                        <div className="box2">
                          
                          
                            <span>{quantities[item.index]}</span>
                          
                        </div>
                        <div className="box3">
                         
                            {console.log(quantities[item.index])}
                            {console.log(nopacks)}
                            <button
                              onClick={() => handleIncrease(item.index)}
                              disabled={quantities[item.index] >= nopacks}
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
              <div className='articallabel'>Artical Ratio</div>
              <div className="article-ratio-content">{articleRatio}</div>
            
  </div> 

          <div className="article-rate-container">
            
              <div className='articallabel1'>Artical Rate</div>
              <div className="article-rate-content">{articleRate / 10}</div>
           
          </div>
        </div>
        <div className="total-price-container">
          <div className='main-total-div'>
            <span className="total-price-title">Total Price</span> <br/>
            <span className="total-price-dig">{formatPrice(totalPrice)}</span>
          </div>
          
          
          <div className="add-to-card-container">
            <button className="add-to-cart-button" onClick={() => addtocart(197, id)} disabled={totalQuantity === 0} >
              Add To Cart
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}
