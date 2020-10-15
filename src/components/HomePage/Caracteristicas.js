import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import icono1 from '../../assets/icono-1.jpg';
import icono2 from '../../assets/icono-2.jpg';
import icono3 from '../../assets/icono-3.jpg';

const Caracteristicas = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <Fade top>
            <h1 className="w-100 f-sizeXXBig text-center sansita mt-5">
              Para el cuidado de tu piel, productos naturales
            </h1>
          </Fade>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12 pt-5">
            <div className="row color4">
              <div className="col-4 text-center">
                <Fade left>
                  <img className="icono" src={icono3} alt="recuerdos" />
                </Fade>
              </div>
              <div className="col-8 mar-auto">
                <Fade left>
                  <Link to="/recuerdos-para-eventos">
                    <h3 className="caracteristicas-font font-weight-bold font-subtitle letter-spacing1">
                      Recuerdos
                    </h3>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 pt-5">
            <div className="row color4">
              <div className="col-4 text-center">
                <Fade left>
                  <img src={icono1} alt="cuidado facial" className="icono" />
                </Fade>
              </div>
              <div className="col-8 mar-auto">
                <Fade top>
                  <Link to="/cuidados-de-la-piel">
                    <h3 className="caracteristicas-font font-weight-bold font-subtitle letter-spacing1">
                      Cuidado facial
                    </h3>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 pt-5">
            <div className="row color4">
              <div className="col-4 text-center">
                <Fade left>
                  <img className="icono" src={icono2} alt="cuidado capilar" />
                </Fade>
              </div>
              <div className="col-8 mar-auto">
                <Fade right>
                  <Link to="/cuidado-del-cabello">
                    <h3 className="caracteristicas-font font-weight-bold font-subtitle letter-spacing1">
                      Cuidado capilar
                    </h3>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;
