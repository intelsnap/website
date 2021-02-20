import React from 'react'
import ReactWOW from 'react-wow'
import img5 from '../../assets/images/about/about-img5.png'

const Banner = () => {
  return (
    <div className="it-services-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="main-banner-content">
              <ReactWOW delay=".1s" animation="fadeInLeft">
                <h1>Intelligent solutions at a snap for a complex world</h1>
              </ReactWOW>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <ReactWOW delay=".1s" animation="fadeInUp">
              <div className="main-banner-image">
                <img src={img5} alt="banner" />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
