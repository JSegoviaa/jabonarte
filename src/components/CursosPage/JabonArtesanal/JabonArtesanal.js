import React, { useEffect } from 'react';

const JabonArtesanal = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cursos de Jabones Artesanales';
  }, []);
  return <div className="container">Jabón arsenal</div>;
};

export default JabonArtesanal;
