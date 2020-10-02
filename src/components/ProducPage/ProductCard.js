import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductCard = ({
  id,
  type,
  title,
  description,
  price1,
  grams1,
  price2,
  grams2,
  price3,
  grams3,
}) => {
  return (
    <div className="card ms-3" style={{ maxWidth: '540px' }}>
      <div className="">
        <div className="">
          {/* <img src={`./assets/${id}.jpg`} alt=""/> */}
          <img src={`./assets/about.jpg`} alt={title} className="card-img" />
        </div>
        <div className="">
          <div className="card-body text-center">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <NavLink to={`./${id}`} className="btn btn-primary">
              Más información
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
