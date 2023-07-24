/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { CSidebar } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import { getWishlistData,DeleteWishlist} from '../api/api'
import AppFooter from 'src/components/AppFooter'
import { useSelector, useDispatch } from 'react-redux'
import "../../css/ipad.css";
import '../Wishlist/wishlist.css'
import navbaricon from 'src/assets/Colorhuntimg/navbaricon/menu bar.svg'



function wishlist(props) {
  const [prddetails, setprddetails] = useState([])
  const [isProductDetails, setIsProductDetails] = useState(false)
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  
  
  
  useEffect(() => {
    getwishlistitem()
  }, [])
  
  const getwishlistitem = async () => {
    const data = {
      party_id : 197
    }
    const result = await getWishlistData(data).then((res)=>{
      
      console.log(res.data);
      setprddetails(res.data);
    })
  }
  const navigate = useNavigate()


  // uploard image url
  const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/';

 
  const getWishlist = async () => {
   
      const data = {
        party_id : 197
      }
      const result = await getWishlistData(data).then((res) => {
        console.log(res.data);
        setprddetails(res.data);

      })
    

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
    } catch (error) {
      console.log(error);
    }
    
  }

  const showProductDetails = (item) => {
    setIsProductDetails(true)
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
