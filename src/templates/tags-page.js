import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Layout } from '../components/core/Layout'
import SEO from '../components/misc/Seo'
import { TagLink } from '../components/misc/Post'
import { Card, CardBody } from '../components/core/Sidebar'

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout>
      <SEO title="Snaplytic | Blog Tags" />
      <TagsHeading>The Blogs are Categorised as Follows :</TagsHeading>
      <Card>
        <CardBody>
          <BlogsTagWrapper>
            {tags.map((tag) => (
              <li key={tag}>
                <TagLink to={`/tag/${_.kebabCase(tag)}`}>
                  <TagButton>
                    {tag}
                    <TagBadge color="light">{tagPostCounts[tag]}</TagBadge>
                  </TagButton>
                </TagLink>
              </li>
            ))}
          </BlogsTagWrapper>
        </CardBody>
      </Card>
    </Layout>
  )
}

export default TagsPage

export const TagButton = styled.button`
  background-color: #007bff;
  border-color: #007bff;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s;
  &:hover {
    background-color: #288491;
    color: white;
  }
`
TagsPage.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    tagPostCounts: PropTypes.number.isRequired,
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
export const TagBadge = styled.label`
  margin: 5px;
  color: #212529;
  background-color: #f8f9fa;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s;
`
export const BlogsTagWrapper = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  li {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
export const TagsHeading = styled.h1`
  color: blanchedalmond;
  text-shadow: lightcyan;
  text-align: center;
`
