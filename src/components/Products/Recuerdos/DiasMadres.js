import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactResponsive from 'react-responsive';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';

const FiestasInfantiles = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Día de las madres';
  }, []);

  return (
    <React.Fragment>
      <ReactResponsive minDeviceWidth={992}>
        <Sidebar />
      </ReactResponsive>
      <h1 className="sansita text-center mt-2">Día de las Madres</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <ProductList type="Días de las madres" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default FiestasInfantiles;
