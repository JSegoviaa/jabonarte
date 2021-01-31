import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductList from '../ProductList';

const MoldesSilicon = ({ history }) => {
  useEffect(() => {
    document.title = 'Jabonarte | Moldes de Silicón';
  }, []);

  return (
    <React.Fragment>
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
