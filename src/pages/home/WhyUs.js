import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import WhyUsCard from "./WhyUsCard";
import tripPlanning from "./tripplanning.png"
import honestPrice from "./honestprice.png"
import support from "./support.png"

const WhyUs = () => {
  return (
    <Container className="mt-5 rounded ">
      <Row><h6>Why Us</h6></Row>
      <Row>
        <Col>
          <WhyUsCard title={"Trip planning"} src={tripPlanning}/>
        </Col>
        <Col>
          <WhyUsCard title={"Honest prices"} src={honestPrice}/>
        </Col>
        <Col>
          <WhyUsCard title={"Support 24/7"} src={support}/>
        </Col>
      </Row>  
    </Container>
  );
};

export default WhyUs;
