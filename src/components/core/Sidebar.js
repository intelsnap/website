import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { TagLink } from '../misc/Post'

export const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const Sidebar = () => (
  <SidebarWrapper>
    <Card>
      <CardBody>
        <CardTitle> Categories </CardTitle>
        <TagLink to="/tags/">
          <TagHeading>TAGS</TagHeading>
        </TagLink>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>Newsletter</CardTitle>
        <Form>
          <FormGroup>
            <Input
              type="email"
              className="form-control"
              placeholder="Your email address.."
              name="email"
            />
          </FormGroup>
          <Button>Subscribe</Button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>Advertisement</CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="Advert"
          style={{ width: '100%' }}
        />
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>Recent Posts</CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={(data) => (
            <RecentPost>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Cards key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitles>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitles>
                  </CardBody>
                </Cards>
              ))}
            </RecentPost>
          )}
        />
      </CardBody>
    </Card>
  </SidebarWrapper>
)
// Sidebar.propTypes = {
//   data: PropTypes.object,
// }
const SidebarWrapper = styled.div``
const RecentPost = styled.div``

const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: l=column;
  padding: 3px;
  width: 73%;
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
    width: 65%;
    height: 20%;
    color: #288491f0;
    background-color: white;
    text-align: center;
    font-family: sans-serif;
    font-size: 0.7em;
    line-height: 1em;
    &:hover {
      background-color: #539da8a1;
      color: white;
    }
  }
`
export const CardBody = styled.div`
  flex: 1 1 auto;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  min-height: 1px;
  padding: 1.25rem;
`
export const CardTitle = styled.div`
  margin-bottom: 0.85rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  @media only screen and (min-width: 1024px) {
    font-size: 12px;
  }
`
export const CardTitles = styled.div`
  margin-bottom: 0.85rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 9px;
`
export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 5px 20px 40px;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  background: #fff 50%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 2.75335px 44.0535px rgba(0, 0, 0, 0.12);
  padding: 8px;
  @media only screen and (max-width: 992px) {
    margin-bottom: 20px;
  }
`
export const Cards = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 5px 20px 40px;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  background: #fff 50%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 2.75335px 44.0535px rgba(0, 0, 0, 0.12);
  @media only screen and (max-width: 992px) {
    margin-bottom: 20px;
  }
`
const Form = styled.form`
  display: block;
  margin-top: 0em;
`
const FormGroup = styled.div`
  margin-bottom: 1rem;
`
const Input = styled.input`
  display: block;
  width: 88%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`
const TagHeading = styled.h1`
  color: cyan;
  text-shadow: lightcyan;
  text-align: center;
  &:hover {
    background-color: #539da8a1;
    color: white;
  }
`
export default Sidebar
