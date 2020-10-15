import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Swal from 'sweetalert2';

const Form = ({ contacto }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'Jabonarte - Contacto',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
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
    <React.Fragment>
      <Fade left>
        <h1 className="container text-center sansita mt-5">{contacto} </h1>
      </Fade>
      <Fade right>
        <form
          className="container mb-5"
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
          <div
            className={response.message !== '' ? 'is-hidden' : 'columns'}
          ></div>
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
            <label>Mensaje*</label>
            <textarea
              className="form-control"
              placeholder="Escriba su mensaje"
              type="textarea"
              name="message"
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
            <button className="btn btn-primary btn-block" type="submit">
              Enviar mensaje
            </button>
          </div>
        </form>
      </Fade>
    </React.Fragment>
  );
};

export default Form;
