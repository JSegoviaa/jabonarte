import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import Productos from '../components/Products/Productos';
import Sidebar from '../components/Products/Sidebar';

const ProductPage = () => {
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

          <div className="col-md-10">
            <Productos value="productos" value2="producto2" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductPage;
