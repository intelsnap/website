import React from 'react'
import { Layout } from '../components/core/Layout'
import contactBanner from '../assets/contact.png'
import Seo from '../components/misc/Seo'

const Contact = () => (
  <Layout>
    <Seo title="Snaplytic | Contact" />
    <img src={contactBanner} alt="about" width="100%" height="100%" />
    <div>Contact Place holder</div>
  </Layout>
)

export default Contact
