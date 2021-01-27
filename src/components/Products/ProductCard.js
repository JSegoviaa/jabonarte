import React from 'react';
import Flip from 'react-reveal/Flip';

import { NavLink } from 'react-router-dom';

const ProductCard = ({
  id,
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
}) => {
  return (
    <Flip left>
      <div className="card ms-3 shadow-sm" style={{ maxWidth: '540px' }}>
        <div>
          <div>
            <img className="card-img" src={`./assets/${id}.jpg`} alt={title} />
          </div>
          <div>
            <div className="card-body">
              <h5 className="card-title text-center">{title} </h5>
              <p className="card-text">{description}</p>
              <p className="card-text text-center">
                {price1} - {grams1}
              </p>
              {price2 && (
                <p className="text-center">
                  {price2} - {grams2}
                </p>
              )}
              {price3 && (
                <p className="text-center">
                  {price3} - {grams3}
                </p>
              )}
              {price4 && (
                <p className="text-center">
                  {price4} - {grams4}
                </p>
              )}
              {price5 && (
                <p className="text-center">
                  {price5} - {grams5}
                </p>
              )}
              {price6 && (
                <p className="text-center">
                  {price6} - {grams6}
                </p>
              )}
              {price7 && (
                <p className="text-center">
                  {price7} - {grams7}
                </p>
              )}
              <NavLink to={`./${id}`} className="btn btn-primary btn-block">
                Más información
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default ProductCard;
