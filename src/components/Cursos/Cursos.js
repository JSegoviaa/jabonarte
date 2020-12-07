import React from 'react';

const Cursos = ({ value }) => {
  return (
    <React.Fragment>
      <h3 className="text-center mt-5 sansita">
        Te enseñamos a crear tus propios jabones
      </h3>
      <img
        className="card-img mt-3"
        src={`../../../assets/${value}.jpg`}
        alt="jabonarte"
      />
    </React.Fragment>
  );
};

export default Cursos;
