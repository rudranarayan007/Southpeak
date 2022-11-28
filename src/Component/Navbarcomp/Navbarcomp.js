import React from 'react'
import { Button, Container, Nav, Navbar, Form, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from "../../../src/Asset/logo.png"
import {GiHamburgerMenu} from "react-icons/gi"
import "./Navbarcomp.css"
function Navbarcomp() {
  return (
    <div>


<Navbar id="bgdarknav" expand="lg" fixed="sticky" >
      <Container fluid>
        <Navbar.Brand href="./"> <img src={logo} style={{width:"10rem", marginTop:'-.2rem'}} id="logoheader"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " id="navbartogglericon" style={{color:'white'}} />
        <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">
            <Nav.Link id="navsingleitem">
              <Link to="/">HOME</Link>
            </Nav.Link >
            <Nav.Link id="navsingleitem"><Link to="/about">ABOUT US</Link></Nav.Link>
            <Nav.Link id="navsingleitem"><Link to="/notice">NOTICES</Link></Nav.Link>
            <Nav.Link id="navsingleitem"><Link to="/blog">BLOGS</Link></Nav.Link>
            <Nav.Link id="navsingleitem"><Link to="/gallery">GALLERY</Link></Nav.Link>
            <Nav.Link id="navsingleitem"><Link to="/contactus">CONTACT US</Link></Nav.Link>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    


    </div>
  )
}

export default Navbarcomp