import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import logo from "../../../src/Asset/Biscuits.png";
import Navbarcomp from "../../Component/Navbarcomp/Navbarcomp";
function Home() {
  return (
    <Container
      fluid
      style={{
        paddingLeft: "0px",
        paddingRight: "0px",
      }}
    >
      <Navbarcomp />
      Hii
    </Container>
  );
}

export default Home;
