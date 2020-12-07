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
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <RecuerdosBar />
          </div>
          <div className="col-md-10">
            <Productos value="recuerdos" />



          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recuerdos;
