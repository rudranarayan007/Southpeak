import React from "react";
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
import "./Photos.css";
import demoimage from "../../Asset/Demoimage.jpg";
function Photos() {
  return (
    <Row>
      <Col md={4} id="pc1">
        <Image src={demoimage} alt="profile pic" id="imagePics" />
      </Col>
      <Col md={4} id="pc1">
        <Image src={demoimage} alt="profile pic" id="imagePics" />
      </Col>
      <Col md={4}  id="pc1">
        <Image src={demoimage} alt="profile pic" id="imagePics" />
      </Col>
      <Col md={4}  id="pc1">
        <Image src={demoimage} alt="profile pic" id="imagePics" />
      </Col>
      <Col md={4} id="pc1">
        <Image src={demoimage} alt="profile pic" id="imagePics" />
      </Col>
      <Col md={4} id="pc1">
        <Image src={demoimage} alt="profile pic" id="imagePics" />
      </Col>
      <Col md={4} id="pc1">
        <Image src={demoimage} alt="profile pic" id="imagePics" />
      </Col>
      <Col md={4} id="pc1">
        <Image src={demoimage} alt="profile pic" id="imagePics" />
      </Col>
      <Col md={4} id="pc1">
        <Image src={demoimage} alt="profile pic" id="imagePics" />
      </Col>
    </Row>
  );
}

export default Photos;
