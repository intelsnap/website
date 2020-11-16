import React from 'react'
import styled from 'styled-components'
import slack from '../../assets/slack-1.svg'
import github from '../../assets/github-1.svg'
import linkedin from '../../assets/linkedin-1.svg'
import twitter from '../../assets/twitter-1.svg'
import youtube from '../../assets/youtube-1.svg'

export const Footer = () => (
  <Container>
    <ContainerWrapper>
      <About>
        <Description>
          We at Snaplytic help our clients do there best work.
        </Description>
      </About>
      <SocialIcon href="https://twitter.com/intelsnap_inc" target="blank">
        <StyledIcon src={twitter} alt="linkedin" />
      </SocialIcon>
      <SocialIcon href="https://myfavcoffeeplace.io" target="blank">
        <StyledIcon src={linkedin} alt="linkedin" />
      </SocialIcon>
      <SocialIcon href="https://github.com/intelsnap" target="blank">
        <StyledIcon src={github} alt="linkedin" />
      </SocialIcon>
      <SocialIcon
        href="https://intelsnap.slack.com/join/shared_invite/zt-iiqlbfgi-45A58ck5JHG9xsNqP52DIA#/"
        target="blank"
      >
        <StyledIcon src={slack} alt="linkedin" />
      </SocialIcon>
      <SocialIcon
        href="https://www.youtube.com/channel/UC8xFo5n_dKRYbG7OoM4QVbg/"
        target="blank"
      >
        <StyledIcon src={youtube} alt="linkedin" />
      </SocialIcon>
    </ContainerWrapper>
    <ContainerWrapper>
      <Copyright>© {new Date().getFullYear()} Snaplytic.io</Copyright>
    </ContainerWrapper>
  </Container>
)

const StyledIcon = styled.img`
  font-size: 0.8rem;
  margin: 10px;
  display: inline-block;
  width: 40px;
  height: 40px;
  background-size: cover;
  :hover {
    background-color: #646d98;
  }
`
const SocialIcon = styled.a`
  padding: 1px;
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
