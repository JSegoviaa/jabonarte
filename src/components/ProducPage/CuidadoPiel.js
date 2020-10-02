import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Productos from './Productos';

const CuidadoPiel = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cuidado de la piel';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="mt-5 text-center ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <NavLink to="/arcillas">Arcillas</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/jabones">Jabones</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10">
            <Productos />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CuidadoPiel;
