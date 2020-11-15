import React from 'react'
import { Row, Col } from 'antd'
import { Layout } from '../components/core/Layout'
import homeBanner from '../assets/home.png'
import img from '../assets/image3.jpeg'

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
      <Col span={5}>
        <h1
          style={{ fontSize: '26px', textAlign: 'center', marginTop: '50px' }}
        >
          Consulting
        </h1>
        <img
          src={img}
          alt="Consulting"
          width=" 70%"
          height="30%%"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <Row>
          <p
            style={{
              textAlign: 'justify',
              marginLeft: '45px',
              marginRight: '40px',
              paddingTop: '15px',
            }}
          >
            Leverage our expert knowledge in ...
          </p>
        </Row>
        <Row style={{ marginTop: '67px' }}>
          <p
            style={{
              fontWeight: 'bold',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingTop: '15px',
            }}
          >
            READ MORE
          </p>
        </Row>
      </Col>
      <Col span={2}> </Col>
      <Col span={5}>
        <h1
          style={{ fontSize: '26px', textAlign: 'center', marginTop: '50px' }}
        >
          Digital Transformation
        </h1>
        <img
          src={img}
          alt="Consulting"
          width=" 70%"
          height="30%%"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <Row>
          <p
            style={{
              textAlign: 'center',
              display: 'block',
              marginLeft: '45px',
              marginRight: '50px',
              paddingTop: '15px',
            }}
          >
            Collaborate with us to craft your strategic roadmap for innovation
            with digital design technology.
          </p>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <p
            style={{
              fontWeight: 'bold',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingTop: '15px',
            }}
          >
            READ MORE
          </p>
        </Row>
      </Col>
      <Col span={2}> </Col>
      <Col span={5}>
        <h1
          style={{ fontSize: '26px', textAlign: 'center', marginTop: '50px' }}
        >
          {' '}
          Software Development{' '}
        </h1>
        <img
          src={img}
          alt="Consulting"
          width=" 70%"
          height="30%%"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <Row>
          <p
            style={{
              textAlign: 'center',
              display: 'block',
              marginLeft: '45px',
              marginRight: '50px',
              paddingTop: '15px',
            }}
          >
            Work with us to develop tools that will accelerate your workflow
            using automation and computational design.
          </p>
        </Row>
        <Row>
          <p
            style={{
              fontWeight: 'bold',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingTop: '15px',
            }}
          >
            READ MORE
          </p>
        </Row>
      </Col>
    </Row>
  </Layout>
)

export default Home
