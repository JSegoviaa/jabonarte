import React from 'react';
import { NavLink } from 'react-router-dom';

const CursosBar = () => {
  return (
    <div className="mt-5 text-center ">
      <ul className="list-group list-group-flush sansita rounded-lg">
        <li className="list-group-item list-group-item-secondary">
          <NavLink className="text-white" to="/jabones-artesanales">
            Jabones Artesanales
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CursosBar;
