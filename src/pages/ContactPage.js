import React from 'react';
import Fade from 'react-reveal/Fade';
import Form from '../components/Forms/Form';
import { Helmet } from 'react-helmet';
import { Container, Row } from 'react-bootstrap';

import contactoImg from '../assets/contacto-productos.jpg';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Jabonarte"
          content="Jabones artesanales 100% origen natural, biodegradables e hipoalergénicos, ideal para recuerdos de tus eventos sociales o detalles en fechas especiales"
        />
        <title>Jabonarte | Contáctanos</title>
      </Helmet>

      <div className="contact">
        <Container className="text-center">
          <Row>
            <Fade top>
              <h1 className="w-100 f-sizeXXBig sansita mt-3">
                ¿Pedido personalizado?
                <p>¡Contáctanos!</p>
              </h1>
            </Fade>

            <Fade left>
              <div className="col-8 text-center m-auto f-sizeMedium color4 pt-3"></div>
            </Fade>
          </Row>
          <Row className="justify-content-center ">
            <div className="col-8 m-auto"></div>
          </Row>
        </Container>
      </div>
      <div className="img-contacto">
        <div>
          <img
            className="contacto-img img-thumbnail shadow-sm"
            src={contactoImg}
            alt="Jabonarte"
          />
        </div>
      </div>
      <Form />
    </>
  );
};

export default ContactPage;
