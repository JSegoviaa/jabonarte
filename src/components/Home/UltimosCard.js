import React from 'react';
import { Link } from 'react-router-dom';

const MasVendidosCard = ({ img, title, to }) => {
  return (
    <div className="card shadow-sm a">
      <div
        className="img-background"
        style={{
          background: `url(${img}) center center/cover`,
        }}
      />

      <div className="card-body">
        <h6 className="card-title sansita">{title}</h6>
        <Link to={to} className="btn-primary btn">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default MasVendidosCard;
