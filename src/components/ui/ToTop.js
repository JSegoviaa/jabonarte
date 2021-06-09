import React from 'react';
import { Button } from 'react-bootstrap';

const ToTop = () => {
  const handlerToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="text-center mt-5">
      <Button variant="secondary" onClick={handlerToTop}>
        Volver hacia arriba
      </Button>
    </div>
  );
};

export default ToTop;
