import React, { useEffect } from 'react';
import InsumosBar from '../../InsumosBar';
import ProductList from '../../ProductList';

const MicasPerladas = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Micas Perladas';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <InsumosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Micas Perladas</h1>
            <hr />
            <ProductList type="Micas perladas" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MicasPerladas;
