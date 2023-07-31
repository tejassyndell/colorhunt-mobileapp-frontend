/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { CSidebar } from '@coreui/react'
import Rssimbol from '../../assets/images/higrow/contentimg/Group 1000005667.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { getWishlistData,DeleteWishlist} from '../api/api'
import AppFooter from 'src/components/AppFooter'
import noImages from '../../assets/image/noimage.png'
import { useSelector, useDispatch } from 'react-redux'
import ProductDetail from '../dashboard/productdetails'
import "../../css/ipad.css";
import '../Wishlist/wishlist.css'
// import '../dashboard/Dashboard.css'
import navbaricon from 'src/assets/Colorhuntimg/navbaricon/menu bar.svg'
function wishlist(props) {
  // console.log(props.UserData[0].id);
  const [emptproductlist, setemptPrdlist] = useState(true);
  const [loading, setLoading] = useState(true)
  const [ProductDatailItem, setProductDataItem] = useState([])
  const [prddetails, setprddetails] = useState([])
  const [isProductDetails, setIsProductDetails] = useState(false)
  const [arrllist, setArrlist] = useState([]);
  const [selectedprd, setSelectprd] = useState([]);
  const [click, setClick] = useState(true)
  const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/';
    //to fold
    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarUnfoldable)
    const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    getwishlistitem()
  }, [])

  const getwishlistitem = async () => {
    // setArrlist([]);
    const data = {
      party_id : 197
    }
    const result = await getWishlistData(data).then((res)=>{
      console.log(res.data);
          setprddetails(res.data);
      // if(res.status===200){
      //   if (res.data.length <= 0) {
      //     setemptPrdlist(true);
      //   }
      //   else {
      //   }
      // }
    })
    // console.log(result.data.length);
  }
  const navigate = useNavigate()

  // const prddetails = (productlist) => {

  //   // productlist.map(async (i, key) => {
  //   //   const result = await productwishlist(i.product_id[0]).then((res)=>{
  //   //     if(res.status === 200 ){
  //   //       // console.log(res);
  //   //       setArrlist(prevArrlist => [...prevArrlist, { wid: i.id, ...res.data[0] }]);
  //   //     }
  //   //   })
      
  //   // });
  //   setLoading(false);
  // }

  // arrllist.length<0?"":console.log(arrllist);

  const routeChange = () => {
    if (click === true) {
      setClick(false)
      navigate('/dashboard')
    }
  }
  const getWishlist = async () => {
    // if (UserData.length > 0) {
      // console.log("done");
      const data = {
        party_id : 197
      }
      const result = await getWishlistData(data).then((res) => {
        console.log(res.data);
        setprddetails(res.data);
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

  const removeprdWishlist = async (i) => {
    console.log( i,'r')
    let data = {
      party_id : 197,
      article_id: i.Id,
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
    <div className="dashboardDiv mandivdashboarddiv">
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={false} // Set visible to false to hide the sidebar
        onVisibleChange={(visible) => {
          dispatch({ type: 'set', sidebarShow: visible })
        }}
        className="sidebar"
      >
        {/* Sidebar content */}
      </CSidebar>

      <>
        {isProductDetails === false ? (
          <>
            <div className='tagdiv'>
            <img src={navbaricon} onClick={() => { navigate('/dashboard') }} /><div className='tagnames'><h5>Wishlist</h5></div></div>
            <div className='cover_container' style={{ height: '86vh' }} >
              <div className='garmentcontentrow wishlist_container'>

                {/* Create code ----------------------- */}
                {
                  prddetails.map((item, key) =>
                        <div className='productcoumen' key={key} style={{ cursor: 'pointer', paddingTop: 5 }} >
                          <div className='producticones ipad_producticones'>

                            <i className='fa fa-heart' onClick={() => removeprdWishlist(item)} ></i>
                          </div>
                          <img src={baseImageUrl + item.article_photos} alt={`T-Shirt ${item.id}`} className='articalimg' />
                          <div onClick={() => { showProductDetails(item) }}>
                            <h4 className='contentname'>{item.ArticleNumber}<br/><span>{item.Title}</span><br/>₹ {item.ArticleRate}</h4>
                           
                            {/* <img src={Rssimbol} style={{ marginLeft: 10 }} /><span style={{ fontWight: 600, marginLeft: 5 }}>{item.list_price}</span> */}
                          </div>
                        </div>

                      )
                }
              </div>
              <AppFooter />

            </div>
          </>
        ) : null}
      </>
    </div>
   
  );
}

export default wishlist
