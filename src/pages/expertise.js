import React from 'react'
import { Col, Row } from 'antd'
import { Layout } from '../components/core/Layout'
import expertPic from '../assets/expertise.png'

const Expertise = () => (
  <Layout>
    <Row>
      <Col span={3} />
      <Col span={9} style={{ marginTop: '70px', marginBottom: '30px' }}>
        <img
          src={expertPic}
          alt="Consulting"
          width=" 100%"
          height="100%"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </Col>
      <Col span={1} />
      <Col span={9}>
        <p
          style={{
            textAlign: 'center',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '190px',
            fontSize: '36px',
          }}
        >
          The right people, solving problems with purpose and passion
        </p>
      </Col>
    </Row>
  </Layout>
)

export default Expertise
