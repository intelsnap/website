import { Link, Location } from 'gatsby'
import React, { useState } from 'react'
import { Menu } from 'antd'

const menu = [
  { title: 'Home', route: '/' },
  { title: 'Expertise', route: '/expertise' },
  { title: 'Markets', route: '/markets' },
  { title: 'Media', route: '/media' },
  { title: 'About', route: '/about' },
  { title: 'Contact', route: '/contact' },
]

const Navbar = (props) => {
  const [activeNavLink, setActiveNavLink] = useState('')
  console.log(props)
  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        position: 'sticky',
        top: ' 0',
        width: '100%',
        height: '8%',
        background: 'white',
        fontWeight: 'bold',
      }}
      selectedKeys={[activeNavLink]}
    >
      {menu.map(({ title, route }) => (
        <Menu.Item key={route}>
          <Link to={route}>{title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default Navbar
