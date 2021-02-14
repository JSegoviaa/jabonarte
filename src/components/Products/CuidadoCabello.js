import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { shampooList } from '../../data/shampooList';

const CuidadoCabello = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cuidado del cabello';
  }, []);

  const shampooProd = shampooList;

  return (
    <Container>
      <Row variant="flush" className="text-center my-5">
        {shampooProd.map(({ id, title }) => (
          <Col xs={6} md={3} className="a" key={id}>
            <Card className="my-2">
              <Card.Img src={require(`../../../public/assets/${id}.jpg`)} />
              <NavLink className="a color-primary my-3" to={`./${id}`}>
                {title}
              </NavLink>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CuidadoCabello;
