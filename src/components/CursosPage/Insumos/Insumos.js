import React, { useEffect } from 'react';

const Insumos = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cursos de Insumos';
  }, []);
  return <div className="container">Insumos</div>;
};

export default Insumos;
