import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Menu } from 'antd'
import '../utils/font-awesome'
import intel from '../images/intelf.png'

function Footer() {
  return (
    <Menu
      theme="white"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{
        width: '100%',
        background: 'white',
        marginTop: '30px',
        paddingTop: '40px',
      }}
    >
      <Row>
        <Col span={3} />
        <Col span={3}>
          <img
            src={intel}
            alt="intelsnap"
            width="110"
            height="82"
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '07px',
            }}
          />
          <p style={{ fontSize: '12px', marginBottom: '6px' }}>
            At Intelsnap Inc. we want to help you add intelligence to your
            workflows.
          </p>
          <Row>
            <p
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
                marginLeft: '110px',
              }}
            >
              Privacy Policy
            </p>
          </Row>
        </Col>
        <Col span={4} />
        <Col span={4}>
          <h2
            style={{ fontSize: '24px', fontWeight: 'bold', paddingTop: '15px' }}
          >
            Open Source
          </h2>
          <p>
            {' '}
            <Link
              to="https://github.com/intelsnap/Neo4jNet"
              style={{ fontSize: '14px', color: 'black' }}
            >
              Neo4JNet
            </Link>
          </p>
        </Col>
        <Col span={4}>
          <h2
            style={{ fontSize: '24px', fontWeight: 'bold', paddingTop: '15px' }}
          >
            Quick Links
          </h2>
          <p>
            Consulting <br />
            Digital Transformation
            <br />
            Software Development
          </p>
        </Col>
        <Col span={5}>
          <h2
            style={{ fontSize: '19px', fontWeight: 'bold', paddingTop: '40px' }}
          >
            Get In touch
          </h2>
          <div style={{ padding: '1px' }}>
            <a className="icons" href="https://twitter.com/intelsnap_inc">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
            </a>
            <a className="icons" href="https://myfavcoffeeplace.io">
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
            </a>
            <a className="icons" href="https://github.com/intelsnap">
              <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
            </a>
            <a
              className="icons"
              href="https://intelsnap.slack.com/join/shared_invite/zt-iiqlbfgi-45A58ck5JHG9xsNqP52DIA#/"
            >
              <FontAwesomeIcon icon={['fab', 'slack']} size="2x" />
            </a>
            <a
              className="icons"
              href="https://www.youtube.com/channel/UC8xFo5n_dKRYbG7OoM4QVbg/"
            >
              <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
            </a>
            <a className="icons" href="support@intelsnap.com">
              <FontAwesomeIcon icon="envelope" size="2x" />
            </a>
            <a
              className="icons"
              href="https://www.instagram.com/intelsnap_media/"
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
            </a>
          </div>
          <Row>
            <p>Copyright 2020 Intelsnap Inc. All Rights Reserved.</p>
          </Row>
        </Col>
      </Row>
    </Menu>
  )
}

export default Footer
