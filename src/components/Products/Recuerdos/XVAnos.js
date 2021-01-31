import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactResponsive from 'react-responsive';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';

const XVAnos = () => {
  useEffect(() => {
    document.title = 'Jabonarte |  XV Años';
  }, []);

  return (
    <React.Fragment>
      <ReactResponsive minDeviceWidth={992}>
        <Sidebar />
      </ReactResponsive>
      <h1 className="sansita text-center mt-2">XV Años</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <ProductList type="XV años" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default XVAnos;
