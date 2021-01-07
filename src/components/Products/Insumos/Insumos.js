import React, { useEffect } from 'react';
import InsumosBar from '../InsumosBar';
import Productos from '../Productos';

const Insumos = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Insumos';
  }, []);
  return (
    <React.Fragment>
      <InsumosBar />

      <div className="container">
        <Productos value="insumos" />
      </div>
    </React.Fragment>
  );
};

export default Insumos;
