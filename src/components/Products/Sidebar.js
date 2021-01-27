import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
  return (
    <Navbar className="bg-jabon" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <NavDropdown title="Cuidado de la piel" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <LinkContainer to="/arcillas" className="color-primary">
                <p>Arcillas</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/balsamo-labial" className="color-primary">
                <p>Bálsamo labial</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/exfoliante" className="color-primary">
                <p>Exfoliante</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/jabones" className="color-primary">
                <p>Jabones</p>
              </LinkContainer>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Cuidado del cabello" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <LinkContainer to="/acondicionadores" className="color-primary">
                <p> Acondicionadores</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/champus" className="color-primary">
                <p>Shampoo sólido</p>
              </LinkContainer>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Recuerdos" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <LinkContainer to="/baby-shower" className="color-primary">
                <p>Baby Shower</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/bautizo" className="color-primary">
                <p>Bautizo</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/boda" className="color-primary">
                <p>Boda</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/fiestas-infantiles" className="color-primary">
                <p>Fiestas infantiles</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/primera-comunion" className="color-primary">
                <p>Primera comunión</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/xv-años" className="color-primary">
                <p>XV Años</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/dias-de-las-madres" className="color-primary">
                <p>Día de las madres</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer
                to="/recuerdos-navidenos"
                className="color-primary"
              >
                <p>Detalles navideños</p>
              </LinkContainer>
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Insumos" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <LinkContainer to="/aceite-esencial" className="color-primary">
                <p>Aceite esencial</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/base-glicerina" className="color-primary">
                <p>Base de glicerina</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/carbon-activado" className="color-primary">
                <p>Carbón activado</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer
                to="/colorante-hidrosoluble"
                className="color-primary"
              >
                <p>Colorante hidrosoluble</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/fragancias" className="color-primary">
                <p>Fragancias</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/glitter" className="color-primary">
                <p>Glitter</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/micas-perladas" className="color-primary">
                <p>Micas perladas</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer to="/molde-polietileno" className="color-primary">
                <p>Molde polietileno</p>
              </LinkContainer>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LinkContainer
                to="/pigmentos-migrantes"
                className="color-primary"
              >
                <p>Pigmentos no migrantes</p>
              </LinkContainer>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
