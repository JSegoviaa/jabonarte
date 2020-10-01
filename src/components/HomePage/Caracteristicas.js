import React from 'react';

const Caracteristicas = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <h1 className="w-100 f-sizeXXBig text-center sansita mt-5">
            Para el cuidado de tu piel, productos naturales
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12 pt-5">
            <div className="row color4">
              <div className="col-4 text-center">
                <i className="far fa-check-circle fa-5x"></i>
              </div>
              <div className="col-8 mar-auto">
                <h3 className="font-weight-bold font-subtitle letter-spacing1">
                  Souvenirs
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 pt-5">
            <div className="row color4">
              <div className="col-4 text-center">
                <i className="far fa-check-circle fa-5x"></i>
              </div>
              <div className="col-8 mar-auto">
                <h3 className="font-weight-bold font-subtitle letter-spacing1">
                  Cuidado facial
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 pt-5">
            <div className="row color4">
              <div className="col-4 text-center">
                <i className="far fa-check-circle fa-5x"></i>
              </div>
              <div className="col-8 mar-auto">
                <h3 className="font-weight-bold font-subtitle letter-spacing1">
                  Cuidado capilar
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;
