import React, { useEffect } from 'react';
import ProductList from '../ProductList';
import Sidebar from '../Sidebar';

const AcondicionadoresPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Acondicionadores';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md">
            <h1>Acondicionadores</h1>
            <hr />
            <ProductList type="Acondicionador" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AcondicionadoresPage;
