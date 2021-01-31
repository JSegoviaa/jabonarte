import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactResponsive from 'react-responsive';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';

const BabyShower = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Baby Shower';
  }, []);

  return (
    <React.Fragment>
      <ReactResponsive minDeviceWidth={992}>
        <Sidebar />
      </ReactResponsive>
      <h1 className="sansita text-center mt-2">Baby Shower</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <ProductList type="Baby Shower" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default BabyShower;
