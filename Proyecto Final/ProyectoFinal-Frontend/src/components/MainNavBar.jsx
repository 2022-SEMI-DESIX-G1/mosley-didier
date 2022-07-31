import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function MainNavBar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">SIGMA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"></Nav.Link>
                        <Nav.Link href="#pricing"></Nav.Link>                
                    </Nav>
                    <Nav>
                        <Nav.Link href="#s4">Vuelvete un vendedor</Nav.Link>
                        <Nav.Link as={Link} to="login">Iniciar Sesión</Nav.Link>
                        <Link to='registro'>
                            <Button variant="outline-light">Regístrate</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}