import React, { useEffect } from 'react';
import Banner from './Banner';
import Caracteristicas from './Caracteristicas';
import Form from './Form';
import MasVendidos from './MasVendidos';
import MiniBanner from './MiniBanner';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cosmética Natural';
  }, []);
  return (
    <React.Fragment>
      <Banner />
      <Caracteristicas />
      <MasVendidos />
      <Form contacto="Contáctanos" />
      <MiniBanner />
    </React.Fragment>
  );
};

export default HomePage;
