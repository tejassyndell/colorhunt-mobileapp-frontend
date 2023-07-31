/* eslint-disable */
import React, { useState, useEffect } from 'react'

import updateicon from '../../assets/Colorhuntimg/dashboard/Group 8922.svg'
import { getProductName, getCategories, getAddWishlist,getWishlistData,DeleteWishlist } from '../api/api'
import { useNavigate } from 'react-router-dom'

import './Dashboard.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { AppHeader } from '../../components/index'
import "./DroupDown.css";
import "../../css/ipad.css";
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion"
import "./serachbar.css"
import AppFooter from 'src/components/AppFooter'
import tshartimg from 'src/assets/Colorhuntimg/sliderimages/33003-5-2-348x464 1.png'
import tshartimg1 from 'src/assets/Colorhuntimg/sliderimages/image 111.png'
import tshartimg2 from 'src/assets/Colorhuntimg/sliderimages/33004-2-2-348x464 1.png'
import navbaricon from 'src/assets/Colorhuntimg/navbaricon/menu bar.svg'
import profileimg from 'src/assets/Colorhuntimg/navbaricon/Group 8919.svg'
import Reange from 'src/components/range'
import profile from '../profile/profile'



const Dashboard = (props) => {
    const { ProductData, UserData, allData } = props

    const [FilterproductsData, setFilterproductsData] = useState([])
    const [nameData, setNameData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showallproduct, setshowallproduct] = useState(true);


    useEffect(() => {
        getproductname();
        getCategoriesname()
    }, [])

    ////////////// product get api 
    const getproductname = async () => {
        const result = await getProductName().then((res) => {
            if (res.status === 200) {
                setNameData(res.data)
                setFilterDataSearch(res.data)
                console.log(res.data);
            }
        })

    }
    //////////////////
    const getCategoriesname = async () => {
        const result = await getCategories().then((res) => {

            if (res.status === 200) {
                console.log(res.data);
                setCategoriesData(res.data)
                setFilterproductsData(res.data)
            }
        })

    }

    ///// search fuctionality 






    //// show search fuctionality 

    const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/';

    const getLimitedProducts = (products, n) => {
        const uniqueCategories = new Set();
        const limitedProducts = [];

        for (const product of products) {
            if (!uniqueCategories.has(product.Category)) {
                limitedProducts.push(product);
                uniqueCategories.add(product.Category);

                if (limitedProducts.length === n) {
                    break;
                }
            }
        }

        return limitedProducts;
    };

    const limitedNameData = getLimitedProducts(nameData);

    // Function to handle category selection


    // Function to fetch data for the selected categories from the API
    const fetchDataForSelectedCategories = async () => {
        try {
            // Replace 'API_ENDPOINT' with your actual API endpoint URL
            // const response = await fetch('API_ENDPOINT');
            // if (!response.ok) {
            //     throw new Error('Failed to fetch data from the API');
            // }
            const data = await response.json();
            // Filter the data based on selectedCategories
            const filteredData = data.filter((category) => selectedCategories.includes(category.name));
            setCategoryData(filteredData);
        } catch (error) {
            // console.error(error);
        }
    };

    // Call the fetchDataForSelectedCategories function whenever the selectedCategories change
    useEffect(() => {
        fetchDataForSelectedCategories();
    }, [selectedCategories]);

    const getWishlist = async () => {
        // if (UserData.length > 0) {
          // console.log("done");
          const data = {
            party_id : 197
          }
          const result = await getWishlistData(data).then((res) => {
            console.log(res.data);
            setSelectprd(res.data);
            // if (res.status == 200) {
            //     console.log(res.data);
            // //   setSelectprd(res.data);
            // }
    
          })
          // console.log(result.data);
    
        // }
        // else {
        //   ""
        // }
    
      }

    useEffect(() => {
        getWishlist();
    }, []);

    useEffect(() => {
        try {
            setProductData(allData);
            setOlddata(allData);
            setLoading(false);
        } catch (err) {
            console.log(err, "error in getProductData");
        }
    }, [allData])

    const [FilterProduct, setFilterProduct] = useState([])
    // console.log(FilterProduct, 'filterdata')
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
    const [oldData, setOlddata] = useState([]);
    const Min = 0
    const Max = 500
    const [values, setValues] = useState([Min, Max])
    const [cetaroy, seCetegory] = useState([]);
    // const [page,setPage]=useState(1);
    const [serchtext, setSerchtext] = useState();
    const [oldstatus, setOldstatus] = useState(false);
    const [click1, setClick1] = useState(true)
    const [click2, setClick2] = useState(true)

    const [Filterstatus, setFilterstatus] = useState(false)

    useEffect(() => {
        getProductcetagory();
    }, [])
    useEffect(() => {
        if (serchtext) { }
        else { if (oldData.length > 0) { setFilterProduct(oldData) } else { setFilterProduct(ProductData) } }
        setOlddata(ProductData)
    }, [ProductData])
    const getProductcetagory = async () => {

    }

    //serarch bar logic..............

    //---------------------new change 28-----------------------

    useEffect(() => {
        if (serchtext) { }
        else {
            if (oldData.length > 0) { setFilterProduct(oldData) } else { setFilterProduct(ProductData) }
        }
    }, [serchtext])

    const handleFilter = async (e) => {
       
        // }

    }
    //---------------------new change 28-----------------------
      const loadProductData = async () => {
    try {
      const result = await getProductData(page).then((res) => {
        if (res.status === 200) {
          setProductData((prev) => [...prev, ...res.data]);
        }
      })

      // setLoading(false);
      // setProductData(res.data)
      // console.log(res.data, "result.data");
    } catch (err) {
      console.log(err, "error in getProductData");
    }
  };

    // useEffect(() => {
    //   // loadProductData()
    //   setLoading(true)
    // }, [])

    const handleSubmit = async (event) => {
        setOtp(true)
    }

    const NEWPRODUCTDETAIL = () => {
        navigate('/productdetails')
    }

    const showProductDetails = (item) => {
        if (click2 === true) {
            // console.log(item, 'itrm')
            setClick2(false);
            setProductDataItem(item)
            setIsProductDetails(true)
        }
    }

    const onPropPassedChange = (checkedcetagory, checked, min, max) => {
        setClick2(true)
        // getwishlistitem()
        setInput("")
        if (checkedcetagory.length > 0 || checked.length > 0 || min > 0 || max < 500) {
            setCheckedcetagory(checkedcetagory)
            setChecked(checked)
            setValues([min, max])
            allFileter();
        } else {
            console.log(checkedcetagory, checked);
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



    const [addremprd, setAddremprd] = useState(true);

    // ------- add product in wishlist start-------------
    const [selectedprd, setSelectprd] = useState([]);
   

    const rmvProductWishlist = async (i) => {
        console.log( i,'r')
        let data = {
          party_id : 197,
          article_id: i.id,
        };
        console.log(data);
    
        try {
          await DeleteWishlist(data).then((res) => {
            if (res.status === 200) {
              getWishlist()
            }
          })
          // setSelectprd(arr1);
        } catch (error) {
          console.log(error);
        }
      };

    const addProductWishlist = async (i) => {
        // console.log(i,'a')
        let data = {
            user_id: 197,
            article_id: i.id,
        };
            
          
          console.log(data);
        try {
          await getAddWishlist(data).then((res) => {
              console.log('...........');
              getWishlist();
            // if (res.status === 200) {
            // }
          })
          // toggleHeart(i.id);
        } catch (error) {
          console.log(error);
        }
      };

    const [heartStates, setHeartStates] = useState({});
    const toggleHeart = (itemId) => {
        setHeartStates((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId],
        }));
    };


    // ------- add product in wishlist end-------------
    // const [filterstatus, setFilterstatus] = useState(false);

    const [checked1, setChecked1] = useState('');
    const unchecheck = (e) => {
        const value = e.target.value;
        setChecked1(value === checked1 ? '' : value);
    }

    const [selectedProducts, setSelectedProducts] = useState([]);
    const toggleProductSelection = (productId) => {
        setSelectedProducts((prevSelectedProducts) => {
            if (prevSelectedProducts.includes(productId)) {
                // Product is already selected, remove it from the selection
                return prevSelectedProducts.filter((id) => id !== productId);
            } else {
                // Product is not selected, add it to the selection
                return [...prevSelectedProducts, productId];
            }
        });
    };

    // console.log(nameData)
    const setActiveBox = () => {
        setClick1(false)
        setTimeout(setClick1(true), 20000);
        console.log("done")
        setOldstatus(true)
    }
    
    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow)
    //----------------------------------------------------------------------------
    const [results, setResults] = useState([]);
    const [ApplyStatushBack, setApplyStatushBack] = useState(true);
    const [ApplyStatushSearch, setApplyStatushSearch] = useState(true);
    const [applyrData, setApplyData] = useState([]);
    const [filterDataSearch, setFilterDataSearch] = useState([])

    const [input, setInput] = useState("");
    const handleChange = (e) => {
        const value = e.target.value;
        if (e.target.value === '') {
            console.log(nameData);
            setNameData(nameData)
            // setApplyStatushSearch(true)
            
        }else{
            const filterResult = filterDataSearch.filter((item) =>
            item.ArticleNumber.toString().includes(value.toString()) ||
            item.Category.toLowerCase().includes(value.toLowerCase()) ||
            item.ArticleRate.toString().includes(value.toString()) ||
            item.StyleDescription.toLowerCase().includes(value.toLowerCase()) ||
            item.Subcategory.toLowerCase().includes(value.toLowerCase())
      );
      console.log(filterResult);
      setNameData(filterResult);
      setApplyData(filterResult)
        }
     
        setInput(value);
        setSerchtext(value);
    };
    const clearfileds = (cal) => {
        setOldstatus(false);
        setSelectedCategories([]);
        // console.log(oldData);
        setApplyStatushBack(true);
        //  setNameData(nameData);

        console.log(nameData);
    }
    const catagoryselect = () => {
        // console.log(checked, 'ProductData.length')
        let sdPrds = nameData.slice();


        if (selectedCategories.length > 0) {
            sdPrds = sdPrds.filter(product => {
                const category = product.Category;
                return selectedCategories.some(checkedCat => category.includes(checkedCat));
            });
            setApplyData(sdPrds);
            setApplyStatushBack(false);
            setFilterstatus(false)
        }

        else {
            setNameData(sdPrds);
            setOldstatus(true)
        }

    }

    useEffect(() => {
        console.log(selectedCategories);
    }, [selectedCategories])

    const catagoryHandler = (e) => {
        if (e.target.name !== undefined) {
            if (selectedCategories.includes(e.target.name)) {
                setSelectedCategories(
                    selectedCategories.filter((category) => category !== e.target.name)
                )

            } else {
                if (e.target.name === undefined) {
                    setSelectedCategories([...selectedCategories])

                }
                setSelectedCategories([...selectedCategories, e.target.name])
            }
        }
    }
    ////////  media query add box contentimg
    // Define the breakpoint value for tablets in pixels
    const tabletBreakpoint = 768;

    // Function to calculate the appropriate slidesPerView value based on the window width
    const getSlidesPerView = () => {
        const windowWidth = window.innerWidth;
        const tabletSlidesPerView = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue('--tablet-slides-per-view')
        );

        // Use different slidesPerView value for tablets, and a default value for other screen sizes
        return windowWidth <= tabletBreakpoint ? tabletSlidesPerView : 2.5;
    };
    return (



        <motion.div initial={{ translateY: '100%', padding: '0px 5px' }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }} style={{ height: '100vh' }}>
            <div className='haddersilder'>
                <img src={navbaricon} onClick={() => { navigate('/dashboard') }} />
                <img src={profileimg} />
            </div>
            <div className='filterssectionandheader'>
                <div className="dashboardDiv">
                    <div className='searchbar_text_container'>
                        {/* <div className="haddercontent">Welcome</div> */}
                        <div className="haddersearchcontenar mt-3">
                            <div className="autodiv">
                                <div className="search-bar-container">
                                    {/* searchbar */}
                                    <div className="input-wrapper">
                                        <i className="fa fa-search" id="search-icon" aria-hidden="true"></i>
                                        <input
                                            className='new_search_input'
                                            placeholder="Search"
                                            value={input}
                                            onChange={(e) => { handleChange(e) }}
                                            onFocus={() => { setClick1(true); setActiveFilterDiv(false) }}
                                        ></input>
                                    </div>
                                </div>
                                {/* filtericon */}

                            </div>
                            <div className="autodivsecond">
                                <img src={updateicon} style={{ cursor: 'pointer' }}
                                    // onClick={() => { click1 === true ? setActiveBox() : "" }}
                                    onClick={() => setFilterstatus(true)}
                                />
                            </div>
                        </div>

                    </div>
                    <div style={{ padding: '0px 10px' }}>
                        <div>


                        </div>
                    </div>

                </div>
            </div>



            <div className='allProduct-section maincontentsection' >
               <div className='allproduct_section'>
                    <div className='haddingproduct'>
                        <p>ALL Articles</p>
                    </div>
                    <div className='content-box' >

                        {ApplyStatushBack === true ? (
                            nameData.map((item) => (
                                <div className='box-items' key={item.id}>
                                    <div id={item.id} className="producticones producticonesiped" style={{ top:10 }}>
                                    {
                                      selectedprd.some(i => i.Id === item.id) ?
                                        <i className="fa fa-heart" onClick={() => { rmvProductWishlist(item) }}></i> :
                                        <i className={'fa fa-heart-o'} onClick={() => { addProductWishlist(item) }}></i>
                                    }
                        
                                  </div>
                                    <img src={baseImageUrl + item.Photos} style={{ padding:2 }} alt={`T-Shirt ${item.id}`} />
                                    <div className='sildercontentprice'>
                                        <p>
                                            {item.ArticleNumber}
                                            <br />
                                            <span>{item.Category}</span>
                                            <br />
                                            ₹ {item.ArticleRate}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            applyrData.map((item) => (
                                <div className='box-items' key={item.id}>
                                      <div id={item.id} className="producticones producticonesiped" style={{ top:10 }}>
                                    {
                                      selectedprd.some(i => i.Id === item.id) ?
                                        <i className="fa fa-heart" onClick={() => { rmvProductWishlist(item) }}></i> :
                                        <i className={'fa fa-heart-o'} onClick={() => { addProductWishlist(item) }}></i>
                                    }
                        
                                  </div>
                                    
                                    <img src={baseImageUrl + item.Photos} alt={`T-Shirt ${item.id}`} />
                                    <div className='sildercontentprice'>
                                        <p>
                                            {item.ArticleNumber}
                                            <br />
                                            <span>{item.Category}</span>
                                            <br />
                                            ₹ {item.ArticleRate}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) }

                    </div>


                </div> 


            </div>



            {Filterstatus === true ? <div>
                <motion.div initial={{ translateY: '100%', padding: '0px 5px' }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }} className='categories'>
                    <div className='categoriestagsection'>
                        <p>categories</p>
                        <p onClick={() => setFilterstatus(false)}>X</p>
                    </div>
                    <div>
                        <div className='selectcategories row'>
                            {categoriesData.map((category) => (
                                <div className='col-6' key={category.id} onClick={catagoryHandler}  >
                                    <div className={`innerfilter px-3 bg-light ${selectedCategories.includes(category.Category) ? 'selectedCategory' : ''}`} name={category.Category}  >
                                        <label className={selectedCategories.includes(category.Category) ? 'selectedCategoryLable' : ''} htmlFor={category.Category}>{category.Category}</label>
                                        <input
                                            type='checkbox'
                                            id={category.Category}
                                            name={category.Category}
                                            value={category.Category}
                                            checked={selectedCategories.includes(category.Category)}
                                        />
                                        <span className={`checkmark ${selectedCategories.includes(category.Category) ? 'selectedCheckmark' : ''}`}></span> {/* Custom checkbox style using CSS */}
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className='pricerange'>
                            <div className='pricerangsection row'>
                                <p>Price Range</p>
                            </div>
                        </div>
                        {activeTab === 'price' && (
                            <div style={{ width: '100%' }}>
                                <p className="dashboard_filter_list_body_data_price"> Selected Price Range</p>
                                <p className="dashboard_filter_list_body_data_price_range">
                                    ₹ {values[0]} - ₹ {values[1]}
                                </p>
                                <MultiRangeSlider
                                    valueLabelDisplay="auto"
                                    onChange={setValues}
                                    onInput={(e) => setValues([e.minValue, e.maxValue])}
                                    minValue={values[0]}
                                    maxValue={values[1]}
                                    min={Min}
                                    max={Max}
                                    label={false}
                                    ruler={false}
                                    step={1}
                                    style={{ border: "none", boxShadow: "none", padding: "15px 20px 15px 10px" }}
                                    barLeftColor="lightgrey"
                                    barInnerColor="rgb(223 10 31)"
                                    barRightColor="lightgrey"
                                    thumbLeftColor="white"
                                    thumbRightColor="white"
                                />
                            </div>
                        )}
                        {/* <Reange/> */}

                    </div>
                    <div className='content-button'>
                        <button onClick={() => { clearfileds(); }}>Reset</button>
                        <button onClick={() => { catagoryselect() }}>Apply</button>
                    </div>

                </motion.div>

            </div> : null}
            <div className='footer-section w-100'>
                <AppFooter />
            </div>





        </motion.div>













    )
}

export default Dashboard
