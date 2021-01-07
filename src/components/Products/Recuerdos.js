import React from 'react';
import { useEffect } from 'react';
import Productos from './Productos';
import RecuerdosBar from './RecuerdosBar';

const Recuerdos = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Recuerdos para eventos';
  }, []);
  return (
    <React.Fragment>
      <RecuerdosBar />
      <div className="container">
        <Productos value="recuerdos" />
      </div>
    </React.Fragment>
  );
};

export default Recuerdos;
