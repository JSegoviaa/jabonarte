import React, { useEffect } from 'react';
import CuidadoPielBar from '../CuidadoPielBar';
import ProductList from '../ProductList';

const Exofiliantes = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Bálsamo Labial';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <CuidadoPielBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Exofiliantes</h1>
            <hr />
            <ProductList type="Exofiliantes" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Exofiliantes;
