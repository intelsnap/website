import React from 'react'
import { Row, Col } from 'antd'
import Layout from '../components/Layout'
import homeBanner from '../assets/home.png'

const Home = () => (
  <Layout>
    <Row>
      <Col span={24}>
        <img
          src={homeBanner}
          alt="about"
          width="100%"
          height="100%"
          style={{ paddingLeft: '03px', paddingRight: '01px' }}
        />
      </Col>
    </Row>
    <Row>
      <Col span={3}> </Col>
      <Col span={12}>Home</Col>
    </Row>
  </Layout>
)

export default Home
