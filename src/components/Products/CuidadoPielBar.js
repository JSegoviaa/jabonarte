import React from 'react';
import { NavLink } from 'react-router-dom';

const CuidadoPielBar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush sansita rounded-lg">
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/arcillas">
            Arcillas
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/balsamo-labial">
            Bálsamo labial
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/exfoliante">
            Exfoliante
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/jabones">
            Jabones
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

export default CuidadoPielBar;
