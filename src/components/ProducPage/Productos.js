import React from 'react';

const Productos = ({ value, value2 }) => {
  return (
    <React.Fragment>
      <h3 className="text-center mt-5 sansita">
        Seleccione un producto para mostrar
      </h3>
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
