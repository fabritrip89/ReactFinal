import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Widget from "./cartWidget";

function NavBar({ carritoLenght }) {
  return (
    <Navbar bg="light" expand="lg">
      <Widget />

      <nav>{carritoLenght} productos en el carrito</nav>

      <Navbar.Brand href="#home">Padel Rock</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Accesorios</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Indumentaria</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Paletas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Links utiles</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
