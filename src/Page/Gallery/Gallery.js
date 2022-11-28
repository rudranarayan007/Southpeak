import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Row,
  Tabs,
  Tab,
  Form,
} from "react-bootstrap";
import { FiUsers } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { BsImageFill } from "react-icons/bs";
import "./Gallery.css";
// import Components
import Photos from "../../Component/Photos/Photos";
import Videos from "../../Component/Videos/Videos";
import Publication from "../../Component/Publication/Publication";
import Navbarcomp from "../../Component/Navbarcomp/Navbarcomp";
function Gallery() {
  const [colorChange, setcolorChange] = useState("first");
  return (
    <Container fluid id="galleryContainer">
      {" "}
      {/* imported navbar */}
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col id="gallery1">Gallery</Col>
          <Col md={1}></Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={1}></Col>
          <Col>
        <Row id="gallery7">
          <Col md={4}  xs={4} id="gallery3">
            <Button
              id="gallery2"
              onClick={() => setcolorChange("first")}
              style={
                colorChange === "first"
                  ? { color: "#ffebc0" }
                  : { color: "white" }
              }
            >
              <BsImageFill id="gallery6" /> Gallery
            </Button>
          </Col>
          <Col md={4}  xs={4} id="gallery4">
            <Button
              onClick={() => setcolorChange("second")}
              style={
                colorChange === "second"
                  ? { color: "#ffebc0" }
                  : { color: "white" }
              }
              id="gallery2"
            >
              <FiVideo id="gallery6" /> Video
            </Button>
          </Col>
          <Col md={4} xs={4} id="gallery5">
            <Button
              onClick={() => setcolorChange("third")}
              style={
                colorChange === "third"
                  ? { color: "#ffebc0" }
                  : { color: "white" }
              }
              id="gallery2"
            >
              <FiUsers id="gallery6" /> Publication
            </Button>
          </Col>
        </Row>
       </Col>
        <Col md={1}></Col>

        </Row>
      </Container>


      <Container>
         <Row>    
          <Col md={1}></Col> 
          <Col>  
        {colorChange === "first" ? <Photos /> : null}
        {colorChange === "second" ? <Videos /> : null}
        {colorChange === "third" ? <Publication /> : null}
        </Col>
        <Col md={1}></Col>   

        </Row>
      </Container>
    </Container>
  );
}

export default Gallery;

