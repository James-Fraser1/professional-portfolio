import navicon from '../../assets/icons/nav-icon.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from 'react';

function Header( {setSection} ) {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='header'>
        <Container>
          <Navbar.Brand href="#home">
              <img src={navicon} alt='nav-icon' width={300} height={90}></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setSection("about")}>About</Nav.Link>
            <Nav.Link onClick={() => setSection("contact")}>Contact</Nav.Link>
            <Nav.Link onClick={() => setSection("projects")}>Projects</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;