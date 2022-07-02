import {Container,Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">React-Portfolio</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">E-Commerce</Nav.Link>
            <Nav.Link as={Link} to="/todo">To Do</Nav.Link>
            <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarComponent;
