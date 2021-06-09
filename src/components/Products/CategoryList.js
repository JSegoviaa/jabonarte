import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';
import Loading from '../ui/Loading';
import ToTop from '../ui/ToTop';
import CategoryListItem from './CategoryListItem';
import Regresar from '../ui/Regresar';
import { useCategorias } from '../../hooks/useCategorias';

const CategoryList = () => {
  const { categorias, isLoading } = useCategorias();

  return (
    <Container className="mt-5">
      {isLoading && <Loading />}

      <Row>
        {categorias &&
          categorias.map((categoria) => (
            <Col xs={6} md={3} className="my-2" key={categoria.id}>
              <Flip left>
                <CategoryListItem categoria={categoria} />
              </Flip>
            </Col>
          ))}
      </Row>
      <Regresar />
      <ToTop />
    </Container>
  );
};

export default CategoryList;
