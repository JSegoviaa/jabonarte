import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <NavLink to="/acondicionadores">Acondicionadores</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/arcillas">Arcillas</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/champus">Champús</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/jabones">Jabones</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
