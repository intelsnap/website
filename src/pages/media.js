import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Layout } from '../components/core/Layout'
import mediaBanner from '../assets/media.png'
import blogcover from '../assets/blog.jpg'
import Seo from '../components/misc/Seo'
import { Rows, Cols } from './index'
import Sidebar from '../components/core/Sidebar'

const Media = () => (
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
        <Rows>
          <BlogLink to="/blog">
            <img
              src={blogcover}
              alt="media"
              width="100%"
              height="100%"
              style={{ padding: '10px' }}
            />
          </BlogLink>
        </Rows>
        <BlogLink to="/blog">
          <BlogHeader> BLOGS</BlogHeader>
        </BlogLink>
      </Cols>
      <Cols size={1} />
      <Cols size={1.5}>
        <Sidebar />
      </Cols>
      <Cols size={0.5} />
    </Rows>
  </Layout>
)

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogHeader = styled.h1`
  margin: 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`
export default Media
