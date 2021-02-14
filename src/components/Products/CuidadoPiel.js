import React, { useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { jabonesList } from '../../data/jabones';

const CuidadoPiel = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cuidado de la piel';
  }, []);

  const jabonesProd = jabonesList;

  return (
    <Container>
      <ListGroup variant="flush" className="text-center my-5">
        {jabonesProd.map(({ id, title }) => (
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

export default CuidadoPiel;
