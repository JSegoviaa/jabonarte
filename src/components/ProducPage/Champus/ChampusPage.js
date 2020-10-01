import React, { useEffect } from 'react';
import Sidebar from '../Sidebar';

const ChampusPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Champús';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col">
            <h1>Champus</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChampusPage;
