import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import CuidadoPielBar from '../CuidadoPielBar';

const BalsamoLabial = () => {
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
            <h1 className="sansita">Balsamo Labial</h1>
            <hr />
            <ProductList type="Bálsamo Labial" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BalsamoLabial;
