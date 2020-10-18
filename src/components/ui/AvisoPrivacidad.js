import React from 'react';

const AvisoPrivacidad = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        Aviso de privacidad
      </button>

      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Aviso de privacidad
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5>¿Qué información se está recopilando?</h5>
              <p>
                Recolectamos datos de identificación personal entre las cuales
                se encuentra:
              </p>
              <ul>
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Ciudad</li>
                <li>Empresa</li>
              </ul>
              <h5>¿Quién lo está recolectando?</h5>
              <p>jabonartesanalmx.com/</p>
              <h5>¿Cómo se recoge esta información?</h5>
              <p>
                Esta información se recibe a través de formularios de contacto.
              </p>
              <h5>¿Por qué se está recolectando esta información?</h5>
              <p>
                Para que se puedan hacer pedidos personalizados a los clientes
                que así lo deseen. De esta forma ponernos en contacto con ellos
                y enviar su pedido
              </p>
              <h4>¿Con quién será compartido?</h4>
              <p>
                La información que recopilamos se usa y se conservará durante el
                tiempo que sea necesario para cumplir con el objetivo para el
                que fue recopilada y esta información no se comparte con ninguna
                empresa, organización, persona.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvisoPrivacidad;
