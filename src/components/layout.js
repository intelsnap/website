import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { LayoutCointainer, Header } from './layout.style'
import 'antd/dist/antd.css'

const layout = ({ children }) => (
  <LayoutCointainer>
    <Header>
      <Navbar />
    </Header>

    <main> {children} </main>

    <Footer />
  </LayoutCointainer>
)
export default layout
