import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Brand href="#home">Padel Rock</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        
            <Nav.Link href="#home">Inicio</Nav.Link>
         
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Indumentaria
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Paletas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Links utiles
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;