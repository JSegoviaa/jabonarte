import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';

import ProductsList from '../components/Products/ProductsList';
import ErrorMsg from '../components/ui/ErrorMsg';
import Loading from '../components/ui/Loading';
import Regresar from '../components/ui/Regresar';
import ToTop from '../components/ui/ToTop';
import useFetch from '../hooks/useFetch';
import { useSubcategorias } from '../hooks/useSubcategorias';
import Paginacion from '../components/ui/Paginacion';
import ProductNavbar from '../components/Products/ProductNavbar';

const Productos = ({ match }) => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const {
    isPending,
    error,
    data: productos,
  } = useFetch(
    `${process.env.REACT_APP_REST_API}/productos?subcategorias.url=${match.params.producto}`
  );

  const { subcategorias } = useSubcategorias(`/${match.params.producto}`);

  const filterProducts = () => {
    if (search.length === 0) {
      return productos.slice(currentPage, currentPage + 8);
    }

    const filtered = productos.filter((producto) =>
      producto.titulo.includes(search)
    );

    return filtered.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    if (
      productos.filter((producto) => producto.titulo.includes(search)).length >
      currentPage + 8
    ) {
      setCurrentPage(currentPage + 8);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 8);
    }
    setSearch('');
  };

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

        {productos && (
          <div className="text-center py-3">
            <div>
              {productos[0]?.subcategorias[0].titulo ? (
                <h3>{productos[0].subcategorias[0].titulo}</h3>
              ) : (
                <>{history.push(`/productos`)}</>
              )}
            </div>
          </div>
        )}

        <Row>
          {productos &&
            filterProducts().map((producto) => (
              <ProductsList
                key={producto.id}
                producto={producto}
                subcategorias={subcategorias}
              />
            ))}
        </Row>

        <Paginacion nextPage={nextPage} prevPage={prevPage} />

        <Regresar />

        <ToTop />
      </Container>
    </>
  );
};

export default Productos;
