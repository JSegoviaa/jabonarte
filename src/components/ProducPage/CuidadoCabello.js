import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Productos from './Productos';

const CuidadoCabello = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cuidado del cabello';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="mt-5 text-center ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <NavLink to="/acondicionadores">Acondicionadores</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/champus">Champús sólidos</NavLink>
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

export default CuidadoCabello;
