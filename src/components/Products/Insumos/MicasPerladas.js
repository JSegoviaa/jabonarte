import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactResponsive from 'react-responsive';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';

const MicasPerladas = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Micas Perladas';
  }, []);

  return (
    <React.Fragment>
      <ReactResponsive minDeviceWidth={992}>
        <Sidebar />
      </ReactResponsive>
      <h1 className="sansita text-center mt-2">Micas perladas</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <ProductList type="Micas perladas" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default MicasPerladas;
