import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const FormIpElement = ({ label }) => {
  return (
    <Container className="custom-bg-b p-3 rounded">
      <Row className="my-2">
        <Form.Label className="custom-bg-y2  rounded">{label}</Form.Label>
      </Row>
      <Row>
        <Form.Select>
          <option disabled="true">Select Trip</option>
          <option value="1">One Trip</option>
          <option value="2">Round Trip</option>
        </Form.Select>
      </Row>
    </Container>
  );
};

export default FormIpElement;
