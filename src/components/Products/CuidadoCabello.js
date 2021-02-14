import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { shampooList } from '../../data/shampooList';
import img from '../../assets/acondicionadores.jpg';

const CuidadoCabello = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cuidado del cabello';
  }, []);

  const shampooProd = shampooList;

  return (
    <Container>
      <Row className="text-center">
        {shampooProd.map(({ id, title }) => (
          <Col md={3} xs={6} className="mt-5" key={id}>
            <Card>
              <Card.Img src={img} />
              <Card.Title>{title}</Card.Title>
              <NavLink className="color-primary a" to={`/${id}`}>
                Ir a todos los productos de {title}
              </NavLink>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CuidadoCabello;
