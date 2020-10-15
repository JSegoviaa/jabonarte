import React from 'react';
import Fade from 'react-reveal/Fade';

import iconos from '../../assets/iconos.jpg';
const Productos = ({ value, value2 }) => {
  return (
    <React.Fragment>
      <Fade top>
        <div className="d-flex justify-content-center mt-4">
          <img className="iconos" src={iconos} alt="jabonarte" />
        </div>
      </Fade>

      <Fade left>
        <img
          className="card-img mt-3"
          src={`../../../assets/${value}.jpg`}
          alt="jabonarte"
        />
      </Fade>
      {value2 && (
        <Fade right>
          <img
            className="card-img mt-3"
            src={`../../../assets/${value2}.jpg`}
            alt="jabonarte"
          />
        </Fade>
      )}
    </React.Fragment>
  );
};

export default Productos;
