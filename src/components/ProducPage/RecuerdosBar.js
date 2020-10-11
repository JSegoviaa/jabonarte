import React from 'react';
import { NavLink } from 'react-router-dom';

const RecuerdosBar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush sansita">
        <li className="list-group-item">
          <NavLink to="/baby-shower">Baby shower</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/bautizo">Bautizo</NavLink>
        </li>

        <li className="list-group-item">
          <NavLink to="/boda">Boda</NavLink>
        </li>

        <li className="list-group-item">
          <NavLink to="/fiestas-infantiles">Fiestas infantiles</NavLink>
        </li>

        <li className="list-group-item">
          <NavLink to="/primera-comunion">Primera comunión</NavLink>
        </li>

        <li className="list-group-item">
          <NavLink to="/xv-años">XV años</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/dias-de-las-madres">Día de las madres</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/recuerdos-navidenos">Detalles Navideños </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/productos">Todas las categorías</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RecuerdosBar;
