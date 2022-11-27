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
import Navbarcomp from "../../Component/Navbarcomp/Navbarcomp";
import "./Contactus.css";
function Contactus() {
  return (
    <>
      <Container fluid id="contactUsContainer">
        {/* imported navbar */}
        <Navbarcomp />
        <Container id="cuf1">
          <Row
            // style={{
            //   marginTop: "3rem",
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
            id="cuf2"
          >
            {/* <Col md={2}></Col> */}
            <Col
              md={{ span: 6, order: 1 }}
              xs={{ span: 10, order: 2 }}
              id="contact2"
            >
              <div id="cuf3">
                <h3>Contact Us</h3>
              </div>
              <Form style={{ padding: "inherit" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="User name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your feedback matters to us!"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" id="contact3">
                  Submit
                </Button>
              </Form>
            </Col>
            {/* <Col md={2}></Col> */}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Contactus;
