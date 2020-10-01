import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import Sidebar from '../Sidebar';

const ChampusPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Champús';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md">
            <h1>Champús</h1>
            <hr />
            <ProductList type="Champú" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChampusPage;
