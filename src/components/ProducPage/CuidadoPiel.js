import React, { useEffect } from 'react';
import CuidadoPielBar from './CuidadoPielBar';
import Productos from './Productos';

const CuidadoPiel = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cuidado de la piel';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <CuidadoPielBar />
          </div>
          <div className="col-md-10">
            <Productos value="cuidado-piel" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CuidadoPiel;
