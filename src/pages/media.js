import React from 'react'
import { Layout } from '../components/core/Layout'
import mediaBanner from '../assets/media.png'
import Seo from '../components/misc/Seo'

const Media = () => (
  <Layout>
    <Seo title="Snaplytic | Media" description="Snaplytic Media " />
    <img
      src={mediaBanner}
      alt="media"
      width="100%"
      height="100%"
      style={{ paddingLeft: '01px', paddingRight: '01px' }}
    />
    <h1> Thoughts</h1>
  </Layout>
)

export default Media
