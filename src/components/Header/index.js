import navicon from '../../assets/icons/nav-icon.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from 'react';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='header'>
        <Container>
          <Navbar.Brand href="#home">
              <img src={navicon} alt='nav-icon' width={300} height={90}></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;