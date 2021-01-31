import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactResponsive from 'react-responsive';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';

const MoldePoli = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Molde Polietileno';
  }, []);

  return (
    <React.Fragment>
      <ReactResponsive minDeviceWidth={992}>
        <Sidebar />
      </ReactResponsive>
      <h1 className="sansita text-center mt-2">Molde de Polietileno</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <ProductList type="Molde polietileno" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default MoldePoli;
