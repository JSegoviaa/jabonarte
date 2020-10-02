import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import Sidebar from '../Sidebar';

const Boda = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Boda';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md">
            <h1>Boda</h1>
            <hr />
            <ProductList type="Boda" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Boda;
