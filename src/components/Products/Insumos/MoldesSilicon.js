import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactResponsive from 'react-responsive';
import ProductList from '../ProductList';
import Sidebar from '../Sidebar';

const MoldesSilicon = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Moldes de Silicón';
  }, []);

  return (
    <React.Fragment>
      <ReactResponsive minDeviceWidth={992}>
        <Sidebar />
      </ReactResponsive>
      <h1 className="sansita text-center mt-2">Moldes de silicón</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <ProductList type="Moldes de silicón" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default MoldesSilicon;
