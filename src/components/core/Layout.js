import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { GlobalStyle } from '../misc/GlobalStyle'
import { Header } from './Header'
import { Footer } from './Footer'

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #fff;
`

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width: 100%;
`

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <MainContentWrapper>
      <Content>{children}</Content>
      <Footer />
    </MainContentWrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}
