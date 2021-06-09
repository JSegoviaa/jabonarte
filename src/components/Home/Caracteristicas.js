import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { useCategorias } from '../../hooks/useCategorias';
import Loading from '../ui/Loading';

const Caracteristicas = () => {
  const style = {
    textDecoration: 'none',
  };

  const { categorias, isLoading } = useCategorias();

  return (
    <div className="home">
      <Container>
        <Row>
          <Fade top>
            <h1 className="w-100 f-sizeXXBig text-center sansita mt-5">
              Para el cuidado de tu piel, productos naturales
            </h1>
          </Fade>
        </Row>

        {isLoading && <Loading />}

        <Row>
          {categorias &&
            categorias.map((categoria) => (
              <Col key={categoria.id} lg={6} md={4} className="pt-5">
                <Row className="color4">
                  <Col className="col-4 text-center">
                    <Fade left>
                      {categoria.miniatura.formats && (
                        <img
                          className="icono"
                          src={categoria.miniatura.formats.small.url}
                          alt="recuerdos"
                        />
                      )}
                    </Fade>
                  </Col>

                  <div className="col-8 mar-auto">
                    <Fade left>
                      <Link style={style} to={`/productos/${categoria.url}`}>
                        <h4 className="caracteristicas-font font-weight-bold font-subtitle letter-spacing1 a text-left text-md-center">
                          {categoria.titulo}
                        </h4>
                      </Link>
                    </Fade>
                  </div>
                </Row>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Caracteristicas;
