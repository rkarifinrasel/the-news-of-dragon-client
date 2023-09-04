import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../LeftNav/LeftNav';
import RightNav from '../Shared/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
        <Col lg={3} className='bg-primary'><LeftNav></LeftNav></Col>

        <Col lg={6} className='bg-success'>Main</Col>

        <Col lg={3} className='bg-danger'><RightNav></RightNav></Col>
      </Row>
     
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;