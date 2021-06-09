import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';

import useFetch from '../hooks/useFetch';
import ErrorMsg from '../components/ui/ErrorMsg';
import Loading from '../components/ui/Loading';
import ProductDetail from '../components/Products/ProductDetail';
import Regresar from '../components/ui/Regresar';
import ToTop from '../components/ui/ToTop';
import ProductNavbar from '../components/Products/ProductNavbar';

// import ProductSendReview from '../components/Forms/ProductSendReview';
// import Review from '../components/Products/Review';

const Detalles = ({ match }) => {
  const {
    isPending,
    error,
    data: productos,
  } = useFetch(
    `${process.env.REACT_APP_REST_API}/productos/${match.params.detalles}`
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Jabonarte"
          content="Jabones artesanales 100% origen natural, biodegradables e hipoalergénicos, ideal para recuerdos de tus eventos sociales o detalles en fechas especiales"
        />
        {productos && <title>Jabonarte | {`${productos.titulo}`} </title>}
      </Helmet>

      <MediaQuery minDeviceWidth={992}>
        <ProductNavbar />
      </MediaQuery>

      <Container>
        {isPending && <Loading />}
        {error && <ErrorMsg />}
        {productos && <ProductDetail productos={productos} />}

        <Regresar />
        <ToTop />

        {/* <Row className="py-5">
          <Col md={6} className="text-md-left text-center">
            <h3>Reseñas</h3>
            {productos && productos.reviews.length > 0 ? (
              <Review productos={productos} />
            ) : (
              <Alert variant="primary" className="text-center">
                Sé el primero en dejar una reseña
              </Alert>
            )}
          </Col>
          <Col md={6}>
            <ProductSendReview productos={productos} />
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Detalles;
