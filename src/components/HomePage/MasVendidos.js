import React from 'react';
import Fade from 'react-reveal/Fade';
import MasVendidosCard from './MasVendidosCard';
import masVendidos from '../../assets/mas-vendidos.jpg';
import masVendidos2 from '../../assets/mas-vendidos-2.jpg';
import masVendidos3 from '../../assets/mas-vendidos-3.jpg';

const MasVendidos = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <Fade top>
          <h1 className="w-100 f-sizeXXBig sansita">Los más vendidos</h1>
        </Fade>
      </div>

      <div className="row mt-4">
        <Fade left>
          <div className="col-md-4 mt-4">
            <MasVendidosCard
              img={masVendidos}
              title="Exfoliante Carbón activado"
              to="/exfoliante-carbon-activado"
            />
          </div>
        </Fade>
        <Fade top>
          <div className="col-md-4 mt-4">
            <MasVendidosCard
              img={masVendidos2}
              title="Recuerdos para el baby shower 'Pie de bebé' "
              to="/baby-shower-pie-bebe"
            />
          </div>
        </Fade>
        <Fade right>
          <div className="col-md-4 mt-4">
            <MasVendidosCard
              img={masVendidos3}
              title="Shampoo y Acondicionador sólido Menta-Romero"
              to="/acondicionador-menta-romero"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MasVendidos;
