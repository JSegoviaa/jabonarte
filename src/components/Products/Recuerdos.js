import React from 'react';
import { useEffect } from 'react';
import Productos from './Productos';

const Recuerdos = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Recuerdos para eventos';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <Productos value="recuerdos" />
      </div>
    </React.Fragment>
  );
};

export default Recuerdos;
