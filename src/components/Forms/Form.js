import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';

const Formulario = ({ contacto }) => {
  const [isPending, setIsPending] = useState(false);

  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    replyTo: '',
    message: '',
  });

  const { name, replyTo, message } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Estamos en mantenimiento. Ponte en contacto a través de nuestra página de facebook https://www.facebook.com/jabonarteMerida/',
    });
    setIsPending(false);
    // const contact = { name, replyTo, message };
    // setIsPending(true);
    // try {
    //   fetch(`${process.env.REACT_APP_REST_API}/emails`, {
    //     method: 'POST',
    //     body: JSON.stringify(contact),
    //     headers: { 'Content-Type': 'application/json' },
    //   }).then(() => {
    //     setIsPending(false);
    //     Swal.fire({
    //       position: 'center',
    //       icon: 'success',
    //       title: 'Su mensaje ha sido enviado',
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   });
    // } catch (e) {
    //   console.log('An error occurred', e);
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Ha ocurrido un error, intente de nuevo por favor',
    //   });
    // }
    reset();
  };

  return (
    <>
      <Fade left>
        <h1 className="container text-center sansita mt-5">{contacto} </h1>
      </Fade>

      <Fade right>
        <Container>
          <Form onSubmit={handleSubmit} className="py-5">
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escriba su nombre por favor"
                name="name"
                value={name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Escriba su correo electrónico por favor"
                name="replyTo"
                value={replyTo}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="Escriba su mensaje por favor"
                name="message"
                value={message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Text className="text-muted">
              Jamás compartiremos sus datos con nadie
            </Form.Text>

            {!isPending && (
              <Button variant="primary" className="btn-block" type="submit">
                Enviar mensaje
              </Button>
            )}
            {isPending && (
              <Button
                variant="primary"
                className="btn-block"
                disabled
                type="submit"
              >
                Enviando mensaje
              </Button>
            )}
          </Form>
        </Container>
      </Fade>
    </>
  );
};

export default Formulario;
