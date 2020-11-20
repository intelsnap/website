import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Layout } from '../components/core/Layout'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Snaplytic | Error</title>
      <meta name="description" content="Snaplytic | 404" />
    </Helmet>
    <Container>
      <Content>
        <p>You entered a route that does not exist...</p>
      </Content>
    </Container>
  </Layout>
)

const Container = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  width: 100%;
  max-width: 820px;
  @media only screen and (min-width: 820px) {
    padding: 20px 10px 0;
  }
`

const Content = styled.div`
  > * {
    padding-right: 20px;
    padding-left: 20px;
  }
  @media only screen and (min-width: 820px) {
    > * {
      padding-right: 50px;
      padding-left: 50px;
    }
  }
`

export default NotFoundPage
