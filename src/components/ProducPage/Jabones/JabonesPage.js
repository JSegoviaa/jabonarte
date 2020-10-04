import React, { useEffect } from 'react';
import CuidadoPielBar from '../CuidadoPielBar';
import ProductList from '../ProductList';

const JabonesPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Jabones';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <CuidadoPielBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Jabones</h1>
            <hr />
            <ProductList type="Jabón" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JabonesPage;
