import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const TopFlights = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h6>Top Flights</h6>
        </Col>
        <Col>
          <a href="#">Browse all flights</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="rounded">
            <Card.Title className="custom-bg-y2 rounded">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Link href="#">Another Link</Card.Link>
          </Card>
        </Col>
        <Col>
          <Accordion defaultActiveKey="0" className="rounded">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Container>
                  <Row>
                    <Col>London -Milan</Col>
                    <Col>Starting from $96</Col>
                    <Col>
                      <Button variant="dark">Book</Button>
                    </Col>
                  </Row>
                </Container>
              </Accordion.Header>
              <Accordion.Body>
                London depature--------------------> arrival
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <Container>
                  <Row>
                    <Col>London -Milan</Col>
                    <Col>Starting from $96</Col>
                    <Col>
                      <Button variant="dark">Book</Button>
                    </Col>
                  </Row>
                </Container>
              </Accordion.Header>
              <Accordion.Body>
                London depature--------------------> arrival
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <Container>
                  <Row>
                    <Col>London -Milan</Col>
                    <Col>Starting from $96</Col>
                    <Col>
                      <Button variant="dark">Book</Button>
                    </Col>
                  </Row>
                </Container>
              </Accordion.Header>
              <Accordion.Body>
                London depature--------------------> arrival
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <Container>
                  <Row>
                    <Col>London -Milan</Col>
                    <Col>Starting from $96</Col>
                    <Col>
                      <Button variant="dark">Book</Button>
                    </Col>
                  </Row>
                </Container>
              </Accordion.Header>
              <Accordion.Body>
                London depature--------------------> arrival
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default TopFlights;
