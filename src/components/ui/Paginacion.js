import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginacion = ({ nextPage, prevPage }) => {
  return (
    <div className="py-3 d-flex justify-content-center">
      <Pagination>
        <Pagination.Prev onClick={prevPage} />

        <Pagination.Next onClick={nextPage} />
      </Pagination>
    </div>
  );
};

export default Paginacion;
