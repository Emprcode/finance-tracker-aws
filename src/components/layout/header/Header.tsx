import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container className='p-2'>
        <Navbar.Brand href="/" className='h1 fw-bold'>AWS FT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" >
              <span className='fw-bold'>

              <FiLogOut size={20} />
              </span>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
