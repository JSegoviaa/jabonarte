import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ProductNavResList = ({ categoria }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <p
        onClick={() => setOpen(!open)}
        className="pt-3 pb-1 text-white text-center"
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {categoria.titulo}
      </p>
      <Collapse in={open}>
        <div className="bg-white text-center">
          {categoria.subcategorias.map((subcategoria) => (
            <div key={subcategoria.id}>
              <NavLink
                onClick={() => setOpen(!open)}
                to={`/productos/${categoria.url}/${subcategoria.url}`}
                className="color-primary"
              >
                {subcategoria.titulo}
              </NavLink>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
};

export default ProductNavResList;
