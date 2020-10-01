import React, { useEffect } from 'react';

const ProducPage = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Nuestros productos';
  }, []);
  return <div>Producots</div>;
};

export default ProducPage;
