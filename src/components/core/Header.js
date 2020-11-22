import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import CloseIcon from '../../assets/close-outline.svg'
import MenuIcon from '../../assets/menu.svg'

import { useScroll } from '../misc/useScroll'

export const Header = () => {
  const [enableShadow, setEnableShadow] = useState(false)
  const [topNavOpen, setTopNavOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query getHeaderData {
      site {
        siteMetadata {
          navigation {
            title
            route
          }
        }
      }
    }
  `)

  const { navigation } = data?.site?.siteMetadata

  useScroll((top) => {
    setEnableShadow(top > 0)
  })

  const handleHamburgerOpenClick = () => {
    setTopNavOpen(true)
  }

  const handleHamburgerCloseClick = () => {
    setTopNavOpen(false)
  }

  return (
    <Container enableShadow={enableShadow}>
      <ContainerWrapper>
        <Navigation open={topNavOpen}>
          <NavigationHeader>
            <LogoLink to="/">Logo</LogoLink>
            <HamburgerCloseButton onClick={handleHamburgerCloseClick}>
              <StyledIcon src={CloseIcon} alt="Close" />
            </HamburgerCloseButton>
          </NavigationHeader>
          <Nav>
            {navigation?.map((item, index) => (
              <NavItem key={`topnav-item-${index}`}>
                <NavLink to={item.route} activeClassName="active">
                  {item.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Navigation>
        <HamburgerOpenButton onClick={handleHamburgerOpenClick}>
          <StyledIcon src={MenuIcon} alt="Menu" />
        </HamburgerOpenButton>
      </ContainerWrapper>
    </Container>
  )
}

const HamburgerOpenButton = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin-left: auto;
  padding: 0 20px;
  height: 60px;
  cursor: pointer;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`

const HamburgerCloseButton = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin-left: auto;
  padding: 0 20px;
  height: 60px;
  cursor: pointer;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  height: 60px;
`

const Container = styled.header`
  position: fixed;
  z-index: 20;
  width: 100vw;
  height: 60px;
  background-color: #f40010;
  ${({ enableShadow }) =>
    enableShadow && 'box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.25);'}
  transition: box-shadow 0.2s ease-in-out;
`

const ContainerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  @media only screen and (min-width: 992px) {
    justify-content: initial;
  }
  @media only screen and (min-width: 1400px) {
    margin: 0 auto;
    width: 1400px;
  }
`

const NavigationHeader = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  height: 60px;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 30;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex: 1 1 auto;
  flex-direction: column;
  max-height: 100vh;
  background-color: #f40010;
  opacity: ${({ open }) => (open ? '1' : '0')};
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.25);
  transition: opacity 0.2s ease-in-out;
  @media only screen and (min-width: 992px) {
    position: initial;
    top: initial;
    right: initial;
    left: initial;
    z-index: initial;
    display: flex;
    flex-direction: row;
    height: 60px;
    max-height: initial;
    background-color: initial;
    opacity: initial;
    box-shadow: initial;
  }
`

const Nav = styled.ol`
  display: flex;
  flex: 1 1 calc(100% - 80px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow-y: initial;
  @media only screen and (min-width: 992px) {
    flex: 1 1 auto;
    flex-direction: row;
    margin: 0;
    height: 60px;
    overflow-y: hidden;
  }
`

const NavItem = styled.li`
  flex: 0 0 auto;
  margin: 0 2px;
  padding: 0;
  height: 50px;
  @media only screen and (min-width: 992px) {
    height: initial;
  }
`

const NavLink = styled(Link)`
  flex: 0 0 auto;
  border-radius: 4px;
  padding: 10px 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 0.833em;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;
  &.active,
  &:hover {
    background-color: #b7020a;
  }
`
const StyledIcon = styled.img`
  font-size: 0.8rem;
  margin: 10px;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-size: cover;
  :hover {
    background-color: #f46c00eb;
  }
`
