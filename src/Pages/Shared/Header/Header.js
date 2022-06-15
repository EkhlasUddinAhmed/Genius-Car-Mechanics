import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";
import { HashLink } from 'react-router-hash-link';
const Header = () => {

    const {loggedUser,googleSignOut}=useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} height="30" alt="" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#exparts">Exparts</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/about">About</Nav.Link>
            
            {loggedUser.email?
              <Nav.Link onClick={googleSignOut} as={Link} to="/logout">LogOut</Nav.Link>
            :
            <Nav.Link as={Link} to="/login">LogIn</Nav.Link>}
            <Navbar.Text>
              Signed in as: <a href="#login">{loggedUser.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
