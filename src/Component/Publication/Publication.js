import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import demoimage from "../../Asset/Demoimage.jpg";
function Publication() {
  return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={demoimage} />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>Card title</Card.Title>
              <Card.Text style={{ color: "black" }}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Publication;
