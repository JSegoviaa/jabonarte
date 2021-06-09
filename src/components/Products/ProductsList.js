import React from 'react';
import { Col } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';

import ProductoListItem from './ProductoListItem';

const ProductsList = ({ producto, subcategorias }) => {
  return (
    <Col xs={6} md={3} className="my-2">
      <Flip left>
        <ProductoListItem producto={producto} subcategorias={subcategorias} />
      </Flip>
    </Col>
  );
};

export default ProductsList;
