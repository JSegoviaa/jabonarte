import React from 'react';

import { getProductsByType } from '../../selectors/getProductsByType';
import ProductCard from './ProductCard';

const ProductList = ({ type }) => {
  const productos = getProductsByType(type);

  const handlerToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <React.Fragment>
      <div className="card-columns">
        {productos.map((producto) => (
          <ProductCard key={producto.id} {...producto} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-secondary" onClick={handlerToTop}>
          Volver hacia arriba
        </button>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
