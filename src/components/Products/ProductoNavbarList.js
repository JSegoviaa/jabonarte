import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductoNavbarList = ({ categoria }) => {
  return (
    <NavDropdown title={categoria.titulo} className="z-index">
      {categoria.subcategorias.map((subcategoria) => (
        <NavDropdown.Item key={subcategoria.id} className="text-center">
          <LinkContainer
            to={`/productos/${categoria.url}/${subcategoria.url}`}
            className="color-primary"
          >
            <p>{subcategoria.titulo}</p>
          </LinkContainer>
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default ProductoNavbarList;
