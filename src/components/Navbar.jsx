import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BiSpreadsheet, BiHome, BiCake } from "react-icons/bi";

const Navigation = () => {
  return (
    <>
      <Navbar bg="warning" variant="warning">
        <Container>
            <div>
                <BiHome style={{fontSize: '30px'}}/><Link to="/" className="text-dark ms-1 me-3 text-decoration-none">
                Home
                </Link>
                <BiSpreadsheet style={{fontSize: '30px'}}/><Link to="/contact" className="text-dark ms-1 me-3 text-decoration-none">
                Contacto
                </Link>
            </div>
            <div>
                <BiCake style={{fontSize: '40px'}}/><Navbar.Brand className='ms-1'>Happy Cake</Navbar.Brand>
            </div>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navigation;