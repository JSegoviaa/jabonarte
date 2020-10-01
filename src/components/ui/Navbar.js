import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav id="menu" className="container navbar navbar-expand-lg ">
      <NavLink to="/" className="navbar-brand" href="/">
        <img
          src={logo}
          width="130"
          height="auto"
          className="d-inline-block align-top"
          alt="Jabonarte"
        />
      </NavLink>
      <a
        className="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </a>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav font-body">
          <li className="nav-item nav-border-l">
            <NavLink to="/productos" className="nav-link" href="/tienda">
              Productos
            </NavLink>
          </li>
          <li className="nav-item nav-border-l nav-border-r">
            <NavLink
              to="sobre-nosotros"
              className="nav-link"
              href="/sobre-nosotros"
            >
              ¿Quiénes somos?
            </NavLink>
          </li>
          <li className="nav-item nav-border-r">
            <NavLink to="contacto" className="nav-link" href="/contacto">
              Contacto
            </NavLink>
          </li>
          <li className="nav-dist">
            <NavLink
              to="conviertete-en-distribuidor"
              className="nav-link btn btn-info"
              href="/distribuidor"
            >
              Conviértete en distribuidor
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
