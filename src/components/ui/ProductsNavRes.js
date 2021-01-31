import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductsNavRes = () => {
  const [piel, setPiel] = useState(false);
  const [cabello, setCabello] = useState(false);
  const [recuerdos, setRecuerdos] = useState(false);
  const [insumos, setInsumos] = useState(false);

  return (
    <>
      <p
        className="py-1 text-white d-flex justify-content-center align-items-center"
        onClick={() => setPiel(!piel)}
        aria-controls="example-collapse-text"
        aria-expanded={piel}
      >
        Cuidado de la piel
      </p>
      <Collapse in={piel}>
        <div className="bg-white text-center">
          <LinkContainer
            onClick={() => setPiel(!piel)}
            to="/arcillas"
            className="color-primary"
          >
            <p>Arcillas</p>
          </LinkContainer>
          <LinkContainer
            onClick={() => setPiel(!piel)}
            to="/balsamo-labial"
            className="color-primary"
          >
            <p>Bálsamo labial</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setPiel(!piel)}
            to="/exfoliante"
            className="color-primary"
          >
            <p>Exfoliante</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setPiel(!piel)}
            to="/jabones"
            className="color-primary"
          >
            <p>Jabones</p>
          </LinkContainer>
        </div>
      </Collapse>

      <p
        className="py-1 text-white d-flex justify-content-center align-items-center"
        onClick={() => setCabello(!cabello)}
        aria-controls="example-collapse-text"
        aria-expanded={cabello}
      >
        Cuidado del cabello
      </p>
      <Collapse in={cabello}>
        <div className="bg-white text-center px-5">
          <LinkContainer
            onClick={() => setCabello(!cabello)}
            to="/acondicionadores"
            className="color-primary"
          >
            <p> Acondicionadores</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setCabello(!cabello)}
            to="/champus"
            className="color-primary"
          >
            <p>Shampoo sólido</p>
          </LinkContainer>
        </div>
      </Collapse>
      <p
        className="py-1 text-white d-flex justify-content-center align-items-center"
        onClick={() => setRecuerdos(!recuerdos)}
        aria-controls="example-collapse-text"
        aria-expanded={recuerdos}
      >
        Recuerdos
      </p>
      <Collapse in={recuerdos}>
        <div className="bg-white text-center">
          <LinkContainer
            onClick={() => setRecuerdos(!recuerdos)}
            to="/baby-shower"
            className="color-primary"
          >
            <p>Baby Shower</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setRecuerdos(!recuerdos)}
            to="/bautizo"
            className="color-primary"
          >
            <p>Bautizo</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setRecuerdos(!recuerdos)}
            to="/boda"
            className="color-primary"
          >
            <p>Boda</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setRecuerdos(!recuerdos)}
            to="/fiestas-infantiles"
            className="color-primary"
          >
            <p>Fiestas infantiles</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setRecuerdos(!recuerdos)}
            to="/primera-comunion"
            className="color-primary"
          >
            <p>Primera comunión</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setRecuerdos(!recuerdos)}
            to="/xv-años"
            className="color-primary"
          >
            <p>XV Años</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setRecuerdos(!recuerdos)}
            to="/dias-de-las-madres"
            className="color-primary"
          >
            <p>Día de las madres</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setRecuerdos(!recuerdos)}
            to="/recuerdos-navidenos"
            className="color-primary"
          >
            <p>Detalles navideños</p>
          </LinkContainer>
        </div>
      </Collapse>
      <p
        className="py-1 text-white d-flex justify-content-center align-items-center"
        onClick={() => setInsumos(!insumos)}
        aria-controls="example-collapse-text"
        aria-expanded={insumos}
      >
        Insumos
      </p>
      <Collapse in={insumos}>
        <div className="bg-white text-center">
          <LinkContainer
            onClick={() => setInsumos(!insumos)}
            to="/aceite-esencial"
            className="color-primary"
          >
            <p>Aceite esencial</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setInsumos(!insumos)}
            to="/base-glicerina"
            className="color-primary"
          >
            <p>Base de glicerina</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setInsumos(!insumos)}
            to="/carbon-activado"
            className="color-primary"
          >
            <p>Carbón activado</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setInsumos(!insumos)}
            to="/colorante-hidrosoluble"
            className="color-primary"
          >
            <p>Colorante hidrosoluble</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setInsumos(!insumos)}
            to="/fragancias"
            className="color-primary"
          >
            <p>Fragancias</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setInsumos(!insumos)}
            to="/glitter"
            className="color-primary"
          >
            <p>Glitter</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setInsumos(!insumos)}
            to="/micas-perladas"
            className="color-primary"
          >
            <p>Micas perladas</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setInsumos(!insumos)}
            to="/molde-de-silicon"
            className="color-primary"
          >
            <p>Molde de Silicón</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setInsumos(!insumos)}
            to="/molde-polietileno"
            className="color-primary"
          >
            <p>Molde polietileno</p>
          </LinkContainer>

          <LinkContainer
            onClick={() => setInsumos(!insumos)}
            to="/pigmentos-migrantes"
            className="color-primary"
          >
            <p>Pigmentos no migrantes</p>
          </LinkContainer>
        </div>
      </Collapse>
    </>
  );
};

export default ProductsNavRes;
