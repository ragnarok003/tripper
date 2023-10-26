import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";

const OurCustomerSay = () => {
  return (
    <Container className="mt-5">
      <Row>
         <h6>Our customer say</h6>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem",background:"black" }}>
            <Card.Body>
              <Card.Title className="text-white">Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-white">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem",background:"black" }}>
            <Card.Body className="text-white">
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-white">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem",background:"black" }}>
            <Card.Body className="text-white" style={{text:"white"}}>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-white ">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OurCustomerSay;
