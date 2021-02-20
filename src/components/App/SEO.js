import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = () => (
  <Helmet>
    <title>Snaplytic, Inc.</title>
    <meta name="description" content="Snaplytic, Inc." />
    <meta name="og:title" property="og:title" content="Snaplytic, Inc." />
    <meta name="twitter:card" content="Snaplytic, Inc." />
    <link rel="canonical" href="https://snaplytic.io" />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg"
    />
  </Helmet>
)

export default SEO
