import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout } from '../components/core/Layout'
import mediaBanner from '../assets/media.png'
import Seo from '../components/misc/Seo'
import { Rows, Cols } from './index'
import Post from '../components/misc/Post'
import Sidebar from '../components/core/Sidebar'
import PaginationLinks from '../components/misc/PaginationLinks'
import 'bootstrap/dist/css/bootstrap.min.css'

export const getBlogDta = graphql`
  query getBlogDta {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
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

const Blog = () => {
  const postsPerPage = 2
  let numberOfPages
  return (
    <Layout>
      <Seo title="Snaplytic | Blogs" description="Snaplytic Media " />

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
          <BlogHeader> BLOGS</BlogHeader>

          <StaticQuery
            query={getBlogDta}
            render={(data) => {
              numberOfPages = Math.ceil(
                data.allMarkdownRemark.totalCount / postsPerPage
              )
              return (
                <div>
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
                  <PaginationLinks
                    currentPage={1}
                    numberOfPages={numberOfPages}
                  />
                </div>
              )
            }}
          />
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

const BlogHeader = styled.h1`
  margin: 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`
export default Blog
