import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet';

import DistForm from '../components/Forms/DistForm';

const DistPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Jabonarte"
          content="Jabones artesanales 100% origen natural, biodegradables e hipoalergénicos, ideal para recuerdos de tus eventos sociales o detalles en fechas especiales"
        />
        <title>Jabonarte | Conviértete en distribuidor</title>
      </Helmet>

      <div className="contact">
        <Container>
          <Row>
            <Fade top>
              <h1 className="w-100 f-sizeXXBig text-center sansita">
                Conviértete en distribuidor
              </h1>
            </Fade>
          </Row>
          <Row className="justify-content-center pt-4 pb-4">
            <div className="col-8 m-auto"></div>
          </Row>
        </Container>
      </div>
      <Fade bottom>
        <DistForm />
      </Fade>
    </>
  );
};

export default DistPage;
