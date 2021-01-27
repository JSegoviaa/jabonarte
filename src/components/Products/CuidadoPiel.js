import React, { useEffect } from 'react';
import Productos from './Productos';

const CuidadoPiel = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cuidado de la piel';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <Productos value="cuidado-piel" />
      </div>
    </React.Fragment>
  );
};

export default CuidadoPiel;
