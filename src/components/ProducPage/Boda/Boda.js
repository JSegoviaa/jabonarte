import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import RecuerdosBar from '../RecuerdosBar';

const Boda = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Boda';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <RecuerdosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Boda</h1>
            <hr />
            <ProductList type="Boda" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Boda;
