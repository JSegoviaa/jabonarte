import React from 'react';
import Fade from 'react-reveal/Fade';

import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="home-banner w-100 back-cover back-center d-flex align-items-center justify-content-center">
      <div className="banner-desc ">
        <Fade top>
          <h1 className="w-100 text-center sansita">
            Cuida tu piel, cuidando el medio ambiente
          </h1>
        </Fade>
        <div className="col-9  m-auto pt-3">
          <Fade bottom>
            <h4 className="font-body text-center">
              Haz de tu cuidado personal una prioridad
            </h4>
          </Fade>
        </div>

        <div className="d-block m-auto text-center ">
          <Fade bottom>
            <NavLink className="btn btn-primary mt-4" to="/productos">
              Conoce nuestros productos
            </NavLink>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Banner;
