import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';

const DistForm = () => {
  const [isPending, setIsPending] = useState(false);

  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    replyTo: '',
    city: '',
    tienda: '',
  });

  const { name, replyTo, city, tienda } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    const contact = { name, replyTo, city, tienda };
    setIsPending(true);

    try {
      fetch(`${process.env.REACT_APP_REST_API}/emails`, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      }).then(() => {
        setIsPending(false);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Su mensaje ha sido enviado',
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } catch (e) {
      console.log('An error occurred', e);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error, intente de nuevo por favor',
      });
    }
    reset();
  };

  return (
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
          <Form.Label>Ciudad o Estado</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escriba su correo electrónico por favor"
            name="city"
            value={city}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tienda</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escriba su correo electrónico por favor"
            name="tienda"
            value={tienda}
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
  );
};

export default DistForm;
