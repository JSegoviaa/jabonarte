import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Flip from 'react-reveal/Flip';

const { productos } = require('../../data/productos');

const AllProducts = () => {
  const handlerToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container className="mt-5">
      <Row>
        {productos.map((producto) => (
          <Flip left key={producto.id}>
            <div className="col-md-3 my-2">
              <div className="card ms-3 shadow-sm">
                <img
                  width="150px"
                  height="250px"
                  className="card-img"
                  src={`./assets/${producto.id}.jpg`}
                  alt={producto.title}
                />

                <div className="card-body">
                  <h5 className="card-title text-center">{producto.title}</h5>
                  <p className="card-text text-center">{producto.type}</p>

                  <NavLink
                    to={`./${producto.id}`}
                    className="btn btn-primary btn-block"
                  >
                    Más información
                  </NavLink>
                </div>
              </div>
            </div>
          </Flip>
        ))}
      </Row>

      <div className="text-center mt-5">
        <Button variant="secondary" onClick={handlerToTop}>
          Volver hacia arriba
        </Button>
      </div>
    </Container>
  );
};

export default AllProducts;
