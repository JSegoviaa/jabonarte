import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="mt-5 text-center">
      <h3>Productos</h3>
      <h4>Filtro</h4>
      <ul>
        <li className="footer-item">
          <NavLink to="/acondicionadores">Acondicionadores</NavLink>
        </li>
        <li className="footer-item">
          <NavLink to="/champus">Champús</NavLink>
        </li>
        <li className="footer-item">
          <NavLink to="/jabones">Jabones</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
