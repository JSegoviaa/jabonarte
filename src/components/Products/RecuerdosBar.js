import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const RecuerdosBar = () => {
  return (
    <Nav
      className="justify-content-center shadow-sm bg-jabon row text-center"
      activeKey="/home"
    >
      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/baby-shower" className="text-white">
            Baby shower
          </NavLink>
        </Nav.Item>
      </div>

      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/bautizo" className=" text-white">
            Bautizo
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/boda" className=" text-white">
            Boda
          </NavLink>
        </Nav.Item>
      </div>

      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/fiestas-infantiles" className=" text-white">
            Fiestas infantiles
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/primera-comunion" className=" text-white">
            Primera comunión
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-1">
        <Nav.Item className="p-1">
          <NavLink to="/xv-años" className=" text-white">
            XV Años
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/dia-de-las-madres" className=" text-white">
            Día de las madres
          </NavLink>
        </Nav.Item>
      </div>
      <div className="col-md-2">
        <Nav.Item className="p-1">
          <NavLink to="/recuerdos-navidenos" className=" text-white">
            Detalles navideños
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
  );
};

export default RecuerdosBar;
