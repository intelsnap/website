import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

import Layout from '../components/Layout'
import cont from '../assets/contact.png'

export const ButonCon = styled.button`
  border: 3px solid rgb(39, 18, 230);
  color: rgb(241, 241, 247);
  background-color: rgb(67, 56, 131);
  padding: 13px 44px;
  font-size: 15px;
  margin: 8px 0 0;

  :hover {
    border: 3px solid rgb(5, 7, 7);
    background: rgb(46, 174, 190);
    color: #0a0a0a;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
`

export const ContactConf = styled.div`
  padding: 45px 64px;
  border-color: transparent;

  @media screen and (max-width: 767px) {
    padding: 20px 15px;
  }
`

export const Ico = styled.a`
  .icons {
    padding: 08px;
    color: #000;
    font-size: 0.8rem;
    :hover {
      color: grey;
    }
  }
`

const Contacts = () => (
  <Layout>
    <Row>
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
    <section>
      <Row>
        <Col span={1}> </Col>
        <Col span={10}>
          <ContactConf>
            {/* <h1> Contact </h1> */}
            <form name="contacts" method="post">
              <div>
                <input
                  type="text"
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
              <div>
                <input
                  type="email"
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

              <div>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  rows="6"
                  style={{ width: '100%', padding: '6px 12px' }}
                />
              </div>
              <a href="mailto:starsleo18@gmail.com">
                <ButonCon> Send Message </ButonCon>
              </a>
            </form>
          </ContactConf>
        </Col>
      </Row>
    </section>
  </Layout>
)

export default Contacts
