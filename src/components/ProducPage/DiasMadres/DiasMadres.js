import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import RecuerdosBar from '../RecuerdosBar';

const FiestasInfantiles = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Día de las madres';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <RecuerdosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Día de las madres</h1>
            <hr />
            <ProductList type="Días de las madres" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FiestasInfantiles;
