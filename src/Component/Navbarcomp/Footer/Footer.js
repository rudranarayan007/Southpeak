import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <Container fluid id="footer1">
        <Row>
          <Col md={12} xs={12}>
            All Rights Reserved by Southpeak | Design by Codekart Solution Pvt.
            Ltd.
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
