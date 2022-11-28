import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import logo from "../../../src/Asset/Goldbiscuit.png";
import Navbarcomp from "../../Component/Navbarcomp/Navbarcomp";
import Gallery from "../Gallery/Gallery";
import Notice from "../Notice/Notice";
import Blog from "../Blog/Blog";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div id='homebg'>
    <Container >
     <Row>
      <Col md={1} xs={0}></Col>
      <Col md={5} xs={12} id="home1">Become a <br/> Great Trader <br/> With us.
      <Row > <Col>   <Button id='home2'> <Link to="/contactus" style={{textDecoration:'none', color:'#ffebc0'}}> Contact us </Link>  </Button> </Col></Row>  
      
      </Col>
      <Col lg={{ order: "last" }}  xs={{ order: "first" }} md={5} >
        <img src={logo} style={{width:'100%'}}/>
      </Col>
    
     </Row>
    </Container>
    {/* <Gallery/> */}
    <Blog/>
    <Notice/>
    </div>
  );
}

export default Home;
