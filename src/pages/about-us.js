import React from 'react'
import Layout from '../components/App/Layout'
import Navbar from '../components/App/Navbar'
import PageBanner from '../components/Common/PageBanner'
import Footer from '../components/App/Footer'
import AboutUsContent from '../components/AboutUs/AboutUsContent'
import WhyChooseUs from '../components/AboutUs/WhyChooseUs'
import HowItWork from '../components/AboutUs/HowItWork'

const AboutUs = () => {
  return (
    <Layout>
      <Navbar />
      <PageBanner
        pageTitle="About Us"
        homePageText="Home"
        homePageUrl="/"
        activePageText="About Us"
      />
      <AboutUsContent />
      <WhyChooseUs />
      <HowItWork />
      <Footer />
    </Layout>
  )
}

export default AboutUs
