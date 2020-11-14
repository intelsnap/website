import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Footer from './Footer'
import 'antd/dist/antd.css'

export const StyledContainer = styled.div`
  .body {
    font-family: 'OpenSans', sans-serif;

    .h1 {
      text-transform: capitalize;
      font: 28px;
    }

    @media screen and (min-width: 992px) {
      .images {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1rem;
      }
    }
  }
`

export const Content = styled.div`
  background-color: white;
  padding-bottom: 30px;
`

const Layout = ({ children }) => (
  <StyledContainer>
    <Navbar />
    {children}
    <Footer />
  </StyledContainer>
)
export default Layout

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
