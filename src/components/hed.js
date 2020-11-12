import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Menu } from 'antd'
import '../utils/font-awesome'
import intel from '../images/intelf.png'

const Navba = () => (
  <Menu
    theme="light"
    mode="horizontal"
    defaultSelectedKeys={['1']}
    style={{
      width: '100%',
      background: 'grey',
      marginTop: '30px',
      paddingTop: '20px',
      color: 'white',
    }}
  >
    <Row>
      <Col span={3} />
      <Col span={3}>
        <img
          src={intel}
          alt="intelf"
          width="110"
          height="82"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
          }}
        />

        <Row>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              marginLeft: '70px',
            }}
          >
            Privacy Policy
          </p>
        </Row>
      </Col>
      <Col span={4} />
      <Col span={4}>
        <h2
          style={{
            fontSize: '24px',
            color: 'white',
            fontWeight: 'bold',
            paddingTop: '15px',
          }}
        >
          Open Source
        </h2>
        <p>
          {' '}
          <Link
            to="https://github.com/intelsnap/Neo4jNet"
            style={{ fontSize: '14px', color: 'white' }}
          >
            Neo4JNet
          </Link>
        </p>
      </Col>
      <Col span={4}>
        <h2
          style={{
            fontSize: '24px',
            color: 'white',
            fontWeight: 'bold',
            paddingTop: '15px',
          }}
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
          style={{
            fontSize: '19px',
            color: 'white',
            fontWeight: 'bold',
            paddingTop: '40px',
          }}
        >
          Get In touch
        </h2>
        <div style={{ color: 'white', padding: '1px' }}>
          <a className="icons" href="https://twitter.com/intelsnap_inc">
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              size="2x"
              style={{ color: 'white' }}
            />
          </a>
          <a
            className="icons"
            style={{ color: 'white' }}
            href="https://myfavcoffeeplace.io"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
          <a
            className="icons"
            href="https://github.com/intelsnap"
            style={{ color: 'white' }}
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
          <a
            className="icons"
            href="https://intelsnap.slack.com/join/shared_invite/zt-iiqlbfgi-45A58ck5JHG9xsNqP52DIA#/"
            style={{ color: 'white' }}
          >
            <FontAwesomeIcon icon={['fab', 'slack']} size="2x" />
          </a>
          <a
            className="icons"
            href="https://www.youtube.com/channel/UC8xFo5n_dKRYbG7OoM4QVbg/"
            style={{ color: 'white' }}
          >
            <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
          </a>
          <a
            className="icons"
            href="support@intelsnap.com"
            style={{ color: 'white' }}
          >
            <FontAwesomeIcon icon="envelope" size="2x" />
          </a>
          <a
            className="icons"
            href="https://www.instagram.com/intelsnap_media/"
            style={{ color: 'white' }}
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

export default Navba
