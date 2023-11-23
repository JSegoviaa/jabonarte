import React from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row } from 'react-bootstrap';
import UltimosCard from './UltimosCard';
import Loading from '../ui/Loading';
import { useProductos } from '../../hooks/useProductos';

const MasVendidos = () => {
  const { isLoading, productos } = useProductos(
    `?_limit=4&_sort=createdAt:desc`
  );

  return (
    <Container className="text-center mt-5">
      <Row>
        <Fade top>
          <h1 className="w-100 f-sizeXXBig sansita">Últimos productos</h1>
        </Fade>
      </Row>
      {isLoading && <Loading />}
      <Row className="mt-4">
        {productos &&
          productos.map((producto) => (
            <Col key={producto.id} md={3} xs={6} className="mt-4 ">
              {producto.miniatura && (
                <UltimosCard
                  img={producto.miniatura.formats.small.url}
                  title={producto.titulo}
                  to={`productos/subcategoria/${producto.subcategorias[0]?.url}/${producto.url}`}
                />
              )}
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MasVendidos;
