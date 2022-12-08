import React from "react";

import emailjs from "emailjs-com"


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

  // const Mailer = ()=>{
   
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_22z2cec', 'template_rf12pmg', e.target, 'user_Msze3hWYwy8NmwXCWmhjm' )
      .then(res=>{
        console.log(res);
      }).catch(err=> console.log(err));
    }
  // }

  return (
    <>
      <Container fluid id="contactUsContainer">

<Container> 
  <Row>
    <Col id='cuf5' md={12} xs={12}> Get in Touch With us <hr/></Col>
  </Row>
</Container>

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
                <h3>Contact Us </h3> <hr/>
              </div>
              <Form style={{ padding: "inherit" }}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
               
                  <Form.Control type="text" placeholder="Name" name="name"  />
                </Form.Group>

                <Form.Group className="mb-4"   controlId="exampleForm.ControlTextarea1" >
                
                  <Form.Control type="email" placeholder="Email" name="user_email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
            
                  <Form.Control type="text" placeholder="Phone" name="Phone"  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                 
                  <Form.Control type="text" placeholder="Subject" name="name"  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your feedback matters to us!" name="messege"
                  />
                </Form.Group>

                <Button   onSubmit={sendEmail} variant="primary" type="submit" id="contact3">
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
