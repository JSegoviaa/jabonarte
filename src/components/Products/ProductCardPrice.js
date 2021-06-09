import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

const ProductCardPrice = ({ productos }) => {
  return (
    <Card>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col>Precio:</Col>
            <Col>${productos.precio}MXN</Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ProductCardPrice;
