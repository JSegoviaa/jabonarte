import React from 'react';
import { NavLink } from 'react-router-dom';

const InsumosBar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <NavLink to="/aceite-esencial">Aceite esencial</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/base-glicerina">Base de glicerina</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/carbon-activado">Carbón activado</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/colorante-hidrosoluble">
            Colorantes hidrosolubles
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/fragancias">Fragancias</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/glitter">Glitter</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/micas-perladas">Micas perladas</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/molde-polietileno">Molde polietileno</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/pigmentos-migrantes">Pigmentos no migrantes</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/productos">Todas las categorías</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default InsumosBar;
