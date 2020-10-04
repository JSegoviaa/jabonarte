import React from 'react';
import { NavLink } from 'react-router-dom';

const CuidadoCabelloBar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <NavLink to="/acondicionadores">Acondicionador sólido</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/champus">Shampoo sólidos</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/productos">Todas las categorías</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CuidadoCabelloBar;
