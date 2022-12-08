import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "../../Asset/logo.png"
function Footer() {
  return (
    <div>
      <Container fluid id="footer1">
        <Container>
          <Row id="footer3">
            <Col md={1} xs={0}></Col>
            <Col md={4} xs={12}>
              <Row id="footer2">Registered Office Address </Row>
              <Row id="footer4">
                128 City Road <br />
                London <br />
                EC1V 2NX <br />
                UNITED KINGDOM
              </Row>
              <br />
              <Row id="footer4" style={{fontSize:'1rem', fontWeight:'300'}}>Email: </Row>
              <Row id="footer4">invest@southpeakim.com</Row>
              <Row id="footer4"> SouthPeak Investment Holding and Trading Limited</Row>
              
            </Col>
            <Col md={3}> <Row id="footer4"  style={{fontSize:'1rem', fontWeight:'300'}}> Phone</Row>
                <Row id="footer4" > +61 2 8071 4321</Row>

             <br/>

             <Row id="footer4" style={{fontSize:'1rem', fontWeight:'300'}}> Fax</Row>
             <Row id="footer4" > +61 2 8071 4321</Row>
            </Col>
            <Col md={2} style={{padding:'0px', margin:'0px'}}> 
            <Row ><img src={logo}  style={{paddingTop:'1rem'}}/> </Row> 
            
            <Row id="footer5">

      <Col> Copyrights 2023 SouthPeak Investment Holding and Trading Limited   </Col>
            </Row>
            <Row id="footer4" style={{marginTop:'1rem'}}>  <Col> Comnany number 14171353 </Col> </Row>
            </Col>
          </Row>
         




          
          <Row> 

           
          </Row>
          
        </Container>
      </Container>
      <Container fluid id="footerpart2">

<Container> 

<Row>


 <Col>
 
DESIGNED BY CODEKART SOLUTIONS PVT. LTD.
 </Col> 
</Row>

</Container>

      </Container>
    </div>
  );
}

export default Footer;
