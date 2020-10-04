import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import Form from '../HomePage/Form';

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
              <h1 className="w-100 f-sizeXXBig sansita">
                ¿Pedido personalizado?
                <p>¡Contáctanos!</p>
              </h1>
            </Fade>
            <Fade left>
              <div className="col-8 text-center m-auto f-sizeMedium color4 pt-3"></div>
            </Fade>
          </div>
          <div className="row justify-content-center pt-4 pb-4">
            <div className="col-8 m-auto"></div>
          </div>
        </div>
      </div>
      <Form />
    </React.Fragment>
  );
};

export default ContactPage;
