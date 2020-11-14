import React from 'react'
import { Row, Col } from 'antd'
import Layout from '../components/Layout'
import hom from '../assets/home.png'

const Home = () => (
  <Layout>
    <Row className="about-pic">
      <Col span={24}>
        <img
          src={hom}
          alt="about"
          width="100%"
          height="100%"
          style={{ paddingLeft: '03px', paddingRight: '01px' }}
        />
      </Col>
    </Row>
    <Row>
      <Col span={3}> </Col>
      <Col span={12}>
        <h1 style={{ fontSize: '36px' }}> Starting Home </h1>
        <p
          style={{
            textAlign: 'justify',
            paddingTop: 'none',
            textTransform: 'capitalize',
            fontSize: '35px',
          }}
        >
          {' '}
          Your partner in a fast-paced, digital world
        </p>
      </Col>
    </Row>
  </Layout>
)

export default Home
