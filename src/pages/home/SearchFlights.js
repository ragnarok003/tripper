import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import globe from "./globe.png";
import Image from "react-bootstrap/Image";
import FormIpElement from "./FormIpElement";
import { Button } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

const SearchFlights = () => {
  return (
    <Container>
      <Card className="mt-3 custom-bg ">
        <Card.Body>
          <Card.Text>
            <Container>
              <Row>
                <Col>
                  <p>
                    <h3>TRAVEL WITH US</h3>
                    <h3>
                      <strong>DISCOVER</strong>  THE WORLD
                    </h3>
                  </p>
                </Col>
                <Col>
                  <Image src={globe} roundedCircle="xxl" />
                </Col>
              </Row>
            </Container>
          </Card.Text>
          <Card.Text>
            <Container>
              <Row>
                <Col>
                  <FormIpElement label={"From"} />
                </Col>
                <Col>
                  <FormIpElement label={"To"} />
                </Col>
                <Col>
                  <FormIpElement label={"Trip"} />
                </Col>
                <Col>
                  <FormIpElement label={"Departure"} />
                </Col>
                <Col>
                  <FormIpElement label={"Return"} />
                </Col>
                <Col>
                  <FormIpElement label={"Passengers"} />
                </Col>
                <Col>
                  <Button variant="light" size="lg" type="submit">
                    Discover <AiOutlineArrowRight />
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SearchFlights;
