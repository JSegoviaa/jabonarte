import React, { useEffect } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Cursos from './Cursos';
import CursosBar from './CursosBar';

const CursosPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cursos';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <LightSpeed left>
              <CursosBar />
            </LightSpeed>
          </div>
          <div className="col-md-10">
            <LightSpeed right>
              <Cursos value="cursos" />
            </LightSpeed>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CursosPage;
