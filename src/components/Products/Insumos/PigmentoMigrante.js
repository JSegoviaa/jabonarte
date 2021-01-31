import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactResponsive from 'react-responsive';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';

const PigmentoMigrante = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Pigmentos no Migrante';
  }, []);

  return (
    <React.Fragment>
      <ReactResponsive minDeviceWidth={992}>
        <Sidebar />
      </ReactResponsive>
      <h1 className="sansita text-center mt-2">Pigmentos no Migrante</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <ProductList type="Pigmentos no migrante" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default PigmentoMigrante;
