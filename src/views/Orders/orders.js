/* eslint-disable */

import React from 'react'
import './Order.css'
import menubar from '../../assets/Colorhuntimg/menu bar (1).svg'
import { useNavigate } from 'react-router-dom'
function orders() {
  const navigate = useNavigate()
  return (
    <>
      <div className="mainContainer mx-2 " style={{ minHeight: '100vh', position: 'relative' }}>
        <div className="TopContainer" style={{ display: 'flex', width: '100%' }}>
          <img src={menubar} onClick={()=> navigate('/dashboard')}/>
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
            Purchase order
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
            <div className="details mt-1">
              <span
                className="ms-1"
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
            <div className="details mt-1">
              <span
                className="ms-1"
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
            <div className="details mt-1">
              <span
                className="ms-1"
                style={{
                  color: '#626262',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                }}
              >
                Courier
              </span>
            </div>
          </div>
        </div>
        <div className="articles mt-3 mx-2">
          <div className="imagediv my-1 ms-1"></div>
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
            class="btn btn-dark"
            style={{ width: '189px', height: '50px', backgroundColor: 'black', color: 'white' }}
          >
            Proceed To Order
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
                  borderBottom: '4px solid black',
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
                  borderBottom: '4px solid black',
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
