import React, { useEffect } from 'react';
import CuidadoCabelloBar from '../CuidadoCabelloBar';
import ProductList from '../ProductList';

const ChampusPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Champús';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <CuidadoCabelloBar />
          </div>
          <div className="col-md">
            <h1>Champús sólidos</h1>
            <hr />
            <ProductList type="Champú" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChampusPage;
