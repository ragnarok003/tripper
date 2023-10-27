import React from 'react'
import GeneralInfo from './GeneralInfo'
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';


const Content = () => {
  return (
   <Container className='mt-5'>
   <Nav variant="underline" defaultActiveKey="/home">
     <Nav.Item>
       <Nav.Link href="/account/generalinfo">General Info</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="link-1" href='/account/orders'>Orders</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="disabled" disabled>
         Disabled
       </Nav.Link>
     </Nav.Item>
   </Nav>
 </Container>
  )
}

export default Content