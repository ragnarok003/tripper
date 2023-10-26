import React from 'react'
import { Container, Card, Col, Row, Button } from "react-bootstrap";

const WhyUsCard = ({title,src}) => {
  return (
   <Card style={{ width: "18rem" }} className='rounded'>
            
   <Card.Body>
     <Card.Title className='bg-dark text-white p-2 rounded'>{title}</Card.Title>
     <Card.Img  className="rounded" variant="top" src={src} />
     <Card.Text className='pt-3'>
       Some quick example text to build on the card title and make up
       the bulk of the card's content.
     </Card.Text>
   </Card.Body>
 </Card>
  )
}

export default WhyUsCard
