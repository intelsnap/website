import React from 'react'
import { Link } from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'

const OurSolutions = () => {
  return (
    <section className="solutions-area pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="star" />
            Our Solutions
          </span>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-rocket"></i>
              </div>
              <h3>
                <Link to="/service-details">Consulting</Link>
              </h3>
              <p>Leverage our wide expertise in science and technology.</p>

              {/*<Link to='/service-details' className='view-details-btn'>
                View Details
              </Link>*/}
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-laptop"></i>
              </div>

              <h3>
                <Link to="/service-details">Software Development</Link>
              </h3>

              <p>
                Work with us to develop tools that will accelerate your workflow
                using automation and computational design.
              </p>

              {/*<Link to='/service-details' className='view-details-btn'>
                View Details
              </Link>*/}
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
            <div className="single-solutions-box">
              <div className="icon">
                <i className="flaticon-money"></i>
              </div>

              <h3>
                <Link to="/service-details">Digital Transformation</Link>
              </h3>

              <p>
                Collaborate with us to craft your strategic roadmap for
                innovation with digital design technology.
              </p>

              {/*<Link to='/service-details' className='view-details-btn'>
                View Details
              </Link>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurSolutions
