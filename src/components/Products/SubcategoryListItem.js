import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const SubcategoryListItem = ({ subcategoria }) => {
  return (
    <Card className="ms-3 shadow-sm ">
      {subcategoria.miniatura && (
        <div
          className="img-background"
          style={{
            background: `url(${subcategoria.miniatura.formats.small.url}) center center/cover`,
          }}
        />
      )}

      <Card.Body>
        <Card.Title>
          <p className="text-center">{subcategoria.titulo}</p>
        </Card.Title>

        <div className="text-center">
          <NavLink
            to={`/productos/${subcategoria.categoria.url}/${subcategoria.url}`}
          >
            Ver más
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SubcategoryListItem;
