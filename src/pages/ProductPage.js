import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import AllProducts from '../components/Products/AllProducts';

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

      <AllProducts />
    </React.Fragment>
  );
};

export default ProductPage;
