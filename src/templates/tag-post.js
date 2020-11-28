import React from 'react'
import { graphql } from 'gatsby'
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

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark

  return (
    <Layout>
      <TagPostWrapper>
        <SEO title="Snaplytic | Blog Tags" />
        <CountPost>
          {totalCount} post {totalCount === 1 ? '' : 's'} tagged with "{tag}"
        </CountPost>
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
const CountPost = styled.h2`
  text-align: center;
  display: block;
  padding: 10px;
`
const TagPostWrapper = styled.div``
export default tagPosts
