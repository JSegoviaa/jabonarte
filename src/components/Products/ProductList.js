import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { getProductsByType } from '../../selectors/getProductsByType';
import ProductCard from './ProductCard';

const ProductList = ({ type }) => {
  const history = useHistory();

  const productos = getProductsByType(type);

  const handlerToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleReturn = () => {
    history.goBack();
  };
  return (
    <React.Fragment>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-6 col-md-3  mt-4" key={producto.id}>
            <ProductCard {...producto} />
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button onClick={handleReturn} className="m-2">
          Página anterior
        </Button>
        <Button variant="secondary" onClick={handlerToTop} className="m-2">
          Volver hacia arriba
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
