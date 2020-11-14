import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Menu } from 'antd'

const menu = [
  { title: 'Home' },
  { title: 'Expertise' },
  { title: 'Markets' },
  { title: 'Media' },
  { title: 'About' },
  { title: 'Contact' },
]

const Navbar = () => {
  const convertKey = (title) => {
    const cleanedTitle = title
      .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, '-') // replace all spaces and low dash
      .toLowerCase()

    if (cleanedTitle === 'home') {
      return '/'
    }
    return `/${cleanedTitle}`
  }

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        position: 'sticky',
        top: ' 0',
        width: '100%',
        height: '60px',
        background: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      {menu.map(({ title }) => (
        <Menu.Item key={convertKey(title)}>
          <Link to={convertKey(title)}>{title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default Navbar
