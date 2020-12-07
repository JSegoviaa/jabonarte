import React, { useEffect } from 'react';
import ProductList from '../../ProductList';

const MicasPerladas = ({ history }) => {
  useEffect(() => {
    document.title = 'Jabonarte | Micas Perladas';
  }, []);
  const handleReturn = () => {
    history.goBack();
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            {' '}
            <button
              onClick={handleReturn}
              className="btn btn-primary btn-block mt-4"
            >
              Regresar a la página anterior
            </button>
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
