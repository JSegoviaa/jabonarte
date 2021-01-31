import React, { useEffect } from 'react';
import Productos from './Productos';

const Insumos = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Insumos';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <Productos value="insumos" />
      </div>
    </React.Fragment>
  );
};

export default Insumos;
