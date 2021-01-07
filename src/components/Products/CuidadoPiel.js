import React, { useEffect } from 'react';
import CuidadoPielBar from './CuidadoPielBar';
import Productos from './Productos';

const CuidadoPiel = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cuidado de la piel';
  }, []);
  return (
    <React.Fragment>
      <CuidadoPielBar />
      <div className="container">
        <Productos value="cuidado-piel" />
      </div>
    </React.Fragment>
  );
};

export default CuidadoPiel;
