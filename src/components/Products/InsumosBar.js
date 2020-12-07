import React from 'react';
import { NavLink } from 'react-router-dom';

const InsumosBar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush sansita rounded-lg">
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/aceite-esencial">
            Aceite esencial
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/base-glicerina">
            Base de glicerina
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/carbon-activado">
            Carbón activado
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/colorante-hidrosoluble">
            Colorantes hidrosolubles
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/fragancias">
            Fragancias
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/glitter">
            Glitter
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/micas-perladas">
            Micas perladas
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/molde-polietileno">
            Molde polietileno
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/pigmentos-migrantes">
            Pigmentos no migrantes
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

export default InsumosBar;
