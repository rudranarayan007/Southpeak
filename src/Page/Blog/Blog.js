import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbarcomp from "../../Component/Navbarcomp/Navbarcomp";
import "./Blog.css";

export default function Blog() {
  return (
    <Container fluid id="blogContainer">
      {/* imported navbar */}
      <Navbarcomp />

      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}
