import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import CuidadoPielBar from '../CuidadoPielBar';

const Exofiliantes = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Exfoliante';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <CuidadoPielBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Exfoliantes</h1>
            <hr />
            <ProductList type="Exfoliantes" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Exofiliantes;
