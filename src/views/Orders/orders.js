/* eslint-disable */

import React, { useEffect, useState } from 'react'
import './Order.css'
import menubar from '../../assets/Colorhuntimg/menu bar (1).svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function orders() {
  const navigate = useNavigate()
  const baseImageUrl = 'https://colorhunt.in/colorHuntApi/public/uploads/'
  const [Transportation, setTransportation] = useState([])
  const currentDate = new Date()
  const formattedDate = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()}`
  const Storagedata = localStorage.getItem('Orderlist')
  const ParsedData = JSON.parse(Storagedata)
  useEffect(() => {
    axios
      .get('http://localhost:4000/gettransportation')
      .then((response) => {
        setTransportation(response.data)
      })
      .catch((error) => {
        console.error('Error fetching transportation data:', error)
      })
  }, [])
  const totalrate = ParsedData[0].reduce((total, item) => total + parseInt(item.articleRate), 0)
  return (
    <>
      <div className="mainContainer mx-2 " style={{ minHeight: '100vh', position: 'relative' }}>
        <div
          className="TopContainer d-flex align-items-center justify-content-center"
          style={{ width: '100%', height: '90px', borderBottom: '1px solid black' }}
        >
          <img src={menubar} onClick={() => navigate('/dashboard')} />
          <div
            style={{
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Sales order
          </div>
        </div>
        <div className="LowerContainer">
          <div className=" mx-2 my-3" style={{ height: '230px' }}>
            <span
              style={{
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
              }}
            >
              Date
            </span>
            <div
              className="my-1 d-flex align-items-center"
              style={{ height: '45px', backgroundColor: '#E4E7EA', borderRadius: '6px' }}
            >
              <span
                className="ms-2"
                style={{
                  color: '#626262',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                }}
              >
                {formattedDate}
              </span>
            </div>
            <span
              className="mt-2"
              style={{
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
              }}
            >
              Destination
            </span>
            <div
              className=" my-1 d-flex align-items-center"
              style={{ height: '45px', backgroundColor: '#E4E7EA', borderRadius: '6px' }}
            >
              <input
                type="text"
                className="ms-2"
                placeholder="Enter Location"
                style={{
                  width: '100%',
                  height: '45px',
                  backgroundColor: '#E4E7EA',
                  borderRadius: '6px',
                  color: '#626262',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                  outline: 'none',
                  border: 'none',
                }}
              ></input>
            </div>
            <span
              className="mt-2"
              style={{
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
              }}
            >
              Transportation
            </span>
            <div
              className="my-1 d-flex align-items-center select"
              style={{ height: '45px', backgroundColor: '#E4E7EA', borderRadius: '6px' }}
            >
              <select id="dropdown" style={{ border: 'none' }}>
                {Transportation.map((item) => (
                  <option key={item.Id} value={item.Name}>
                    {item.Name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="articles-container" style={{ maxHeight: '285px', overflow: 'auto' }}>
          {ParsedData[0].map((item, index) => (
            <div
              className="articles d-flex  mx-2 mb-1"
              style={{
                height: '104px',
                boxShadow:
                  'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                marginTop: index === 0 ? '0' : '10px',
                marginBottom: index === ParsedData[0].length - 1 ? '0' : '10px',
              }}
              key={item.article_id}
            >
              <div className=" my-2 ms-1">
                <img
                  src={baseImageUrl + item.Photos}
                  alt="Order"
                  style={{ width: '90px', height: '93px' }}
                />
              </div>
              <div className="my-1 mx-1 ms-2">
                <div
                  style={{
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 'normal',
                  }}
                >
                  {item.ArticleNumber}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                  }}
                >
                  {item.StyleDescription}
                </div>
                <div
                  style={{
                    fontSize: '17px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    height: '56px',
                    display: 'grid',
                    alignItems: 'end',
                  }}
                >
                  ₹ {item.articleRate}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="bottomContainer d-flex justify-content-between align-items-center mx-2 mb-2"
          style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}
        >
          <button
            type="button"
            className="btn btn-dark"
            style={{ width: '189px', height: '50px', backgroundColor: 'black', color: 'white' }}
          >
            Place Order
          </button>
          <span
            style={{
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '15.68px',
              textAlign: 'right',
            }}
          >
            Total Price{' '}
            <span
              style={{
                fontWeight: '700',
                fontSize: '22px',
                lineHeight: '24.64px',
                textAlign: 'right',
              }}
            >
              {' '}
              ₹ 257.00
            </span>
          </span>
        </div>
        <div
          className="rateContainer mx-2 d-flex justify-content-end"
          style={{ position: 'absolute', bottom: '66px', left: '0', right: '0', height: '124px' }}
        >
          <div>
            <div className="row">
              <p
                style={{
                  width: '120px',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '13.44px',
                }}
              >
                Rate
              </p>
              <span
                style={{
                  width: '69px',
                  textAlign: 'end',
                  fontWeight: '500',
                  fontSize: '14px',
                  lineHeight: '15.68px',
                }}
              >
                ₹ {totalrate}
              </span>{' '}
            </div>
            <div className="row">
              <p
                style={{
                  width: '120px',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '13.44px',
                }}
              >
                SGST 1%
              </p>
              <span
                style={{
                  width: '69px',
                  textAlign: 'end',
                  fontWeight: '500',
                  fontSize: '14px',
                  lineHeight: '15.68px',
                }}
              >
                {' '}
                ₹ 2.7
              </span>
            </div>
            <div className="row">
              <p
                style={{
                  width: '120px',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '13.44px',
                }}
              >
                CGST 1%
              </p>
              <span
                style={{
                  width: '69px',
                  textAlign: 'end',
                  fontWeight: '500',
                  fontSize: '14px',
                  lineHeight: '15.68px',
                  borderBottom: '2px solid black',
                }}
              >
                ₹ 2.7
              </span>
            </div>
            <div className="row mt-1">
              <p
                style={{
                  width: '120px',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '13.44px',
                }}
              ></p>
              <span
                style={{
                  width: '74px',
                  textAlign: 'end',
                  fontWeight: '700',
                  fontSize: '14px',
                  lineHeight: '15.68px',
                }}
              >
                ₹ 280.40
              </span>
            </div>
            <div className="row mt-1">
              <p
                style={{
                  width: '120px',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '12px',
                  lineHeight: '13.44px',
                }}
              >
                Discount
              </p>
              <span
                style={{
                  width: '69px',
                  textAlign: 'end',
                  fontWeight: '500',
                  fontSize: '14px',
                  lineHeight: '15.68px',
                  color: '#212121',
                  borderBottom: '2px solid black',
                }}
              >
                ₹ 28.04
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default orders
