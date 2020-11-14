import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import {
  TwitterOutlined,
  LinkedinFilled,
  GithubFilled,
  SlackSquareFilled,
  YoutubeFilled,
  MailOutlined,
  InstagramFilled,
} from '@ant-design/icons'

const StyledIcons = styled.div`
  .icons {
    height: 20px;
    padding: 08px;
    color: white;
    font-size: 0.8rem;
    :hover {
      color: black;
      background-color: gray;
    }
  }
`

const Footer = () => (
  <div
    style={{
      width: '100%',
      background: 'grey',
      paddingTop: '20px',
      color: 'white',
      marginTop: '30px',
    }}
  >
    <Row>
      <Col span={3} />
      <Col span={3}>
        <Row>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              marginLeft: '70px',
            }}
          >
            <Link
              to="/privacy-policy"
              activeStyle={{
                color: 'rgb(24, 144, 255)',
                borderBottom: '2px',
                borderBottomColor: 'rgb(24, 144, 255)',
                borderBottomWidth: '2px',
                borderBottomStyle: 'solid',
              }}
              style={{ color: 'white' }}
            >
              Privacy Policy
            </Link>
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
          <a
            href="https://github.com/intelsnap/Neo4jNet"
            target="blank"
            style={{ fontSize: '14px', color: 'white' }}
          >
            Neo4JNet
          </a>
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
        <StyledIcons>
          <a href="https://twitter.com/intelsnap_inc" target="blank">
            <TwitterOutlined />
          </a>
          <a href="https://myfavcoffeeplace.io" target="blank">
            <LinkedinFilled />
          </a>
          <a href="https://github.com/intelsnap" target="blank">
            <GithubFilled />
          </a>
          <a
            href="https://intelsnap.slack.com/join/shared_invite/zt-iiqlbfgi-45A58ck5JHG9xsNqP52DIA#/"
            target="blank"
          >
            <SlackSquareFilled />
          </a>
          <a
            href="https://www.youtube.com/channel/UC8xFo5n_dKRYbG7OoM4QVbg/"
            target="blank"
          >
            <YoutubeFilled />
          </a>
          <a href="support@intelsnap.com" target="blank">
            <MailOutlined />
          </a>
          <a href="https://www.instagram.com/intelsnap_media/" target="blank">
            <InstagramFilled />
          </a>
        </StyledIcons>
        <Row>
          <p>Copyright 2020 Intelsnap Inc. All Rights Reserved.</p>
        </Row>
      </Col>
    </Row>
  </div>
)

export default Footer
