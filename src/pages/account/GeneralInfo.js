import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import Header from '../home/Header';
import Footer from '../home/Footer';
import Content from './Content';
const GeneralInfo = () => {
  return (
    <>
    <Header />
    <Content />
    <Container className='mt-5'>

    </Container>
    <Footer />
    </> 
  )
}

export default GeneralInfo