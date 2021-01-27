import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Flip from 'react-reveal/Flip';

const { productos } = require('../../data/productos');

const AllProducts = () => {
  const handlerToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container className="mt-5">
      <div className="card-columns">
        {productos.map((producto) => (
          <Flip left key={producto.id}>
            <div className="card ms-3 shadow-sm">
              <div>
                <div>
                  <img
                    width="150px"
                    height="250px"
                    className="card-img"
                    src={`./assets/${producto.id}.jpg`}
                    alt={producto.title}
                  />
                </div>
                <div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {producto.title}{' '}
                    </h5>
                    <p className="card-text text-center">{producto.type}</p>
                    <p className="card-text">{producto.description}</p>

                    <NavLink
                      to={`./${producto.id}`}
                      className="btn btn-primary btn-block"
                    >
                      Más información
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </Flip>
        ))}
      </div>

      <div className="text-center">
        <button className="btn btn-secondary" onClick={handlerToTop}>
          Volver hacia arriba
        </button>
      </div>
    </Container>
  );
};

export default AllProducts;
