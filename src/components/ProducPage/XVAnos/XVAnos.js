import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import Sidebar from '../Sidebar';

const XVAnos = () => {
  useEffect(() => {
    document.title = 'Jabonarte |  XV Años';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md">
            <h1>XV Años</h1>
            <hr />
            <ProductList type="XV años" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default XVAnos;
