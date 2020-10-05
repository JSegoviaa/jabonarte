import React, { useEffect } from 'react';
import InsumosBar from '../../InsumosBar';
import ProductList from '../../ProductList';

const Glitter = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Glitter';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <InsumosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Glitter</h1>
            <hr />
            <ProductList type="Glitter" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Glitter;
