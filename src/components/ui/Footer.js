import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex-footer mt-4">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-10 text-center">
            <ul className="footer-nav">
              <li className="footer-item">
                <NavLink to="/productos" className="footer-link">
                  Productos
                </NavLink>
              </li>
              <li className="footer-item nav-border-l nav-border-r">
                <NavLink to="/sobre-nosotros" className="footer-link">
                  ¿Quiénes somos?
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="contacto" className="footer-link">
                  Contacto
                </NavLink>
              </li>
              <li className="footer-dist footer-item">
                <NavLink
                  className="btn btn-info footer-link mt-4"
                  to="/conviertete-en-distribuidor"
                >
                  Conviértete en distribuidor
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row icons justify-content-center color1 f-sizeXBig">
          <a href="facebook.com/jabonarteMerida/">
            <i className="fab fa-facebook fa-2x ml-2"></i>
          </a>
          <a href="www.instagram.com/jabon_artee/">
            <i className="fab fa-instagram fa-2x ml-2"></i>
          </a>
        </div>
        <div className="row color1 justify-content-center pt-3 mb-5">
          <i className="fas fa-copyright line-height-unset fa-2x"></i>
          Copyright 2020 Jabonarte
        </div>
      </div>
    </footer>
  );
};

export default Footer;
