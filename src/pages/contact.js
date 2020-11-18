import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/core/Layout'
import contactBanner from '../assets/contact.png'

const Contact = () => (
  <Layout>
    <Helmet>
      <title>Snaplytic | Contact</title>
      <meta name="description" content="Snaplytic | Contact" />
    </Helmet>
    <img src={contactBanner} alt="about" width="100%" height="100%" />
    <div>Contact Place holder</div>
  </Layout>
)

export default Contact
