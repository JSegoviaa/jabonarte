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
      <Fade left>
        <Sidebar />
      </Fade>
      <div className="container">
        <Productos value="productos" value2="producto2" />
      </div>
    </React.Fragment>
  );
};

export default ProductPage;
