import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Form from '../components/Forms/Form';
import contactoImg from '../assets/contacto-productos.jpg';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Contáctanos';
  }, []);
  return (
    <React.Fragment>
      <div className="contact">
        <div className="container text-center">
          <div className="row">
            <Fade top>
              <h1 className="w-100 f-sizeXXBig sansita mt-3">
                ¿Pedido personalizado?
                <p>¡Contáctanos!</p>
              </h1>
            </Fade>

            <Fade left>
              <div className="col-8 text-center m-auto f-sizeMedium color4 pt-3"></div>
            </Fade>
          </div>
          <div className="row justify-content-center ">
            <div className="col-8 m-auto"></div>
          </div>
        </div>
      </div>
      <div className="img-contacto">
        <div>
          <img
            className="contacto-img img-thumbnail shadow-sm"
            src={contactoImg}
            alt="Jabonarte"
          />
        </div>
      </div>
      <Form />
    </React.Fragment>
  );
};

export default ContactPage;
