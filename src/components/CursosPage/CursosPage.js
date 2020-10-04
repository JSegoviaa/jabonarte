import React, { useEffect } from 'react';
import Cursos from './Cursos';
import CursosBar from './CursosBar';

const CursosPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cuidado del cabello';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <CursosBar />
          </div>
          <div className="col-md-10">
            <Cursos value="cursos" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CursosPage;
