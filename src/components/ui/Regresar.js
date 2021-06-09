import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Regresar = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="text-center mt-4">
      <Button onClick={goBack}>Página anterior</Button>
    </div>
  );
};

export default Regresar;
