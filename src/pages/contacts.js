import React from 'react'
import { Row, Col } from 'antd'
import Layout from '../components/layout'
import cont from '../images/contact.png'
import './contact.css'
import '../utils/font-awesome'
import 'antd/dist/antd.css'

const contacts = () => (
  <Layout>
    <Row className="about-pic">
      '
      <Col span={24}>
        <img
          src={cont}
          alt="about"
          width="100%"
          height="100%"
          style={{ paddingLeft: '03px', paddingRight: '01px' }}
        />
      </Col>
    </Row>
    <section className="contact">
      <Row>
        <Col span={1}> </Col>

        <Col span={10}>
          <div className="contact-option-f">
            {/* <h1> Contact </h1> */}
            <form name="contacts" method="post">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  required
                  style={{
                    width: '70%',
                    padding: '6px 12px',
                    margin: '0px 0px 16px',
                  }}
                />
              </div>
              {/* <!-- // end .form-group --> */}
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  required
                  style={{
                    width: '70%',
                    padding: '6px 12px',
                    margin: '0px 0px 16px',
                  }}
                />
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Message"
                  className="form-control"
                  name="message"
                  required
                  rows="6"
                  style={{ width: '100%', padding: '6px 12px' }}
                />
              </div>

              <button type="submit" className="btn-submit">
                {' '}
                Send Message{' '}
              </button>
              {/* <a className="btn-submit" href="mailto:info@intelsnap.com">
                {' '}
                Send Message{' '}
              </a> */}
            </form>
          </div>
        </Col>
      </Row>
    </section>
  </Layout>
)

export default contacts
