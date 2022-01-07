import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../images/Logo.png";
import { HashLink } from "react-router-hash-link";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="mt-5">
      <Navbar
        className="pt-4"
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="fw-bolder justify-content-center">
            <Nav.Link className="text-black link" as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link
              className="text-black link"
              as={HashLink}
              to="/home#banner"
            >
              Banner
            </Nav.Link>
            <Nav.Link
              className="text-black link"
              as={HashLink}
              to="/home#services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="text-black link"
              as={HashLink}
              to="/home#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="text-black link"
              as={HashLink}
              to="/home#testimonials"
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              className="text-black link"
              as={HashLink}
              to="/home#contact"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              className="text-black link"
              as={HashLink}
              to="/home#footer"
            >
              Footer
            </Nav.Link>
            {user?.email ? (
              <button className="sty" onClick={logOut}>
                LogOut
              </button>
            ) : (
              <NavLink to="/login">
                <button className="sty">Login</button>
              </NavLink>
            )}

            <Nav.Link
              className="text-success  mx-3 text-decoration-underline"
            >
              {user?.displayName}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
