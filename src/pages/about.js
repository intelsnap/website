import React from 'react'
import styled from 'styled-components'
import { Layout } from '../components/core/Layout'
import aboutBanner from '../assets/about.png'
import Seo from '../components/misc/Seo'

const About = () => (
  <Layout>
    <Seo title="Snaplytic | Privacy-Policy" />
    <img src={aboutBanner} alt="about" width="100%" height="100%" />
    <Bio>
      <BioHeader>Dr. Sahar Zafar - Founder & CEO</BioHeader>
      <BioDescription>
        With over ten years of experience as a Project Manager and Human
        Subjects Protection Scientist (HSPS). Managing biodefense and
        biotechnology projects under the Department of Defense (DoD), Defense
        Advance Research Projects Agency (DARPA), and Walter Reed Army Institute
        of Research (WRAIR). Dr. Sahar Zafar has become a clinical research
        compliance expert, conducting training, drafting policies and
        guidelines, and ensuring compliance with government regulations. She has
        published and co-written numerous white papers and research articles on
        the proper protocols for HSR testing and trials. She is a member of
        Neuroethics Women Leaders, holds a Top Secret (compartmented
        information) Clearance, and is a certified IRB Manager.
      </BioDescription>
    </Bio>
    <Bio>
      <BioHeader>Arif Hanif - Co-Founder & CTO</BioHeader>
      <BioDescription>
        Arif is an engineer with the heart of an entrepreneur. His passion for
        transforming businesses through software solutions that drive
        exceptional results for clients has fueled our firm's high quality work
        and steady growth. His leadership has brought Intelsnap to the forefront
        in web, mobile and IoT solutions development.
      </BioDescription>
    </Bio>
  </Layout>
)

const Bio = styled.div`
  padding: 50px;
`

const BioHeader = styled.h4``

const BioDescription = styled.p``

export default About
