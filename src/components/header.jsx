import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Formater.io</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;