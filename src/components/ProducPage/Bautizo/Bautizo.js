import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import Sidebar from '../Sidebar';

const Bautizo = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Bautizo';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md">
            <h1>Bautizo</h1>
            <hr />
            <ProductList type="Bautizo" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bautizo;
