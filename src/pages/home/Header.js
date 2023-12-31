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
          <a href="/"><img src={logo} alt="" srcset="" /></a>
        </Col>
        <Col sm={1}><a href="/">Home</a></Col>
        <Col sm={1}>Flights</Col>

        <Col sm={1}>
          <a href="/account">
            <AiOutlineUser />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
