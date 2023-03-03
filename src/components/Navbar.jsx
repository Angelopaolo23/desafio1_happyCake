import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Link to="/" className="text-white ms-3 text-decoration-none">
          Home
          </Link>
          <Link to="/contact" className="text-white ms-3 text-decoration-none">
          Contacto
          </Link>
          <Navbar.Brand href="#home">Happy Cake</Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navigation;