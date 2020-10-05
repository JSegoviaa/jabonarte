import React, { useEffect } from 'react';
import InsumosBar from '../../InsumosBar';
import ProductList from '../../ProductList';

const Arcillas = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Aceite Esencial';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <InsumosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Aceite Esencial</h1>
            <hr />
            <ProductList type="Aceite esencial" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Arcillas;
