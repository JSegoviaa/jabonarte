import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Jabonarte"
          content="Jabones artesanales 100% origen natural, biodegradables e hipoalergénicos, ideal para recuerdos de tus eventos sociales o detalles en fechas especiales"
        />
        <title>Jabonarte | Acerca de nosotros</title>
      </Helmet>

      <div className="about">
        <Container>
          <Row>
            <Fade top>
              <h1 className="w-100 f-sizeXXBig sansita text-center mt-3">
                ¿Quienes somos?
              </h1>
            </Fade>
          </Row>
          <Row className="pt-5">
            <Fade left>
              <div className="col-lg-6 col-12 about-img back-center back-cover"></div>
            </Fade>
            <Fade right>
              <div className="col-lg-6 col-12 about-desc color1">
                <p className="text-justify">
                  Jabonarte es una empresa dedicada a la producción y
                  comercialización de jabones para el cuidado de la piel y
                  eventos sociales. Empezamos hace 5 años con la venta de
                  jabones como recuerdos para eventos sociales tales como baby
                  shower, bautizo, boda, xv años, etc. Poco a poco hemos ido
                  creciendo como empresa, al día de hoy impartimos cursos para
                  que nuestras alumnas aprendan a elaborar sus propios jabones
                  en casa, así mismo tenemos a la venta insumos para la
                  elaboración de los jabones. <br /> <br />
                  Uno de nuestros principios ha sido siempre el cuidado del
                  medio ambiente, lo que nos ha motivado día a día a inovar en
                  productos para el cuidado de la piel y el cabello, tales cómo
                  shampoos y acondicionadores sólidos, exfoliantes, etc.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </Fade>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutPage;
