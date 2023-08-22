/* eslint-disable */

import React from 'react'
import './Order.css'
import menubar from '../../assets/Colorhuntimg/menu bar (1).svg'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/Colorhuntimg/image 122.png'
function orders() {
  const navigate = useNavigate()
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
          <div className=" mx-2 mt-3" style={{ height: '220px' }}>
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
                02/12/23
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
                Gujarat
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
              Transportation
            </span>
            <div
              className="my-1 d-flex align-items-center select"
              style={{ height: '45px', backgroundColor: '#E4E7EA', borderRadius: '6px' }}
            >
              <select id="dropdown">
                <option value="2">Courier</option>
                <option value="3">Option 2</option>
              </select>
            </div>
          </div>
        </div>
        <div
          className="articles d-flex mt-3 mx-2"
          style={{
            height: '104px',
            boxShadow:
              'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}
        >
          <div className=" my-2 ms-1" style={{ width: '90px', height: '93px' }}>
            <img src={img}></img>
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
              33216
            </div>
            <div
              style={{
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              Collar Tress
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
              $275.00
            </div>
          </div>
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
              $257.00
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
                $275.00
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
                $2.7
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
                $2.7
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
                  width: '50px',
                  textAlign: 'end',
                  fontWeight: '700',
                  fontSize: '14px',
                  lineHeight: '15.68px',
                }}
              >
                $280.40
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
                $28.04
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default orders
