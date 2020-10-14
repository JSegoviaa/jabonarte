import React from 'react';
import iconos from '../../assets/iconos.png';
const Productos = ({ value, value2 }) => {
  return (
    <React.Fragment>
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
