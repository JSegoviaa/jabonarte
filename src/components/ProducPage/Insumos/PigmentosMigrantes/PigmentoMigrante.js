import React, { useEffect } from 'react';
import InsumosBar from '../../InsumosBar';
import ProductList from '../../ProductList';

const PigmentoMigrante = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Pigmentos no Migrantes';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <InsumosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Pigmentos no Migrantes</h1>
            <hr />
            <ProductList type="Pigmentos no migrante" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PigmentoMigrante;
