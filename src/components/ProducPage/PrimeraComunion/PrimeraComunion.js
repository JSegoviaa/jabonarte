import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import RecuerdosBar from '../RecuerdosBar';

const PrimeraComunion = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Primera Comunión';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <RecuerdosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Primera comunión</h1>
            <hr />
            <ProductList type="Primera Comunión" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrimeraComunion;
