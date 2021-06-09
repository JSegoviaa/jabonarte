import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const CategoryListItem = ({ categoria }) => {
  return (
    <Card className="ms-3 shadow-sm">
      {categoria.miniatura && (
        <div
          className="img-background"
          style={{
            background: `url(${categoria.miniatura.formats.small.url}) center center/cover`,
          }}
        />
      )}

      <Card.Body>
        <Card.Title>
          <p className="text-center">{categoria.titulo}</p>
        </Card.Title>

        <div className="text-center">
          <NavLink
            to={`/productos/${categoria.url}`}
            className="btn btn-primary"
          >
            Más información
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CategoryListItem;
