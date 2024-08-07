import React from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import brandlogo from "../assests/banner/brandlogo1.png";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signup');
  };
 
  return (
    <Navbar  expand="lg" className="px-3 px-lg-5 header-bg-color">
      <Navbar.Brand as={Link} to="/home" className="text-white">
        <img
          src={brandlogo}
          alt="Brand Logo"
          style={{ height: "50px", width: "110px",borderRadius:"11px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            as={Link}
            to="/home"
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
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
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
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Navbar>
  );
};

export default Header;
