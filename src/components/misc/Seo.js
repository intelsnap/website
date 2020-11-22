import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const DetailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`

const Seo = ({ title, description, author, siteUrl, keywords }) => (
  <StaticQuery
    query={DetailsQuery}
    render={(data) => {
      const metaDescription = description || data.site.siteMetadata.description
      const metaTitle = title || data.site.siteMetadata.title
      const metaAuthor = author || data.site.siteMetadata.author
      const metaUrl = siteUrl || data.site.siteMetadata.siteUrl
      const metaKeywords = keywords || [
        ' Snaplytic',
        'Snap',
        'Intelligence',
        'Arif Hanif',
      ]

      return (
        <Helmet
          title={title}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: metaTitle,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:siteUrl',
              content: metaUrl,
            },
            {
              property: 'og:author',
              content: metaAuthor,
            },
          ].concat(
            metaKeywords && metaKeywords.length > 0
              ? {
                  name: `keywords`,
                  content: metaKeywords.join(`, `),
                }
              : []
          )}
        />
      )
    }}
  />
)

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  siteUrl: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.string,
}

export default Seo
