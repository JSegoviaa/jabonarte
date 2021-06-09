import React from 'react';
import Fade from 'react-reveal/Fade';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';

import CategoryList from '../components/Products/CategoryList';
import ProductNavbar from '../components/Products/ProductNavbar';

const Categorias = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Jabonarte"
          content="Jabones artesanales 100% origen natural, biodegradables e hipoalergénicos, ideal para recuerdos de tus eventos sociales o detalles en fechas especiales"
        />
        <title>Jabonarte | Nuestros productos</title>
      </Helmet>

      <Fade left>
        <MediaQuery minDeviceWidth={992}>
          <ProductNavbar />
        </MediaQuery>
      </Fade>

      <div className="productos-banner text-center d-flex justify-content-center align-items-center">
        <h1 className="sansita">Conoce todos nuestros productos</h1>
      </div>

      <CategoryList />
    </>
  );
};

export default Categorias;
