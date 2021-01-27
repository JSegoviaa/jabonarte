import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Navbar className="bg-jabon" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <NavDropdown title="Cuidado de la piel" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="/arcillas" className="color-primary">
                Arcillas
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/balsamo-labial" className="color-primary">
                Bálsamo labial
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/exfoliante" className="color-primary">
                Exfoliante
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/jabones" className="color-primary">
                Jabones
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Cuidado del cabello" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="/acondicionadores" className="color-primary">
                Acondicionadores
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/champus" className="color-primary">
                Shampoo sólido
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Recuerdos" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="/baby-shower" className="color-primary">
                Baby Shower
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/bautizo" className="color-primary">
                Bautizo
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/boda" className="color-primary">
                Boda
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/fiestas-infantiles" className="color-primary">
                Fiestas infantiles
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/primera-comunion" className="color-primary">
                Primera comunión
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/xv-años" className="color-primary">
                XV Años
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/dias-de-las-madres" className="color-primary">
                Día de las madres
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/recuerdos-navidenos" className="color-primary">
                Detalles navideños
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Insumos" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <NavLink to="/aceite-esencial" className="color-primary">
                Aceite esencial
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/base-glicerina" className="color-primary">
                Base de glicerina
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/carbon-activado" className="color-primary">
                Carbón activado
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/colorante-hidrosoluble" className="color-primary">
                Colorante hidrosoluble
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/fragancias" className="color-primary">
                Fragancias
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/glitter" className="color-primary">
                Glitter
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/micas-perladas" className="color-primary">
                Micas perladas
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/molde-polietileno" className="color-primary">
                Molde polietileno
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/pigmentos-migrantes" className="color-primary">
                Pigmentos no migrantes
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;

// <Nav
//   className="justify-content-center shadow-sm bg-jabon row text-center"
//   activeKey="/home"
// >
//   <div className="col-md-3">
//     <Nav.Item className="p-1">
//       <NavLink to="/cuidados-de-la-piel" className="text-white">
//         Cuidado de la piel
//       </NavLink>
//     </Nav.Item>
//   </div>

//   <div className="col-md-3">
//     <Nav.Item className="p-1">
//       <NavLink to="/cuidado-del-cabello" className=" text-white">
//         Cuidado del cabello
//       </NavLink>
//     </Nav.Item>
//   </div>
//   <div className="col-md-3">
//     <Nav.Item className="p-1">
//       <NavLink to="/recuerdos-para-eventos" className=" text-white">
//         Recuerdos
//       </NavLink>
//     </Nav.Item>
//   </div>
//   <div className="col-md-3">
//     <Nav.Item className="p-1">
//       <NavLink to="/insumos" className=" text-white">
//         Insumos
//       </NavLink>
//     </Nav.Item>
//   </div>
// </Nav>
