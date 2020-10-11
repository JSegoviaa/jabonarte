import React from 'react';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav
      id="menu"
      className="container navbar navbar-expand-lg font-weight-bold"
    >
      <Fade left>
        <NavLink to="./" className="navbar-brand">
          <img
            src={logo}
            width="130"
            height="auto"
            className="d-inline-block align-top"
            alt="Jabonarte"
          />
        </NavLink>
      </Fade>
      <button
        className="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav font-body">
          <Fade right>
            <li className="nav-item nav-border-l">
              <NavLink to="./productos" className="nav-link">
                Productos
              </NavLink>
            </li>
            <li className="nav-item nav-border-r">
              <NavLink to="./cursos" className="nav-link">
                Cursos
              </NavLink>
            </li>
            <li className="nav-item nav-border-l nav-border-r">
              <NavLink to="./sobre-nosotros" className="nav-link">
                ¿Quiénes somos?
              </NavLink>
            </li>
            <li className="nav-item nav-border-r">
              <NavLink to="./contacto" className="nav-link">
                Contacto
              </NavLink>
            </li>

            <li className="nav-dist">
              <NavLink
                to="./conviertete-en-distribuidor"
                className="nav-link btn btn-info"
              >
                Conviértete en distribuidor
              </NavLink>
            </li>
          </Fade>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
