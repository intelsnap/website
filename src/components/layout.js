import React from 'react'
import { Layout } from 'antd'
import Navbar from './Navbar'
import Footers from './Footer'
import { LayoutCointainer } from './layout.style'
import 'antd/dist/antd.css'

const { Header, Content } = Layout

const layout = ({ children }) => (
  <LayoutCointainer>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        height: '11%',
        backgroundColor: 'white',
      }}
    >
      <Navbar />
    </Header>
    <Content style={{ backgroundColor: 'white', paddingBottom: '30px' }}>
      <main> {children} </main>
    </Content>

    <Footers />
  </LayoutCointainer>
)

export default layout
