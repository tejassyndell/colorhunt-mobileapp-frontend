/* eslint-disable */
import React, { useState, useEffect } from 'react'
import updateicon from '../../assets/Colorhuntimg/dashboard/Group 8922.svg'
import {
  getProductName,
  getCategories,
  getAddWishlist,
  getWishlistData,
  DeleteWishlist,
} from '../api/api'
import { useLocation, useNavigate } from 'react-router-dom'
import './Dashboard.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import { AppHeader } from '../../components/index'
import './DroupDown.css'
import '../../css/ipad.css'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import MultiRangeSlider from 'multi-range-slider-react'
import './serachbar.css'
import AppFooter from 'src/components/AppFooter'
import tshartimg from 'src/assets/Colorhuntimg/sliderimages/33003-5-2-348x464 1.png'
import tshartimg1 from 'src/assets/Colorhuntimg/sliderimages/image 111.png'
import tshartimg2 from 'src/assets/Colorhuntimg/sliderimages/33004-2-2-348x464 1.png'
import crossicon from 'src/assets/Colorhuntimg/sliderimages/crossicon.svg'
import noimage from 'src/assets/Colorhuntimg/dashboard/noimage.png'
import axios from 'axios'
import { getcategorywithphotos } from '../api/api'
const Dashboard = (props) => {
  const { UserData } = props
  const [newdata, setNewdata] = useState([])
  const [nameData, setNameData] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [activeFilterDiv, setActiveFilterDiv] = useState(true)
  const dispatch = useDispatch()
  const Min = 0
  const Max = 700
  const [values, setValues] = useState([Min, Max])
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [ApplyStatushBack, setApplyStatushBack] = useState(true)
  const [applyData, setApplyData] = useState([])
  const [filterDataSearch, setFilterDataSearch] = useState([])
  const [Filterstatus, setFilterstatus] = useState(false)
  const [selectedprd, setSelectprd] = useState([])
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const [isHolding, setIsHolding] = useState(false)

  const handleTouchStart = () => {
    setIsHolding(true)
  }

  const handleTouchEnd = () => {
    setIsHolding(false)
  }
  const isLoggedin = location.state?.isLoggedin
  useEffect(() => {
    getproductname()
    getCategoriesname()
    getWishlist()
    catwithphotos()
  }, [])

  // getAritical api
  const getproductname = async () => {
    const result = await getProductName().then((res) => {
      if (res.status === 200) {
        setNameData(res.data)
        setFilterDataSearch(res.data)
      }
    })
  }
  //getCategoriesname
  const getCategoriesname = async () => {
    const result = await getCategories().then((res) => {
      if (res.status === 200) {
        setCategoriesData(res.data)
      }
    })
  }

  // uploard url image
  const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/'

  // Function to fetch data for the selected categories from the API
  const fetchDataForSelectedCategories = async () => {
    try {
      const data = await response.json()
      // Filter the data based on selectedCategories
      const filteredData = data.filter((category) => selectedCategories.includes(category.name))
      setCategoriesData(filteredData)
    } catch (error) {
      // console.error(error);
    }
  }

  // Call the fetchDataForSelectedCategories function whenever the selectedCategories change
  useEffect(() => {
    fetchDataForSelectedCategories()
  }, [selectedCategories])

  // ------- add product in wishlist start-------------
  const getWishlist = async () => {
    const data = {
      party_id: 197,
    }
    const result = await getWishlistData(data).then((res) => {
      setSelectprd(res.data)
    })
  }

  const addArticleWishlist = async (i) => {
    let data = {
      user_id: 197,
      article_id: i.Id,
    }

    console.log(data)
    try {
      await getAddWishlist(data).then((res) => {
        getWishlist()
      })
    } catch (error) {
      console.log(error)
    }
  }

  const rmvProductWishlist = async (i) => {
    console.log(i, 'r')
    let data = {
      party_id: 197,
      article_id: i.Id,
    }
    console.log(data)

    try {
      await DeleteWishlist(data).then((res) => {
        if (res.status === 200) {
          getWishlist()
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getSingaleartical = (item) => {
    const Category = item.Category
    console.log(Category)
    navigate(`/categoryarticles/${Category}`)
  }

  // search and filter functionality
  const handleChange = (e) => {
    const value = e.target.value
    if (e.target.value === '') {
      console.log(nameData)
      setNameData(nameData)
    } else {
      const filterResult = filterDataSearch.filter(
        (item) =>
          item.ArticleNumber.toString().includes(value.toString()) ||
          item.Category.toLowerCase().includes(value.toLowerCase()) ||
          item.ArticleRate.toString().includes(value.toString()) ||
          item.StyleDescription.toLowerCase().includes(value.toLowerCase()) ||
          item.Subcategory.toLowerCase().includes(value.toLowerCase()),
      )
      console.log(filterResult)
      setNameData(filterResult)
      setApplyData(filterResult)
      console.log(filterResult)
    }

    setInput(value)
  }
  const clearfileds = (cal) => {
    setActiveFilterDiv(false)
    setSelectedCategories([])
    setApplyStatushBack(true)

    console.log(nameData)
  }
  const catagoryselect = () => {
    let sdPrds = nameData.slice()
    const min = parseFloat(values[0])
    const max = parseFloat(values[1])
    if (selectedCategories.length > 0) {
      sdPrds = sdPrds.filter((product) => {
        const category = product.Category
        return selectedCategories.some((checkedCat) => category.includes(checkedCat))
      })
      if (min >= 0 && max <= 700) {
        sdPrds = sdPrds.filter((product) => {
          return product.ArticleRate >= min && product.ArticleRate <= max
        })
        console.log(sdPrds)
      }
      setApplyData(sdPrds)
      setApplyStatushBack(false)
      setFilterstatus(false)
    } else {
      setNameData(sdPrds)
    }
    if (min >= 0 && max >= 700) {
      sdPrds = sdPrds.filter((product) => {
        return product.ArticleRate >= min && product.ArticleRate <= max
      })
      console.log(sdPrds)
      console.log(min, max)
      setApplyData(sdPrds)
      setApplyStatushBack(false)
      setFilterstatus(false)
    } else {
      setNameData(sdPrds)
    }
  }

  useEffect(() => {}, [selectedCategories])

  const catagoryHandler = (e) => {
    if (e.target.name !== undefined) {
      if (selectedCategories.includes(e.target.name)) {
        setSelectedCategories(selectedCategories.filter((category) => category !== e.target.name))
      } else {
        if (e.target.name === undefined) {
          setSelectedCategories([...selectedCategories])
        }
        setSelectedCategories([...selectedCategories, e.target.name])
      }
    }
  }

  const getFontSizeClass = isLoggedin === false ? 'large-font' : 'small-font'

  const catwithphotos = async () => {
    try {
      const res = await getcategorywithphotos()
      setNewdata(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const articlerates = nameData
    .map((item) => parseFloat(item.ArticleRate))
    .filter((rate) => !isNaN(rate))
  const minRate = Math.min(...articlerates)
  const maxRate = Math.max(...articlerates)

  return (
    <motion.div
      initial={{ translateX: '100%', padding: '0px 5px' }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5 }}
      style={{ height: '100vh' }}
      onClick={() => {
        sidebarShow === true ? dispatch({ type: 'set', sidebarShow: !sidebarShow }) : ''
      }}
    >
      {
        activeFilterDiv === true ? (
          <AppHeader UserData={UserData} />
        ) : null /* (isProductDetails === true ? '' : <AppHeader UserData={UserData} />) */
      }
      <div className="filterssectionandheader">
        <div className="dashboardDiv">
          <div className="searchbar_text_container">
            <div className="haddercontent">Welcome</div>
            <div className="haddersearchcontenar">
              <div className="autodiv">
                <div className="search-bar-container">
                  {/* searchbar */}
                  <div className="input-wrapper">
                    <i className="fa fa-search" id="search-icon" aria-hidden="true"></i>
                    <input
                      className="new_search_input"
                      placeholder="Search"
                      value={input}
                      onChange={(e) => {
                        handleChange(e)
                      }}
                      onFocus={() => {
                        setActiveFilterDiv(false)
                      }}
                    ></input>
                  </div>
                </div>
                {/* filtericon */}
              </div>
              <div className="autodivsecond">
                <img
                  src={updateicon}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setFilterstatus(true)}
                />
              </div>
            </div>
          </div>
          <div style={{ padding: '0px 10px' }}>
            <div></div>
          </div>
        </div>
      </div>

      <div className="allProduct-section maincontentsection">
        <div className="product-hed-sec">
          <p>All</p>
          {isLoggedin === false ? (
            <p>View All</p>
          ) : (
            <p
              onClick={() => {
                navigate('/allarticles')
              }}
            >
              View All
            </p>
          )}
        </div>
        <div>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {ApplyStatushBack === true
              ? newdata.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="sildercontentprice">
                      <div id={item.id} className="producticones">
                        {/* {selectedprd.some((i) => i.Id === item.Id) ? (
                          <i
                            className={`fa fa-heart ${isLoggedin === false ? 'disabled-icon' : ''}`}
                            onClick={() => {
                              rmvProductWishlist(item)
                            }}
                          ></i>
                        ) : (
                          <i
                            className={`fa fa-heart-o ${
                              isLoggedin === false ? 'disabled-icon' : ''
                            }`}
                            onClick={() => {
                              addArticleWishlist(item)
                            }}
                          ></i>
                        )} */}
                      </div>
                      <div className="zoomDiv">
                        <img
                          className={`zoom-on-hold ${isHolding ? 'holding' : ''}`}
                          onMouseDown={handleTouchStart}
                          onMouseUp={handleTouchEnd}
                          src={baseImageUrl + item.Photos}
                          onClick={() => getSingaleartical(item)}
                          onError={(e) => {
                            e.target.src = noimage
                          }}
                        />
                      </div>

                      <div>
                        <p>
                          {/* {` ${isLoggedin === false ? '' : item.ArticleNumber}`} */}
                          <br />
                          <span className={getFontSizeClass}>{item.Category}</span>
                          <br />
                          {/* {` ${isLoggedin === false ? '' : '₹' + item.ArticleRate}`} */}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : applyData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="sildercontentprice">
                      <div className="zoomDiv">
                        <img
                          className="zoom"
                          src={baseImageUrl + item.Photos}
                          onClick={() => getSingaleartical(item)}
                          onError={(e) => {
                            e.target.src = noimage
                          }}
                        />
                      </div>
                      <div>
                        <p>
                          {` ${isLoggedin === false ? '' : item.ArticleNumber}`}
                          <br />
                          <span>{item.Category}</span>
                          <br />
                          {` ${isLoggedin === false ? '' : '₹' + item.ArticleRate}`}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
        <div className="allProduct-section mt-4">
          <div className="product-hed-sec">
            <p>Kids T-Shirts</p>
            <p>View All</p>
          </div>
          <div>
            <Swiper
              slidesPerView={2.5}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="sildercontentprice">
                  <img src={tshartimg} />
                  <div>
                    <p>
                      33178-9
                      <br />
                      <span>T-Shirt</span>
                      <br />
                      ₹195.00
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sildercontentprice">
                  <img src={tshartimg1} />
                  <div>
                    <p>
                      33178-9
                      <br />
                      <span>T-Shirt</span>
                      <br />
                      ₹195.00
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sildercontentprice">
                  <img src={tshartimg2} />
                  <div>
                    <p>
                      33178-9
                      <br />
                      <span>T-Shirt</span>
                      <br />
                      ₹195.00
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="sildercontentprice">
                  <img src={tshartimg} />
                  <div>
                    <p>
                      33178-9
                      <br />
                      <span>T-Shirt</span>
                      <br />
                      ₹195.00
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={tshartimg1} />
                  <div className="sildercontentprice">
                    <p>
                      33178-9
                      <br />
                      <span>T-Shirt</span>
                      <br />
                      ₹195.00
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {Filterstatus === true ? (
        <div>
          <motion.div
            className="categories"
            initial={{ translateY: '100%', padding: '0px 5px' }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="categoriestagsection">
              <p>Categories</p>
              {/* <p onClick={() => setFilterstatus(false)}>X</p> */}
              <img
                style={{ height: '32x', width: '32px' }}
                src={crossicon}
                alt=""
                onClick={() => setFilterstatus(false)}
              ></img>
            </div>
            <div>
              <div className="selectcategories row">
                {categoriesData.map((category) => (
                  <div className="col-6" key={category.id} onClick={catagoryHandler}>
                    <div
                      className={`innerfilter px-3 bg-light ${
                        selectedCategories.includes(category.Category) ? 'selectedCategory' : ''
                      }`}
                      name={category.Category}
                    >
                      <label
                        className={
                          selectedCategories.includes(category.Category)
                            ? 'selectedCategoryLable'
                            : ''
                        }
                        htmlFor={category.Category}
                      >
                        {category.Category}
                      </label>
                      <input
                        type="checkbox"
                        id={category.Category}
                        name={category.Category}
                        value={category.Category}
                        checked={selectedCategories.includes(category.Category)}
                      />
                      <span
                        className={`checkmark ${
                          selectedCategories.includes(category.Category) ? 'selectedCheckmark' : ''
                        }`}
                      ></span>{' '}
                      {/* Custom checkbox style using CSS */}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pricerange">
                <div className="pricerangsection row">
                  <p>Price Range</p>
                </div>
                <MultiRangeSlider
                  baseClassName="multi-range-slider-black"
                  ruler="none"
                  barInnerColor="black"
                  barLeftColor="lightgrey"
                  barRightColor="lightgrey"
                  onInput={(e) => setValues([e.minValue, e.maxValue])}
                  minValue={values[0]}
                  maxValue={values[1]}
                  min={Min}
                  max={Max}
                  stepOnly={true}
                  step={50}
                />
              </div>
            </div>
            <div className="content-button">
              <button
                onClick={() => {
                  clearfileds()
                }}
              >
                Reset
              </button>
              <button
                onClick={() => {
                  catagoryselect()
                }}
              >
                Apply
              </button>
            </div>
          </motion.div>
        </div>
      ) : null}
      {isLoggedin === false ? null : (
        <div className="footer-section w-100">
          <AppFooter />
        </div>
      )}
    </motion.div>
  )
}

export default Dashboard
