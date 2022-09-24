import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import brandLogo from '../../../src/images/logo2.png'

const Header = () => {
   const {user, googleLogOutAuth} = useAuth();

   return (
      <>
         {['md'].map((expand) => (
            <Navbar key={expand} bg="light" expand={expand} className="mb-3 nav-bar">
               <Container fluid className='container'>
                  <Navbar.Brand href="/home"><img src={brandLogo} alt="" className='img-fluid brand-image' /></Navbar.Brand>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas
                     id={`offcanvasNavbar-expand-${expand}`}
                     aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                     placement="end"
                  >
                     {/* <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                           Offcanvas
                        </Offcanvas.Title>
                     </Offcanvas.Header> */}
                     <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                           <Nav.Link as={NavLink} to="/home#action1">Home</Nav.Link>

                           {!user?.email && <Nav.Link as={NavLink} to="/login#action">Login</Nav.Link> }
                           
                           {!user?.email && <Nav.Link as={NavLink} to="/register#action3">Register</Nav.Link>}
                           
                           <Nav.Link as={NavLink} to='/cart'>Cart</Nav.Link>
                           <Nav.Link as={NavLink} to='/shipping'>Shipping</Nav.Link>

                           <NavDropdown
                              title="Dropdown"
                              id={`offcanvasNavbarDropdown-expand-${expand}`}
                           >
                              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                              <NavDropdown.Item href="#action4">
                                 Another action
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action5">
                                 Something else here
                              </NavDropdown.Item>
                           </NavDropdown>
                           
                        </Nav>
                        <Form className="d-flex">
                           <Form.Control
                              type="search"
                              placeholder="Search"
                              className="me-2"
                              aria-label="Search"
                           />
                           <Button variant="outline-success">Search</Button>
                        </Form>
                        {user?.email && <h6 className='top-user-name' >{user.displayName}</h6> }
                        {user?.email && <button onClick={googleLogOutAuth} className="btn btn-danger ms-2">Logout</button>}
                     </Offcanvas.Body>
                  </Navbar.Offcanvas>
               </Container>
            </Navbar>
         ))}
      </>
   );
};

export default Header;