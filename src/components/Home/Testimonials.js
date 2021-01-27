import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import Fade from 'react-reveal/Fade';

const Testimonials = () => {
  return (
    <Container className="mt-5">
      <Fade top>
        <h1 className="sansita text-center">
          Lo que dicen nuestros clientes de nosotros
        </h1>
      </Fade>

      <Row className="">
        <Col md={6}>
          <Fade left>
            <div className="shadow-sm my-4 a">
              <FacebookProvider appId="305679140520">
                <EmbeddedPost href="https://www.facebook.com/anaaldaco.sanchez/posts/183439405910684" />
              </FacebookProvider>
            </div>
          </Fade>
        </Col>
        <Col md={6} className="a">
          <Fade right>
            <div className="shadow-sm my-4 a">
              <FacebookProvider appId="305679140520">
                <EmbeddedPost href="https://www.facebook.com/PoLLiTa205/posts/10155885737753546" />
              </FacebookProvider>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
