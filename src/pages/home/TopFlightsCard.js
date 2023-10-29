import React from 'react'
import { Card } from 'react-bootstrap';
import chennai from './chennai.jpeg';
import banglore from './banglore.jpeg';
import mumbai from './mumbai.jpeg';

const TopFlightsCard = ({id}) => {
  const data = [
    {
      id:1,
      title: 'New Delhi-Mumbai with Indigo1',
      description: "Say goodbye to overpriced flights with Indigo, book a budget-friendly flight to Mumbai that includes a complimentary meal and champagne.",
      image: mumbai,
    },
    {
      id:2,
      title:" Mumbai-Chennai with Indigo",
      description: "Say goodbye to overpriced flights with Indigo, book an affordable flight to Chennai that includes a free meal and champagne.",
      image: chennai,
    },
    {
      id:3,
      title:" Chennai-Bangalore with Indigo",
      description: "Say goodbye to overpriced flights with Indigo, book an economical flight to Bangalore that includes a complimentary meal and champagne.",
      image: banglore,
    },
    ];
  return (
    <Card className="rounded p-3 custom-bg">
      <Card.Title className="custom-bg-y2 rounded p-2">{data[id].title}</Card.Title>
      <Card.Body>
        <Card.Text>{data[id].description}</Card.Text>
        <img src={data[id].image} alt="" srcset="" />
      </Card.Body>
    </Card>
  )
}

export default TopFlightsCard