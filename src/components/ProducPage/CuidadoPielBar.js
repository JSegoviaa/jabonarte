import React from 'react';
import { NavLink } from 'react-router-dom';

const CuidadoPielBar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <NavLink to="/arcillas">Arcillas</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/balsamo-labial">Bálsamo labial</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/exfoliante">Exfoliante</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/jabones">Jabones</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/productos">Todas las categorías</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CuidadoPielBar;
