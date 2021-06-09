import React from 'react';
import { useHistory } from 'react-router';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';

import ErrorMsg from '../components/ui/ErrorMsg';
import useFetch from '../hooks/useFetch';
import Loading from '../components/ui/Loading';
import ToTop from '../components/ui/ToTop';
import SubcategoryList from '../components/Products/SubcategoryList';
import Regresar from '../components/ui/Regresar';
import ProductNavbar from '../components/Products/ProductNavbar';

const Subcategorias = ({ match }) => {
  const history = useHistory();

  const {
    isPending,
    error,
    data: subcategorias,
  } = useFetch(
    `${process.env.REACT_APP_REST_API}/subcategorias?categoria.url=${match.params.subcategoria}`
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Jabonarte"
          content="Jabones artesanales 100% origen natural, biodegradables e hipoalergénicos, ideal para recuerdos de tus eventos sociales o detalles en fechas especiales"
        />
        <title>Jabonarte | Conoce nuestros productos </title>
      </Helmet>

      <MediaQuery minDeviceWidth={992}>
        <ProductNavbar />
      </MediaQuery>

      <Container>
        {isPending && <Loading />}
        {error && <ErrorMsg />}

        {subcategorias && (
          <div className="text-center py-3">
            <div>
              {subcategorias[0]?.categoria.titulo ? (
                <h3>{subcategorias[0].categoria.titulo} </h3>
              ) : (
                <>{history.push('/productos')}</>
              )}
            </div>
          </div>
        )}

        <Row>
          {subcategorias &&
            subcategorias.map((subcategoria) => (
              <SubcategoryList
                key={subcategoria.id}
                subcategoria={subcategoria}
              />
            ))}
        </Row>

        <Regresar />
        <ToTop />
      </Container>
    </>
  );
};

export default Subcategorias;
