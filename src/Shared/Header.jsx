import React from 'react';
import logo from '../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";

import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
       <Container>
         <div className='text-center'>
          <img src={logo} alt="" srcset="" />
          <p>Journalism Without Fear or Favour</p>
          <p>{moment().format("dddd, MMMM D,YYYY")}</p>
        </div>
        <div className='d-flex'>
        <Button variant="danger">Latest</Button>
        <Marquee pauseOnHover={false} className='text-danger'>
  I can be a React component, multiple React components, or just some text.
</Marquee>
        </div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/carrer">Carrer</Nav.Link>
           
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="primary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </Container>
    );
};

export default Header;