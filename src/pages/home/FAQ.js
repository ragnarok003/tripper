import React from 'react'
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <Container className='mt-5'>
         <Row>
            Freaquently asked questions
         </Row>
         <Row>
         <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How to book a flight?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can i cancel my booking?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
         </Row>
    </Container>

  )
}

export default FAQ