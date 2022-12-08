import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import { FaRegHandshake } from "react-icons/fa";
import { BsBullseye } from "react-icons/bs";
import Goldar from "../../Asset/gurumurthy.jpg";
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
            <Row id="about3" style={{ fontWeight: "500", fontSize: "1.4rem" }}>
              {" "}
              Gurumurthy Mahaladker
            </Row>
            <Row id="about5">
              {" "}
              Director at SOUTHPEAK group, Business Consultation and wealth
              Management.
            </Row>
            <Row>
              {" "}
              Mr.Gurumurthy, primarily representing Shamrock Business
              Consultation and Wealth Management and SOUTHPEAK groups in India,
              United Kingdom, Ireland, with the support of its associating
              companies from south east Asia region, Africa, America, over 25
              years of experience working in Government and Private Sector,
              Embassies and High commissions, shifted to Oil/Gold/travel/visa
              management/event management and Aviation Industry. Mr Gurumurthy
              started his career as a Government servant in Central Government
              various departments, experience in oil sector, induction and
              planning, security survey and management etc., working experience
              in External Affairs with high net worth individuals, diplomates,
              politicians, global business communities and connected to many
              multi-national global companies. Also deals with commercial
              transactions for the purchase and sale of private and global
              commercial entities, raising funds, facilitating joint ventures,
              facilitating FDI. Throughout his career Mr Gurumurthy has also
              gained expertise in the diamond, and rare artefacts industry,
              which has given Mr Gurumurthy, the upper edge to deal with special
              precious products and clients. Mr Gurumurthy, Business Consultant,
              trader, Career Development Facilitator, Mentor, meditator and
              student of life.
            </Row>
          </Col>

          <Col md={6} xs={12}>
            <img src={Goldar} style={{ width: "100%", marginBottom:'2rem' }} />
          </Col>
        </Row>

        {/* our misson */}

        {/* <Row style={{ marginTop: "1.5rem" }}>
          <Col md={6} lg={{ order: "first" }} xs={{ order: "last" }}>
            <img src={Goldexch} style={{ width: "100%" }} />
          </Col>

          <Col md={6} xs={12} id="about1">
            <Row id="about3"></Row>
            <Row> </Row>
            <Row id="about4">
              <Col md={1} xs={2} style={{ padding: "0" }}>
                <BsBullseye style={{ fontSize: "3rem", marginTop: "2rem" }} />
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
        </Row> */}
      </Container>
    </div>
  );
}

export default About;
