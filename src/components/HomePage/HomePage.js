import React, { useEffect } from 'react';
import Banner from './Banner';
import Caracteristicas from './Caracteristicas';
import Form from './Form';
import MiniBanner from './MiniBanner';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Inicio';
  }, []);
  return (
    <React.Fragment>
      <Banner />
      <Caracteristicas />
      <Form contacto="Contáctanos" />
      <MiniBanner />
    </React.Fragment>
  );
};

export default HomePage;
