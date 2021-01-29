import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from '../../assets/logo.jpg';
import MediaQuery from 'react-responsive';
import ProductosNav from './ProductosNav';

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
            <MediaQuery minDeviceWidth={992}>
              <NavLink to="./productos" className="nav-link color-primary a">
                Productos
              </NavLink>
            </MediaQuery>

            <NavLink to="./cursos" className="nav-link color-primary a">
              Cursos
            </NavLink>
            <NavLink to="./sobre-nosotros" className="nav-link color-primary a">
              ¿Quiénes somos?
            </NavLink>
            <NavLink to="./contacto" className="nav-link color-primary  a">
              Contacto
            </NavLink>

            <MediaQuery maxDeviceWidth={991}>
              <ProductosNav />
            </MediaQuery>
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
