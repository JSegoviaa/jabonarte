import React, { useEffect } from 'react';
import Sidebar from '../Sidebar';

const JabonesPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Jabones';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col">
            <h1>Jabones</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JabonesPage;
