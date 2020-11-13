import React from 'react'
import { Row } from 'antd'
import Layout from '../components/layout'
import intel from '../images/intelf.png'

const Home = () => (
  <Layout>
    <Row>
      <div
        className="cont"
        style={{
          textAlign: 'justify',
          padding: '0px 10px',
          margin: '0px 270px',
        }}
      >
        <h1
          style={{
            color: 'black',
            textTransform: 'capitalize',
            fontWeight: '600',
            margin: '30px',
          }}
        >
          {' '}
          Home started on work{' '}
        </h1>

        <h2> Privacy Notice </h2>
        <p>
          This privacy notice discloses the privacy practices for{' '}
          <a href="https://intepsnap.com"> https://intepsnap.com </a>This
          privacy notice applies solely to information collected by this
          website. It will notify you of the following:
        </p>
      </div>
      <img
        src={intel}
        alt="Arif-Hanif"
        width="70%"
        height="50%"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
    </Row>
  </Layout>
)

export default Home
