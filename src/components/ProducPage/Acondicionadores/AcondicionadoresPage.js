import React, { useEffect } from 'react';
import Sidebar from '../Sidebar';

const AcondicionadoresPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Acondicionadores';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col">
            <h1>Acondicionador</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AcondicionadoresPage;
