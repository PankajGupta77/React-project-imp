import React from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import brandlogo from "../assests/banner/brandlogo.png";
import "./header.css";
const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" className="px-3 px-lg-5">
      <Navbar.Brand as={Link} to="/" className="text-white">
        <img
          src={brandlogo}
          alt="Brand Logo"
          style={{ height: "50px", width: "auto" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            as={Link}
            to="/"
            className="header-text-class"
            style={{ textDecoration: "none" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/category"
            className="header-text-class"
            style={{ textDecoration: "none" }}
          >
            Categories
          </Nav.Link>
        </Nav>
        <Form className="d-flex ms-auto my-2 my-lg-0">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="light">Search</Button>
        </Form>
        <Nav className="d-flex align-items-center ms-3 mt-2 mt-lg-0">
          {/* Cart and Account Menu for mobile */}
        
          {/* Cart and Account Menu for desktop */}
          <div className="d-none d-lg-flex align-items-center">
            <Nav.Link as={Link} to="/cart" className="text-white me-3">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Nav.Link>
            <NavDropdown 
              title={<FontAwesomeIcon icon={faUser} size="lg" />} 
              id="basic-nav-dropdown" 
              align="end"
            >
              <NavDropdown.Item as={Link} to="/account">My Account</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/order">Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav>
      </Navbar.Collapse>
      <div className="mobile-view-menu d-lg-none">
            <Nav.Link as={Link} to="/cart" className="text-white me-3">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Nav.Link>
            <NavDropdown 
              title={<FontAwesomeIcon icon={faUser} size="lg" />} 
              id="basic-nav-dropdown" 
              align="end"
            >
              <NavDropdown.Item as={Link} to="/account">My Account</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/order">Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </div>
    </Navbar>
  );
};

export default Header;
