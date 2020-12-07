import React, { useEffect } from 'react';

//Componente del Homepage
import Banner from '../components/Home/Banner';
import Caracteristicas from '../components/Home/Caracteristicas';
import Form from '../components/Forms/Form';
import MasVendidos from '../components/Home/MasVendidos';
import MiniBanner from '../components/Home/MiniBanner';

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
