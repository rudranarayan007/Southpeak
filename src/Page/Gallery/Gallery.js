import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { FiUsers } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { BsImages } from "react-icons/bs";
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
        <Row style={{paddingTop: '1rem', paddingBottom: "0.5rem" }}>
          <Col md={1}></Col>
          <Col md={10}>
            <div
              style={{
                fontSize: "2rem",
                marginLeft: "1rem",
                marginBottom: "2rem",
                fontFamily:'Prata',
                
              }}
            >
              Gallery
            </div>
            <Row>
              <Col xs={3} md={4} id="aspd10">
                <Button
                  id="aspd11"
                  onClick={() => setcolorChange("first")}
                  style={
                    colorChange === "first"
                      ? { color: "#fff" }
                      : { color: "#ffebc0" }
                  }
                >
                  <BsImages
                    id="aspd9"
                    style={
                      colorChange === "first"
                        ? { color: "#fff" }
                        : { color: "#ffebc0" }
                    }
                  />{" "}
                  Gallery
                </Button>
              </Col>
              <Col xs={3} md={4} id="aspd10">
                <Button
                  id="aspd11"
                  onClick={() => setcolorChange("second")}
                  style={
                    colorChange === "second"
                      ? { color: "#fff" }
                      : { color: "#ffebc0" }
                  }
                >
                  <FiVideo
                    id="aspd9"
                    style={
                      colorChange === "second"
                        ? { color: "#fff" }
                        : { color: "#ffebc0" }
                    }
                  />{" "}
                  Video
                </Button>
              </Col>
              <Col xs={3} md={4} id="aspd10">
                <Button
                  id="aspd11"
                  onClick={() => setcolorChange("third")}
                  style={
                    colorChange === "third"
                      ? { color: "#fff" }
                      : { color: "#ffebc0" }
                  }
                >
                  <FiUsers
                    id="aspd9"
                    style={
                      colorChange === "third"
                        ? { color: "#fff" }
                        : { color: "#ffebc0" }
                    }
                  />{" "}
                  Publication
                </Button>
              </Col>
            </Row>{" "}
          </Col>
          <Col md={1}></Col>
        </Row>
        <Container>
          {colorChange === "first" ? <Photos /> : null}
          {colorChange === "second" ? <Videos /> : null}
          {colorChange === "third" ? <Publication /> : null}
        </Container>
      </Container>
    </Container>
  );
}

export default Gallery;