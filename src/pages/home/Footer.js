import React from 'react'
import logo from"./logo dark.png"
import {BiLogoVisa} from "react-icons/bi"
import {RiMastercardLine} from "react-icons/ri"
import {SlPaypal} from "react-icons/sl"
import {FaGooglePay} from "react-icons/fa"

import { Container, Card, Col, Row, Button } from "react-bootstrap";
const Footer = () => {
  return (
    <Container className='mt-5 custom-bg-b px-5 py-3 text-white'>
      <Row>
         <Col>
               {/* <Row><img src={logo} alt="" /></Row> */}
               <Row>s2,173,paranjothi street,valasaravakkam,chennai-87</Row>
               <Row>210701202@rajalakshmi.edu.in</Row>
               <Row>+91 9344625950</Row>
         </Col>
         <Col>
               <Row> Company</Row>
               <Row>Contacts</Row>
               <Row>Support</Row>
               <Row>FAQ</Row>
         </Col>
         <Col>
               <Row>Quick Links</Row>
               <Row>Flights</Row>
         </Col>
      </Row>
      <Row>
         <Col>Terms of use | Privacy policy</Col>
         <Col>Copyright 2023 Tripper</Col>
         <Col><BiLogoVisa /><RiMastercardLine /> <SlPaypal /> <FaGooglePay /></Col>
      </Row>
    </Container>
  )
}

export default Footer