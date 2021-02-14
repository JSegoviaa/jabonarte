import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { insumosList } from '../../data/insumosList';

const Insumos = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Insumos';
  }, []);

  const insumosProd = insumosList;

  return (
    <Container>
      <Row variant="flush" className="text-center my-5">
        {insumosProd.map(({ id, title }) => (
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

export default Insumos;
