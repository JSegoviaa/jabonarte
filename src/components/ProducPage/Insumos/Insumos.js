import React, { useEffect } from 'react';
import InsumosBar from '../InsumosBar';
import Productos from '../Productos';

const Insumos = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Insumos';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <InsumosBar />
          </div>
          <div className="col-md ">
            <h1 className="sansita">Insumos</h1>
            <hr />
            <Productos value="insumos" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Insumos;
