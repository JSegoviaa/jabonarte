import React, { useEffect } from 'react';
import Rotate from 'react-reveal/Rotate';

import { Redirect, useParams } from 'react-router-dom';
import { getProductsById } from '../../selectors/getProductById';

const ProductInfo = ({ history }) => {
  useEffect(() => {
    document.title = `Jabonarte | ${title}`;
  }, []);

  const { productoId } = useParams();

  const producto = getProductsById(productoId);

  if (!producto) {
    return <Redirect to="/productos" />;
  }

  const handleReturn = () => {
    history.goBack();
  };
  const {
    title,
    description,
    price1,
    grams1,
    price2,
    grams2,
    price3,
    grams3,
  } = producto;

  return (
    <div className="container">
      <div className="row mt-5">
        <Rotate top left>
          <div className="col-4">
            <img
              src={`../../../assets/${productoId}.jpg`}
              className="img-thumbnail"
              alt={title}
            />
          </div>
        </Rotate>
        <Rotate top right>
          <div className="col-8">
            <h3>{title}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{description}</li>
              <li className="list-group-item">
                {grams1} - {price1}
              </li>
              <li className="list-group-item">
                {grams2} - {price2}
              </li>
              <li className="list-group-item">
                {grams3} - {price3}
              </li>
            </ul>
            <button onClick={handleReturn} className="btn btn-primary">
              Regresar a la página anterior
            </button>
          </div>
        </Rotate>
      </div>
    </div>
  );
};

export default ProductInfo;
