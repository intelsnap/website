import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import Layout from '../components/layout'
import about from '../images/about.png'
import pic from '../images/image1.jpeg'
import pic1 from '../images/image2.jpeg'

const Button = styled.button`
  padding: 3px;
  width: 100%;
  color: white;
  background-color: black;
  text-align: center;
  :hover {
    border: 3px solid rgb(5, 7, 7);
    background: grey;
    color: #0a0a0a;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
`

const About = () => (
  <Layout>
    <div className="about" style={{ textAlign: 'justify' }}>
      <Row className="about-pic">
        '
        <Col span={24}>
          <img
            src={about}
            alt="about"
            width="100%"
            height="100%"
            style={{
              paddingLeft: '15px',
              paddingRight: '10px',
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={3}> </Col>
        <Col span={12}>
          <h1 style={{ fontSize: '36px' }}> Fueled by innovation </h1>
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
      <Row>
        <Col span={3}> </Col>
        <Col span={12}>
          <h1 style={{ marginTop: '20px', paddingBottom: '10px' }}>
            {' '}
            Leadership team{' '}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col span={3}> </Col>
        <Col span={4}>
          {' '}
          <img
            src={pic1}
            alt="Sahar-Zafar"
            width="70%"
            height="50%"
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />{' '}
        </Col>
        <Col span={11}>
          <h4
            style={{
              color: 'black',
              paddingTop: '10px',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {' '}
            Dr. Sahar Zafar - Founder & CEO{' '}
          </h4>
          <p>
            {' '}
            With over ten years of experience as a Project Manager and Human
            Subjects Protection Scientist (HSPS). Managing biodefense and
            biotechnology projects under the Department of Defense (DoD),
            Defense Advance Research Projects Agency (DARPA), and Walter Reed
            Army Institute of Research (WRAIR). Dr. Sahar Zafar has become a
            clinical research compliance expert, conducting training, drafting
            policies and guidelines, and ensuring compliance with government
            regulations. She has published and co-written numerous white papers
            and research articles on the proper protocols for HSR testing and
            trials. She is a member of Neuroethics Women Leaders, holds a Top
            Secret (compartmented information) Clearance, and is a certified IRB
            Manager.
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={3}> </Col>
        <Col span={4}>
          {' '}
          <img
            src={pic}
            alt="Arif-Hanif"
            width="70%"
            height="50%"
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />{' '}
        </Col>
        <Col span={11}>
          <h4
            style={{
              color: 'black',
              paddingTop: '10px',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {' '}
            Arif Hanif - Co-Founder & CTO{' '}
          </h4>
          <p>
            {' '}
            Arif is an engineer with the heart of an entrepreneur. His passion
            for transforming businesses through software solutions that drive
            exceptional results for clients has fueled our firm's high quality
            work and steady growth. His leadership has brought Intelsnap to the
            forefront in web, mobile and IoT solutions development.
          </p>
        </Col>
      </Row>

      <Row>
        <Col span={3}> </Col>
        <Col span={10}>
          <h1 style={{ paddingTop: '20px' }}> Careers </h1>
          <p>
            Intelsnap is all about tackling challenging problems. We are always
            looking for smart and talented people. We do not have any openings
            right now but technology is always evolving and our needs may change
            quickly so send us your resume or CV.
          </p>
        </Col>
        <Col span={3} />
        <Col span={6}>
          <h2 style={{ paddingTop: '20px' }}> Pitch yourself </h2>
          <form name="contacts" method="post">
            <div className="form-group" style={{ padding: '6px 12px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
                style={{ padding: '6px 12px', width: '100%' }}
              />
            </div>
            {/* <!-- // end .form-group --> */}
            <div className="form-group" style={{ padding: '6px 12px' }}>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                required
                style={{ padding: '6px 12px', width: '100%' }}
              />
            </div>

            <Row style={{ padding: '6px 12px' }}>
              <Col span={10}>
                <Button>
                  Attach CV
                  <input
                    type="file"
                    className="upload up"
                    id="up"
                    name="cv"
                    accept=".doc, .docx,.ppt, .pptx,.txt,.pdf"
                    onChange="readURL(this);"
                    style={{ display: 'none' }}
                  />
                </Button>
              </Col>
              <Col span={4} />
              <Col span={10}>
                <button
                  type="submit"
                  className="btn-s"
                  style={{
                    padding: '3px',
                    width: '100%',
                    textAlign: 'center',
                    color: 'white',
                    background: 'purple',
                    Hover: 'blue',
                  }}
                >
                  {' '}
                  Submit{' '}
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default About
