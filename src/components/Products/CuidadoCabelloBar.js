import React from 'react';
import { NavLink } from 'react-router-dom';

const CuidadoCabelloBar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush sansita rounded-lg">
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/acondicionadores">
            Acondicionador sólido
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/champus">
            Shampoo sólido
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/productos">
            Todas las categorías
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CuidadoCabelloBar;
