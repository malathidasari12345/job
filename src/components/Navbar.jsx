import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import "../styles/navbar.css"
import {Link} from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="light"className="px-3">
      <Container fluid>
        {/* Left: Logo */}
          <Navbar.Brand href="#home" className="fw-bold" style={{ color: '#28a745', fontSize: '2.5rem' }}
           as={Link} to="/">
             LOGO
          </Navbar.Brand>
        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav">
          {/* Center: Nav Links */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/findjob" className="mx-2">Find Job</Nav.Link>
            <Nav.Link as={Link} to="/company" className="mx-2">Company</Nav.Link>
            <Nav.Link as={Link} to="/career-advice" className="mx-2">Career Advice</Nav.Link>
            <Nav.Link as={Link} to="/candidate" className="mx-2">Candidate</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">Contact Us</Nav.Link>
          </Nav>

          {/* Right: Sign In and Sign Up Buttons */}
          <div>
  <Button
    href="#signin"
    className="mx-2 custom-button"
    as={Link} to="/signin"
  >
    Sign In
  </Button>
  <Button
    href="#signup"
    className="mx-2 custom-button"
    as={Link} to="/signup"
  >
    Sign Up
  </Button>
</div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
