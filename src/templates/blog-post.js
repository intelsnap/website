import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout } from '../components/core/Layout'
import Seo from '../components/misc/Seo'

export const slugQuery = graphql`
  query buildnewPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Seo title="Snaplytic | Blogs" description="Snaplytic Media " />
      <Grid>
        <BlogTitle> {post.frontmatter.title} </BlogTitle>
        <BlogDisplay dangerouslySetInnerHTML={{ __html: post.html }} />
      </Grid>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object,
}
const BlogTitle = styled.h1`
  margin-bottom: 20px;
  padding-top: 30px;
  padding-bottom: 20px;
  color: blueviolet;
  text-align: center;
  @media only screen and (max-width: 992px) {
    margin-bottom: 20px;
    padding-top: 30px;
    padding-bottom: 20px;
    color: blueviolet;
    text-align: center;
    font-size: 24px;
  }
  @media only screen and (max-width: 720px) {
    margin-bottom: 15px;
    padding-top: 30px;
    padding-bottom: 20px;
    color: blueviolet;
    text-align: center;
    font-size: 19px;
  }
`
const Grid = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: column wrap;
  flex-direction: column;
  flex-wrap: wrap;
  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    flex-flow: column;
  }
`
const BlogDisplay = styled.div`
  text-align: justify;
  margin-left: 50px;
  padding-left: 150px;
  padding-right: 150px;
  margin-right: 50px;

  @media only screen and (max-width: 992px) {
    text-align: justify;
    margin-left: 50px;
    padding-left: 150px;
    padding-right: 150px;
    margin-right: 50px;
    font-size: 17px;
    h3 {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 720px) {
    text-align: justify;
    margin-left: 25px;
    padding-left: 50px;
    padding-right: 50px;
    margin-right: 25px;
    font-size: 16px;

    h3 {
      font-size: 14px;
      font-weight: bold;
    }
  }
`

export default BlogPost
