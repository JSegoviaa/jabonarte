import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import ProductsNavRes from './ProductsNavRes';

const ProductosNav = () => {
  const [productos, setProductos] = useState(false);
  return (
    <>
      <p
        className="color-primary mt-2  ml-3"
        onClick={() => setProductos(!productos)}
        aria-controls="example-collapse-text"
        aria-expanded={productos}
      >
        Productos
      </p>
      <Collapse in={productos}>
        <div className="bg-jabon rounded text-center ">
          <ProductsNavRes />
        </div>
      </Collapse>
    </>
  );
};

export default ProductosNav;
