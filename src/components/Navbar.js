import { Link } from 'gatsby'
import React from 'react'
import { Menu } from 'antd'
import logo from '../assets/logo.svg'

const Navbar = () => (
  <div>
    <Menu
      theme="white"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{
        width: '100%',
        height: '8%',
        background: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'fixed',
      }}
    >
      <Menu.Item>
        <Link to="/">
          <img src={logo} alt="intelsnap" width="90" height="50" />
        </Link>
      </Menu.Item>
      <Menu.Item defaultSelectedkey="1">
        <Link to="/"> Home </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/services/"> Expertise </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/technologies/"> Market </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/media/"> Media </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/about/"> About </Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/contacts/"> Contact </Link>
      </Menu.Item>
    </Menu>
  </div>
)

export default Navbar
