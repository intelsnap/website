import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout } from '../components/core/Layout'
import SEO from '../components/misc/Seo'
import Post from '../components/misc/Post'

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 371) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const TagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return (
    <Layout>
      <TagPostWrapper>
        <SEO title="Snaplytic | Blog Tags" />
        <CountPost>{tagHeader}</CountPost>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            tags={node.frontmatter.tags}
            fluid={node.frontmatter.image.childImageSharp.fluid}
          />
        ))}
      </TagPostWrapper>
    </Layout>
  )
}
TagPosts.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
const CountPost = styled.h2`
  text-align: center;
  display: block;
  padding: 10px;
`
const TagPostWrapper = styled.div``
export default TagPosts
