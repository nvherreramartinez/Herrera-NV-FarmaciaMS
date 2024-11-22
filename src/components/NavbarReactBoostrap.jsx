import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CarWidget';
import { NavLink } from 'react-router-dom';

function NavbarReactBootstrap() {
    return (
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to= '/' as={NavLink}>Farmacia del MS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                        <NavDropdown title="Medicamentos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Antibióticos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Antiinflamatorios</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Antifebriles</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Psicotrópicos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
    );
}

export default NavbarReactBootstrap;