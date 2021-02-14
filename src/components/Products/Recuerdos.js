import React from 'react';
import { useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { recuerdosList } from '../../data/recuerdosList';

const Recuerdos = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Recuerdos para eventos';
  }, []);

  const recuerdosProd = recuerdosList;

  return (
    <Container>
      <ListGroup variant="flush" className="text-center my-5">
        {recuerdosProd.map(({ id, title }) => (
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

export default Recuerdos;
