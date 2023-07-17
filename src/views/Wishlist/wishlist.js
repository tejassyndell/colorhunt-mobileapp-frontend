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
  CSidebar
} from '@coreui/react'
import updateicon from '../../assets/images/higrow/Group 3245.svg'
import contentimages from '../../assets/images/higrow/contentimg/fabric_28 1.png'
import Rssimbol from '../../assets/images/higrow/contentimg/Group 1000005667.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { getWishlistItems, unlinkproductwishlist } from '../api/api'
import { productwishlist } from '../api/api'
import noImages from '../../assets/image/noimage.png'
import { useSelector, useDispatch } from 'react-redux'
import ProductDetail from '../dashboard/productdetails'
import { faSlash } from '@fortawesome/free-solid-svg-icons'
import "../../css/ipad.css";
function wishlist(props) {
  // console.log(props.UserData[0].id);
  const [emptproductlist, setemptPrdlist] = useState(false);
  const [loading, setLoading] = useState(true)
  const [ProductDatailItem, setProductDataItem] = useState([])
  const [isProductDetails, setIsProductDetails] = useState(false)
  const [arrllist, setArrlist] = useState([]);
  const [click, setClick] = useState(true)

    //to fold
    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarUnfoldable)
    const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    getwishlistitem();
  }, []);

  const getwishlistitem = async () => {
    setArrlist([]);
    const result = await getWishlistItems(props.UserData[0].id).then((res)=>{
      if(res.status===200){
        if (res.data.length <= 0) {
          setemptPrdlist(true);
        }
        else {
          prddetails(res.data);
        }
      }
    })
    // console.log(result.data.length);
  }
  const navigate = useNavigate()

  const prddetails = (productlist) => {

    productlist.map(async (i, key) => {
      const result = await productwishlist(i.product_id[0]).then((res)=>{
        if(res.status === 200 ){
          // console.log(res);
          setArrlist(prevArrlist => [...prevArrlist, { wid: i.id, ...res.data[0] }]);
        }
      })
      
    });
    setLoading(false);
  }

  // arrllist.length<0?"":console.log(arrllist);



  const routeChange = () => {
    if(click===true){
      setClick(false)
      navigate('/dashboard')
    }
  }

  const removeprdWishlist = async (wid) => {

    // console.log(wid);
    const result = await unlinkproductwishlist(wid).then((res)=>{
     if(res.status===200){
      setArrlist([]);
      getwishlistitem();
     }
    })
    // console.log(result.data);
    
  }

  const showProductDetails = (item) => {
    // console.log(item, 'itrm')
    setProductDataItem(item)
    setIsProductDetails(true)
  }

  const onPropPassedChange = () => {
    setIsProductDetails(false)
    getwishlistitem()
  }
  return (
    <div className='dashboardDiv mandivdashboarddiv'>
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={false} // Set visible to false to hide the sidebar
        onVisibleChange={(visible) => {
          dispatch({ type: 'set', sidebarShow: visible })
        }}
        className='sidebar'
      >
        {/* Sidebar content */}
      </CSidebar>

      <>
        {isProductDetails === false ?
          <>
            <div className='tagdiv'><i className="fa fa-angle-left" onClick={routeChange} style={{ position: 'absolute' }} aria-hidden="true"></i> <div className='tagnames'><h5>Favourites</h5></div></div>
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
              <div className='garmentcontentrow wishlist_container'>

                {/* Create code ----------------------- */}
                {/* <p style={{textAlign:"center",border:"1px solid red"}}>Wishlist Empty</p> */}
                {
                  emptproductlist === true ? <div className='order_empty_div empty-list' > Empty wishlist List</div> :
                    arrllist.length <= 0 ?
                      <div className="loader-container_profile empty-list">
                        <div className="loader_profile"></div>
                      </div> :
                      arrllist.map((item, key) =>
                        <div className='productcoumen' key={key} style={{ cursor: 'pointer', paddingTop: 5 }} >
                          <div className='producticones ipad_producticones'>

                            <i class="fa fa-heart" onClick={() => removeprdWishlist(item.wid)} ></i>
                          </div>
                          {item.image_128 !== false ? (
                            <img
                              src={`data:image/jpeg;base64,${item.image_128}`}
                              className="dashboard_card_image kapadimages imgcss"
                              onError={(e) => {
                                e.target.src = noImages;
                              }}
                              onClick={() => { showProductDetails(item) }}
                            />
                          ) : (
                            <>
                              <img 
                              src={noImages} 
                              className="dashboard_card_image kapadimages nunimg"
                              onClick={() => { showProductDetails(item) }} />
                            </>
                          )}
                          <div onClick={() => { showProductDetails(item) }}>
                            <h4>{item.name}</h4>
                            <p>{item.categ_id}</p>
                            <img src={Rssimbol} style={{ marginLeft: 10 }} /><span style={{ fontWight: 600, marginLeft: 5 }}>{item.list_price}</span>
                          </div>
                        </div>

                      )
                }
              </div>


            </div>
          </> : <>
            <ProductDetail
              ProductDatailItem={ProductDatailItem}
              UserData={props.UserData}
              selectedprd={arrllist}
              onPropPassed={() => onPropPassedChange()}
              statusForHart={false}
            />
          </>
        }
      </>

    </div>
  );
}

export default wishlist;