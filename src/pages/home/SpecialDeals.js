import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import WhyUsCard from "./WhyUsCard";

const SpecialDeals = () => {
  return (
    <Container className="mt-5">
      <Row>
         <Col>Special deals</Col>
         <Col> <a href="#"> view all promotions</a></Col>
      </Row>
      <Row>
      <Col>
         <WhyUsCard title={"Fly to Bali ,Indonesia for only $249"}/>
      </Col>
      <Col>
         <WhyUsCard title={"Direct flights to Bangkok,Thailand for only #276"}/>
      </Col>
      </Row>
    </Container>
  );
};

export default SpecialDeals;
