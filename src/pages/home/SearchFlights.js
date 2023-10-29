import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import globe from "./globe.png";
import Image from "react-bootstrap/Image";
import { Button, Form } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";


const SearchFlights = () => {
  const [startDate, setStartDate] = useState();
  const options = [
  "DEL: Indira Gandhi International Airport, New Delhi",
  "BOM: Chhatrapati Shivaji International Airport, Mumbai",
  "MAA: Chennai International Airport, Chennai",
  "BLR: Kempegowda International Airport, Bangalore",
  "COK: Cochin International Airport, Kochi",
  "HYD: Rajiv Gandhi International Airport, Hyderabad",
   ];
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
                      <strong>DISCOVER</strong> THE WORLD
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
            <Form>
              <Container>
                <Row>
                  <Col>
                    <Form.Label>From</Form.Label>
                    <Form.Select>
                      <option disabled="true" selected="true">Select Location</option>
                      {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>To</Form.Label>
                    <Form.Select>
                    <option disabled="true" selected="true">Select Location</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>Tickets</Form.Label>
                    <Form.Select>
                      <option disabled="true">number of tickets</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>Departure</Form.Label>
                    <DatePicker
                      className="mt-1"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Col>
                  <Col>
                    <Button variant="light" size="lg" type="submit">
                      Discover <AiOutlineArrowRight />
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SearchFlights;
