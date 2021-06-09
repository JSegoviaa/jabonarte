import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import ProductCardPrice from './ProductCardPrice';

import ProductDescription from './ProductDescription';
import ProductoDetaulCarousel from './ProductoDetaulCarousel';

const ProductDetail = ({ productos }) => {
  return (
    <Row className="py-5">
      <Col md={6}>
        <ProductoDetaulCarousel productos={productos} />
      </Col>

      <Col md={6} className="text-md-left text-center">
        <ProductDescription productos={productos} />
      </Col>

      {/* <Col md={3} className="text-center">
        <ProductCardPrice productos={productos} />
      </Col> */}
    </Row>
  );
};

export default ProductDetail;
