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
                className="d-inline-block align-top"
                alt="Jabonarte"
              />
            </Navbar.Brand>
          </NavLink>
        </Fade>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Fade right>
            <NavLink to="./productos" className="nav-link color-primary a">
              Productos
            </NavLink>
            <NavLink to="./cursos" className="nav-link color-primary a">
              Cursos
            </NavLink>
            <NavLink to="./sobre-nosotros" className="nav-link color-primary a">
              ¿Quiénes somos?
            </NavLink>
            <NavLink to="./contacto" className="nav-link color-primary  a">
              Contacto
            </NavLink>
            <NavLink
              to="./conviertete-en-distribuidor"
              className="nav-link btn btn-primary"
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
