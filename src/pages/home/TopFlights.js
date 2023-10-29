import React, { useState } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import TopFlightsCard from "./TopFlightsCard";

const TopFlights = () => {

  const[showCard,setCard]=useState(0)
  
  
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
        <Col md={4}>
          <TopFlightsCard id={showCard}/>
        </Col>
        <Col>
          <Accordion defaultActiveKey="0" className="rounded custom-bg-y1" >
            <Accordion.Item eventKey="0" className="custom-bg" >
              <Accordion.Header onClick={() => setCard(0)}>
                <Container>
                  <Row>
                    <Col>New Delhi -Mumbai</Col>
                    <Col>Starting from 4,851 INR</Col>
                    <Col>
                      <Button variant="dark">Book</Button>
                    </Col>
                  </Row>
                </Container>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>New Delhi</Col>
                  <Col>Departure</Col>
                  <Col>02h 15m</Col>
                  <Col>Arrival</Col>
                  <Col>Mumbai</Col>
                </Row>
                <Row>
                  <hr />
                </Row>
                <Row>
                  <Col>Sun,Nov 12 6:10 PM </Col>
                  <Col>DEL </Col>
                  <Col>
                    IndiGo flight <br /> 6E 271{" "}
                  </Col>
                  <Col>BOM </Col>
                  <Col>Sun,Nov 12 8:35 PM</Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="custom-bg">
              <Accordion.Header onClick={() => setCard(1)}>
                <Container>
                  <Row>
                    <Col>Mumbai -Chennai</Col>
                    <Col>Starting from 3,500 INR</Col>
                    <Col>
                      <Button variant="dark">Book</Button>
                    </Col>
                  </Row>
                </Container>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>Mumbai</Col>
                  <Col>Departure</Col>
                  <Col>02h 15m</Col>
                  <Col>Arrival</Col>
                  <Col>Chennai</Col>
                </Row>
                <Row>
                  <hr />
                </Row>
                <Row>
                  <Col>Sun,Nov 12 6:10 PM </Col>
                  <Col>BOM </Col>
                  <Col>
                    IndiGo flight <br /> 6E 5048{" "}
                  </Col>
                  <Col>MAA </Col>
                  <Col>Sun,Nov 12 8:35 PM</Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="custom-bg">
              <Accordion.Header onClick={() => setCard(2)}>
                <Container>
                  <Row>
                    <Col>Chennai -Bengaluru</Col>
                    <Col>Starting from 3,095 INR </Col>
                    <Col>
                      <Button variant="dark">Book</Button>
                    </Col>
                  </Row>
                </Container>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>Chennai</Col>
                  <Col>Departure</Col>
                  <Col>02h 15m</Col>
                  <Col>Arrival</Col>
                  <Col>Bengaluru</Col>
                </Row>
                <Row>
                  <hr />
                </Row>
                <Row>
                  <Col>Sun,Nov 12 6:10 PM </Col>
                  <Col>MAA </Col>
                  <Col>
                    IndiGo flight <br /> 6E 365{" "}
                  </Col>
                  <Col>BLR </Col>
                  <Col>Sun,Nov 12 8:35 PM</Col>
                </Row>{" "}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default TopFlights;
