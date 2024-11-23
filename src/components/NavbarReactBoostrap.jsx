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
                <Navbar.Brand as={NavLink} to="/">Farmacia del MS
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Inicio
                    </Nav.Link>
                    <NavDropdown title="Medicamentos" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/category/Antibióticos">Antibióticos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/category/Analgésicos">Analgésicos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/category/Antifebriles">Antifebriles</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/category/Benzodiacepinas">Benzodiacepinas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/category/Inhibidores">Inhibidores</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavbarReactBootstrap
