import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import Sidebar from '../Sidebar';

const PrimeraComunion = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Primera Comunión';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md">
            <h1>Primera comunión</h1>
            <hr />
            <ProductList type="Primera Comunión" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrimeraComunion;
