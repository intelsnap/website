import React from 'react'
import Navbar from './Navbar'
// import Footer from './Footer'
import Navba from './hed'
import './layout.css'

const layout = ({ children }) => (
  <>
    <Navbar />
    <main> {children} </main>
    <Navba />
  </>
)

export default layout
