import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';

const Testimonials = () => {
  return (
    <Container className="mt-5">
      <h1 className="sansita text-center">
        Lo que dicen nuestros clientes de nosotros
      </h1>
      <Row>
        <Col md={4}>
          <div className="shadow-sm my-4">
            
              <FacebookProvider appId="305679140520">
                <EmbeddedPost href="https://www.facebook.com/anaaldaco.sanchez/posts/183439405910684" />
              </FacebookProvider>
          
          </div>
        </Col>
        <Col md={4}>
          <div className="shadow-sm my-4">
            <FacebookProvider appId="305679140520">
              <EmbeddedPost href="https://www.facebook.com/PoLLiTa205/posts/10155885737753546" />
            </FacebookProvider>
          </div>
        </Col>
        <Col md={4}>
          <div className="shadow-sm my-4">
            <FacebookProvider appId="305679140520">
              <EmbeddedPost href="https://www.facebook.com/emilia.torres.7773/posts/10216532694983556" />
            </FacebookProvider>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
