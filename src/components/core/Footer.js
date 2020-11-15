import React from 'react'
import styled from 'styled-components'
import {
  TwitterOutlined,
  LinkedinFilled,
  GithubFilled,
  SlackSquareFilled,
  YoutubeFilled,
  InstagramFilled,
} from '@ant-design/icons'

export const Footer = () => (
  <Container>
    <ContainerWrapper>
      <About>
        <Description>
          We at Snaplytic help our clients do there best work.
        </Description>
      </About>
      <StyledIcon href="https://twitter.com/intelsnap_inc" target="blank">
        <TwitterOutlined />
      </StyledIcon>
      <StyledIcon href="https://myfavcoffeeplace.io" target="blank">
        <LinkedinFilled />
      </StyledIcon>
      <StyledIcon href="https://github.com/intelsnap" target="blank">
        <GithubFilled />
      </StyledIcon>
      <StyledIcon
        href="https://intelsnap.slack.com/join/shared_invite/zt-iiqlbfgi-45A58ck5JHG9xsNqP52DIA#/"
        target="blank"
      >
        <SlackSquareFilled />
      </StyledIcon>
      <StyledIcon
        href="https://www.youtube.com/channel/UC8xFo5n_dKRYbG7OoM4QVbg/"
        target="blank"
      >
        <YoutubeFilled />
      </StyledIcon>
      <StyledIcon
        href="https://www.instagram.com/intelsnap_media/"
        target="blank"
      >
        <InstagramFilled />
      </StyledIcon>
    </ContainerWrapper>
    <ContainerWrapper>
      <Copyright>© {new Date().getFullYear()} Snaplytic.io</Copyright>
    </ContainerWrapper>
  </Container>
)

const StyledIcon = styled.a`
  color: white;
  font-size: 1.4rem;
  margin: 5px;
  :link {
    color: white;
  }
  :hover {
    color: black;
  }
`

const Copyright = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 40px 20px 60px;
  width: 100%;
  min-height: 300px;
  background-color: #252d3c;
  color: #c6c6ce;
  @media only screen and (min-width: 1440px) {
    padding: 40px 0 60px;
  }
`

const ContainerWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  width: 100%;
  max-width: 1400px;
`

const Description = styled.p`
  font-size: 0.833em;
  line-height: 1.5em;
  margin-bottom: 10px;
`

const About = styled.div`
  display: flex;
  flex: 5 1 auto;
  flex-direction: column;
  padding: 0 20px;
`
