import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import DistForm from './DistForm';

const DistPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Conviértete en distribuidor';
  }, []);
  return (
    <React.Fragment>
      <div className="contact">
        <div className="container">
          <div className="row">
            <Fade top>
              <h1 className="w-100 f-sizeXXBig text-center sansita">
                Conviértete en distribuidor
              </h1>
            </Fade>
          </div>
          <div className="row justify-content-center pt-4 pb-4">
            <div className="col-8 m-auto"></div>
          </div>
        </div>
      </div>
      <Fade bottom>
        <DistForm />
      </Fade>
    </React.Fragment>
  );
};

export default DistPage;
