import React from 'react';
import { useCategorias } from '../../hooks/useCategorias';
import ProductNavResList from './ProductNavResList';

const ProductsNavRes = () => {
  const { categorias } = useCategorias();

  return (
    <>
      {categorias &&
        categorias.map((categoria) => (
          <ProductNavResList key={categoria.id} categoria={categoria} />
        ))}
    </>
  );
};

export default ProductsNavRes;
