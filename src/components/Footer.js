import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Menu } from 'antd'
import '../utils/font-awesome'
import styled from 'styled-components'
import intel from '../images/intelf.png'

const Footers = () => (
  <Menu
    theme="light"
    mode="horizontal"
    defaultSelectedKeys={['1']}
    style={{
      width: '100%',
      background: 'grey',

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
            target="blank"
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
        <Ico>
          <a
            className="icons"
            href="https://twitter.com/intelsnap_inc"
            target="blank"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
          </a>
          <a
            className="icons"
            href="https://myfavcoffeeplace.io"
            target="blank"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
          <a
            className="icons"
            href="https://github.com/intelsnap"
            target="blank"
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
          <a
            className="icons"
            href="https://intelsnap.slack.com/join/shared_invite/zt-iiqlbfgi-45A58ck5JHG9xsNqP52DIA#/"
            target="blank"
          >
            <FontAwesomeIcon icon={['fab', 'slack']} size="2x" />
          </a>
          <a
            className="icons"
            href="https://www.youtube.com/channel/UC8xFo5n_dKRYbG7OoM4QVbg/"
            target="blank"
          >
            <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" />
          </a>
          <a className="icons" href="support@intelsnap.com" target="blank">
            <FontAwesomeIcon icon="envelope" size="2x" />
          </a>
          <a
            className="icons"
            href="https://www.instagram.com/intelsnap_media/"
            target="blank"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
        </Ico>
        <Row>
          <p>Copyright 2020 Intelsnap Inc. All Rights Reserved.</p>
        </Row>
      </Col>
    </Row>
  </Menu>
)

const Ico = styled.a`
  .icons {
    padding: 08px;
    color: white;
    font-size: 0.8rem;
    :hover {
      color: black;
      background-color: gray;
    }
  }
`

export default Footers
