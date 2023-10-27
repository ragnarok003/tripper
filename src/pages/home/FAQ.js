import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <Container className="mt-5">
      <Row>Freaquently asked questions</Row>
      <Row>
        <Accordion defaultActiveKey="0" className="custom-bg">
          <Accordion.Item eventKey="0" className="custom-bg">
            <Accordion.Header className="custom-bg">How to book a flight?</Accordion.Header>
            <Accordion.Body className="custom-bg">
              Go to flights section,search for neccessary flight and press
              'book' fill your data ,choose,your baggage,seating and proceed to
              the payment tab,enter your credit card information and press 'pay
              now'.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="custom-bg">
            <Accordion.Header className="custom-bg">Can i cancel my booking?</Accordion.Header>
            <Accordion.Body className="custom-bg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
};

export default FAQ;
