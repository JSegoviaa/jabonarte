import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import Productos from './Productos';
import Sidebar from './Sidebar';

const ProducPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Nuestros productos';
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col-md-2">
              <Sidebar />
            </div>
          </Fade>
          <Fade right>
            <div className="col-md-10">
              <Productos value="productos" />
            </div>
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProducPage;
