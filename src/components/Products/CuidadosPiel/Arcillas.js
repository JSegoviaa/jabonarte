import React, { useEffect } from 'react';
import ProductList from '../ProductList';

const Arcillas = ({ history }) => {
  useEffect(() => {
    document.title = 'Jabonarte | Arcillas';
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
            <h1 className="sansita">Arcillas</h1>
            <hr />
            <ProductList type="Arcillas" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Arcillas;
