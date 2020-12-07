import React, { useEffect } from 'react';
import ProductList from '../ProductList';

const Bautizo = ({ history }) => {
  useEffect(() => {
    document.title = 'Jabonarte | Bautizo';
  }, []);
  const handleReturn = () => {
    history.goBack();
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <button
              onClick={handleReturn}
              className="btn btn-primary btn-block mt-4"
            >
              Regresar a la página anterior
            </button>
          </div>
          <div className="col-md ">
            <h1 className="sansita">Bautizo</h1>
            <hr />
            <ProductList type="Bautizo" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bautizo;
