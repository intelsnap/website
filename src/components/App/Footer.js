import React from 'react'
import { Link } from 'gatsby'
import logo from '../../assets/images/logo.png'
import footerMap from '../../assets/images/footer-map.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <a href="/" className="logo">
                <img style={{ height: 60 }} src={logo} alt="logo" />
              </a>
              <ul className="social-link">
                <li>
                  <Link
                    to="https://twitter.com/snaplytic"
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6" />
          {/*
          <div className='col-lg-2 col-sm-6'>
            <div className='single-footer-widget'>
              <h3>Resources</h3>

              <ul className='footer-links-list'>
                <li>
                  <Link to='/team'>Our Team</Link>
                </li>
                <li>
                  <Link to='/services'>Our Expertise</Link>
                </li>
              </ul>
            </div>
          </div>
          */}

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contact</h3>
              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-envelope" />
                  <a href="mailto:info@snaplytic.io">info@snaplytic.io</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright @{currentYear} <strong>Snaplytic, Inc.</strong>
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              {/*
              <ul>
                <li>
                  <Link to='/privacy-policy'>Privacy Policy</Link>
                </li>
                <li>
                  <Link to='/terms-of-service'>Terms & Conditions</Link>
                </li>
              </ul>
              */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="footer-logo" />
      </div>
    </footer>
  )
}

export default Footer
