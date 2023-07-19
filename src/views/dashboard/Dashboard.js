/* eslint-disable */
import React, { useState, useEffect } from 'react'

import updateicon from '../../assets/Colorhuntimg/dashboard/Group 8922.svg'
import { getProductName, getCategories } from '../api/api'
import { useNavigate } from 'react-router-dom'

import './Dashboard.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import { AppHeader } from '../../components/index'
import './DroupDown.css'
import '../../css/ipad.css'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import './serachbar.css'
import AppFooter from 'src/components/AppFooter'
import tshartimg from 'src/assets/Colorhuntimg/sliderimages/33003-5-2-348x464 1.png'
import tshartimg1 from 'src/assets/Colorhuntimg/sliderimages/image 111.png'
import tshartimg2 from 'src/assets/Colorhuntimg/sliderimages/33004-2-2-348x464 1.png'
import MultiRangeSlider from 'multi-range-slider-react'

const Dashboard = (props) => {
  const { ProductData, UserData, allData } = props

  const [FilterproductsData, setFilterproductsData] = useState([])
  const [nameData, setNameData] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    getproductname()
    getCategoriesname()
  }, [])

  ////////////// product get api
  const getproductname = async () => {
    const result = await getProductName().then((res) => {
      if (res.status === 200) {
        setNameData(res.data)
        setData([...nameData])
      }
    })
  }
  //////////////////
  const getCategoriesname = async () => {
    const result = await getCategories().then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setCategoriesData(res.data)
        setFilterproductsData(res.data)
      }
    })
  }

  const [maxprice, setMaxprice] = useState(200)
  const [minprice, setMinprice] = useState(0)
  const [data, setData] = useState([...nameData])

  const handlerangechange = (value) => {
    setMinprice(values[0])
    setMaxprice(values[1])

    const sdrpc = nameData.slice()
    const fildata = sdrpc.filter(
      (nameData) => nameData.ArticleRate >= values[0] && nameData.ArticleRate <= values[1],
    )
    setNameData(fildata.length > 0 ? fildata : sdrpc)
  }

  const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/'

  const getLimitedProducts = (products, n) => {
    const uniqueCategories = new Set()
    const limitedProducts = []

    for (const product of products) {
      if (!uniqueCategories.has(product.Category)) {
        limitedProducts.push(product)
        uniqueCategories.add(product.Category)

        if (limitedProducts.length === n) {
          break
        }
      }
    }

    return limitedProducts
  }

  const limitedNameData = getLimitedProducts(nameData)

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    const categoryValue = event.target.value

    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(categoryValue)) {
        // If the category is already selected, remove it from the array
        return prevSelectedCategories.filter((category) => category !== categoryValue)
      } else {
        // If the category is not selected, add it to the array
        return [...prevSelectedCategories, categoryValue]
      }
    })
  }
  useEffect(() => {
    console.log(selectedCategories)
  }, [selectedCategories])

  // Function to fetch data for the selected categories from the API
  const fetchDataForSelectedCategories = async () => {
    try {
      // Replace 'API_ENDPOINT' with your actual API endpoint URL
      const response = await fetch('API_ENDPOINT')
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API')
      }
      const data = await response.json()
      // Filter the data based on selectedCategories
      const filteredData = data.filter((category) => selectedCategories.includes(category.name))
      setCategoryData(filteredData)
    } catch (error) {
      // console.error(error);
    }
  }

  // Call the fetchDataForSelectedCategories function whenever the selectedCategories change
  useEffect(() => {
    fetchDataForSelectedCategories()
  }, [selectedCategories])

  useEffect(() => {
    // getwishlistitem();
  }, [UserData])

  useEffect(() => {
    try {
      setProductData(allData)
      setOlddata(allData)
      setLoading(false)
    } catch (err) {
      console.log(err, 'error in getProductData')
    }
  }, [allData])

  const [FilterProduct, setFilterProduct] = useState([])
  
  const [ProductsData, setProductData] = useState([])
  const [isProductDetails, setIsProductDetails] = useState(false)
  const [otp, setOtp] = useState(false)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [ProductDatailItem, setProductDataItem] = useState([])
  const [activeTab, setActiveTab] = useState('sort')
  const [checked, setChecked] = useState([])
  const [checkedcetagory, setCheckedcetagory] = useState([])
  const [activeFilterDiv, setActiveFilterDiv] = useState(true)
  const [oldData, setOlddata] = useState([])
  const Min = 0
  const Max = 500
  const [values, setValues] = useState([Min, Max])
  const [cetaroy, seCetegory] = useState([])
  // const [page,setPage]=useState(1);
  const [serchtext, setSerchtext] = useState()
  const [oldstatus, setOldstatus] = useState(false)
  const [click1, setClick1] = useState(true)
  const [click2, setClick2] = useState(true)

  const [Filterstatus, setFilterstatus] = useState(false)

  useEffect(() => {
    if (serchtext) {
    } else {
      if (oldData.length > 0) {
        setFilterProduct(oldData)
      } else {
        setFilterProduct(ProductData)
      }
    }
  }, [ProductData])

  useEffect(() => {
    if (serchtext) {
    } else {
      if (oldData.length > 0) {
        setFilterProduct(oldData)
      } else {
        setFilterProduct(ProductData)
      }
    }
  }, [serchtext])

  const NEWPRODUCTDETAIL = () => {
    navigate('/productdetails')
  }

  const showProductDetails = (item) => {
    if (click2 === true) {
      setClick2(false)
      setProductDataItem(item)
      setIsProductDetails(true)
    }
  }

  const onPropPassedChange = (checkedcetagory, checked, min, max) => {
    setClick2(true)
    // getwishlistitem()
    setInput('')
    if (checkedcetagory.length > 0 || checked.length > 0 || min > 0 || max < 500) {
      setCheckedcetagory(checkedcetagory)
      setChecked(checked)
      setValues([min, max])
      allFileter()
    } else {
      console.log(checkedcetagory, checked)
      setFilterProduct(oldData)
    }

    setIsProductDetails(false)
    // console.log(val);
  }

  // filters nev bar

  const checkList = ['Relevance', 'New Arrivals', 'Price (High to Low)', 'Price (Low to High)']

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked]
    if (event !== undefined) {
      if (event.target.checked) {
        updatedList = [...checked, event.target.value]
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1)
      }
    }
    setChecked(updatedList)
  }
  const handleCheckcetagory = (event) => {
    var updatedList = [...checkedcetagory]
    if (event !== undefined) {
      if (event.target.checked) {
        updatedList = [...checkedcetagory, event.target.value]
      } else {
        updatedList.splice(checkedcetagory.indexOf(event.target.value), 1)
      }
    }
    setCheckedcetagory(updatedList)
  }

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ', ' + item
      })
    : ''

  // Return classes based on whether item is checked
  var isChecked = (item) => (checked.includes(item) ? 'checked-item' : 'not-checked-item')

  const rmvProductWishlist = async (i) => {
    // console.log('r')
    let data = {
      userid: UserData[0].id,
      productid: i.id,
    }

    try {
      const arr1 = selectedprd.filter((obj) => obj.product_id[0] !== i.id)
      setSelectprd(arr1)
      await unlinkproductdashboard(data).then((res) => {
        if (res.status === 200) {
          // console.log(res);
        }
      })
      // setSelectprd(arr1);
    } catch (error) {
      console.log(error)
    }
  }

  const [heartStates, setHeartStates] = useState({})
  const toggleHeart = (itemId) => {
    setHeartStates((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }))
  }

  // ------- add product in wishlist end-------------
  // const [filterstatus, setFilterstatus] = useState(false);
  const allFileter = () => {
    // console.log(checked, 'ProductData.length')
    let sdPrds = oldData.slice()
    const min = parseFloat(values[0])
    const max = parseFloat(values[1])

    console.log(min, max, 'tsets')
    if (checkedcetagory.length > 0) {
      sdPrds = sdPrds.filter((product) => {
        const category = product.categ_id[1]
        return checkedcetagory.some((checkedCat) => category.includes(checkedCat))
      })
      // console.log(sdPrds);
    }
    if (min > 0 || max < 500) {
     
      sdPrds = sdPrds.filter((product) => {
        return product.list_price >= min && product.list_price <= max
      })
     
      sdPrds = sdPrds.sort((a, b) => a.list_price - b.list_price)

     
    }
    if (checked.length > 0) {
      checked.forEach((item) => {
        switch (item) {
          case 'Relevance':
            sdPrds = sdPrds.sort((a, b) => {
              // Perform your relevance calculation here
              // Adjust the conditions based on your relevance logic
              if (a.sale_ok === b.sale_ok) {
                // If sale_ok is the same, sort by write_date in descending order
                return new Date(b.write_date) - new Date(a.write_date)
              } else {
                // Sort by sale_ok in ascending order
                return a.sale_ok ? -1 : 1
              }
            })
            // Set the sorted products in state
            break
          case 'New Arrivals':
            sdPrds = sdPrds.sort((a, b) => new Date(b.__last_update) - new Date(a.__last_update))
            console.log(sdPrds)
            break
          case 'Price (High to Low)':
            sdPrds = sdPrds.sort((a, b) => b.list_price - a.list_price)

            break
          case 'Price (Low to High)':
            sdPrds = sdPrds.sort((a, b) => a.list_price - b.list_price)
            break
          default:
          // console.log("not selected");
        }
      })
      console.log(sdPrds)
      setFilterProduct(sdPrds)
      setOldstatus(true)
    } else {
      setFilterProduct(oldData)
      setOldstatus(true)
    }
    setFilterProduct(sdPrds)
    setFilterstatus(true)
  }
  const [checked1, setChecked1] = useState('')
  const unchecheck = (e) => {
    const value = e.target.value
    setChecked1(value === checked1 ? '' : value)
  }
  const clearfileds = (cal) => {
    // setActiveFilterDiv(false);
    setChecked([])
    setCheckedcetagory([])
    setValues([0, 500])
    setChecked1('')
    // console.log(oldData);
    cal === false ? '' : setFilterProduct(oldData)
  }
  const [selectedProducts, setSelectedProducts] = useState([])
  const toggleProductSelection = (productId) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(productId)) {
        // Product is already selected, remove it from the selection
        return prevSelectedProducts.filter((id) => id !== productId)
      } else {
        // Product is not selected, add it to the selection
        return [...prevSelectedProducts, productId]
      }
    })
  }

  // console.log(nameData)
  const setActiveBox = () => {
    setClick1(false)
    setTimeout(setClick1(true), 20000)
    console.log('done')
    setActiveFilterDiv(true)
  }
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  //----------------------------------------------------------------------------
  const [results, setResults] = useState([])
  const [hoverBack, seHoverBack] = useState(false)
  const fetchData = (value) => {
    const filterResult = nameData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    )
    // console.log(filterResult);
    setResults(filterResult)
  }

  const [input, setInput] = useState('')
  const handleChange = (value) => {
    if (value) {
      setInput(value)
      fetchData(value)
    } else {
      setResults([])
      setInput(value)
    }
    setInput(value)
    setSerchtext(value)
  }

  const catagoryHandler = (e) => {
    if (selectedCategories.includes(e.target.name)) {
      setSelectedCategories(selectedCategories.filter((category) => category !== e.target.name))
    } else {
      setSelectedCategories([...selectedCategories, e.target.name])
    }
  }

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
      {activeFilterDiv === true ? (
        <AppHeader UserData={UserData} />
      ) : isProductDetails === true ? (
        ''
      ) : (
        <AppHeader UserData={UserData} />
      )}
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
                        handleChange(e.target.value)
                      }}
                      onFocus={() => {
                        setClick1(true)
                        setActiveFilterDiv(false)
                      }}
                    ></input>
                  </div>
                </div>
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
            {nameData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="sildercontentprice">
                  <img src={baseImageUrl + item.Photos} alt={`T-Shirt ${item.id}`} />
                  <div>
                    <p>
                      {item.ArticleNumber}
                      <br />
                      <span>{item.Category}</span>
                      <br />₹ {item.ArticleRate}
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
          <div className="categories">
            <div className="categoriestagsection">
              <p>Categories</p>
              <p onClick={() => setFilterstatus(false)}>X</p>
            </div>
            <div>
              <div className="selectcategories row">
                {categoriesData.map((category,index) => (
                  <div className="col-6" key={index} onClick={catagoryHandler}>
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
                        name="category"
                        value={category.Category}
                        checked={selectedCategories.includes(category.Category)}
                        onChange={handleCategoryChange}
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
              <div>Price Range</div>
              <p>
                Selected Range: {values[0]} - {values[1]}
              </p>
              <MultiRangeSlider
                valueLabelDisplay="auto"
                onChange={handlerangechange}
                onInput={(e) => setValues([e.minValue, e.maxValue])}
                minValue={values[0]}
                maxValue={values[1]}
                min={Min}
                max={Max}
                label={false}
                ruler={false}
                step={1}
                style={{ border: 'none', boxShadow: 'none', padding: '15px 20px 15px 10px' }}
                barLeftColor="lightgrey"
                barInnerColor="rgb(223 10 31)"
                barRightColor="lightgrey"
                thumbLeftColor="white"
                thumbRightColor="white"
              />
              <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                  style={{
                    background: 'white',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '7.6px',
                  }}
                >
                  RESET
                </button>
                <button
                  style={{
                    background: 'black',
                    color: 'white',
                    border: '1px solid black',
                    borderRadius: '7.6px',
                  }}
                  className="me-3"
                >
                  APPLY
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="footer-section w-100">
        <AppFooter />
      </div>
    </motion.div>
  )
}

export default Dashboard
