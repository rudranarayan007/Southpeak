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
import { GrImage } from "react-icons/gr";
import "./Gallery.css";
// import Components
import Photos from "../../Component/Photos/Photos";
import Videos from "../../Component/Videos/Videos";
import Publication from "../../Component/Publication/Publication";
function Gallery() {
  const [colorChange, setcolorChange] = useState("first");
  return (
    <Container fluid id="cuf1">
      {" "}
      <Container>
        <Row style={{ marginTop: "2rem", paddingBottom: "2rem" }}>
          <div
            style={{
              fontSize: "4rem",
              marginLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            Gallery
          </div>
          <Col xs={6} md={4} id="aspd10">
            <Button
              id="aspd11"
              onClick={() => setcolorChange("first")}
              style={
                colorChange === "first"
                  ? { color: "#1EEBC6" }
                  : { color: "#E8E9AF" }
              }
            >
              <GrImage id="aspd9" /> Gallery
            </Button>
          </Col>
          <Col xs={6} md={4} id="aspd10">
            <Button
              id="aspd11"
              onClick={() => setcolorChange("second")}
              style={
                colorChange === "second"
                  ? { color: "#1EEBC6" }
                  : { color: "#E8E9AF" }
              }
            >
              <FiVideo id="aspd9" /> Video
            </Button>
          </Col>
          <Col xs={6} md={4} id="aspd10">
            <Button
              id="aspd11"
              onClick={() => setcolorChange("third")}
              style={
                colorChange === "third"
                  ? { color: "#1EEBC6" }
                  : { color: "#E8E9AF" }
              }
            >
              <FiUsers id="aspd9" /> Publication
            </Button>
          </Col>
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
