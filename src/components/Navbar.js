import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='/'>
          <img
            alt=''
            src='logo192.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Consortium
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/leagues'>Leagues</Nav.Link>
            <Nav.Link href='/settings'>Settings</Nav.Link>
            <NavDropdown title='Bets' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='/nextbet'>Next Bet</NavDropdown.Item>
              <NavDropdown.Item href='/lastbet'>Last Bet</NavDropdown.Item>
              <NavDropdown.Item href='/livebet'>Live Bet</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
