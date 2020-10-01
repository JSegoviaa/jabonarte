import React from 'react';

const DistForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="container">
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
        <label>Ciudad o Estado</label>
        <input
          className="form-control"
          placeholder="Escriba su ciudad o Estado"
          type="text"
        />
      </div>

      <div className="form-group">
        <label>Tienda</label>
        <input
          className="form-control"
          placeholder="Escriba el nombre de su tienda con su página"
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
  );
};

export default DistForm;
