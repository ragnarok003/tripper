import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "./logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <img src={logo} alt="" srcset="" />
        </Col>
        <Col sm={4}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 custom-bg "
              aria-label="Search"
              variant="outline-dark"
            />
            <Button variant="outline-dark"><BsSearch /></Button>
          </Form>
        </Col>
        <Col sm={1}>Home</Col>
        <Col sm={1}>Flights</Col>

        <Col sm={1}>
          <AiOutlineUser />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
