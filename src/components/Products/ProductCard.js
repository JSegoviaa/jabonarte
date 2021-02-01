import React from 'react';
import Flip from 'react-reveal/Flip';

import { NavLink } from 'react-router-dom';

const ProductCard = ({ id, title, price1, grams1, price2, grams2 }) => {
  return (
    <Flip left>
      <div className="card ms-3 shadow-sm">
        <div>
          <div>
            <img className="card-img" src={`./assets/${id}.jpg`} alt={title} />
          </div>
          <div>
            <div className="card-body">
              <h6 className="card-title text-center">{title} </h6>
              <p className="card-text text-center fs-13">
                {price1} - {grams1}
              </p>
              {price2 && (
                <p className="text-center fs-13">
                  {price2} - {grams2}
                </p>
              )}

              <div className="text-center">
                <NavLink to={`./${id}`} className="btn btn-primary">
                  Más información
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default ProductCard;
