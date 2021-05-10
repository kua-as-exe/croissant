import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Header = styled.header`

`

const HeaderComponent = () => {

  return (
    <Header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">🥐 Croissant</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features" disabled={true}>Features</Nav.Link>
          <Nav.Link href="#pricing" disabled={true}>Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </Header>
  )
}

export default HeaderComponent