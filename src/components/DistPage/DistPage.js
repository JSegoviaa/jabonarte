import React, { useEffect } from 'react';

const DistPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    document.title = 'Jabonarte | Conviértete en distribuidor';
  }, []);
  return (
    <React.Fragment>
      <div className="contact">
        <div className="container">
          <div className="row">
            <h1 className="w-100 f-sizeXXBig text-center sansita">
              Conviértete en distribuidor
            </h1>
          </div>
          <div className="row justify-content-center pt-4 pb-4">
            <div className="col-8 m-auto"></div>
          </div>
        </div>
      </div>
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
    </React.Fragment>
  );
};

export default DistPage;
