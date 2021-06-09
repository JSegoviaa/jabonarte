import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';

const ProductSendReview = ({ productos }) => {
  const [isPending, setIsPending] = useState(false);

  const [formValues, handleInputChange, reset] = useForm({
    nombre: '',
    email: '',
    comentario: '',
  });

  const { nombre, email, comentario } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    const reseña = { nombre, email, comentario };

    setIsPending(true);

    fetch(`${process.env.REACT_APP_REST_API}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reseña),
    })
      .then(() => {
        setIsPending(false);
      })
      .catch((e) => console.log(e));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre*</Form.Label>
        <Form.Control
          name="nombre"
          value={nombre}
          onChange={handleInputChange}
          required
          type="text"
          placeholder="Escriba su nombre por favor"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Correo electrónico*</Form.Label>
        <Form.Control
          name="email"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
          required
          type="email"
          placeholder="Escriba su correo electrónico"
        />
        <Form.Text className="text-muted">
          Su correo electrónico no será visible
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Reseña*</Form.Label>
        <Form.Control
          name="comentario"
          value={comentario}
          onChange={handleInputChange}
          required
          as="textarea"
          rows={3}
          placeholder="Escriba una reseña sobre el producto"
        />
      </Form.Group>

      <Form.Text className="text-muted">
        Todos los campos son obligatorios
      </Form.Text>
      {!isPending && (
        <Button type="submit" className="btn-block">
          Enviar
        </Button>
      )}
      {isPending && (
        <Button type="submit" className="btn-block" disabled>
          Enviando reseña
        </Button>
      )}
    </Form>
  );
};

export default ProductSendReview;
