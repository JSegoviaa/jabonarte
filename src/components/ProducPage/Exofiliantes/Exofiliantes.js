import React, { useEffect } from 'react';
import ProductList from '../ProductList';

const Exofiliantes = ({ history }) => {
  useEffect(() => {
    document.title = 'Jabonarte | Exfoliante';
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
            </button>{' '}
          </div>
          <div className="col-md ">
            <h1 className="sansita">Exfoliantes</h1>
            <hr />
            <ProductList type="Exfoliantes" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Exofiliantes;
