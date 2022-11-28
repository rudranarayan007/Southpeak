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
import "./Photos.css";
import demoimage from "../../Asset/Demoimage.jpg";
import Img1 from '../../Asset/img1.jfif';
import Img2 from '../../Asset/img2.jfif';
import Img3 from '../../Asset/img3.jfif';
import Img4 from '../../Asset/img4.jfif';
import Img5 from '../../Asset/img5.jfif';
import Img6 from '../../Asset/img6.jfif';
import Img7 from '../../Asset/img7.jfif';

function Photos() {
  return (
    <Row>
      <Col md={1}></Col>
      <Col md={10}>
        <Row>
          <Col md={4} id="pc1">
            <Image src={demoimage} alt="profile pic" id="imagePics" />
          </Col>
          <Col md={4} id="pc1">
            <Image src={Img1} alt="profile pic" id="imagePics" />
          </Col>
          <Col md={4} id="pc1">
            <Image src={Img2} alt="profile pic" id="imagePics" />
          </Col>
          <Col md={4} id="pc1">
            <Image src={Img2} alt="profile pic" id="imagePics" />
          </Col>
          <Col md={4} id="pc1">
            <Image src={Img3} alt="profile pic" id="imagePics" />
          </Col>
          <Col md={4} id="pc1">
            <Image src={Img4} alt="profile pic" id="imagePics" />
          </Col>
          <Col md={4} id="pc1">
            <Image src={Img5} alt="profile pic" id="imagePics" />
          </Col>
          <Col md={4} id="pc1">
            <Image src={Img6} alt="profile pic" id="imagePics" />
          </Col>
          <Col md={4} id="pc1">
            <Image src={Img7} alt="profile pic" id="imagePics" />
          </Col>
        </Row>
      </Col>
      <Col md={1}></Col>
    </Row>
  );
}

export default Photos;