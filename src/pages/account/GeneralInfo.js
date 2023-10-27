import Nav from "react-bootstrap/Nav";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../home/Header";
import Footer from "../home/Footer";
import Content from "./Content";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const GeneralInfo = () => {
  const [startDate, setStartDate] = useState();
  return (
    <>
      <Header />
      <Content />
      <Container className="mt-5">
        <Row>
          <Col>
            <Form>
              <Form.Text>Personal Details</Form.Text>
              <Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Gender</Form.Label>
                  <Form.Select>
                    <option value="Male">Male</option>
                    <option value="Female">FeMale</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>Date Of Birth</Form.Label>
                  <br />
                  <DatePicker
                    className="mt-1"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Phone</Form.Label>
                  <br />
                  <Form.Control />
                </Col>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <br />
                  <Form.Control />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <Row>
              <Col>
                <img src="" alt="user image" srcset="" />
              </Col>
              <Col>
              <Row>
                <Button className="custom-bg text-black border-outline-dark">Upload photo</Button>
                <Button className="custom-bg text-black border-outline-dark">Remove photo</Button>
              </Row>
              </Col>
            </Row>
            <Row>
              <Button className="custom-bg-b">Delete Account</Button>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default GeneralInfo;
