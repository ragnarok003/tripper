import React from 'react'
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import Header from '../home/Header';
import Footer from '../home/Footer';
import General from './GeneralInfo';
import Content from './Content';
const Account = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>

  )
}

export default Account