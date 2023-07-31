/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {} from '../api/api'
import ReactImageMagnify from 'react-image-magnify'
import noImages from '../../assets/image/noimage.png'
import { Checkmark } from 'react-checkmark'
import $ from 'jquery'
// import { Addinwishlist, unlinkproductdashboard } from '../api/api'
import '../../css/ipad.css'
function productdetails(props) {
  const Navigate = useNavigate()
  const {
    ProductDatailItem,
    UserData,
    selectedprd,
    serchtext,
    statusForHart,
    checkedcetagory,
    checked,
    min,
    max,
  } = props
  const [btnstatse, setBtnstatse] = useState(false)
  const [ProductTag, setProductTag] = useState([])
  const [ProductTagColor, setProductTagColor] = useState([])
  const [cartstatus, setCart] = useState(true)
  const [heartstatus, setheart] = useState(false)
  const [radiocolor, setradioColor] = useState()
  let [count, setCount] = useState(1)
  const [radiostatus, setRadiostatus] = useState(false)
  const [load, setLoad] = useState(true)
  const [newImage, setNewImage] = useState()
  const [click, setClick] = useState(true)
  const [loaderror, setLoaderror] = useState(1)

  const getImage = async () => {
    const result = await getNewImage(ProductDatailItem.id).then((res) => {
      if (res === 0) {
        console.log(res)
        setLoaderror(res)
        setLoad(false)
      } else {
        console.log(res)
        setNewImage(res.data[0].image_1024)
        setLoad(false)
      }
    })
  }

  useEffect(() => {
    getImage()
  }, [])

  useEffect(() => {
    console.log(selectedprd)
    if (statusForHart === false) {
      selectedprd.map((item) => {
        if (ProductDatailItem.id === item.id) {
          setheart(true)
        }
      })
    } else {
      selectedprd.map((item) => {
        if (ProductDatailItem.id === item.product_id[0]) {
          setheart(true)
        }
      })
    }
  }, [selectedprd])
  //----------Zoom in start---------------------
  let product = ''

  ProductDatailItem.image_128 !== false
    ? (product = `data:image/jpeg;base64,${
        loaderror === 0 ? ProductDatailItem.image_128 : newImage
      }`)
    : (product = noImages)
  // console.log(newImage)

  // console.log(ProductDatailItem, 'ProductDatailItem')

  const routeChange = () => {
    if (click === true) {
      setClick(false)
      // console.log(checkedcetagory, checked , min , max);
      props.onPropPassed(checkedcetagory, checked, min, max)
    } else {
      console.log('not done')
    }
  }

  const LoadProductTag = async () => {
    await ProductTagApi(ProductDatailItem.id, ProductDatailItem.name).then((res) => {
      if (res.status === 200) {
        // console.log(res.data)
        setProductTag(res.data)
      }
    })
  }
  const LoadProductColor = async () => {
    await ProductColor(ProductDatailItem.name).then((res) => {
      if (res.status === 200) {
        // console.log(res.data)
        setProductTagColor(res.data)
      }
    })
  }

  useEffect(() => {
    LoadProductTag()
    LoadProductColor()
  }, [])
  useEffect(() => {
    if (radiocolor !== undefined) {
      setRadiostatus(true)
      setBtnstatse(true)
    } else {
      setRadiostatus(false)
      setBtnstatse(false)
    }
  }, [radiocolor])

  const addproductCart = async () => {
    let data = {
      userId: UserData[0].id,
      productId: ProductDatailItem.id,
      product_uom_qty: count,
      radioval: radiocolor,
    }
    // console.log(data);
    setCart(false)
    const result = await createCartData(data).then((res) => {
      if (res.status === 200) {
        // console.log(res);
      }
    })
  }

  function incrementCount() {
    count = count + 1
    setCount(count)
  }
  function decrementCount() {
    if (count > 1) {
      count = count - 1
      setCount(count)
    } else {
      setCount(1)
    }
  }
  const addProductWishlist = async (i) => {
    let data = {
      userid: UserData[0].id,
      prdprice: i.list_price,
      prdid: i.id,
    }
    // const result = await Addinwishlist(data).then((res) => {
    //   if (res.status === 200) {
    //     if (res.data !== undefined) {
    //       setheart(true)
    //     }
    //   }
    // })
    // console.log(result);
  }
  const rmvProductWishlist = async (i) => {
    // console.log(i)
    let data = {
      userid: UserData[0].id,
      productid: i.id,
    }
    // const result = await unlinkproductdashboard(data).then((res) => {
    //   if (res.status === 200) {
    //     if (res.data === true) {
    //       setheart(false)
    //     } else {
    //       console.log(res)
    //     }
    //   }
    // })
    // console.log(result);
  }
  return (
    <div className="dashboard_product_div">
      {load === true ? (
        <div className="loader-container_profile">
          <div className="tagdiv product_btn_margin mb-3">
            <i
              className="fa fa-angle-left ipad_left_margin"
              onClick={() => {
                routeChange()
              }}
              style={{ position: 'absolute' }}
              aria-hidden="true"
            ></i>{' '}
            <div className="tagnames">
              <h5>Product </h5>
            </div>
          </div>
          <div className="loader_profile"></div>
        </div>
      ) : (
        <>
          <div className="tagdiv product_btn_margin mb-3">
            <i
              className="fa fa-angle-left ipad_left_margin"
              onClick={() => {
                routeChange()
              }}
              style={{ position: 'absolute' }}
              aria-hidden="true"
            ></i>{' '}
            <div className="tagnames">
              <h5>Product </h5>
            </div>
          </div>

          <div className="editiconproduct ipad_ciontainer">
            <div id="imageMagnifyer">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: product,
                  },
                  largeImage: {
                    src: product,
                    width: 1200,
                    height: 1110,
                  },
                  isHintEnabled: true,
                  isActivatedOnTouch: true,
                  shouldHideHintAfterFirstActivation: false,
                  enlargedImagePosition: 'over',
                  enlargedImageContainerStyle: { zIndex: 9999 },
                  imageClassName: 'borer_ra',
                  enlargedImageContainerClassName: 'borer_ra',
                  hintTextMouse: 'Long-touch to zoom',
                }}
              />
            </div>
            <br />

            <div className="details_margin">
              <div className="productlikecontent">
                <h4>{ProductDatailItem.name}</h4>

                <div><i className={heartstatus === false ? 'fa fa-heart-o' : 'fa fa-heart'} onClick={() => { heartstatus === false ? addProductWishlist(ProductDatailItem) : rmvProductWishlist(ProductDatailItem) }} aria-hidden="true"></i> Add to Wishlist</div>

              </div>
              {/* <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">

                        <LikeButton
                            className='likebuttonadd'
                            id="how-to-beat-me-at-chess"
                            component={LikeButton.templates.Twitter}
                            />
                            </Provider> */}

              <p>{ProductDatailItem.categ_id}</p>
              <p className="product_pag_title">₹ {ProductDatailItem.list_price}</p>

              {ProductTagColor.length > 0 ? (
                <>
                  <p className="product_pag_title title_margin">Product Color :</p>
                  {ProductTagColor.map((item) => (
                    <span className="color_radio_man">
                      <input
                        type="radio"
                        className="colortag_radio_input_dot"
                        name="categoryFilter"
                        value="all"
                        onClick={() => {
                          setradioColor(item.partner_ref)
                        }}
                      />
                      <p className="product_tag_data">{item.partner_ref}</p>
                    </span>
                  ))}
                </>
              ) : (
                <></>
              )}
              <div className="product_page__color_div">
                {ProductTag.length > 0 ? (
                  <>
                    <p className="product_pag_title title_margin">Product Tags :</p>
                    {ProductTag.map((item) => (
                      <p className="product_tag_data">{item.name}</p>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <span className="btn_grp">
              <div className="quntatity_header">
                <button className="qunt_btn1" onClick={decrementCount}>
                  -
                </button>
                <div className="qunt_count">{count}</div>
                <button className="qunt_btn2" onClick={incrementCount}>
                  +
                </button>
              </div>
              <button className={btnstatse === false ? 'cart_button1 cart_buttn_bgcolor_deactive' : 'cart_button1 cart_buttn_bgcolor_active'} onClick={() => { radiostatus === true ? addproductCart(ProductDatailItem, UserData) : console.log("not done"); }}><i className="fa fa-shopping-cart"></i> Add to cart</button>
            </span>
          </div>

          <div className={cartstatus === false ? 'myCart_exteranal_div' : ''}>
            <div
              className={
                cartstatus === true
                  ? 'addCart_main_div unactiv_cart'
                  : 'addCart_main_div activ_cart'
              }
            >
              <div className="cart_header">
                <span
                  className="cart_header_close"
                  onClick={() => {
                    setCart(true)
                  }}
                >
                  X
                </span>
              </div>
              <div className="checkmart_css">
                {/* <Checkmark size={50} /> */}
                <Checkmark size={50}></Checkmark>
                <h2 className="add_cart_text">
                  {ProductDatailItem.name} has been added to your cart.
                </h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default productdetails
