import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import RecuerdosBar from '../RecuerdosBar';

const RecuerdosNavidenos = () => {
  useEffect(() => {
    document.title = 'Jabonarte |  Recuerdos Navideños';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <RecuerdosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Detalles Navideños</h1>
            <hr />
            <ProductList type="Recuerdos Navideños" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecuerdosNavidenos;
