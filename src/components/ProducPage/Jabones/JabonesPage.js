import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import Sidebar from '../Sidebar';

const JabonesPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Jabones';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md">
            <h1>Jabones</h1>
            <hr />
            <ProductList type="Jabón" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JabonesPage;
