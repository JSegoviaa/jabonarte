import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Productos from './Productos';

const Recuerdos = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Recuerdos para eventos';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="mt-5 text-center ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <NavLink to="/bautizo">Bautizo</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/baby-shower">Baby shower</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/boda">Boda</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/fiestas-infantiles">Fiestas infantiles</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/primera-comunion">Primera comunicón</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink to="/xv-años">XV años</NavLink>
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

export default Recuerdos;
