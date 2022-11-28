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
import "./Videos.css";
function Videos() {
  return (

      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Row>
            <Col md={4} id="vd1">
              <iframe
                className="w-full md:h-[600px] h-[600px] rounded-lg"
                src="https://www.youtube.com/embed/wkTFd3QZSP0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                autoPlay
                muted
                allowFullScreen id="vd2"
              ></iframe>
            </Col>
            <Col md={4} id="vd1">
              <iframe
                className="w-full md:h-[600px] h-[600px] rounded-lg"
                src="https://www.youtube.com/embed/wkTFd3QZSP0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                autoPlay
                muted
                allowFullScreen id="vd2"
              ></iframe>
            </Col>
            <Col md={4} id="vd1">
              <iframe
                className="w-full md:h-[600px] h-[600px] rounded-lg"
                src="https://www.youtube.com/embed/wkTFd3QZSP0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                autoPlay
                muted
                allowFullScreen id="vd2"
              ></iframe>
            </Col>
            <Col md={4} id="vd1">
              <iframe
                className="w-full md:h-[600px] h-[600px] rounded-lg"
                src="https://www.youtube.com/embed/wkTFd3QZSP0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                autoPlay
                muted
                allowFullScreen id="vd2"
              ></iframe>
            </Col>
            <Col md={4} id="vd1">
              <iframe
                className="w-full md:h-[600px] h-[600px] rounded-lg"
                src="https://www.youtube.com/embed/wkTFd3QZSP0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                autoPlay
                muted
                allowFullScreen
                id="vd2"
              ></iframe>
            </Col>
            <Col md={4} id="vd1">
              <iframe
                className="w-full md:h-[600px] h-[600px] rounded-lg"
                src="https://www.youtube.com/embed/wkTFd3QZSP0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                autoPlay
                muted
                allowFullScreen id="vd2"
              ></iframe>
            </Col>
            <Col md={4} id="vd1">
              <iframe
                className="w-full md:h-[600px] h-[600px] rounded-lg"
                src="https://www.youtube.com/embed/wkTFd3QZSP0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                autoPlay
                muted
                allowFullScreen id="vd2"
              ></iframe>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
  );
}

export default Videos;