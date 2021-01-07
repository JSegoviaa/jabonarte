import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CuidadoCabelloBar = () => {
  return (
    <Nav
      className="justify-content-center shadow-sm bg-jabon row text-center"
      activeKey="/home"
    >
      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/acondicionadores" className="text-white">
            Acondicionadores
          </NavLink>
        </Nav.Item>
      </div>

      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/champus" className=" text-white">
            Shampoo sólido
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

export default CuidadoCabelloBar;
