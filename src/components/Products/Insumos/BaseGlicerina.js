import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactResponsive from 'react-responsive';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';

const BaseGlicerina = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Base de Glicerina';
  }, []);

  return (
    <React.Fragment>
      <ReactResponsive minDeviceWidth={992}>
        <Sidebar />
      </ReactResponsive>
      <h1 className="sansita text-center mt-2">Base de Glicerina</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <ProductList type="Base de Glicerina" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default BaseGlicerina;
