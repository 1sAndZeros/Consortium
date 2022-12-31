import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {

 const [user, setUser] = useState({});
 const navigate = useNavigate();

 useEffect(() => {
   const API_URL = 'https://consortium-api.onrender.com/';
   fetch(API_URL, {
     headers: {
       authorization: 'Bearer ' + localStorage.token,
     },
   })
     .then((res) => res.json())
     .then((result) => {
       if (result.user) {
         setUser(result.user);
       } else {
         logout()
       }
     });
 }, []);

 function logout() {
  localStorage.removeItem('token');
  navigate('/login');
 }

  return (
    <Navbar className='shadow sticky-top' bg='primary' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='/'>
          <img
            alt=''
            src='logo-sm.png'
            width='30'
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
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text className='me-3'>Hello {user.email}</Navbar.Text>
          <Button variant='outline-danger' onClick={logout} typeof='submit'>
            Log Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
