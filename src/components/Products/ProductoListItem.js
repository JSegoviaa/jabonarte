import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ProductoListItem = ({ producto, subcategorias }) => {
  return (
    <>
      <Card className="ms-3 shadow-sm">
        {producto.miniatura && (
          <div
            className="img-background"
            style={{
              background: `url(${producto.miniatura.formats.small.url}) center center/cover`,
            }}
          />
        )}
        <Card.Body>
          <Card.Title>
            <p className="text-center">{producto.titulo}</p>
          </Card.Title>
          <div className="text-center fs-13">
            <p>
              ${producto.precio}MXN {producto.gramos && `- ${producto.gramos}g`}
              {producto.ml && `- ${producto.ml}ml`}
            </p>
          </div>
          <div className="text-center">
            <NavLink
              to={`/productos/${subcategorias.categoria.url}/${producto.subcategorias[0].url}/${producto.url}`}
            >
              Ver más
            </NavLink>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductoListItem;
