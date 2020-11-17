import React from 'react'
import styled from 'styled-components'
import { Layout } from '../components/core/Layout'
import homeBanner from '../assets/home.png'
import img from '../assets/image-icon.jpg'

const Home = () => (
  <Layout>
    <img
      src={homeBanner}
      alt="about"
      width="100%"
      height="100%"
      style={{ paddingLeft: '01px', paddingRight: '01px' }}
    />

    <Rows>
      <Cols size={2}> </Cols>
      <Cols size={5}>
        <ServiceHeader>Consulting</ServiceHeader>
        <ServiceImage src={img} alt="Consulting" />
        <Rows>
          <DescriptionContainer>
            <ServiceDescription>
              Leverage our expert knowledge in ...
            </ServiceDescription>
          </DescriptionContainer>
        </Rows>
        <Rows>
          <ServiceDetailMore>READ MORE</ServiceDetailMore>
        </Rows>
      </Cols>
      <Cols size={2}> </Cols>
      <Cols size={5}>
        <ServiceHeader>Digital Transformation</ServiceHeader>
        <ServiceImage src={img} alt="Consulting" />
        <Rows>
          <DescriptionContainer>
            <ServiceDescription>
              Collaborate with us to craft your strategic roadmap for innovation
              with digital design technology.
            </ServiceDescription>
          </DescriptionContainer>
        </Rows>
        <Rows>
          <ServiceDetailMore>READ MORE</ServiceDetailMore>
        </Rows>
      </Cols>
      <Cols size={2}> </Cols>
      <Cols size={5}>
        <ServiceHeader> Software Development </ServiceHeader>
        <ServiceImage src={img} alt="Consulting" />
        <Rows>
          <DescriptionContainer>
            <ServiceDescription>
              Work with us to develop tools that will accelerate your workflow
              using automation and computational design.
            </ServiceDescription>
          </DescriptionContainer>
        </Rows>
        <Rows>
          <ServiceDetailMore>READ MORE</ServiceDetailMore>
        </Rows>
      </Cols>
      <Cols size={2}> </Cols>
    </Rows>
  </Layout>
)

export const Grid = styled.div``

export const Rows = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    flex-flow: column;
  }
`
export const Cols = styled.div`
  flex: ${(props) => props.size};
  display: block;
`
const ServiceHeader = styled.h1`
  font-size: 26px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 15px;
  @media only screen and (max-width: 992px) {
    font-size: 20px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 1290px) {
    font-size: 20px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`
const ServiceImage = styled.img`
  width: 70%;
  height: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
  @media only screen and (max-width: 992px) {
    width: 40%;
    height: 20%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 08px;
  }
`
const ServiceDescription = styled.p`
  text-align: center;
  display: block;
  margin-left: 45px;
  margin-right: 45px;
  padding-top: 15px;
  font-size: 16px;
  @media only screen and (max-width: 992px) {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 14px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1290px) {
    text-align: center;
    display: block;
    margin-left: 45px;
    margin-right: 45px;
    padding-top: 14px;
    font-size: 14px;
  }
`
const ServiceDetailMore = styled.p`
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
  font-weight: bold;
  @media only screen and (max-width: 992px) {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }
`
const DescriptionContainer = styled.div`
  display: block;
  height: 140px;
  overflow: hidden;
  @media only screen and (max-width: 992px) {
    display: block;
    height: 40px;
    overflow: hidden;
  }
`

export default Home
