import React from 'react';
import iconos from '../../assets/iconos.jpg';
const Productos = ({ value, value2 }) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center mt-4">
        <img className="iconos" src={iconos} alt="jabonarte" />
      </div>
      <img
        className="card-img mt-3"
        src={`../../../assets/${value}.jpg`}
        alt="jabonarte"
      />
      {value2 && (
        <img
          className="card-img mt-3"
          src={`../../../assets/${value2}.jpg`}
          alt="jabonarte"
        />
      )}
    </React.Fragment>
  );
};

export default Productos;
