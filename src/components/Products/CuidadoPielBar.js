import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CuidadoPielBar = () => {
  return (
    <Nav
      className="justify-content-center shadow-sm bg-jabon row text-center"
      activeKey="/home"
    >
      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/arcillas" className="text-white">
            Arcillas
          </NavLink>
        </Nav.Item>
      </div>

      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/balsamo-labial" className=" text-white">
            Bálsamo labial
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/exfoliante" className=" text-white">
            Exfoliante
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/jabones" className=" text-white">
            Jabones
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/productos" className=" text-white">
            Regresar
          </NavLink>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default CuidadoPielBar;
