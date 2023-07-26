/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import MenuImg from '../../assets/Colorhuntimg/order-history-img/menu bar.png';

function orderhistory(props) {
  // const [driver, setDriver] = useState([])
  // const Navigate = useNavigate()
  // const [click, setClick] = useState(true)
  // const routeChange = () => {
  //   if (click === true) {
  //     setClick(false)
  //     Navigate('/orders')
  //   }
  // }
  var data = [
    {
      NO: '1',
      name: 'JASPER RFD',
      Quantity: '1,000.00',
      Unitprice: '250.00',
      SubTotal: '2,50,000.00',
    },
    {
      NO: '2',
      name: 'JONI',
      Quantity: '1,300.00',
      Unitprice: '220.00',
      SubTotal: '2,86,000.00',
    },
    {
      NO: '3',
      name: 'Tom',
      Quantity: '1,500.00',
      Unitprice: '250.00',
      SubTotal: '3,75,000.00',
    },
    {
      NO: '4',
      name: 'Mariya',
      Quantity: '2,000.00',
      Unitprice: '280.00',
      SubTotal: '5,60,000.00',
    },
    {
      NO: '5',
      name: 'JASPER RFD',
      Quantity: '1,000.00',
      Unitprice: '250.00',
      SubTotal: '2,50,000.00',
    },
  ]

  return (
    <div>
      <div className="tagdiv mb-3 mt-3">
       <img src={MenuImg}></img>
        <div className="tagnames">
          <h5>Order History</h5>
        </div>
      </div>
      
      </div>

      
  )
 
}

export default orderhistory
