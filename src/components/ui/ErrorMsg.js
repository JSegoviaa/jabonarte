import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorMsg = () => {
  return ['danger'].map((variant, idx) => (
    <Alert key={idx} variant={variant} className="text-center mt-5">
      Hubo un error al cargar los productos. Intente nuevamente
    </Alert>
  ));
};

export default ErrorMsg;
