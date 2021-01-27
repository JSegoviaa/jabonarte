import React, { useEffect } from 'react';
import Productos from './Productos';

const CuidadoCabello = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cuidado del cabello';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <Productos value="cuidados-capilares" />
      </div>
    </React.Fragment>
  );
};

export default CuidadoCabello;
