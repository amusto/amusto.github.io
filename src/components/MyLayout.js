import React from 'react'
import Header from './Header'
// import Footer from './Footer'
import '../css/style.css'

const Layout = (props) => (
  <div className="layout">
    <Header />
    <div className="content">
    {props.children}
    </div>
    {/**<Footer />**/}
  </div>
)

export default Layout
