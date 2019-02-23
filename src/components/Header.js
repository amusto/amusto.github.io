import { Link } from "react-router-dom";
import React from 'react'
import MediaQuery from 'react-responsive';
import { Navbar, Nav } from 'react-bootstrap'
import '../css/style.css';

const MediaQueryClass = () => (
  <div className="header-device" >
    {/**<div>Device: </div>**/}
    <MediaQuery query='(min-device-width: 1224px)'>
      <div>You are a desktop or laptop</div>
      {/**<MediaQuery query='(min-device-width: 1824px)'>
        <div>You also have a huge screen</div>
      </MediaQuery>
      <MediaQuery query='(max-width: 1224px)'>
        <div>You are sized like a tablet or mobile phone though</div>
      </MediaQuery>**/}
    </MediaQuery>
    <MediaQuery query='(max-device-width: 1224px)'>
      <div>You are a tablet or mobile phone</div>
    </MediaQuery>
    <MediaQuery query='(orientation: portrait)'>
      <div>You are portrait</div>
    </MediaQuery>
    <MediaQuery query='(orientation: landscape)'>
      <div>You are landscape</div>
    </MediaQuery>
    <MediaQuery query='(min-resolution: 2dppx)'>
      <div>You are retina</div>
    </MediaQuery>
  </div>
)

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Reporting Dashboard</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" defaultActiveKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
        <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/reports" className="nav-link">Reports</Link>
        {/**<Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/reports">Reports</Nav.Link>**/}
        {/**<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>**/}
      </Nav>
      <Nav>
        <MediaQueryClass />
        {/**<Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>**/}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
