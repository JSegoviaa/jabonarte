import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="mt-5 text-center">
      <ul className="list-group list-group-flush sansita rounded-lg">
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/cuidados-de-la-piel">
            Cuidado de la piel
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/cuidado-del-cabello">
            Cuidado del cabello
          </NavLink>
        </li>

        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/recuerdos-para-eventos">
            Recuerdos para eventos
          </NavLink>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/insumos">
            Insumos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
