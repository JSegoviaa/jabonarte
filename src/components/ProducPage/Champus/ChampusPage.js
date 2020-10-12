import React, { useEffect } from 'react';
import CuidadoCabelloBar from '../CuidadoCabelloBar';
import ProductList from '../ProductList';

const ChampusPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Shampoo sólido';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <CuidadoCabelloBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Shampoo sólido</h1>
            <hr />
            <ProductList type="Champú" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChampusPage;
