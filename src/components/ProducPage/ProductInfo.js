import React, { useEffect } from 'react';
import Rotate from 'react-reveal/Rotate';

import { Redirect, useParams } from 'react-router-dom';
import { getProductsById } from '../../selectors/getProductById';

const ProductInfo = ({ history }) => {
  const baseUrl = window.location.origin;

  useEffect(() => {
    document.title = `Jabonarte | ${title}`;
  });

  const { productoId } = useParams();

  const producto = getProductsById(productoId);

  if (!producto) {
    return <Redirect to="/productos" />;
  }

  const handleReturn = () => {
    history.goBack();
  };
  const {
    id2,
    id3,
    title,
    description,
    price1,
    grams1,
    price2,
    grams2,
    price3,
    grams3,
    price4,
    grams4,
    price5,
    grams5,
    price6,
    grams6,
    price7,
    grams7,
  } = producto;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md">
            <Rotate top left>
              <img
                src={`../../../assets/${productoId}.jpg`}
                className="img-thumbnail"
                alt={title}
              />
            </Rotate>
            {id2 && (
              <Rotate top right>
                <img
                  src={`../../../assets/${id2}.jpg`}
                  className="img-thumbnail"
                  alt={title}
                />
              </Rotate>
            )}
            {id3 && (
              <Rotate top left>
                <img
                  src={`../../../assets/${id3}.jpg`}
                  className="img-thumbnail"
                  alt={title}
                />
              </Rotate>
            )}
          </div>

          <Rotate top right>
            <div className="col-md">
              <h3 className="sansita">{title}</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{description}</li>

                <li className="list-group-item">
                  {grams1} - {price1}
                </li>
                {price2 && (
                  <li className="list-group-item">
                    {grams2} - {price2}
                  </li>
                )}
                {price3 && (
                  <li className="list-group-item">
                    {grams3} - {price3}
                  </li>
                )}
                {price4 && (
                  <li className="list-group-item">
                    {grams4} - {price4}
                  </li>
                )}
                {price5 && (
                  <li className="list-group-item">
                    {grams5} - {price5}
                  </li>
                )}
                {price6 && (
                  <li className="list-group-item">
                    {grams6} - {price6}
                  </li>
                )}
                {price7 && (
                  <li className="list-group-item">
                    {grams7} - {price7}
                  </li>
                )}
              </ul>
              <div
                className="fb-comments"
                data-href={`${baseUrl}/${productoId}`}
                data-numposts="5"
                data-width=""
              ></div>
              <button onClick={handleReturn} className="btn btn-primary">
                Regresar a la página anterior
              </button>
            </div>
          </Rotate>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductInfo;
