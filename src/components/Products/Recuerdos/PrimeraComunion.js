import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactResponsive from 'react-responsive';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';

const PrimeraComunion = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Primera Comunión';
  }, []);

  return (
    <React.Fragment>
      <ReactResponsive minDeviceWidth={992}>
        <Sidebar />
      </ReactResponsive>
      <h1 className="sansita text-center mt-2">Primera Comunión</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <ProductList type="Primera Comunión" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default PrimeraComunion;
