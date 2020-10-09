import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <NavLink to="/cuidados-de-la-piel">Cuidado de la piel</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/cuidado-del-cabello">Cuidado del cabello</NavLink>
        </li>
      
        <li className="list-group-item">
          <NavLink to="/recuerdos-para-eventos">Recuerdos para eventos</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/insumos">Insumos</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
