import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from '../../assets/logo.jpg';

const NavBar = () => {
  return (
    <Navbar className="shadow-sm" expand="lg">
      <div className="container">
        <Fade left>
          <NavLink to="./">
            <Navbar.Brand>
              <img
                src={logo}
                width="130"
                height="auto"
                className="d-inline-block align-top"
                alt="Jabonarte"
              />
            </Navbar.Brand>
          </NavLink>
        </Fade>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Fade right>
            <NavLink to="./productos" className="nav-link nav-link2">
              Productos
            </NavLink>
            <NavLink to="./cursos" className="nav-link nav-link2">
              Cursos
            </NavLink>
            <NavLink to="./sobre-nosotros" className="nav-link nav-link2">
              ¿Quiénes somos?
            </NavLink>
            <NavLink to="./contacto" className="nav-link nav-link2">
              Contacto
            </NavLink>
            <NavLink
              to="./conviertete-en-distribuidor"
              className="nav-link btn btn-info"
            >
              Conviértete en distribuidor
            </NavLink>
          </Fade>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
