import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import { ImQuotesLeft } from "react-icons/im";
import OurCustCard from "./OurCustCard";
const OurCustomerSay = () => {
  return (
    <Container className="mt-5">
      <Row>
        <h6>Our customer say</h6>
      </Row>
      <Row>
        <Col>
          <OurCustCard cust={"Mike Newton"} comment={"i'd like to thank the whole Lufthansa staff for providing such a top class service .I loved everything starting from plane food and ending with the cheerful staff.Totally recommend Lufthansa as a relieable flight partner."
        } date={"18 April 2023"}/>
        </Col>
        <Col>
            <OurCustCard cust={"Ava Brown"} date={"13 March 2023"} comment={"The trip was amazing. thanks to Tripper staff for supporting us during "}/>
        </Col>
        <Col>
          <OurCustCard cust={"Eve Williams"} date={"23 April 2023"} comment={"Me & my husband are very satisfied with both flight and accomodation services, would recommend Ryanair as a cheap yet wonderful service."}/>
        </Col>
      </Row>
    </Container>
  );
};

export default OurCustomerSay;
