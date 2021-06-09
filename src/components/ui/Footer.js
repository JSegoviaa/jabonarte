import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import AvisoPrivacidad from './AvisoPrivacidad';

const Footer = () => {
  return (
    <footer className="flex-footer">
      <Container>
        <Row className="justify-content-center">
          <div className="col-10 text-center"></div>
        </Row>
        <Fade bottom>
          <div className="row icons justify-content-center color1 f-sizeXBig mt-4">
            <a className="a" href="https://facebook.com/jabonarteMerida/">
              <i className="fab fa-facebook fa-2x ml-2"></i>
            </a>
            <a className="a" href="https://instagram.com/jabon_artee/">
              <i className="fab fa-instagram fa-2x ml-2"></i>
            </a>
            <a
              className="a"
              href={`https://api.whatsapp.com/send?phone=${process.env.REACT_APP_NUMERO_TELEFONICO}&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20producto`}
            >
              <i className="fab fa-whatsapp fa-2x ml-2"></i>
            </a>
          </div>
          <div className="row color1 justify-content-center mb-3">
            Mérida, Yucatán, México.
          </div>
        </Fade>
        <div className="row justify-content-center mb-4 a">
          <AvisoPrivacidad />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
