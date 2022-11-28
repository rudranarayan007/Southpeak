import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import demoimage from "../../Asset/Demoimage.jpg";
function Publication() {
  return (
    <Row xs={1} md={4}>
      <Col md={1}></Col>
      <Col md={10}>
        <Row>
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col md={4} style={{marginBottom: '1rem'}} key={idx}>
              <Card style={{backgroundColor: '#ffebc0'}}>
                <Card.Img variant="top" src={demoimage} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>Card title</Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
      <Col md={1}></Col>
    </Row>
  );
}

export default Publication;