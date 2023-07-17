/* eslint-disable */
import React, { useState, useEffect } from 'react'

import updateicon from '../../assets/Colorhuntimg/dashboard/Group 8922.svg'
import { getProductName, getCategories } from '../api/api'
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
import Reange from 'src/components/range'



const Dashboard = (props) => {
  const { ProductData, UserData, allData } = props


  const [nameData, setNameData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    getproductname();
    getCategoriesname()
  }, [])

  ////////////// product get api 
  const getproductname = async () => {
    const result = await getProductName().then((res) => {
      if (res.status === 200) {
        setNameData(res.data)
      }
    })

  }
  //////////////////
  const getCategoriesname = async () => {
    const result = await getCategories().then((res) => {

      if (res.status === 200) {
        console.log(res.data);
        setCategoriesData(res.data)
      }
    })

  }

  //// show fiucsion 
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

  const limitedNameData = getLimitedProducts(nameData, 15);

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    const categoryValue = event.target.value;
    if (selectedCategories.includes(categoryValue)) {
      // If the category is already selected, remove it from the array
      setSelectedCategories(selectedCategories.filter((category) => category !== categoryValue));
    } else {
      // If the category is not selected, add it to the array
      setSelectedCategories([...selectedCategories, categoryValue]);
    }
  };

  // Function to fetch data for the selected categories from the API
  const fetchDataForSelectedCategories = async () => {
    try {
      // Replace 'API_ENDPOINT' with your actual API endpoint URL
      const response = await fetch('API_ENDPOINT');
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      const data = await response.json();
      // Filter the data based on selectedCategories
      const filteredData = data.filter((category) => selectedCategories.includes(category.name));
      setCategoryData(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  // Call the fetchDataForSelectedCategories function whenever the selectedCategories change
  useEffect(() => {
    fetchDataForSelectedCategories();
  }, [selectedCategories]);


  useEffect(() => {
    // getwishlistitem();
  }, [UserData]);

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
  const [FilterproductsData, setFilterproductsData] = useState([])
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


  // const loadProductData = async () => {
  //   try {
  //     const res = await getDataOfProduct();

  //     setProductData(res.data);
  //     setOlddata(res.data);
  //     // setFilterProduct(res.data);


  //     setLoading(false);
  //     // setFilterProduct((prev) => [...prev, ...res.data]);
  //     // console.log(res.data, "result.data");
  //   } catch (err) {
  //     console.log(err, "error in getProductData");
  //   }
  // };



  // useEffect(() => {
  //   loadProductData()
  //   //LoadLoginSession()
  // }, [])

  //  const handleScroll = () => {
  //   console.log(window.innerHeight);
  //   console.log(document.documentElement.scrollTop);
  //   console.log(document.documentElement.scrollHeight);
  //   try {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       // alert(page);
  //       setPage((prev) => prev + 1);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  //  useEffect(() => {
  //   window.addEventListener('scroll',handleScroll)
  //   return ()=> window.removeEventListener('scroll',handleScroll)
  //   // $("#scrl1").on('scroll',handleScroll)
  //   // return () => $('#scrl1').off('scroll', handleScroll);
  // }, []);













  // useEffect(() => {
  //   // Apply scrolling functionality to the element with the "dashboard_scroll" class
  //   $('.dashboard_scroll').on('scroll', function() {
  //     console.log('Scroll event detected');
  //     // Your scroll event handling logic here
  //   });
  // }, []);



  // const HandleFilterFunctions = () => {
  //   const min = parseFloat(values[0]);
  //   const max = parseFloat(values[1]);
  //   console.log(min, max);
  //   if (min > 0 || max < 500) {
  //     // Filter the products based on the price range
  //     const filteredProducts = ProductData.filter(product => {
  //       return product.list_price >= min && product.list_price <= max;
  //     });

  //     // Sort the filtered products by price
  //     const sortedProducts = filteredProducts.sort((a, b) => a.list_price - b.list_price);

  //     // Update the state or do something with the sorted products
  //     setFilterProduct(sortedProducts);
  //   }
  //   else{
  //     console.log("not change")
  //   }
  // }
  useEffect(() => {
    getProductcetagory();
  }, [])
  useEffect(() => {
    if (serchtext) { }
    else { if (oldData.length > 0) { setFilterProduct(oldData) } else { setFilterProduct(ProductData) } }
    // setOlddata(ProductData)
  }, [ProductData])
  const getProductcetagory = async () => {
    // const result = await getCategory();
    // console.log(new Set(result.data));
    // seCetegory(new Set(result.data));
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
    // if (oldData.length >= 0) {
    //   const filterResult = oldData.filter(
    //     (item) =>
    //       item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //       item.categ_id[1].toString().toLowerCase().includes(e.target.value.toString().toLowerCase()) ||
    //       item.list_price.toString().toLowerCase().includes(e.target.value.toString().toLowerCase())

    //   )
    //   setFilterProduct(filterResult)
    //   // console.log(e.target.value.toString().toLowerCase());
    // }
    // else {

    // if (serchtext) {
    //   const result = await serachProduct(serchtext.toString().toLowerCase())
    //   // console.log(result);
    //   setFilterProduct(result.data)
    //   // console.log("done");
    // }
    // console.log(e.item.value);
    // const result = await serachProduct(e.toString().toLowerCase()).then((res) => {
    //   if (res.status === 200) {
    //     setFilterProduct(res.data)
    //     setLoading(false);
    //     setOldstatus(true);
    //     setResults([]);
    //   }
    // })

    // }

  }
  //---------------------new change 28-----------------------

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

  // const filterData = (item, e) => {
  //   console.log("done");
  //   let sdPrds = oldData.slice();
  //   if (e.target.checked) {
  //     if (item === "Price (High to Low)") {
  //       sdPrds = sdPrds.slice().sort((a, b) => b.list_price - a.list_price);
  //       console.log(sdPrds);
  //       setFilterProduct(sdPrds);
  //     }
  //     if (item === "Price (Low to High)") {
  //       sdPrds = sdPrds.slice().sort((a, b) => a.list_price - b.list_price);
  //       console.log(sdPrds);
  //       setFilterProduct(sdPrds);
  //     }
  //     if (item === "cotton") {
  //       // let catagarfilter = ProductData.filter
  //       // let catagarfilter = ProductData.filter((item) =>
  //       // item.categ_id[1].toLowerCase().includes(e.target.value.toLowerCase()))
  //       console.log("done");
  //     }
  //   }
  //   else {
  //     setFilterProduct(ProductData);
  //   }

  // }
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
  // const getwishlistitem = async () => {
  //   if (UserData.length > 0) {
  //     // console.log("done");
  //     const result = await getWishlistItems(UserData[0].id).then((res) => {
  //       if (res.status === 200) {
  //         setSelectprd(res.data);
  //       }

  //     })
  //     // console.log(result.data);

  //   }
  //   else {
  //     ""
  //   }

  // }

  // selectedprd.length > 0 ? console.log(selectedprd) : ''
  // const addProductWishlist = async (i) => {
  //   // console.log('a')
  //   let data = {
  //     userid: UserData[0].id,
  //     prdprice: i.list_price,
  //     prdid: i.id
  //   };
  //   // console.log(data);
  //   try {
  //     await Addinwishlist(data).then((res) => {
  //       if (res.status === 200) {
  //         // getwishlistitem();
  //       }
  //     })
  //     // toggleHeart(i.id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const rmvProductWishlist = async (i) => {
    // console.log('r')
    let data = {
      userid: UserData[0].id,
      productid: i.id,
    };

    try {
      const arr1 = selectedprd.filter(obj => obj.product_id[0] !== i.id);
      setSelectprd(arr1);
      await unlinkproductdashboard(data).then((res) => {
        if (res.status === 200) {
          // console.log(res);

        }
      })
      // setSelectprd(arr1);
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
  const allFileter = () => {
    // console.log(checked, 'ProductData.length')
    let sdPrds = oldData.slice();
    const min = parseFloat(values[0]);
    const max = parseFloat(values[1]);

    console.log(min, max, "tsets");
    if (checkedcetagory.length > 0) {
      sdPrds = sdPrds.filter(product => {
        const category = product.categ_id[1];
        return checkedcetagory.some(checkedCat => category.includes(checkedCat));
      });
      // console.log(sdPrds);
    }
    if (min > 0 || max < 500) {
      // console.log("done");
      sdPrds = sdPrds.filter(product => {
        return product.list_price >= min && product.list_price <= max;
      });
      // console.log(sdPrds)
      sdPrds = sdPrds.sort((a, b) => a.list_price - b.list_price);

      // setFilterProduct(sdPrds);
      // console.log(sdPrds);
    }
    if (checked.length > 0) {

      checked.forEach(item => {
        switch (item) {
          case 'Relevance':
            sdPrds = sdPrds.sort((a, b) => {
              // Perform your relevance calculation here
              // Adjust the conditions based on your relevance logic
              if (a.sale_ok === b.sale_ok) {
                // If sale_ok is the same, sort by write_date in descending order
                return new Date(b.write_date) - new Date(a.write_date);
              } else {
                // Sort by sale_ok in ascending order
                return a.sale_ok ? -1 : 1;
              }
            });
            // Set the sorted products in state
            break;
          case 'New Arrivals':
            sdPrds = sdPrds.sort((a, b) => new Date(b.__last_update) - new Date(a.__last_update));
            console.log(sdPrds)
            break;
          case 'Price (High to Low)':
            sdPrds = sdPrds.sort((a, b) => b.list_price - a.list_price);

            break;
          case 'Price (Low to High)':
            sdPrds = sdPrds.sort((a, b) => a.list_price - b.list_price);
            break;
          default:
          // console.log("not selected");
        }
      });
      console.log(sdPrds);
      setFilterProduct(sdPrds);
      setOldstatus(true)
    }
    else {
      setFilterProduct(oldData);
      setOldstatus(true)
    }
    setFilterProduct(sdPrds);
    setFilterstatus(true);
  }
  const [checked1, setChecked1] = useState('');
  const unchecheck = (e) => {
    const value = e.target.value;
    setChecked1(value === checked1 ? '' : value);
  }
  const clearfileds = (cal) => {
    // setActiveFilterDiv(false);
    setChecked([]);
    setCheckedcetagory([]);
    setValues([0, 500]);
    setChecked1('');
    // console.log(oldData);
    cal === false ? "" : setFilterProduct(oldData);
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
    setActiveFilterDiv(true)
  }
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  //----------------------------------------------------------------------------
  const [results, setResults] = useState([]);
  const [hoverBack, seHoverBack] = useState(false);
  const fetchData = (value) => {
    const filterResult = nameData.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase())

    )
    // console.log(filterResult);
    setResults(filterResult);
  };

  const [input, setInput] = useState("");
  const handleChange = (value) => {
    if (value) {
      setInput(value);
      fetchData(value);
    }
    else {
      setResults([])
      setInput(value);
    }
    setInput(value);
    setSerchtext(value);
  };
  return (



    <motion.div initial={{ translateX: '100%', padding: '0px 5px' }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5 }} style={{ height: '100vh' }} onClick={() => { sidebarShow === true ? dispatch({ type: 'set', sidebarShow: !sidebarShow }) : "" }}>
      {activeFilterDiv === true ? <AppHeader UserData={UserData} /> : (isProductDetails === true ? '' : <AppHeader UserData={UserData} />)}
      <div className='filterssectionandheader'>
        <div className="dashboardDiv">
          <div className='searchbar_text_container'>
            <div className="haddercontent">Welcome</div>
            <div className="haddersearchcontenar">
              <div className="autodiv">
                <div className="search-bar-container">
                  {/* searchbar */}
                  <div className="input-wrapper">
                    <i className="fa fa-search" id="search-icon" aria-hidden="true"></i>
                    <input
                      className='new_search_input'
                      placeholder="Search"
                      value={input}
                      onChange={(e) => { handleChange(e.target.value) }}
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
        <div className='product-hed-sec'>
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
            {limitedNameData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='sildercontentprice'>
                  <img src={baseImageUrl + item.Photos} alt={`T-Shirt ${item.id}`} />
                  <div>
                    <p>
                      {item.ArticleNumber}<br />
                      <span>{item.Category}</span><br />
                      ₹ {item.ArticleRate}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
        <div className='allProduct-section mt-4'>
          <div className='product-hed-sec'>
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
                <div className='sildercontentprice'>
                  <img src={tshartimg} />
                  <div>
                    <p>33178-9<br /><span>T-Shirt</span><br />₹195.00</p>
                  </div>
                </div></SwiperSlide>
              <SwiperSlide>
                <div className='sildercontentprice'>
                  <img src={tshartimg1} />
                  <div>
                    <p>33178-9<br /><span>T-Shirt</span><br />₹195.00</p>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className='sildercontentprice'>
                  <img src={tshartimg2} />
                  <div>
                    <p>33178-9<br /><span>T-Shirt</span><br />₹195.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='sildercontentprice'>
                  <img src={tshartimg} />
                  <div>
                    <p>33178-9<br /><span>T-Shirt</span><br />₹195.00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={tshartimg1} />
                  <div className='sildercontentprice'>
                    <p>33178-9<br /><span>T-Shirt</span><br />₹195.00</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>


        </div>

      </div>



      {Filterstatus === true ? <div>
        <div className='categories'>
          <div className='categoriestagsection'>
            <p>categories</p>
            <p onClick={() => setFilterstatus(false)}>X</p>
          </div>
          <div>
            <div className='selectcategories row'>
              {categoriesData.map((category) => (
                <div className='col-6' key={category.id}>
                  <div className='innerfilter px-3 bg-light'>
                    {/* <label htmlFor={category.name}>{category.Category}</label>
                    <input
                      type='checkbox'
                      id={category.Category}
                      name='category'
                      value={category.Category}
                      checked={selectedCategories.includes(category.Category)}
                      onChange={handleCategoryChange}
                      multiple
                    /> */}
                    <label htmlFor={category.Category}>{category.Category}</label>
                    <input
                      type='checkbox'
                      id={category.Category}
                      name='category'
                      value={category.Category}
                      checked={selectedCategories.includes(category.Category)}
                      onChange={handleCategoryChange}
                    />
                    <span className='checkmark'></span> {/* Custom checkbox style using CSS */}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Category Name</th>
                    {/* Add more table headers for other data properties */}
                  </tr>
                </thead>
                <tbody>
                  {categoriesData.map((category) => (
                    <tr key={category.id}>
                      <td>{category.id}</td>
                      <td>{category.name}</td>
                      {/* Add more table cells for other data properties */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='pricerange'>
              <div className='pricerangsection row'>
                <p>Price Range</p>
              </div>
            </div>
            {/* <Reange/> */}

          </div>

        </div>

      </div> : null}
      <div className='footer-section w-100'>
        <AppFooter />
      </div>



    </motion.div>













  )
}

export default Dashboard
