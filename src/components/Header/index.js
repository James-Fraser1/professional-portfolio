import navicon from '../../assets/icons/nav-icon.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from 'react';


function Header({ setSection }) {
  return (
  
      <Navbar bg="black" variant="dark" className='header' expand='lg'>
        <Container>
        <Navbar.Brand href="#home">
          <img src={navicon} alt='nav-icon' width={300} height={90}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link href="/about" >About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link className='link' onClick={() => window.open('https://docs.google.com/document/d/1Jx7oQsSc4H5MbXpJ-efjkXrPhya6wMCtAY8h1IlJIjQ/edit?usp=sharing', "_blank")}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
   
  );
}

export default Header;