import React, { useEffect } from 'react';
import InsumosBar from '../../InsumosBar';
import ProductList from '../../ProductList';

const MoldePoli = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Molde Polietileno';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <InsumosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Molde Polietileno</h1>
            <hr />
            <ProductList type="Molde polietileno" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoldePoli;
