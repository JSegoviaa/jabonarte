import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { recuerdosList } from '../../data/recuerdosList';

const Recuerdos = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Recuerdos para eventos';
  }, []);

  const recuerdosProd = recuerdosList;

  return (
    <Container>
      <Row variant="flush" className="text-center my-5">
        {recuerdosProd.map(({ id, title }) => (
          <Col xs={6} md={3} className="a" key={id}>
            <Card className="my-2">
              <Card.Img src={require(`../../assets/${id}.jpg`)} />
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

export default Recuerdos;
