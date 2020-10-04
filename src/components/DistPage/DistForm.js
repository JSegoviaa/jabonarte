import React, { useState } from 'react';
import Swal from 'sweetalert2';

const DistForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'Jabonarte - Distribuidor',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    $ciudad: '',
    $tienda: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: '4fce6935-927d-4ffc-af62-b1ef977e97f2', // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: '',
    message: '',
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      });

      const json = await res.json();

      if (json.success) {
        Swal.fire({
          icon: 'success',
          title: 'Su mensaje ha sido enviado',
          text: 'Gracias por ponerse en contacto con nosotros',
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error, intente de nuevo por favor',
      });
    }
  };
  return (
    <form
      className="container"
      action="https://api.staticforms.xyz/submit"
      method="post"
      onSubmit={handleSubmit}
    >
      <div
        className={
          response.type === 'success'
            ? 'tile box notification is-primary'
            : 'is-hidden'
        }
      >
        <p>{response.message}</p>
      </div>
      <div
        className={
          response.type === 'error'
            ? 'tile box notification is-danger'
            : 'is-hidden'
        }
      >
        <p>{response.message}</p>
      </div>
      <div className={response.message !== '' ? 'is-hidden' : 'columns'}></div>
      <div className="form-group">
        <label>Nombre*</label>
        <input
          className="form-control"
          placeholder="Escriba su nombre por favor"
          type="text"
          name="name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Correo electrónico*</label>
        <input
          className="form-control"
          placeholder="Escriba su correo electrónico por favor"
          type="email"
          name="email"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Ciudad o Estado*</label>
        <input
          className="form-control"
          placeholder="Escriba su ciudad o Estado"
          type="text"
          name="$ciudad"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Tienda*</label>
        <input
          className="form-control"
          placeholder="Escriba el nombre de su tienda con su página"
          type="text"
          name="$tienda"
          onChange={handleChange}
          required
        />
      </div>
      <div className="field" style={{ display: 'none' }}>
        <label className="label">Title</label>
        <div className="control">
          <input
            type="text"
            name="honeypot"
            style={{ display: 'none' }}
            onChange={handleChange}
          />
          <input type="hidden" name="subject" onChange={handleChange} />
        </div>
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
