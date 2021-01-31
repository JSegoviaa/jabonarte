import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactResponsive from 'react-responsive';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';

const AcondicionadoresPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Acondicionador sólido';
  }, []);

  return (
    <React.Fragment>
      <ReactResponsive minDeviceWidth={992}>
        <Sidebar />
      </ReactResponsive>
      <h1 className="sansita text-center mt-2">Acondicionador Sólido</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <ProductList type="Acondicionador" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AcondicionadoresPage;
