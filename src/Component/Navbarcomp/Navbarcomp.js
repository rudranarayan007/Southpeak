import React from 'react'
import { Button, Container, Nav, Navbar, Form, NavDropdown } from 'react-bootstrap'
import logo from "../../../src/Asset/logo.png"
import "./Navbarcomp.css"
function Navbarcomp() {
  return (
    <div>


<Navbar id="bgdarknav" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <img src={logo} style={{width:"10rem", marginTop:'-.2rem'}} id="logoheader"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarExpand" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav
            className="me-2 my-5 my-lg-0"
            style={{ maxHeight: '100px', gap:'1rem', marginLeft:'1rem' }}
            navbarScroll
          >
            <Nav.Link href="#action1" id="navsingleitem">HOME</Nav.Link >
            <Nav.Link href="#action2" id="navsingleitem">ABOUT US</Nav.Link>
            <Nav.Link href="#action2" id="navsingleitem">NOTICES</Nav.Link>
            <Nav.Link href="#action2" id="navsingleitem">BLOGS</Nav.Link>
            <Nav.Link href="#action2" id="navsingleitem">GALLERY</Nav.Link>
            <Nav.Link href="#action2" id="navsingleitem">CONTACT US</Nav.Link>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    


    </div>
  )
}

export default Navbarcomp