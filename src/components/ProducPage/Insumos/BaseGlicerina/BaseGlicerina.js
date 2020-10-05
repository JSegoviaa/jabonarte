import React, { useEffect } from 'react';
import InsumosBar from '../../InsumosBar';
import ProductList from '../../ProductList';

const BaseGlicerina = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Base de Glicerina';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <InsumosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Base de Glicerina</h1>
            <hr />
            <ProductList type="Base de Glicerina" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BaseGlicerina;
