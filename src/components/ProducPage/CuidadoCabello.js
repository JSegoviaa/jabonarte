import React, { useEffect } from 'react';
import CuidadoCabelloBar from './CuidadoCabelloBar';
import Productos from './Productos';

const CuidadoCabello = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cuidado del cabello';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <CuidadoCabelloBar />
          </div>
          <div className="col-md-10">
            <Productos value="cuidados-capilares" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CuidadoCabello;
