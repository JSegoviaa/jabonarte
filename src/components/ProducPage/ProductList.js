import React from 'react';

import { getProductsByType } from '../../selectors/getProductsByType';
import ProductCard from './ProductCard';

const ProductList = ({ type }) => {
  const productos = getProductsByType(type);

  return (
    <div className="card-columns">
      {productos.map((producto) => (
        <ProductCard key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ProductList;
