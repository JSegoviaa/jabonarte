import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

//Componente del cursosPage
import LightSpeed from 'react-reveal/LightSpeed';
import Cursos from '../components/Cursos/Cursos';
import CursosBar from '../components/Cursos/CursosBar';

const CursosPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Jabonarte"
          content="Jabones artesanales 100% origen natural, biodegradables e hipoalergénicos, ideal para recuerdos de tus eventos sociales o detalles en fechas especiales"
        />
        <title>Jabonarte | Cursos</title>
      </Helmet>

      <Container>
        <Row>
          <Col md={2}>
            <LightSpeed left>
              <CursosBar />
            </LightSpeed>
          </Col>
          <Col md={10}>
            <LightSpeed right>
              <Cursos value="cursos" />
            </LightSpeed>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CursosPage;
