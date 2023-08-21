/* eslint-disable */
import React from 'react'
import '../sliderscreen/sliderscreen.css'
import slider1 from 'src/assets/Colorhuntimg/loginimg/sliderscreen/serious-young-man-standing-isolated-grey 1.png'
import slider2 from 'src/assets/Colorhuntimg/loginimg/sliderscreen/low-angle-little-boy-posing 1 (1).png'
import slider3 from 'src/assets/Colorhuntimg/loginimg/sliderscreen/handsome-confident-hipster-modelsexy-unshaven-man-dressed-summer-stylish-green-hoodie-jeans-clothes-fashion-male-with-curly-hairstyle-posing-studio-isolated-blue 1 (1).png'
import slider4 from 'src/assets/Colorhuntimg/loginimg/sliderscreen/kid-studio-portrait-isolated 1.png'
import logo from 'src/assets/Colorhuntimg/loginimg/sliderscreen/image 99 (1).svg'
import logo1 from 'src/assets/Colorhuntimg/loginimg/sliderscreen/image 99.svg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function sliderscreen(props) {
  const activeIndex = 0
  const Navigate = useNavigate()

  function isActive(index) {
    // Define your condition for determining active button
    const isActive = index === activeIndex // Replace `activeIndex` with your actual variable or condition

    // Return the appropriate class name
    return isActive ? 'active' : ''
  }
  const changedashboard = () => {
    Navigate('/dashboard')
  }
  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ translateX: '100%' }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <!-- Carousel wrapper --> */}
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            className={isActive(0)}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            className={isActive(1)}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            className={isActive(2)}
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="3"
            className={isActive(3)}
            aria-label="Slide 4"
          ></button>
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner">
          {/* <!-- Single item --> */}
          <div className="carousel-item active">
            <img
              src={slider1}
              className="d-block w-100"
              style={{ height: '100vh' }}
              alt="Sunset Over the City"
            />
            <div className="carousel-caption1 d-none d-md-block">
              <img src={logo1} style={{ width: 120, height: 120 }} />
              <p className="bestpack" style={{ color: 'rgba(255, 255, 255, 1)' }}>
                SMART <br />
                FORMALS
              </p>
              <p className="discounts3" style={{ color: 'rgba(255, 255, 255, 1)' }}>
                MIN <br />
                30% OFF*
              </p>
              <button
                className="sliderbutton2"
                onClick={changedashboard}
                style={{ color: 'rgba(0, 0, 0, 1)', backgroundColor: 'rgba(255, 255, 255, 1)' }}
              >
                SHOP
              </button>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src={slider2}
              className="d-block w-100 "
              style={{ height: '100vh' }}
              alt="Canyon at Nigh"
            />
            <div className="carousel-caption1 d-none d-md-block" style={{ top: '30%' }}>
              <img src={logo} style={{ width: 120, height: 120 }} />
              <p className="discounts3">
                FLAT <br />
                40-50% OFF*
              </p>
              <button
                className="sliderbutton2"
                onClick={changedashboard}
                style={{ color: 'rgba(0, 0, 0, 1)', backgroundColor: 'rgba(255, 255, 255, 1)' }}
              >
                SHOP
              </button>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src={slider3}
              className="d-block w-100 "
              style={{ height: '100vh' }}
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption d-none d-md-block">
              <img src={logo} style={{ width: 120, height: 120 }} />
              <p className="bestpack">
                BEST
                <br />
                PICKS
              </p>
              <p className="discounts3">
                FLAT <br />
                50% OFF*
              </p>
              <button className="sliderbutton2" onClick={changedashboard}>
                SHOP
              </button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={slider4}
              className="d-block w-100 "
              style={{ height: '100vh' }}
              alt="Cliff Above a Stormy Sea"
            />
            <div className="carousel-caption1 d-none d-md-block" style={{ top: 40 }}>
              <img src={logo} style={{ width: 120, height: 120 }} />
              <p className="discounts3">
                FLAT <br />
                20-40% OFF*
              </p>
              <button className="sliderbutton2" onClick={changedashboard}>
                SHOP
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Carousel wrapper --> */}
    </motion.div>
  )
}

export default sliderscreen
