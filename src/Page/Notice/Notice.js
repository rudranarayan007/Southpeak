import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Notice.css";
function Notice() {
  return (
    <div id="noticebg">
      <Container>
        <Row>
          <Col md={1}> </Col>

          <Col id="notice1">
            Notices
            <div id="notice2"></div>
          </Col>
          <Col md={1}> </Col>
        </Row>
        <Row>
          <Col md={1}> </Col>
          <Col id="notice3">
          C.I.F. COST, INSURANCE, FREIGHT PROCEDURE:
          </Col>
          <Col md={1}> </Col>
        </Row>
        <Row>
          <Col md={1}> </Col>
          <Col id="notice3">
          1. BUYER ISSUES PURCHASE ORDER UPON RECEIPT IN ACCEPTANCE OF SELLER’S SOFT OFFER.
          </Col>
          <Col md={1}> </Col>
        </Row>
        <Row>
          <Col md={1}> </Col>
          <Col id="notice3">
          2. SELLER ISSUES DRAFT SALES AND PURCHASE AGREEMENT CONTRACT AND, COMMERCIAL INVOICE FOR BUYER’S REVIEW AND SIGNING.
          </Col>
          <Col md={1}> </Col>
        </Row>   <Row>
          <Col md={1}> </Col>
          <Col id="notice3">
          3. BUYER SIGNS THE SALES AND PURCHASE AGREEMENT CONTRACT AND COMMERCIAL INVOICE BACK TO THE SELLER.
          </Col>
          <Col md={1}> </Col>
        </Row>
        <Row>
          <Col md={1}> </Col>
          <Col id="notice3">
          4. SELLER REGISTERS AND LEGALIZES THE SIGNED SALES AND PURCHASE AGREEMENT CONTRACT.
          </Col>
          <Col md={1}> </Col>
        </Row>
        <Row>
          <Col md={1}> </Col>
          <Col id="notice3">
          5. SELLER SENDS LEGALIZED CONTRACT AND BELOW PARTIAL POP DOCUMENTS TO BUYER AS LISTED BELOW:
          <br/>
          <ul>CERTIFICATE OF ORIGIN.</ul>
          <ul>COMMITMENT TO SUPPLY.</ul>
          <ul>PRODUCT PASSPORT</ul>
          <ul>STATEMENT OF AVAILABILITY OF THE PRODUCT.</ul>
          <ul> EXPORT LICENSE.</ul>
          </Col>
          <Col md={1}> </Col>
        </Row>
        <Row>
          <Col md={1}> </Col>
          <Col id="notice3">
          6. BUYER ISSUES THEIR FINANCIAL GUARANTEE (SBLC MT760) TO COVER THE FIRST SHIPMENT TO SELLER’S BANK IN 5 WORKING DAYS.
          </Col>
          <Col md={1}> </Col>
        </Row>
        <Row>
          <Col md={1}> </Col>
          <Col id="notice3">
          7. IF BUYER FAILS TO ISSUE SBLC IN 5 WORKING DAYS, IN ALTERNATIVE BUYER SHALL MAKE GUARANTEE DEPOSIT OF 5% TT WIRE TO SELLER’S FIDUCIARY BANK ACCOUNT AS PERFORMANCE TO SECURE THE ALLOCATION WHICH WILL BE DEDUCTED FROM THE FIRST SHIPMENT.
          </Col>
          <Col md={1}> </Col>
        </Row>

        <Row>
          <Col md={1}> </Col>
          <Col id="notice3">
          8. UPON CONFIRMATION OF BUYER’S SBLC OR GUARANTEE DEPOSIT OF 5% TT WIRE TO SELLER’S BANK, SELLER WILL ISSUE 2% PERFORMANCE BOND, FULL POP AND SHIPPING DOCUMENTS VIA SWIFT BANK TO BANK AS SHOWN BELOW:
         
         <ul> PRODUCT ALLOCATION EXPORT PERMIT.</ul>
         <ul> ALLOCATION TITLE OWNERSHIP CERTIFICATE.</ul>
         <ul> TRANSNEFT CONTRACT TO TRANSPORT THE PRODUCT TO THE LOADING PORT .</ul>
         <ul> PORT STORAGE AGREEMENT.</ul>
         <ul> CHARTER PARTY AGREEMENT TO TRANSPORT THE PRODUCT TO DISCHARGE PORT.</ul>
         <ul> TANK STORAGE RECEIPT.</ul>
         <ul> SGS QUALITY AND QUANTITY CERTIFICATE.</ul>
         <ul> BILL OF LANDING.</ul>
         <ul> VESSEL QUESTIONNAIRE 88.</ul>
         </Col>
          <Col md={1}> </Col>
        </Row>
        <Row>
          <Col md={1}> </Col>
          <Col id="notice3">
          9. SHIPMENT COMMENCES AND UPON ARRIVAL OF THE VESSEL TANKER AT THE DISCHARGE PORT, BUYER CONDUCTS SGS INSPECTION AND MAKES OPERATIVE SBLC OR MAKES PAYMENT FOR THE FULL SHIPMENT VIA TT WIRE OR MT103.
          </Col>
          <Col md={1}> </Col>
        </Row>

        {/* <Row>
          <Col md={1}> </Col>
          <Col id="notice4">
            <Button id="notice5">All Notices..</Button>
          </Col>
          <Col md={1}> </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Notice;
