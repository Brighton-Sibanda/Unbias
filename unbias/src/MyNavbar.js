import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import logo from "./assets/logo2.png";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#">
               <img
                   src={logo}
                   width="30"
                   height="30"
                   className="d-inline-block align-top"
                   alt="Website logo"
               />
           </Navbar.Brand>
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
