import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navbarcomp from "../../Component/Navbarcomp/Navbarcomp";
import "./Blog.css";
import BlogImage from "../../Asset/blogImg.jpg";

export default function Blog() {
  return (
    <Container fluid id="blogContainer">
      {/* imported navbar */}
      <Navbarcomp />

      <Container id="blogSecondContainer">
        <Row>
          <Col md={1}></Col>
          <Col>
            <Row id="goldTradingHeadingTxt">Gold Trading Is Growing Now !</Row>
            <Row>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Image src={BlogImage} id="blogImg" />
              </Col>
            </Row>
            <Row id="blogParaTxt">
              Gold has been an investment asset and store of value for
              centuries. To this day, investors include gold in their portfolios
              as an inflationary hedge and diversification asset. During times
              of market volatility and an ongoing increase in inflation, gold is
              an attractive investment option.
            </Row>
            <Row id="blogParaTxt">
              Buying gold at the lowest possible price is critical to maximizing
              returns and mitigating your investment risk. In this guide, our
              team at Learn About Gold discusses the cheapest way to buy gold.
            </Row>
            <Row id="blogParaTxt">
              You take advantage of economies of scale when you buy physical
              gold in bulk. In other words, by spreading various fixed-cost
              items across more units, you reduce the premium you pay per unit.
              These expenses include shipping, administrative fees, insurance,
              and packaging costs. 
              <br />
              Dealer discounts are another potential cost
              advantage when you buy physical gold in bulk.
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </Container>
  );
}
