import React, { useState } from 'react';
import { Button, Collapse, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductsNavRes = () => {
  const [piel, setPiel] = useState(false);
  const [cabello, setCabello] = useState(false);
  const [recuerdos, setRecuerdos] = useState(false);
  const [insumos, setInsumos] = useState(false);

  return (
    <Navbar className="bg-jabon" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Button
            className="py-2"
            onClick={() => setPiel(!piel)}
            aria-controls="example-collapse-text"
            aria-expanded={piel}
          >
            Cuidado de la piel
          </Button>
          <Collapse in={piel}>
            <div className="bg-white rounded text-center">
              <LinkContainer to="/arcillas" className="color-primary">
                <p>Arcillas</p>
              </LinkContainer>
              <LinkContainer to="/balsamo-labial" className="color-primary">
                <p>Bálsamo labial</p>
              </LinkContainer>

              <LinkContainer to="/exfoliante" className="color-primary">
                <p>Exfoliante</p>
              </LinkContainer>

              <LinkContainer to="/jabones" className="color-primary">
                <p>Jabones</p>
              </LinkContainer>
            </div>
          </Collapse>

          <Button
            className="py-2"
            onClick={() => setCabello(!cabello)}
            aria-controls="example-collapse-text"
            aria-expanded={cabello}
          >
            Cuidado del cabello
          </Button>
          <Collapse in={cabello}>
            <div className="bg-white rounded text-center">
              <LinkContainer to="/acondicionadores" className="color-primary">
                <p> Acondicionadores</p>
              </LinkContainer>

              <LinkContainer to="/champus" className="color-primary">
                <p>Shampoo sólido</p>
              </LinkContainer>
            </div>
          </Collapse>
          <Button
            className="py-2"
            onClick={() => setRecuerdos(!recuerdos)}
            aria-controls="example-collapse-text"
            aria-expanded={recuerdos}
          >
            Recuerdos
          </Button>
          <Collapse in={recuerdos}>
            <div className="bg-white rounded text-center">
              <LinkContainer to="/baby-shower" className="color-primary">
                <p>Baby Shower</p>
              </LinkContainer>

              <LinkContainer to="/bautizo" className="color-primary">
                <p>Bautizo</p>
              </LinkContainer>

              <LinkContainer to="/boda" className="color-primary">
                <p>Boda</p>
              </LinkContainer>

              <LinkContainer to="/fiestas-infantiles" className="color-primary">
                <p>Fiestas infantiles</p>
              </LinkContainer>

              <LinkContainer to="/primera-comunion" className="color-primary">
                <p>Primera comunión</p>
              </LinkContainer>

              <LinkContainer to="/xv-años" className="color-primary">
                <p>XV Años</p>
              </LinkContainer>

              <LinkContainer to="/dias-de-las-madres" className="color-primary">
                <p>Día de las madres</p>
              </LinkContainer>

              <LinkContainer
                to="/recuerdos-navidenos"
                className="color-primary"
              >
                <p>Detalles navideños</p>
              </LinkContainer>
            </div>
          </Collapse>
          <Button
            className="py-2"
            onClick={() => setInsumos(!insumos)}
            aria-controls="example-collapse-text"
            aria-expanded={insumos}
          >
            Insumos
          </Button>
          <Collapse in={insumos}>
            <div className="bg-white rounded text-center">
              <LinkContainer to="/aceite-esencial" className="color-primary">
                <p>Aceite esencial</p>
              </LinkContainer>

              <LinkContainer to="/base-glicerina" className="color-primary">
                <p>Base de glicerina</p>
              </LinkContainer>

              <LinkContainer to="/carbon-activado" className="color-primary">
                <p>Carbón activado</p>
              </LinkContainer>

              <LinkContainer
                to="/colorante-hidrosoluble"
                className="color-primary"
              >
                <p>Colorante hidrosoluble</p>
              </LinkContainer>

              <LinkContainer to="/fragancias" className="color-primary">
                <p>Fragancias</p>
              </LinkContainer>

              <LinkContainer to="/glitter" className="color-primary">
                <p>Glitter</p>
              </LinkContainer>

              <LinkContainer to="/micas-perladas" className="color-primary">
                <p>Micas perladas</p>
              </LinkContainer>

              <LinkContainer to="/molde-polietileno" className="color-primary">
                <p>Molde polietileno</p>
              </LinkContainer>

              <LinkContainer
                to="/pigmentos-migrantes"
                className="color-primary"
              >
                <p>Pigmentos no migrantes</p>
              </LinkContainer>
            </div>
          </Collapse>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ProductsNavRes;
