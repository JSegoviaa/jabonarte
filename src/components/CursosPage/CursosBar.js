import React from 'react';
import { NavLink } from 'react-router-dom';

const CursosBar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <NavLink to="/jabones-artesanales">Jabones Artesanales</NavLink>
        </li>
        {/* <li className="list-group-item">
          <NavLink to="/insumos">Insumos</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default CursosBar;
