import React from 'react';
import Fade from 'react-reveal/Fade';

const Form = ({ contacto }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fade bottom>
      <div className="container mb-5 mt-5">
        <h1 className="text-center sansita ">{contacto}</h1>
        <form>
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              placeholder="Escriba su nombre por favor"
              type="text"
            />
          </div>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              className="form-control"
              placeholder="Escriba su correo electrónico por favor"
              type="email"
            />
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              className="form-control"
              placeholder="Escriba su mensaje por favor"
              type="text"
            />
          </div>
          <div className="form-group">
            <button
              onClick={handleSubmit}
              className="btn btn-primary btn-block"
              type="submit"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default Form;
