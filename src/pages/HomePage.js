import React from 'react';
import { Helmet } from 'react-helmet';

//Componente del Homepage
import Banner from '../components/Home/Banner';
import Caracteristicas from '../components/Home/Caracteristicas';
import Form from '../components/Forms/Form';
import Ultimos from '../components/Home/Ultimos';
import MiniBanner from '../components/Home/MiniBanner';
import Testimonials from '../components/Home/Testimonials';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Jabonarte"
          content="Jabones artesanales 100% origen natural, biodegradables e hipoalergénicos, ideal para recuerdos de tus eventos sociales o detalles en fechas especiales"
        />
        <title>Jabonarte | Cosmética Natural</title>
      </Helmet>

      <Banner />
      <Caracteristicas />
      <Ultimos />
      <Testimonials />
      <Form contacto="Contáctanos" />
      <MiniBanner />
    </>
  );
};

export default HomePage;
