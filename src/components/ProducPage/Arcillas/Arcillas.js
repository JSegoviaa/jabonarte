import React, { useEffect } from 'react';
import CuidadoPielBar from '../CuidadoPielBar';
import ProductList from '../ProductList';

const Arcillas = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Arcillas';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <CuidadoPielBar />
          </div>
          <div className="col-md">
            <h1>Arcillas</h1>
            <hr />
            <ProductList type="Arcillas" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Arcillas;
