import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout } from '../components/core/Layout'
import mediaBanner from '../assets/media.png'
import Seo from '../components/misc/Seo'
import { Rows, Cols } from './index'
import Post from '../components/misc/Post'
import Sidebar from '../components/core/Sidebar'

export const getBlogDta = graphql`
  query getBlogDta {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "(Do - MM- YYYY)")
            description
            image {
              childImageSharp {
                fluid(maxWidth: 1500, maxHeight: 700, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`

const Media = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo title="Snaplytic | Media" description="Snaplytic Media " />
      <Rows>
        <img
          src={mediaBanner}
          alt="media"
          width="100%"
          height="100%"
          style={{ paddingLeft: '01px', paddingRight: '01px' }}
        />
      </Rows>
      <Rows>
        <Cols size={0.2} />
        <Cols size={3}>
          <h1 style={{ textAlign: 'center' }}> BLOGS</h1>
          <h4 style={{ textAlign: 'center' }}>
            {' '}
            {data.allMarkdownRemark.totalCount}
          </h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post
              key={node.id}
              title={node.frontmatter.title}
              slug={node.fields.slug}
              author={node.frontmatter.author}
              excerpt={node.excerpt}
              date={node.frontmatter.date}
              fluid={node.frontmatter.image.childImageSharp.fluid}
              tags={node.frontmatter.tags}
            />
          ))}
        </Cols>
        <Cols size={1} />
        <Cols size={1}>
          <Sidebar />
        </Cols>
        <Cols size={0.5} />
      </Rows>
    </Layout>
  )
}
Media.propTypes = {
  data: PropTypes.object,
}

export default Media
