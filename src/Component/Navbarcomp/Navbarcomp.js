import React from 'react'
import { Button, Container, Nav, Navbar, Form, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
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
            <Nav.Link id="navsingleitem">
              <Link to="/">HOME</Link>
            </Nav.Link >
            <Nav.Link id="navsingleitem"><Link to="">ABOUT US</Link></Nav.Link>
            <Nav.Link id="navsingleitem"><Link to="">NOTICES</Link></Nav.Link>
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