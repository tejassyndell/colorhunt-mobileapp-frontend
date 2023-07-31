/* eslint-disable */

import React, { useEffect } from 'react'
import contentimages from '../../assets/images/higrow/contentimg/fabric_3 1.png'
import Rssimbol from '../../assets/images/higrow/contentimg/Group 1000005667.svg'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
// import { OrderDetails, OrderHistory } from '../api/api'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment/moment'
import './Order.css'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CSidebar,
} from '@coreui/react'
import AppHeaderPadding from 'src/components/header/AppHeaderPadding'
import AppFooter from 'src/components/AppFooter'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function orders(props) {
  const [OrderData, setOrderData] = useState([])
  const [FilterOrderData, setFilterOrderData] = useState([])
  const [isOrderHistory, setIsOrderHistory] = useState(false)
  const [OrderHistoryData, setOrderHistoryData] = useState()
  const [HistoryFilterData, setHistoryFilterData] = useState([])
  const [NoOrderList, setNoOrderList] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [showEndDate, setShowEndDate] = useState(false)
  const [FilterDiv, setFilterDiv] = useState(false)

  //const for filter
  const [filter, setFilter] = useState({
    delivery_status: 'all',
    startDate: '',
    endDate: '',
  })
  const handleCategoryFilterChange = (event) => {
    setFilter({ ...filter, delivery_status: event.target.value })
  }
  const handleDateFilterChange = (event, field) => {
    setFilter({ ...filter, [field]: event.target.value })
    if (startDate) {
      setShowEndDate(true)
      setEndDate('')
    } else {
      setShowEndDate(false)
      setEndDate('')
    }
  }

  //to fold
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  // const LoadOrderDetails = async (id) => {
  //   const result = await OrderDetails(id).then((res) => {
  //     if (res.status === 200) {
  //       setOrderData(res.data)
  //       setFilterOrderData(res.data)
  //       // console.log(res.data)
  //       if (res.data == 0) {
  //         setNoOrderList(true)
  //       }
  //     }
  //   })
  // }

  // const LoadOrderHistory = async (id) => {
  //   const result = await OrderHistory(id).then((res) => {
  //     if (res.status === 200) {
  //       setOrderHistoryData(res.data)
  //       // console.log(res.data, "history")
  //     }
  //   })
  // }

  const Navigate = useNavigate()

  const routeChange = () => {
    Navigate('/dashboard')
  }

  const routeChangeBack = () => {
    setIsOrderHistory(false)
  }

  const orderHistory = (item) => {
    setIsOrderHistory(true)
    const orderHistoryData = OrderHistoryData.filter((data) => data.order_id[1] === item)
    setHistoryFilterData(orderHistoryData)
  }

  useEffect(() => {
    const storedData = localStorage.getItem('userId')
    LoadOrderDetails(storedData)
    LoadOrderHistory(storedData)
  }, [])

  //for filter function
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value)
    // console.log(e.target.value)
    // filterItems(e.target.value, endDate);
  }

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value)
    // console.log(e.target.value)

    // filterItems(startDate, e.target.value);
  }

  const FilterApplyBtn = () => {
    let test = OrderData
    const filterTest = test.filter((item) => {
      const itemDate = new Date(item.date_order)
      const startFilterDate = new Date(filter.startDate)
      const endFilterDate = new Date(filter.endDate)
      endFilterDate.setDate(endFilterDate.getDate() + 1)
      // console.log(item.date_order, "date");

      switch (filter.delivery_status) {
        case 'all':
          break
        case 'fullPartial':
          if (item.delivery_status !== 'full' && item.delivery_status !== 'partial') {
            return false
          }
          break
        case 'pending':
          if (item.delivery_status !== 'pending') {
            return false
          }
          break
        default:
          if (item.delivery_status !== filter.delivery_status) {
            return false
          }
          break
      }

      if (filter.startDate && filter.endDate) {
        return (
          (itemDate >= startFilterDate && itemDate <= endFilterDate) || itemDate === endFilterDate
        )
      }

      return true
    })

    if (filterTest.length > 0) {
      setFilterOrderData(filterTest)
      setNoOrderList(false) // Reset noOrderList to false when there are filtered results
    } else {
      setFilterOrderData(filterTest)
      setNoOrderList(true) // Set noOrderList to true when there are no filtered results
    }

    setFilterDiv(false)
  }

  return (
    <div className="dashboardDiv order_title_header">
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

      {FilterOrderData.length > 0 ? (
        <>
          {isOrderHistory === true ? (
            <>
              {/* <AppHeaderPadding/> */}

              <div className="tagdiv tagdiv_order mb-3 mt-3">
                <i
                  className="fa fa-angle-left"
                  onClick={routeChangeBack}
                  style={{ position: 'absolute' }}
                  aria-hidden="true"
                ></i>
                <div className="tagnames tagname_ord_details">
                  <h5>Order Detail</h5>
                </div>

                <div style={{ width: '100%', overflowX: 'auto' }}>
                  <CTable
                    className="alldriverTable"
                    style={{ tableLayout: 'fixed', textAlign: 'center' }}
                  >
                    <CTableHead>
                      <CTableRow style={{ verticalAlign: 'middel' }} className="tablehadeorder">
                        <CTableHeaderCell className=" drivertablehadding " style={{ width: 30 }}>
                          No
                        </CTableHeaderCell>

                        <CTableHeaderCell className=" drivertablehadding " style={{ width: 100 }}>
                          Name
                        </CTableHeaderCell>
                        <CTableHeaderCell className=" drivertablehadding " style={{ width: 65 }}>
                          Quantity
                        </CTableHeaderCell>
                        <CTableHeaderCell className=" drivertablehadding " style={{ width: 80 }}>
                          Unit Price
                        </CTableHeaderCell>
                        <CTableHeaderCell className=" drivertablehadding " style={{ width: 85 }}>
                          Sub Total
                        </CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    {HistoryFilterData.map((user, index) => (
                      <CTableBody key={index}>
                        <CTableRow
                          style={{
                            width: '100%',
                            borderBottom: '1px solid #d8dbe0',
                            borderTop: '1px solid #d8dbe0',
                          }}
                        >
                          <CTableDataCell className="drivertablerows" style={{}}>
                            {index + 1}
                          </CTableDataCell>

                          <CTableDataCell className="drivertablerows">{user.name}</CTableDataCell>
                          <CTableDataCell className="drivertablerows">
                            {user.product_uom_qty}
                          </CTableDataCell>
                          <CTableDataCell className="drivertablerows">
                            {user.price_unit}
                          </CTableDataCell>
                          <CTableDataCell className="drivertablerows">
                            ₹ &nbsp;{user.price_subtotal}
                          </CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    ))}
                  </CTable>
                </div>
                <div className="callsubmitbutton">
                  <button className="callorder">
                    <i className="fa fa-phone orderhistoryphone" aria-hidden="true"></i>Call Us Now
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="tagdiv mb-3 iph_hd">
                <i
                  className="fa fa-angle-left"
                  onClick={routeChange}
                  style={{ position: 'absolute' }}
                  aria-hidden="true"
                ></i>{' '}
                <div className="tagnames">
                  <h5>Order History</h5>
                </div>
                {/* <i className='fa fa-filter OrderFilter_Filter_icon' onClick={() => { setFilterDiv(true) }}></i> */}
                <svg
                  className="OrderFilter_Filter_icon"
                  onClick={() => {
                    setFilterDiv(true)
                  }}
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.4756 1.85821L1.48523 2.47986L9.77541 11.6866L9.97869 18.2235L14.0389 20.0982L13.7735 11.5623L21.4756 1.85821Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              {FilterOrderData.map((item) => (
                <div
                  className="garmentcontentrow mt-3"
                  style={{
                    backgroundColor: 'rgba(242, 242, 242, 1)',
                    borderRadius: 8,
                    justifyContent: 'initial',
                    paddingTop: 0,
                  }}
                >
                  <div
                    className="editicon"
                    style={{ display: 'flex' }}
                    onClick={() => {
                      orderHistory(item.name)
                    }}
                  >
                    <img src={contentimages} className="ordercontentimg" />
                    <div>
                      <h4>{item.name}</h4>
                      <p>{moment(item.date_order).format('DD-MM-YYYY')}</p>
                      <img src={Rssimbol} style={{ marginLeft: 10 }} />
                      <span style={{ fontWeight: 600, marginLeft: 5 }}>{item.amount_total}</span>
                    </div>
                  </div>
                  <div className="editicon lastcontent">
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      ) : (
        <>
          {NoOrderList === true ? (
            <>
              <div className="tagdiv mb-3">
                <i
                  className="fa fa-angle-left"
                  onClick={routeChange}
                  style={{ position: 'absolute' }}
                  aria-hidden="true"
                ></i>{' '}
                <div className="tagnames">
                  <h5>Order Detail</h5>
                </div>
                {/* <svg className='OrderFilter_Filter_icon' onClick={() => { setFilterDiv(true) }}  width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4756 1.85821L1.48523 2.47986L9.77541 11.6866L9.97869 18.2235L14.0389 20.0982L13.7735 11.5623L21.4756 1.85821Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg> */}
              </div>
              <div className="order_empty_div" style={{ height: '80vh' }}>
                {' '}
                Empty Order List
              </div>
            </>
          ) : (
            <>
              <div className="loader-container_profile">
                <div className="tagdiv mb-3 iph_hd">
                  <i
                    className="fa fa-angle-left"
                    onClick={routeChange}
                    style={{ position: 'absolute' }}
                    aria-hidden="true"
                  ></i>{' '}
                  <div className="tagnames">
                    <h5>Order History</h5>
                  </div>
                  {/* <i className='fa fa-filter OrderFilter_Filter_icon' onClick={() => { setFilterDiv(true) }}></i> */}
                  {/* <svg className='OrderFilter_Filter_icon' onClick={() => { setFilterDiv(true) }}  width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4756 1.85821L1.48523 2.47986L9.77541 11.6866L9.97869 18.2235L14.0389 20.0982L13.7735 11.5623L21.4756 1.85821Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg> */}
                </div>

                <div className="loader_profile"></div>
              </div>
            </>
          )}
        </>
      )}

      {FilterDiv === true ? (
        <>
          <div className="OrderFilter_exteranal_div">
            <div className="OrderFilter_main_div">
              <p
                className="OrderFilter_close_btn"
                onClick={() => {
                  setFilterDiv(false)
                }}
              >
                X
              </p>
              <div className="OrderFilter_date_div">
                <p className="OrderFilter_date_text_span">Search By Date</p>
                <div className="d-flex">
                  <input
                    type="date"
                    className="date_css"
                    value={filter.startDate}
                    onChange={(event) => handleDateFilterChange(event, 'startDate')}
                  />
                  <span className="OrderFilter_date_to">To</span>
                  <input
                    type="date"
                    className="date_css"
                    value={filter.endDate}
                    onChange={(event) => handleDateFilterChange(event, 'endDate')}
                  />
                </div>
              </div>

              <div className="OrderFilter_radio_div">
                <span className="OrderFilter_radio_span">Search By Status</span>
                <div className="OrderFilter_radio_details">
                  <label className="OrderFilter_radio_input">
                    <input
                      type="radio"
                      className="OrderFilter_radio_input_dot"
                      name="categoryFilter"
                      value="all"
                      checked={filter.delivery_status === 'all'}
                      onChange={handleCategoryFilterChange}
                    />
                    &nbsp; All
                  </label>
                  <br />

                  <label className="OrderFilter_radio_input">
                    <input
                      type="radio"
                      name="categoryFilter"
                      value="pending"
                      className="OrderFilter_radio_input_dot"
                      checked={filter.delivery_status === 'pending'}
                      onChange={handleCategoryFilterChange}
                    />
                    &nbsp; Pending
                  </label>
                  <br />

                  {/* <label>
                <input
                  type="radio"
                  name="categoryFilter"
                  value="all"
                  checked={filter.delivery_status === 'dispatched'}
                  onChange={handleCategoryFilterChange}
                />
                Dispatched
              </label> */}

                  <label className="OrderFilter_radio_input">
                    <input
                      type="radio"
                      name="categoryFilter"
                      value="fullPartial"
                      className="OrderFilter_radio_input_dot"
                      checked={filter.delivery_status === 'fullPartial'}
                      onChange={handleCategoryFilterChange}
                    />
                    &nbsp; Completed
                  </label>
                </div>
              </div>

              <div>
                <button
                  className="OrderFilter_apply_btn"
                  onClick={() => {
                    FilterApplyBtn()
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="footer-section w-100">
        <AppFooter />
      </div>
    </div>
  )
}

export default orders
