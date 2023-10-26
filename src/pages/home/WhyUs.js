import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  return (
    <Container className="mt-5">
      <Row><h6>Why Us</h6></Row>
      <Row>
        <Col>
          <WhyUsCard title={"Trip planning"}/>
        </Col>
        <Col>
          <WhyUsCard title={"Honest prices"}/>
        </Col>
        <Col>
          <WhyUsCard title={"Support 24/7"}/>
        </Col>
      </Row>  
    </Container>
  );
};

export default WhyUs;
