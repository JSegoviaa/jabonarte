import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Review = ({ productos }) => {
  return (
    <>
      {productos &&
        productos.reviews.map((review) => (
          <ListGroup key={review.id} variant="flush">
            <ListGroup.Item>
              <h3>{review.nombre}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{review.comentario}</p>
            </ListGroup.Item>
          </ListGroup>
        ))}
    </>
  );
};

export default Review;
