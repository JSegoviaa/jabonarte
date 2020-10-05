import React, { useEffect } from 'react';
import InsumosBar from '../../InsumosBar';
import ProductList from '../../ProductList';

const ColorantesHidro = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Colorantes Hidrosolubles';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <InsumosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Colorantes Hidrosolubles</h1>
            <hr />
            <ProductList type="Colorante Hidrosolube" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ColorantesHidro;
