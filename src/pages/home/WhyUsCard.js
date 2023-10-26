import React from 'react'
import { Container, Card, Col, Row, Button } from "react-bootstrap";

const WhyUsCard = ({title}) => {
  return (
   <Card style={{ width: "18rem" }}>
            
   <Card.Body>
     <Card.Title className='bg-dark text-white p-2'>{title}</Card.Title>
     <Card.Img variant="top" src="holder.js/100px180" />
     <Card.Text>
       Some quick example text to build on the card title and make up
       the bulk of the card's content.
     </Card.Text>
   </Card.Body>
 </Card>
  )
}

export default WhyUsCard
