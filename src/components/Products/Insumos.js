import React, { useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { insumosList } from '../../data/insumosList';

const Insumos = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Insumos';
  }, []);

  const insumosProd = insumosList;

  return (
    <Container>
      <ListGroup variant="flush" className="text-center my-5">
        {insumosProd.map(({ id, title }) => (
          <ListGroup.Item className="a" key={id}>
            <NavLink className="a color-primary" to={`./${id}`}>
              {title}
            </NavLink>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Insumos;
