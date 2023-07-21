/* eslint-disable */

import React,{useState,useEffect} from 'react';
import {
  CTable,
  CButton,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CModal,
  CModalBody,
  CForm,
  CFormInput,
  CModalTitle,
  CCol,
  CModalFooter
} from '@coreui/react'
import { useNavigate,Link } from 'react-router-dom'




function orderhistory(props) {
  const [driver, setDriver] = useState([])
  const Navigate = useNavigate();
  const [click, setClick] = useState(true)
  const routeChange = () => {
    if(click===true){
      setClick(false)
    Navigate('/orders')
    }}
  var data = [{ 
  "NO": "1",
  "name": "JASPER RFD",
  "Quantity": "1,000.00",
  "Unitprice": "250.00",
  "SubTotal": "2,50,000.00",
},
{ 
  "NO": "2",
  "name": "JONI",
  "Quantity": "1,300.00",
  "Unitprice": "220.00",
  "SubTotal": "2,86,000.00",
},
{ 
  "NO": "3",
  "name": "Tom",
  "Quantity": "1,500.00",
  "Unitprice": "250.00",
  "SubTotal": "3,75,000.00",
},
{ 
  "NO": "4",
  "name": "Mariya",
  "Quantity": "2,000.00",
  "Unitprice": "280.00",
  "SubTotal": "5,60,000.00",
},
{ 
  "NO": "5",
  "name": "JASPER RFD",
  "Quantity": "1,000.00",
  "Unitprice": "250.00",
  "SubTotal": "2,50,000.00",
},
];

    return (
        <div>
          <div className='tagdiv mb-3 mt-3'><i className="fa fa-angle-left" onClick={routeChange} style={{ position:'absolute' }} aria-hidden="true"></i> <div className='tagnames'><h5>Order Detail</h5></div></div>

            <div style={{ width:'100%',overflowX:'auto' }}>
            <CTable className="alldriverTable" style={{ tableLayout: 'fixed',textAlign:'center' }}>
                  <CTableHead>
                    <CTableRow style={{ verticalAlign: 'middel' }} className='tablehadeorder'>
                      <CTableHeaderCell className=" drivertablehadding " style={{ width: 30 }}>No
                      </CTableHeaderCell>
                     
                      <CTableHeaderCell className=" drivertablehadding " style={{ width: 100 }}>Name</CTableHeaderCell>
                      <CTableHeaderCell className=" drivertablehadding " style={{ width: 80 }}>Quantity</CTableHeaderCell>
                      <CTableHeaderCell className=" drivertablehadding " style={{ width: 80 }}>Unit Price</CTableHeaderCell>
                      <CTableHeaderCell className=" drivertablehadding " style={{ width: 85 }}>Sub Total</CTableHeaderCell>
              
                    
                    </CTableRow>
                  </CTableHead>
                  {data.map((user, index) => (
                    <CTableBody key={index}>
                      <CTableRow style={{ width: '100%', borderBottom: '1px solid #d8dbe0', borderTop: '1px solid #d8dbe0' }}>
                        <CTableDataCell className="drivertablerows" style={{  }}>
                       
                          {user.NO}
                        </CTableDataCell>
                       
                        <CTableDataCell className="drivertablerows">
                          {user.name}
                        </CTableDataCell>
                        <CTableDataCell className="drivertablerows">
                          {user.Quantity}
                        </CTableDataCell>
                        <CTableDataCell className="drivertablerows">{user.Unitprice}</CTableDataCell>
                        <CTableDataCell className="drivertablerows" >
                        ₹ &nbsp;{user.SubTotal}
                        </CTableDataCell>
                      
                     
                       
                      </CTableRow>
                    </CTableBody>
                  ))}
                </CTable>
            </div>
            <div className='callsubmitbutton'><button className='callorder'><i className="fa fa-phone orderhistoryphone" aria-hidden="true"></i>Call Us Now</button></div>
             
        </div>
    );
/* eslint-disable */

}

export default orderhistory;