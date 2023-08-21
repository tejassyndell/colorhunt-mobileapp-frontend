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
import { useNavigate, useParams } from 'react-router-dom'
import '../dashboard/Dashboard.css'
import '../dashboard/DroupDown.css'
import '../../css/ipad.css'
import { motion } from 'framer-motion'
import '../dashboard/serachbar.css'
import MultiRangeSlider from 'multi-range-slider-react'
import AppFooter from 'src/components/AppFooter'
import navbaricon from 'src/assets/Colorhuntimg/navbaricon/menu bar.svg'
import profileimg from 'src/assets/Colorhuntimg/navbaricon/Group 8919.svg'
import { Navigate } from 'react-router-dom'
export default function CategoryArticles() {
  const navigate = useNavigate()
  const { category } = useParams()

  const [allData, setAlldata] = useState([])
  const [selectedprd, setSelectprd] = useState([])
  const getproductname = async () => {
    const result = await getProductName().then((res) => {
      if (res.status === 200) {
        setAlldata(res.data)
      }
    })
  }

  useEffect(() => {
    getproductname()
  }, [])
  //filter all data by the category selected
  const sdPrds = allData.slice()
  const fildata = sdPrds.filter((item) => item.Category == `${category}`)
  console.log(fildata)
  const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/'
  const getWishlist = async () => {
    const data = {
      party_id: 197,
    }
    const result = await getWishlistData(data).then((res) => {
      console.log(res.data)
      setSelectprd(res.data)
    })
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
  const addProductWishlist = async (i) => {
    let data = {
      user_id: 197,
      article_id: i.Id,
    }

    console.log(data)
    try {
      await getAddWishlist(data).then((res) => {
        console.log('...........')
        getWishlist()
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <motion.div
      initial={{ translateY: '100%', padding: '0px 5px' }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      style={{ height: '100vh' }}
    >
      <div className="haddersilder">
        <img
          src={navbaricon}
          onClick={() => {
            navigate('/dashboard')
          }}
        />
        <img src={profileimg} />
      </div>
      <div className="filterssectionandheader">
        <div className="dashboardDiv">
          <div className="searchbar_text_container">
            {/* <div className="haddercontent">Welcome</div> */}
            <div className="haddersearchcontenar mt-3">
              <div className="autodiv">
                <div className="search-bar-container">
                  {/* searchbar */}
                  <div className="input-wrapper">
                    <i className="fa fa-search" id="search-icon" aria-hidden="true"></i>
                    <input
                      className="new_search_input"
                      placeholder="Search"
                      // value={input}
                      onChange={(e) => {
                        handleChange(e)
                      }}
                      onFocus={() => {
                        setClick1(true)
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
                  // onClick={() => { click1 === true ? setActiveBox() : "" }}
                  // onClick={() => setFilterstatus(true)}
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
        <div className="allproduct_section">
          <div className="haddingproduct">
            <p>Men's {category}</p>
          </div>
          <div className="content-box">
            {fildata.map((item) => (
              <div className="box-items" key={item.Id}>
                {/* {console.log(item.Id)} */}
                <div
                  id={item.id}
                  className="producticones producticonesiped"
                  style={{ top: '3vh', paddingRight: 10 }}
                >
                  {selectedprd.some((i) => i.Id === item.Id) ? (
                    <i
                      className="fa fa-heart"
                      onClick={() => {
                        rmvProductWishlist(item)
                      }}
                    ></i>
                  ) : (
                    <i
                      className={'fa fa-heart-o'}
                      onClick={() => {
                        addProductWishlist(item)
                      }}
                    ></i>
                  )}
                </div>
                <img
                  src={baseImageUrl + item.Photos}
                  style={{ padding: 2 }}
                  alt={`T-Shirt ${item.id}`}
                />
                <div className="sildercontentprice">
                  <p>
                    {item.ArticleNumber}
                    <br />
                    <span>{item.Category}</span>
                    <br />₹ {item.ArticleRate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div>
                <motion.div initial={{ translateY: '100%', padding: '0px 5px' }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }} className='categories'>
                    <div className='categoriestagsection'>
                        <p>categories</p>
                        <p onClick={() => setFilterstatus(false)}>X</p>
                    </div>
                    <div>
                        <div className='selectcategories row'>
                        
                        </div>


                        <div className='pricerange'>
                            <div className='pricerangsection row'>
                                <p>Price Range</p>
                            </div>
                            <MultiRangeSlider
                                valueLabelDisplay="auto"
                                // onChange={handlerangechange}
                                // onInput={(e) => setValues([e.minValue, e.maxValue])}
                                // minValue={values[0]}
                                // maxValue={values[1]}
                                // min={Min}
                                // max={Max}
                                label={false}
                                ruler={false}
                                step={1}
                                style={{ border: 'none', boxShadow: 'none', padding: '15px 20px 15px 10px' }}
                                barLeftColor="black"
                                barInnerColor="black"
                                barRightColor="black"
                                thumbLeftColor="black"
                                thumbRightColor="black"
                            />
                        
                        </div>


                    </div>
                    <div className='content-button'>
                        <button >Reset</button>
                        <button >Apply</button>
                    </div>

                </motion.div>

            </div>  */}
      <div className="footer-section w-100">
        <AppFooter />
      </div>
    </motion.div>
  )
}
