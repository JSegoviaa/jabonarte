import React, { useEffect } from 'react';
import InsumosBar from '../../InsumosBar';
import ProductList from '../../ProductList';

const Fragancias = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Fragancias';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <InsumosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Fragancias</h1>
            <hr />
            <ProductList type="Fragancias" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Fragancias;
