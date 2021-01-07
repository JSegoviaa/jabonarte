import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Nav
      className="justify-content-center shadow-sm bg-jabon row text-center"
      activeKey="/home"
    >
      <div className="col-md-3">
        <Nav.Item className="p-1">
          <NavLink to="/cuidados-de-la-piel" className="text-white">
            Cuidado de la piel
          </NavLink>
        </Nav.Item>
      </div>

      <div className="col-md-3">
        <Nav.Item className="p-1">
          <NavLink to="/cuidado-del-cabello" className=" text-white">
            Cuidado del cabello
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-3">
        <Nav.Item className="p-1">
          <NavLink to="/recuerdos-para-eventos" className=" text-white">
            Recuerdos
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-3">
        <Nav.Item className="p-1">
          <NavLink to="/insumos" className=" text-white">
            Insumos
          </NavLink>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Sidebar;
