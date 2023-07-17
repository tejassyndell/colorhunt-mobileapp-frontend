/* eslint-disable */

import React, { useEffect, useState } from 'react'
import {
  CTable,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCol,
  CForm,
  CButton,
  CFormInput,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CHeader,
} from '@coreui/react'
import updateicon from '../../assets/images/higrow/Group 3245.svg'
import contentimages from '../../assets/images/higrow/contentimg/fabric_28 1.png'
import Rssimbol from '../../assets/images/higrow/contentimg/Group 1000005667.svg'
import { useNavigate, useParams } from 'react-router-dom'
// import { getWishlistItems, unlinkproductwishlist } from '../api/api'
import { cartRemoveItem, getCartData, productwishlist, updateQty } from '../api/api'
import noImages from '../../assets/image/noimage.png'
import ProductDetail from '../dashboard/productdetails'
import "./Cart.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {faTrash} from '@fortawesome/free-solid-svg-icons'
function cart_list(props) {
  // console.log(props.UserData[0].id);
  const [emptproductlist, setemptPrdlist] = useState(false);
  const [loading, setLoading] = useState(false)
  const [ProductDatailItem, setProductDataItem] = useState([])
  const [isProductDetails, setIsProductDetails] = useState(false)
  const [arrllist, setArrlist] = useState([]);
  const [cartstatus,setCartstatus]=useState(true);
  const navigate1 = useNavigate();
  useEffect(() => {
    getcaritem();
  }, []);

  const getcaritem = async () => {
    let data = {
      userId: props.UserData[0].id
    }
    const result = await getCartData(data).then((res)=>{
      if(res.status===200){
        if (res.data.length <= 0) {
          setArrlist([]);
          setemptPrdlist(true);
        }
        else {
          setArrlist(res.data);
          setLoading(false);
        }
      }
    })
    // console.log(result.data);

    

  }
  const navigate = useNavigate()

  //   const prddetails = (productlist) => {

  //     productlist.map(async (i, key) => {
  //       const result = await productwishlist(i.product_id[0])
  //       console.log(result);
  //       setArrlist(prevArrlist => [...prevArrlist, { wid: i.id, ...result.data[0] }]);
  //     });
  //     setLoading(false);
  //   }

  // arrllist.length<0?"":console.log(arrllist);


  const [click, setClick] = useState(true)

  const routeChange = () => {
    if(click===true){
      setClick(false)
    navigate('/dashboard')
    }
  }
  // arrllist.length > 0 ? console.log(arrllist) : "";
  //   const removeprdWishlist = async (wid) => {

  //     console.log(wid);
  //     const result = await unlinkproductwishlist(wid);
  //     console.log(result.data);
  //     setArrlist([]);
  //     getwishlistitem();
  //   }

  const showProductDetails = (item) => {
    // console.log(item, 'itrm')
    setProductDataItem(item)
    setIsProductDetails(true)
  }

  const onPropPassedChange = () => {
    setIsProductDetails(false)
  }

  const removeitemfromcart = async (data) => {
    // console.log(data);
    let itemdetails = {
      order_id: data.order_id,
      saleorder: data.saleorder
    }
    console.log(itemdetails);
    setCartstatus(false)
    setLoading(true);
    const result = await cartRemoveItem(itemdetails).then((res)=>{
      if(res.status === 200 ){
        getcaritem()
      }
    })
    
    
  }
  const [count, setCount] = useState({});
  function incrementCount(orderID, productQty, saleorder) {
    setCount((prevCount) => {
      const currentCount = prevCount[orderID] || productQty;
      const newCount = currentCount + 1;
      updatequntatity(newCount, saleorder);
      return {
        ...prevCount,
        [orderID]: newCount,
      };
    });
    setArrlist((prevArrlist) => {
      const updatedArrlist = prevArrlist.map((item) => {
        const updatedOrderLines = item.order_lines.map((subitem) => {
          if (subitem.order_id === orderID) {
            return {
              ...subitem,
              total: subitem.total + subitem.price_unit
            };
          }
          return subitem;
        });
    
        return {
          ...item,
          order_lines: updatedOrderLines
        };
      });
    
      return updatedArrlist;
    });
    // getcaritem();
  }

  function decrementCount(orderID, productQty, saleorder) {
    setCount((prevCount) => {
      const currentCount = prevCount[orderID] || productQty;
      const newCount = Math.max(currentCount - 1, 1);
      updatequntatity(newCount, saleorder);
      return {
        ...prevCount,
        [orderID]: newCount
      };
    });
    // console.log()

    setArrlist((prevArrlist) => {
      const updatedArrlist = prevArrlist.map((item) => {
        const updatedOrderLines = item.order_lines.map((subitem) => {
          if (subitem.order_id === orderID && subitem.total !== subitem.price_unit) {
            return {
              ...subitem,
              total: subitem.total - subitem.price_unit
            };
          } else {
            return subitem;
          }
        });
    
        return {
          ...item,
          order_lines: updatedOrderLines
        };
      });
    
      return updatedArrlist;
    });
    
    // getcaritem();
  }

  const updatequntatity = async (val, saleorder) => {
    let data = {
      id: saleorder,
      product_uom_qty: val
    }
    // console.log(data);
    const result = updateQty(data)
    // console.log(result);
  }
  
  return (

    <div className='dashboardDiv mandivdashboarddiv'>
      <>
        {isProductDetails === false ?
          <>
            <div className='tagdiv'><i className="fa fa-angle-left" onClick={routeChange} style={{ position: 'absolute' }} aria-hidden="true"></i> <div className='tagnames'><h5>My Cart</h5></div></div>

            {/* { loading===true?
        <div className="loader-container_profile">
        <div className="loader_profile"></div>
      </div>:""
      } */}
            {/* <div className='haddersearchcontenar'>
        <CCol xs="auto">
          <i className="fa fa-search searchicon" aria-hidden="true"></i>
                     <CFormInput
                       className="User_serch mainsearch"
                       type="text"
                       placeholder="Search "
                       style={{paddingleft:32 }}
                       // value={FilterValues}
                       // onChange={handleFilter}
                     />
                   </CCol>
             <img src={updateicon}/>
        </div> */}
            {/* content secrion */}

            <div className='cover_container'>
              <div className='garmentcontentrow cart_container'>
                {/* Create code ----------------------- */}
                {/* <p style={{textAlign:"center",border:"1px solid red"}}>Wishlist Empty</p> */}
                {
                  emptproductlist === true ? <div className='order_empty_div empty-list' > Empty Cart List</div> :
                    arrllist.length <= 0 || loading==true?
                      <div className="loader-container_profile empty-list">
                        <div className="loader_profile"></div>
                      </div> :
                      arrllist.map((item, key) =>
                        item.order_lines.map((subitem, key) =>
                          <div className='cart_man_container '>
                            {/* <div className='productcoumen cart_man' key={key} style={{ cursor: 'pointer', paddingTop: 5 }} > */}
                            {/* <div className='producticones'>

                        <i class="fa fa-heart" onClick={() => removeprdWishlist(item.wid)} ></i>
                      </div> */}

                            <div className='cart_img_head'>
                              {item.image_128 !== false ? (
                                <img
                                  src={`data:image/jpeg;base64,${item.image_128}`}
                                  className="img_cart_item"
                                />
                              ) : (
                                <>
                                  <img src={noImages} className="img_cart_item" />
                                </>
                              )}
                            </div>
                            <div className='cart_details_container'>
                              <div className='cart_tag_container'>
                                <div className='tag_1'>
                                  <h4>{item.name}</h4>
                                  <p>{subitem.colorname}</p>
                                </div>
                                <div className='tag_2'>
                                  <i class="fa fa-trash" style={{ color: "#AE0617" }} onClick={() => { removeitemfromcart(subitem) }}></i>
                                </div>
                              </div>
                              <div className='cart_rate_container'>
                                <div className='cart_tag_container'>
                                  <div className='tag_1'>
                                    <p>Rate</p>
                                    <h4><img src={Rssimbol} /><span style={{ fontWight: 600, marginLeft: 5 }}>{subitem.total.toLocaleString()}</span></h4>
                                  </div>
                                  <div className='tag_2 tag_width'>
                                    <span className='update_btn_grp'>
                                      <div className="update_quntatity_header">

                                        <button className='update_qunt_btn1' onClick={() => {
                                          decrementCount(subitem.order_id, subitem.product_uom_qty, subitem.saleorder);
                                          //  updatequntatity(newc,item.saleorder)
                                        }}>-</button>
                                        <div className='update_qunt_count'>{count[subitem.order_id] || subitem.product_uom_qty}</div>
                                        <button className='update_qunt_btn2' onClick={() => {
                                          incrementCount(subitem.order_id, subitem.product_uom_qty, subitem.saleorder);
                                        }}>+</button>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        )
                      )
                }
              </div>

              {/* <div className='cart_man_container'>
                <div className='cart_img_head'>
                  {item.image_128 !== false ? (
                              <img
                                src={`data:image/jpeg;base64,${item.image_128}`}
                                className="img_cart_item"
                              />
                            ) : (
                              <>
                                <img src={noImages} className="img_cart_item" />
                              </>
                            )}
                </div>
                <div className='cart_details_container'>
                  <div className='cart_tag_container'>
                    <div className='tag_1'>
                      <h4>{item.name}</h4>
                      <p>T-shirt</p>
                    </div>
                    <div className='tag_2'>
                      <i class="fa fa-trash-o" onClick={() => { removeitemfromcart() }}></i>
                    </div>
                  </div>
                  <div className='cart_rate_container'>
                    <div className='cart_tag_container'>
                      <div className='tag_1'>
                        <p>Rate</p>
                        <h4><img src={Rssimbol} /><span style={{ fontWight: 600, marginLeft: 5 }}>{item.list_price}</span></h4>
                      </div>
                      <div className='tag_2'>
                        <span className='update_btn_grp'>
                          <div className="update_quntatity_header">

                            <button className='update_qunt_btn1' onClick={() => decrementCount(item.id, item.product_uom_qty)}>-</button>
                            <div className='update_qunt_count'>{count[item.id] || item.product_uom_qty}</div>
                            <button className='update_qunt_btn2' onClick={() => incrementCount(item.id)}>+</button>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}


            </div>
          </> : <>
            <ProductDetail
              ProductDatailItem={ProductDatailItem}
              UserData={props.UserData}
              onPropPassed={() => onPropPassedChange()}
            />
          </>
        }
      </>
      <div className='continue_shoping_man_div'>
        <button className='continue_shoping_btn' onClick={() => { navigate1('/dashboard') }}>Continue shopping</button>
      </div>

      <div className={cartstatus === false ? "myCart_exteranal_div" : ""}>
      <div className={cartstatus === true ? "mycart_main_div unactiv_cart" : "mycart_main_div activ_cart"}>
      
        <div className="mycart_header">
          <span className="mycart_header_close" onClick={() => { setCartstatus(true) }}
          >X</span>
        </div>
        <div className="mycart_checkmart_css">
          {/* <Checkmark size={50} /> */}
          {/* <FontAwesomeIcon icon={faCircleTrash} beatFade style={{ color: "#a60c0c" }} /> */}
          <div className='mycart_icone'>
          <FontAwesomeIcon icon={faTrash} beatFade style={{color: "#a60c0c",}} />
          </div>
          <h2 className='mycart_cart_text'>Product is remove from your cart.</h2>
        </div>
        </div>
        </div>
    </div>


  );
}

export default cart_list;