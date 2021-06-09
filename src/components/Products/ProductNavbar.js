import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useCategorias } from '../../hooks/useCategorias';
import ProductoNavbarList from './ProductoNavbarList';

const ProductNavbar = () => {
  const { categorias } = useCategorias();

  return (
    <Navbar className="bg-jabon">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="m-auto">
          {categorias &&
            categorias.map((categoria) => (
              <ProductoNavbarList key={categoria.id} categoria={categoria} />
            ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ProductNavbar;
