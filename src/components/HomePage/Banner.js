import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="home-banner w-100 back-cover back-center d-flex align-items-center justify-content-center">
      <div className="banner-desc ">
        <h1 className="w-100 text-center sansita">
          Cuida tu piel, cuidando el medio ambiente
        </h1>
        <div className="col-9  m-auto pt-3">
          <h4 className="font-body text-center">
            Haz de tu cuidado personal una prioridad
          </h4>
        </div>

        <div className="d-block m-auto text-center ">
          <NavLink className="btn btn-primary mt-4" to="/productos">
            Conoce nuestros productos
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
