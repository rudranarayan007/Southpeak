import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import "./Dummy.css"
import gold from "../../../src/Asset/goldar.jpg"
function Dummy() {
  return (
    <div>


<Container id='cont'>


<Row>


<Col md={3}>


<img src={gold} style={{width:'100%', borderRadius:'.5rem'}}/>

</Col>
<Col md={9} id="desc">


<Row id='title'> Gold Coins</Row>
<Row id='descp'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i </Row>
<Row id="price"> Price : ₹788 </Row>
<Button id='btn'>Buy Now</Button>

</Col>


</Row>


</Container>



    </div>
  )
}

export default Dummy