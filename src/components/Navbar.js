import { Link } from 'gatsby'
import React from 'react'
import { Menu } from 'antd'
import logo from '../assets/logo.svg'

const activeStyles = {
  color: 'rgb(24, 144, 255)',
  borderBottom: '2px',
  borderBottomColor: 'rgb(24, 144, 255)',
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
  borderBottomStart: '4px',
}
const Navbar = () => (
  <div>
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        position: 'sticky',
        top: ' 0',
        width: '100%',
        height: '7%',
        background: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      <Menu.Item>
        <Link to="/">
          <img src={logo} alt="intelsnap" width="90" height="50" />
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/" activeClassName="active" activeStyle={activeStyles}>
          {' '}
          Home{' '}
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/services/" activeStyle={activeStyles}>
          {' '}
          Expertise{' '}
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/technologies/" key="3">
          {' '}
          Market{' '}
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/media/" activeStyle={activeStyles}>
          {' '}
          Media{' '}
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/about/" activeStyle={activeStyles}>
          {' '}
          About{' '}
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/contacts/" activeStyle={activeStyles}>
          {' '}
          Contact{' '}
        </Link>
      </Menu.Item>
    </Menu>
  </div>
)

export default Navbar
