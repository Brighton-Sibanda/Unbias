import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavbarBrand as={Link} to="/home">Home</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/home">Settings</Nav.Link>
          </Nav>
          <Nav>
            <UserButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
