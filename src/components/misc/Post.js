import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'gatsby-image'
import _ from 'lodash'
import { Rows, Cols } from '../../pages/index'

const Post = ({ title, slug, date, excerpt, fluid, tags }) => (
  <Card>
    <Grid>
      <BlogLink to={slug}>
        <Rows>
          <Cols size={1} />
          <Cols size={2}>
            <Image fluid={fluid} width="50px" />
          </Cols>
          <Cols size={1} />
        </Rows>
        <BlogTitle>
          {title} - {date}
        </BlogTitle>
      </BlogLink>
      <BlogInfo>{excerpt}</BlogInfo>
      <BlogsTagWrapper>
        {tags.map((tag) => (
          <li key={tag}>
            <TagLink to={`/tag/${_.kebabCase(tag)}`}>
              <BlogTags>{tag}</BlogTags>
            </TagLink>
          </li>
        ))}
      </BlogsTagWrapper>
      <BlogLink to={slug}>
        <Button>Read More</Button>
      </BlogLink>
    </Grid>
  </Card>
)
Post.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  fluid: PropTypes.object,
  tags: PropTypes.array,
}
const Card = styled.div`
  margin-bottom: 30px;
  border-style: ridge;
  border-width: 5px;
  border-radius: 25px;
  @media only screen and (max-width: 992px) {
    margin-bottom: 30px;
    border-style: ridge;
    border-width: 3px;
    border-radius: 20px;
  }
`
export const BlogLink = styled(Link)`
  text-decoration: none;
`
export const TagLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
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
const BlogInfo = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
`
const Grid = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: column;
  flex-direction: column;
  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    flex-flow: column;
  }
`
const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: l=column;
  padding: 3px;
  width: 16%;
  height: 15%;
  color: #288491f0;
  background-color: white;
  text-align: center;
  font-family: sans-serif;
  font-size: 1em;
  line-height: 1em;
  font-weight: normal;
  position: relative;
  justify-content: center;
  border: 2px solid #288491f0;
  &:hover {
    background-color: #539da8a1;
    color: white;
  }
  @media only screen and (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: l=column;
    padding: 3px;
    width: 26%;
    height: 20%;
    color: #288491f0;
    background-color: white;
    text-align: center;
    font-family: sans-serif;
    font-size: 0.7em;
    line-height: 1em;
  }
`
export const BlogTags = styled.label`
  padding: 5px;
  background-color: #289174;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: white;
  &:hover {
    background-color: #288491;
  }
`
export const BlogsTagWrapper = styled.ul`
  padding: 0;
  display: inline-flex;
  list-style: none;
  li {
    margin-right: 10px;
  }
`
export default Post
