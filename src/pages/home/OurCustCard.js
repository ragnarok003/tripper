import React from "react";
import { Card } from "react-bootstrap";
import { ImQuotesLeft } from "react-icons/im";


const OurCustCard = ({cust,comment,date}) => {
  return (
    <Card style={{ width: "18rem", background: "black" }}>
      <Card.Body>
        <Card.Title className="text-white">
          <ImQuotesLeft />
        </Card.Title>
        <Card.Subtitle className="mb-2 text-white">{cust}</Card.Subtitle>
        <Card.Text className="text-white">
          {comment}
          <br />
          <br />
          {date}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
};

export default OurCustCard;
