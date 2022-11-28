import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import { FaRegHandshake } from "react-icons/fa";
import {BsBullseye} from "react-icons/bs";
import Goldar from "../../Asset/goldar.jpg";
import Goldexch from "../../Asset/Gold-exchange.jpg";
function About() {
  return (
    <div id="aboutbg">
      <Container>
        <Row id="about2">
          <Col>
            About us
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={6} xs={12} id="about1">
            <Row id="about3"> Southpeak Online gold Trading</Row>
            <Row>
              {" "}
              We are one of the most secure brokers in the industry, We offer a
              wide choice of assets, leading platforms and generous trading
              conditions.
            </Row>
            <Row id="about4">
              <Col md={1} xs={2} style={{ padding: "0" }}>
                <FaRegHandshake
                  style={{ fontSize: "3rem", marginTop: "2rem" }}
                />
              </Col>
              <Col
                md={10}
                xs={10}
                style={{
                  fontSize: "2rem",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "2rem",
                  fontWeight: "300",
                }}
              >
                Our Values{" "}
              </Col>
            </Row>
            <Row>
              <Col style={{ padding: "0", marginTop: "1rem" }}>
                Integrity is more than just a keyword for us. We are guided by
                our customer-first approach to business and we place the values
                of quality, integrity and transparency as the cornerstones of
                everything we do.
              </Col>
            </Row>
          </Col>

          <Col md={6} xs={12} >
            <img src={Goldar} style={{ width: "100%" }} />
          </Col>
        </Row>

        {/* our misson */}

        <Row style={{ marginTop: "1.5rem" }}>
          <Col md={6} lg={{ order: "first" }}  xs={{ order: "last" }}>
            <img src={Goldexch} style={{ width: "100%" }}  />
          </Col>

          <Col md={6} xs={12} id="about1">
            <Row id="about3"></Row>
            <Row> </Row>
            <Row id="about4">
              <Col md={1} xs={2} style={{ padding: "0" }}>
                <BsBullseye
                  style={{ fontSize: "3rem", marginTop: "2rem" }}
                />
              </Col>
              <Col
                md={10}
                xs={10}
                style={{
                  fontSize: "2rem",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "2rem",
                  fontWeight: "300",
                }}
              >
                Our Vision{" "}
              </Col>
            </Row>
            <Row>
              <Col style={{ padding: "0", marginTop: "1rem" }}>
                Southpeak is committed to empowering people to invest and trade,
                with confidence, in an innovative and reliable environment;
                supported by best-in-class personal service and uncompromising
                integrity.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
