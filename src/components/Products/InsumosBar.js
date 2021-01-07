import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const InsumosBar = () => {
  return (
    <Nav
      className="justify-content-center shadow-sm bg-jabon row text-center"
      activeKey="/home"
    >
      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/aceite-esencial" className="text-white">
            Aceite esencial
          </NavLink>
        </Nav.Item>
      </div>

      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/base-glicerina" className=" text-white">
            Base de glicerina
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/carbon-activado" className=" text-white">
            Carbón activado
          </NavLink>
        </Nav.Item>
      </div>

      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/colorante-hidrosoluble" className=" text-white">
            Colorante hidrosoluble
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/fragancias" className=" text-white">
            Fragancias
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/glitter" className=" text-white">
            Glitter
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/micas-perladas" className=" text-white">
            Micas perladas
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/molde-polietileno" className=" text-white">
            Molde polietileno
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/pigmentos-migrantes" className=" text-white">
            Pigmentos no migrantes
          </NavLink>
        </Nav.Item>
      </div>

      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/productos" className=" text-white">
            Regresar
          </NavLink>
        </Nav.Item>
      </div>
    </Nav>

    //     <li className="list-group-item list-group-item-secondary">
    //       <NavLink className="text-white" to="/pigmentos-migrantes">
    //         Pigmentos no migrantes
    //       </NavLink>
    //     </li>
  );
};

export default InsumosBar;
