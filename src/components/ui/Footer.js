import React from 'react';
import Fade from 'react-reveal/Fade';

import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex-footer mt-4">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-10 text-center">
            <ul className="footer-nav list-group">
              <Fade top>
                <li className="footer-item">
                  <NavLink to="/productos" className="footer-link nav-link2">
                    Productos
                  </NavLink>
                </li>
                <li className="footer-item">
                  <NavLink to="/cursos" className="footer-link nav-link2">
                    Cursos
                  </NavLink>
                </li>
                <li className="footer-item nav-border-l nav-border-r">
                  <NavLink
                    to="/sobre-nosotros"
                    className="footer-link nav-link2"
                  >
                    ¿Quiénes somos?
                  </NavLink>
                </li>
                <li className="footer-item">
                  <NavLink to="contacto" className="footer-link nav-link2">
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
              </Fade>
            </ul>
          </div>
        </div>
        <Fade bottom>
          <div className="row icons justify-content-center color1 f-sizeXBig mt-4">
            <a href="https://facebook.com/jabonarteMerida/">
              <i className="fab fa-facebook fa-2x ml-2"></i>
            </a>
            <a href="https://instagram.com/jabon_artee/">
              <i className="fab fa-instagram fa-2x ml-2"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=529994103941&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20producto">
              <i className="fab fa-whatsapp fa-2x ml-2"></i>
            </a>
          </div>
          <div className="row color1 justify-content-center pt-3 mb-5">
            <i className="fas fa-copyright line-height-unset fa-2x"></i>
            Copyright {new Date().getFullYear()} Jabonarte
            <br />
            Mérida, Yucatán, México.
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
