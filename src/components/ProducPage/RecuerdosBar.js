import React from 'react';
import { NavLink } from 'react-router-dom';

const RecuerdosBar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush sansita rounded-lg">
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/baby-shower">
            Baby shower
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/bautizo">
            Bautizo
          </NavLink>
        </li>

        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/boda">
            Boda
          </NavLink>
        </li>

        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/fiestas-infantiles">
            Fiestas infantiles
          </NavLink>
        </li>

        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/primera-comunion">
            Primera comunión
          </NavLink>
        </li>

        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/xv-años">
            XV años
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/dias-de-las-madres">
            Día de las madres
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/recuerdos-navidenos">
            Detalles Navideños
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink className="text-white" to="/productos">
            Todas las categorías
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RecuerdosBar;
